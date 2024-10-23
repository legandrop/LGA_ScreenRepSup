'use client'

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ResultsDisplay from './components/ResultsDisplay';
import { useTranslation } from '../hooks/useTranslation';
import { LanguageProvider, useLanguage } from '../contexts/LanguageContext';
import AllVariables from './components/AllVariables'; 

function QuizContent() {
  const { language, setLanguage } = useLanguage();
  const { t } = useTranslation();
  const [currentQuestion, setCurrentQuestion] = useState<string>('');
  const [options, setOptions] = useState<Array<{ text: string; handler: () => void }>>([]);
  const [additionalContent, setAdditionalContent] = useState<string>('');
  const [showResults, setShowResults] = useState<boolean>(false);
  const [isFirstQuestion, setIsFirstQuestion] = useState<boolean>(true);

  const [cameraMovement, setCameraMovement] = useState<boolean>(false);
  const [soporte, setSoporte] = useState<string | null>(null);
  const [chroma, setChroma] = useState<boolean>(false);
  const [semitransparente, setSemitransparente] = useState<boolean>(false);
  const [reflejoImportante, setReflejoImportante] = useState<boolean | null>(null);
  const [iluminacion, setIluminacion] = useState<string | null>(null);
  const [tvOnOff, setTvOnOff] = useState<boolean | null>(null);
  const [lga_debug, setLga_debug] = useState(false); // Variable para debug

  const logState = () => {
    console.log('Current state:', {
      iluminacion,
      soporte,
      chroma,
      cameraMovement,
      reflejoImportante,
      semitransparente,
      tvOnOff
    });
  };

  const changeLanguage = useCallback((lang: string) => {
    console.log('Changing language to:', lang);
    setLanguage(lang);
  }, [setLanguage]);

  useEffect(() => {
    console.log('Current language:', language);
    askSoporte(); // Cambiado de askIluminacion() a askSoporte()
  }, [language]);

  const showQuestion = useCallback((
    questionText: string,
    options: Array<{ text: string; handler: () => void }>,
    additionalContent: string = ''
  ) => {
    console.log('Showing question:', questionText);
    setCurrentQuestion(questionText);
    setOptions(options);
    setAdditionalContent(additionalContent);
  }, []);

  const displayResults = useCallback(() => {
    console.log('displayResults called');
    logState();
    setShowResults(true);
  }, []);

  const handleTvOnOffResponse = useCallback((value: boolean) => {
    console.log('handleTvOnOffResponse called with:', value);
    setTvOnOff(value);
    logState();
    displayResults();
  }, [displayResults]);

  const askTvOnOff = useCallback(() => {
    console.log('askTvOnOff llamada');
    showQuestion('question10', [
      { text: 'option10_1', handler: () => handleTvOnOffResponse(true) },
      { text: 'option10_2', handler: () => handleTvOnOffResponse(false) },
    ]);
  }, [showQuestion, handleTvOnOffResponse]);

  const handleReflejoResponse = useCallback((value: boolean, iluminacionValue: string, soporteValue: string, chromaValue: boolean, cameraMovementValue: boolean) => {
    console.log('Setting reflejoImportante to:', value);
    setReflejoImportante(value);
    console.log('handleReflejoResponse called with:');
    console.log('soporte:', soporteValue);
    console.log('iluminacion:', iluminacionValue);
    console.log('chroma:', chromaValue);
    console.log('cameraMovement:', cameraMovementValue);
    console.log('reflejoImportante:', value);

    if (soporteValue && soporteValue !== 'Celular' && iluminacionValue === 'alta' && !chromaValue) {
      console.log('Condición cumplida, llamando a askTvOnOff');
      askTvOnOff();
    } else {
      console.log('Condición no cumplida, mostrando resultados directamente');
      displayResults();
    }
  }, [askTvOnOff, displayResults]);

  const askReflejo = useCallback((iluminacionValue: string, soporteValue: string, chromaValue: boolean, cameraMovementValue: boolean) => {
    console.log('🔍 askReflejo EVALUATION:');
    console.log('   iluminacion:', iluminacionValue);
    console.log('   soporte:', soporteValue);
    console.log('   chroma (passed as parameter):', chromaValue);
    console.log('   cameraMovement (passed as parameter):', cameraMovementValue);
    
    console.log('🔎 Condition evaluation:', chromaValue || iluminacionValue !== 'alta');
    
    if (chromaValue || iluminacionValue !== 'alta') {
      console.log('🟢 Condition met: Showing reflejo question');
      showQuestion(
        'question9',
        [
          { text: 'option9_1', handler: () => handleReflejoResponse(true, iluminacionValue, soporteValue, chromaValue, cameraMovementValue) },
          { text: 'option9_2', handler: () => handleReflejoResponse(false, iluminacionValue, soporteValue, chromaValue, cameraMovementValue) },
        ]
      );
    } else {
      console.log('🔴 Condition not met: Skipping reflejo question');
      handleReflejoResponse(false, iluminacionValue, soporteValue, chromaValue, cameraMovementValue);
    }
  }, [showQuestion, handleReflejoResponse]);

  const handleSemitransparenteResponse = useCallback((value: boolean, iluminacionValue: string, soporteValue: string, chromaValue: boolean, cameraMovementValue: boolean) => {
    console.log('🔧 handleSemitransparenteResponse:');
    console.log('   semitransparente:', value);
    console.log('   iluminacion:', iluminacionValue);
    console.log('   soporte:', soporteValue);
    console.log('   chroma:', chromaValue);
    console.log('   cameraMovement:', cameraMovementValue);

    setSemitransparente(value);
    if (value) {
      showQuestion('question8', [
        { text: 'option8_1', handler: () => { 
          console.log('🔄 Setting semitransparente to false');
          setSemitransparente(false); 
          console.log('🔄 Calling askReflejo with chroma:', chromaValue);
          askReflejo(iluminacionValue, soporteValue, chromaValue, cameraMovementValue);
        }},
        { text: 'option8_2', handler: () => {
          console.log('🔄 Setting chroma to true');
          const newChromaValue = true;
          setChroma(newChromaValue);
          console.log('🔄 Calling askReflejo with chroma:', newChromaValue);
          askReflejo(iluminacionValue, soporteValue, newChromaValue, cameraMovementValue);
        }}
      ]);
    } else {
      console.log('🔄 Calling askReflejo with chroma:', chromaValue);
      askReflejo(iluminacionValue, soporteValue, chromaValue, cameraMovementValue);
    }
  }, [showQuestion, askReflejo, setChroma, setSemitransparente]);

  const askSemitransparente = useCallback((iluminacionValue: string, soporteValue: string, chromaValue: boolean, cameraMovementValue: boolean) => {
    showQuestion('question7', [
      { text: 'option7_1', handler: () => handleSemitransparenteResponse(true, iluminacionValue, soporteValue, chromaValue, cameraMovementValue) },
      { text: 'option7_2', handler: () => handleSemitransparenteResponse(false, iluminacionValue, soporteValue, chromaValue, cameraMovementValue) },
    ]);
  }, [showQuestion, handleSemitransparenteResponse]);

  const handleRotoscopeComplexityResponse = useCallback((complexity: string, iluminacionValue: string, soporteValue: string, cameraMovementValue: boolean) => {
    console.log('handleRotoscopeComplexityResponse called with complexity:', complexity);
    if (complexity === 'simple') {
      console.log('Rotoscope is simple. Setting chroma to false and proceeding.');
      setChroma(false);
      handleSemitransparenteResponse(false, iluminacionValue, soporteValue, false, cameraMovementValue);
    } else {
      console.log('Rotoscope is complejo. Setting chroma to true and asking about semitransparente objects.');
      setChroma(true);
      askSemitransparente(iluminacionValue, soporteValue, true, cameraMovementValue);
    }
  }, [setChroma, handleSemitransparenteResponse, askSemitransparente]);

  const askChromaOverlap = useCallback((iluminacionValue: string, soporteValue: string, cameraMovementValue: boolean) => {
    console.log('askChromaOverlap called with soporte:', soporteValue);
    showQuestion('question6', [
      { text: 'option6_1', handler: () => handleRotoscopeComplexityResponse('simple', iluminacionValue, soporteValue, cameraMovementValue) },
      { text: 'option6_2', handler: () => handleRotoscopeComplexityResponse('complejo', iluminacionValue, soporteValue, cameraMovementValue) },
    ], 'rotoscopeTips');
  }, [showQuestion, handleRotoscopeComplexityResponse]);

  const askIluminacion = useCallback(() => {
    console.log('askIluminacion called');
    logState();
    console.log('Asking illumination question');
    setIsFirstQuestion(false);
    showQuestion(
      'question1',
      [
        { text: 'option1_1', handler: () => handleIluminacionResponse('alta', soporte) },
        { text: 'option1_2', handler: () => handleIluminacionResponse('media', soporte) },
        { text: 'option1_3', handler: () => handleIluminacionResponse('baja', soporte) }
      ]
    );
  }, [showQuestion, soporte]);

  const askSoporte = useCallback(() => {
    console.log('askSoporte called');
    logState();
    showQuestion('question2', [
      { text: 'option2_1', handler: () => handleSoporteResponse('Monitor/TV LCD') },
      { text: 'option2_2', handler: () => handleSoporteResponse('Monitor/TV CRT') },
      { text: 'option2_3', handler: () => handleSoporteResponse('Celular') },
    ]);
  }, [showQuestion]);

  const askCameraMovement = useCallback((iluminacionValue: string, soporteValue: string) => {
    console.log('askCameraMovement called with soporte:', soporteValue);
    const questionKey = soporteValue === 'Celular' ? 'question3Mobile' : 'question3';
    showQuestion(
      questionKey,
      [
        { text: 'option3_1', handler: () => handleCameraMovementResponse(true, iluminacionValue, soporteValue) },
        { text: 'option3_2', handler: () => handleCameraMovementResponse(false, iluminacionValue, soporteValue) }
      ]
    );
  }, [showQuestion]);

  const handleOverlapResponse = useCallback((overlap: boolean, iluminacionValue: string, soporteValue: string, cameraMovementValue: boolean) => {
    console.log('handleOverlapResponse called with soporte:', soporteValue);
    if (overlap) {
      askChromaOverlap(iluminacionValue, soporteValue, cameraMovementValue);
    } else {
      setChroma(false);
      handleSemitransparenteResponse(false, iluminacionValue, soporteValue, false, cameraMovementValue);
    }
  }, [askChromaOverlap, handleSemitransparenteResponse, setChroma]);

  const askOverlap = useCallback((iluminacionValue: string, soporteValue: string, cameraMovementValue: boolean) => {
    console.log('askOverlap called with soporte:', soporteValue);
    const questionKey = soporteValue === 'Celular' ? 'question4Mobile' : 'question4';
    showQuestion(questionKey, [
      { text: 'option4_1', handler: () => handleOverlapResponse(true, iluminacionValue, soporteValue, cameraMovementValue) },
      { text: 'option4_2', handler: () => handleOverlapResponse(false, iluminacionValue, soporteValue, cameraMovementValue) },
    ]);
  }, [showQuestion, handleOverlapResponse]);

  const handleIluminacionResponse = useCallback((value: string, soporteValue: string) => {
    console.log('Setting iluminacion to:', value);
    setIluminacion(value);
    console.log('Current state - iluminacion:', value, 'soporte:', soporteValue, 'chroma:', chroma);
    askCameraMovement(value, soporteValue);
  }, [askCameraMovement, chroma]);

  const handleSoporteResponse = useCallback((option: string) => {
    console.log('Setting soporte to:', option);
    setSoporte(option);
    console.log('Current state - soporte:', option, 'chroma:', chroma);
    setIsFirstQuestion(false);
    askIluminacion();
  }, [askIluminacion, chroma]);

  const handleCameraMovementResponse = useCallback((value: boolean, iluminacionValue: string, soporteValue: string) => {
    console.log('Setting cameraMovement to:', value);
    setCameraMovement(value);
    console.log('Current state - iluminacion:', iluminacionValue, 'soporte:', soporteValue, 'chroma:', chroma, 'cameraMovement:', value);
    askOverlap(iluminacionValue, soporteValue, value);
  }, [chroma, askOverlap]);

  const handleChroma = useCallback((value: boolean, iluminacionValue: string, soporteValue: string, cameraMovementValue: boolean) => {
    console.log('Setting chroma to:', value);
    setChroma(value);
    console.log('Current state - iluminacion:', iluminacionValue, 'soporte:', soporteValue, 'chroma:', value, 'cameraMovement:', cameraMovementValue);
    askSemitransparente(iluminacionValue, soporteValue, value, cameraMovementValue);
  }, [askSemitransparente]);

  // Función para determinar qué SpecificResult mostrar
  const getSpecificResult = () => {
    // Lógica para determinar qué SpecificResult mostrar basado en las respuestas
    // Esta es una lógica de ejemplo, ajústala según tus necesidades reales
    if (soporte === 'Celular') return 1;
    if (soporte === 'Monitor/TV CRT') return 2;
    if (soporte === 'Monitor/TV LCD' && !cameraMovement) return 3;
    if (soporte === 'Monitor/TV LCD' && cameraMovement && !chroma) return 4;
    if (soporte === 'Monitor/TV LCD' && cameraMovement && chroma && !semitransparente) return 5;
    return 6;
  };

  const restartQuiz = useCallback(() => {
    setShowResults(false);
    setIsFirstQuestion(true);
    setCameraMovement(false);
    setSoporte(null);
    setChroma(false);
    setSemitransparente(false);
    setReflejoImportante(null);
    setIluminacion(null);
    setTvOnOff(null);
    askSoporte(); // Cambiado de askIluminacion() a askSoporte()
  }, [askSoporte]); // Cambiado de [askIluminacion] a [askSoporte]

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center p-4 space-y-4">
      {isFirstQuestion && !showResults && (
        <div className="w-full max-w-3xl flex justify-end space-x-2 mb-4">
          <button
            onClick={() => changeLanguage('es')}
            className={`px-3 py-1 rounded ${language === 'es' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'}`}
          >
            Esp
          </button>
          <button
            onClick={() => changeLanguage('en')}
            className={`px-3 py-1 rounded ${language === 'en' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'}`}
          >
            Eng
          </button>
        </div>
      )}
      <div className="w-full max-w-3xl p-6 bg-white rounded-lg shadow-md overflow-y-auto">
        <AnimatePresence mode="wait">
          {!showResults ? (
            <motion.div
              key={currentQuestion}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{
                duration: 0.3,
                ease: [0.45, 0, 0.55, 1],
                layout: { duration: 0.3 }
              }}
              layout
            >
              {/* Mover los console.log fuera del JSX */}
              {(() => {
                console.log('Rendering Question:', currentQuestion);
                console.log('Options:', options);
                return null;
              })()}

              <h2 className="text-2xl font-bold mb-6 text-center">
                {currentQuestion === 'question10' ? t('question10') : t(currentQuestion)}
              </h2>
              <div className="space-y-4">
                {options.map((option, index) => (
                  <button
                    key={index}
                    onClick={option.handler}
                    className="w-full p-4 text-left border border-gray-300 rounded-md hover:bg-blue-100 transition-colors duration-200"
                  >
                    {t(option.text)}
                  </button>
                ))}
              </div>
              {additionalContent && (
                <div className="mt-4">
                  <div dangerouslySetInnerHTML={{ __html: t(additionalContent) }} />
                </div>
              )}
            </motion.div>
          ) : (
            <>
              <ResultsDisplay
                cameraMovement={cameraMovement}
                soporte={soporte}
                chroma={chroma}
                semitransparente={semitransparente}
                reflejoImportante={reflejoImportante}
                iluminacion={iluminacion}
                tvOnOff={tvOnOff}
                basePath="/screenrs"
                lga_debug={lga_debug}  
              />
              {lga_debug && (
                <AllVariables
                  cameraMovement={cameraMovement}
                  soporte={soporte}
                  chroma={chroma}
                  semitransparente={semitransparente}
                  reflejoImportante={reflejoImportante}
                  iluminacion={iluminacion}
                  tvOnOff={tvOnOff}
                />
              )}
            </>
          )}
        </AnimatePresence>
      </div>
      {showResults && (
        <div className="mt-8">
          <button
            onClick={restartQuiz}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          >
            {t('restartButton')}
          </button>
        </div>
      )}
    </div>
  );
}

export default function QuizApp() {
  return (
    <LanguageProvider>
      <QuizContent />
    </LanguageProvider>
  );
}

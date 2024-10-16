'use client'

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ResultsDisplay from './components/ResultsDisplay';
import { useTranslation } from '../hooks/useTranslation';
import { LanguageProvider, useLanguage } from '../contexts/LanguageContext';

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
    askIluminacion();
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

  const askIluminacion = useCallback(() => {
    console.log('askIluminacion called');
    logState();
    console.log('Asking illumination question');
    setIsFirstQuestion(true);
    showQuestion(
      'question1',
      [
        { text: 'option1_1', handler: () => handleIluminacionResponse('alta') },
        { text: 'option1_2', handler: () => handleIluminacionResponse('media') },
        { text: 'option1_3', handler: () => handleIluminacionResponse('baja') }
      ]
    );
  }, [showQuestion]);

  const askSoporte = useCallback((iluminacionValue: string) => {
    console.log('askSoporte called');
    logState();
    showQuestion('question2', [
      { text: 'option2_1', handler: () => handleSoporteResponse('Monitor/TV LCD', iluminacionValue) },
      { text: 'option2_2', handler: () => handleSoporteResponse('Monitor/TV CRT', iluminacionValue) },
      { text: 'option2_3', handler: () => handleSoporteResponse('Celular', iluminacionValue) },
    ]);
  }, [showQuestion]);

  const handleIluminacionResponse = useCallback((value: string) => {
    console.log('Setting iluminacion to:', value);
    setIluminacion(value);
    console.log('Current state - iluminacion:', value, 'soporte:', soporte, 'chroma:', chroma);
    setIsFirstQuestion(false);
    askSoporte(value);
  }, [askSoporte, soporte, chroma]);

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

  const handleSoporteResponse = useCallback((option: string, iluminacionValue: string) => {
    console.log('Setting soporte to:', option);
    setSoporte(option);
    console.log('Current state - iluminacion:', iluminacionValue, 'soporte:', option, 'chroma:', chroma);
    console.log('Soporte set, calling askCameraMovement');
    askCameraMovement(iluminacionValue, option);
  }, [askCameraMovement, chroma]);

  const handleCameraMovementResponse = useCallback((value: boolean, iluminacionValue: string, soporteValue: string) => {
    console.log('Setting cameraMovement to:', value);
    setCameraMovement(value);
    console.log('Current state - iluminacion:', iluminacionValue, 'soporte:', soporteValue, 'chroma:', chroma, 'cameraMovement:', value);
    askOverlap(iluminacionValue, soporteValue);
  }, [chroma]);

  const askOverlap = useCallback((iluminacionValue: string, soporteValue: string) => {
    console.log('askOverlap called with soporte:', soporteValue);
    showQuestion('question4', [
      { text: 'option4_1', handler: () => handleOverlapResponse(true, iluminacionValue, soporteValue) },
      { text: 'option4_2', handler: () => handleOverlapResponse(false, iluminacionValue, soporteValue) },
    ]);
  }, [showQuestion]);

  const askChromaOverlap = useCallback((iluminacionValue: string, soporteValue: string) => {
    console.log('askChromaOverlap called with soporte:', soporteValue);
    showQuestion('question5', [
      { text: 'option5_1', handler: () => handleChroma(true, iluminacionValue, soporteValue) },
      { text: 'option5_2', handler: () => handleChroma(false, iluminacionValue, soporteValue) },
    ]);
  }, [showQuestion]);

  const askSemitransparente = useCallback((iluminacionValue: string, soporteValue: string) => {
    showQuestion('question7', [
      { text: 'option7_1', handler: () => handleSemitransparenteResponse(true, iluminacionValue, soporteValue) },
      { text: 'option7_2', handler: () => handleSemitransparenteResponse(false, iluminacionValue, soporteValue) },
    ]);
  }, [showQuestion]);

  const handleOverlapResponse = useCallback((overlap: boolean, iluminacionValue: string, soporteValue: string) => {
    console.log('handleOverlapResponse called with soporte:', soporteValue);
    if (overlap) {
      askChromaOverlap(iluminacionValue, soporteValue);
    } else {
      setChroma(false);
      askSemitransparente(iluminacionValue, soporteValue);
    }
  }, [askChromaOverlap, askSemitransparente]);

  const askRotoscopeComplexity = useCallback((iluminacionValue: string, soporteValue: string) => {
    const tipsContent = 'rotoscopeTips'; // Cambiamos 'tips' por 'rotoscopeTips'
    showQuestion('question6', [
      { text: 'option6_1', handler: () => handleRotoscopeComplexityResponse('simple', iluminacionValue, soporteValue) },
      { text: 'option6_2', handler: () => handleRotoscopeComplexityResponse('complejo', iluminacionValue, soporteValue) },
    ], tipsContent);
  }, [showQuestion]);

  const askTvOnOff = useCallback(() => {
    console.log('askTvOnOff llamada');
    showQuestion('question10', [
      { text: 'option10_1', handler: () => handleTvOnOffResponse(true) },
      { text: 'option10_2', handler: () => handleTvOnOffResponse(false) },
    ]);
  }, [showQuestion]);

  const askReflejo = useCallback((iluminacionValue: string, soporteValue: string) => {
    console.log('askReflejo called with iluminacion:', iluminacionValue, 'soporte:', soporteValue);
    if (iluminacionValue !== 'alta') {
      showQuestion(
        'question9',
        [
          { text: 'option9_1', handler: () => handleReflejoResponse(true, iluminacionValue, soporteValue) },
          { text: 'option9_2', handler: () => handleReflejoResponse(false, iluminacionValue, soporteValue) },
        ]
      );
    } else {
      handleReflejoResponse(false, iluminacionValue, soporteValue);
    }
  }, [showQuestion, chroma]);

  function handleReflejoResponse(value: boolean, iluminacionValue: string, soporteValue: string) {
    console.log('Setting reflejoImportante to:', value);
    setReflejoImportante(value);
    console.log('handleReflejoResponse called with:');
    console.log('soporte:', soporteValue);
    console.log('iluminacion:', iluminacionValue);
    console.log('chroma:', chroma);
    console.log('cameraMovement:', cameraMovement);
    console.log('reflejoImportante:', value);

    if (soporteValue && soporteValue !== 'Celular' && iluminacionValue === 'alta' && chroma === false) {
      console.log('Condición cumplida, llamando a askTvOnOff');
      askTvOnOff();
    } else {
      console.log('Condición no cumplida, mostrando resultados directamente');
      displayResults();
    }
  }

  const handleChroma = useCallback((value: boolean, iluminacionValue: string, soporteValue: string) => {
    console.log('Setting chroma to:', value);
    setChroma(value);
    console.log('Current state - iluminacion:', iluminacionValue, 'soporte:', soporteValue, 'chroma:', value, 'cameraMovement:', cameraMovement);
    askSemitransparente(iluminacionValue, soporteValue);
  }, [askSemitransparente, cameraMovement]);

  const handleRotoscopeComplexityResponse = useCallback((complexity: string, iluminacionValue: string, soporteValue: string) => {
    if (complexity === 'simple') {
      setChroma(false);
    }
    askSemitransparente(iluminacionValue, soporteValue);
  }, [askSemitransparente]);

  const handleSemitransparenteResponse = useCallback((value: boolean, iluminacionValue: string, soporteValue: string) => {
    setSemitransparente(value);
    if (value) {
      showQuestion('question8', [
        { text: 'option8_1', handler: () => { 
          setSemitransparente(false); 
          askReflejo(iluminacionValue, soporteValue); 
        }},
        { text: 'option8_2', handler: () => {
          setChroma(true);  // Establecer chroma en true si no se puede evitar el objeto semitransparente
          askReflejo(iluminacionValue, soporteValue);
        }}
      ]);
    } else {
      askReflejo(iluminacionValue, soporteValue);
    }
  }, [askReflejo, showQuestion]);

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
  }, [displayResults, iluminacion, soporte, chroma, cameraMovement, reflejoImportante]);

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
    askIluminacion();
  }, [askIluminacion]);

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center p-4 space-y-4">
      {isFirstQuestion && !showResults && (
        <div className="w-full max-w-md flex justify-end space-x-2">
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
            <ResultsDisplay
              cameraMovement={cameraMovement}
              soporte={soporte}
              chroma={chroma}
              semitransparente={semitransparente}
              reflejoImportante={reflejoImportante}
              iluminacion={iluminacion}
              tvOnOff={tvOnOff}
              basePath="/ScreenRepSup"
            />
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
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

  // Eliminar el estado de depuración
  // const [showDebugInfo, setShowDebugInfo] = useState<boolean>(false);

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
    showQuestion(
      'question3',
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

  const handleOverlapResponse = useCallback((overlap: boolean, iluminacionValue: string, soporteValue: string) => {
    console.log('handleOverlapResponse called with soporte:', soporteValue);
    if (overlap) {
      askChromaOverlap(iluminacionValue, soporteValue);
    } else {
      handleChroma(false, iluminacionValue, soporteValue);
    }
  }, []);

  const askChromaOverlap = useCallback((iluminacionValue: string, soporteValue: string) => {
    console.log('askChromaOverlap called with soporte:', soporteValue);
    showQuestion('question5', [
      { text: 'option5_1', handler: () => handleChroma(true, iluminacionValue, soporteValue) },
      { text: 'option5_2', handler: () => handleChroma(false, iluminacionValue, soporteValue) },
    ]);
  }, [showQuestion]);

  const askRotoscopeComplexity = useCallback((iluminacionValue: string, soporteValue: string) => {
    const tipsContent = 'tips';
    showQuestion('question6', [
      { text: 'option6_1', handler: () => handleRotoscopeComplexityResponse('simple', iluminacionValue, soporteValue) },
      { text: 'option6_2', handler: () => handleRotoscopeComplexityResponse('complejo', iluminacionValue, soporteValue) },
    ], tipsContent);
  }, [showQuestion]);

  // Mover la definición de askTvOnOff antes de askReflejo
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

  // Declarar handleReflejoResponse antes de su uso
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
    if (value) {
      askRotoscopeComplexity(iluminacionValue, soporteValue);
    } else {
      console.log('Calling askReflejo with iluminacion:', iluminacionValue, 'soporte:', soporteValue);
      askReflejo(iluminacionValue, soporteValue);
    }
  }, [askRotoscopeComplexity, askReflejo, cameraMovement]);

  const handleRotoscopeComplexityResponse = useCallback((complexity: string, iluminacionValue: string, soporteValue: string) => {
    askSemitransparente(iluminacionValue, soporteValue);
  }, []);

  const askSemitransparente = useCallback((iluminacionValue: string, soporteValue: string) => {
    showQuestion('question7', [
      { text: 'option7_1', handler: () => handleSemitransparenteResponse(true, iluminacionValue, soporteValue) },
      { text: 'option7_2', handler: () => handleSemitransparenteResponse(false, iluminacionValue, soporteValue) },
    ]);
  }, [showQuestion]);

  const handleSemitransparenteResponse = useCallback((value: boolean, iluminacionValue: string, soporteValue: string) => {
    setSemitransparente(value);
    if (value) {
      setChroma(true);
      showQuestion('question8', [
        { text: 'option8_1', handler: () => { setSemitransparente(false); askReflejo(iluminacionValue, soporteValue); } },
        { text: 'option8_2', handler: () => askReflejo(iluminacionValue, soporteValue) },
      ]);
    } else {
      askReflejo(iluminacionValue, soporteValue);
    }
  }, [askReflejo, iluminacion]);

  // Definir displayResults antes de su uso
  const displayResults = useCallback(() => {
    console.log('displayResults called');
    setShowResults(true);
  }, []);

  const handleTvOnOffResponse = useCallback((value: boolean) => {
    console.log('handleTvOnOffResponse llamada con:', value);
    setTvOnOff(value);
    console.log('Current state - iluminacion:', iluminacion, 'soporte:', soporte, 'chroma:', chroma, 'cameraMovement:', cameraMovement, 'reflejoImportante:', reflejoImportante, 'tvOnOff:', value);
    displayResults();
  }, [displayResults, iluminacion, soporte, chroma, cameraMovement, reflejoImportante]);

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md overflow-y-auto">
        {isFirstQuestion && !showResults && (
          <div className="mb-4 flex justify-end space-x-2">
            <button
              onClick={() => changeLanguage('es')}
              className={`px-3 py-1 rounded ${language === 'es' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            >
              Esp
            </button>
            <button
              onClick={() => changeLanguage('en')}
              className={`px-3 py-1 rounded ${language === 'en' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            >
              Eng
            </button>
          </div>
        )}
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
              {console.log('Rendering Question:', currentQuestion)}
              {console.log('Options:', options)}

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
                <div
                  className="mt-4"
                  dangerouslySetInnerHTML={{ __html: t(additionalContent) }}
                />
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
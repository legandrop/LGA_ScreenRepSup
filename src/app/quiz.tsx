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

  const [showDebugInfo, setShowDebugInfo] = useState<boolean>(false);

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
    setIsFirstQuestion(false);
    askSoporte(value);
  }, [askSoporte]);

  const askCameraMovement = useCallback((iluminacionValue: string, soporteValue: string) => {
    showQuestion(
      'question3',
      [
        { text: 'option3_1', handler: () => handleCameraMovementResponse(true, iluminacionValue) },
        { text: 'option3_2', handler: () => handleCameraMovementResponse(false, iluminacionValue) }
      ]
    );
  }, [showQuestion]);

  const handleSoporteResponse = useCallback((option: string, iluminacionValue: string) => {
    console.log('Setting soporte to:', option);
    setSoporte(option);
    askCameraMovement(iluminacionValue, option);
  }, [askCameraMovement]);

  const handleCameraMovementResponse = useCallback((value: boolean, iluminacionValue: string) => {
    setCameraMovement(value);
    askOverlap(iluminacionValue);
  }, []);

  const askOverlap = useCallback((iluminacionValue: string) => {
    showQuestion('question4', [
      { text: 'option4_1', handler: () => handleOverlapResponse(true, iluminacionValue) },
      { text: 'option4_2', handler: () => handleOverlapResponse(false, iluminacionValue) },
    ]);
  }, [showQuestion]);

  const handleOverlapResponse = useCallback((overlap: boolean, iluminacionValue: string) => {
    if (overlap) {
      askChromaOverlap(iluminacionValue);
    } else {
      handleChroma(false, iluminacionValue);
    }
  }, []);

  const askChromaOverlap = useCallback((iluminacionValue: string) => {
    showQuestion('question5', [
      { text: 'option5_1', handler: () => handleChroma(true, iluminacionValue) },
      { text: 'option5_2', handler: () => handleChroma(false, iluminacionValue) },
    ]);
  }, [showQuestion]);

  const askRotoscopeComplexity = useCallback((iluminacionValue: string) => {
    const tipsContent = 'tips';
    showQuestion('question6', [
      { text: 'option6_1', handler: () => handleRotoscopeComplexityResponse('simple', iluminacionValue) },
      { text: 'option6_2', handler: () => handleRotoscopeComplexityResponse('complejo', iluminacionValue) },
    ], tipsContent);
  }, [showQuestion]);

  const askReflejo = useCallback((iluminacionValue: string) => {
    if (iluminacionValue !== 'alta') {
      showQuestion(
        'question9',
        [
          { text: 'option9_1', handler: () => handleReflejoResponse(true) },
          { text: 'option9_2', handler: () => handleReflejoResponse(false) },
        ]
      );
    } else {
      handleReflejoResponse(false);
    }
  }, [showQuestion]);

  const handleChroma = useCallback((value: boolean, iluminacionValue: string) => {
    console.log('Setting chroma to:', value);
    setChroma(value);
    if (value) {
      askRotoscopeComplexity(iluminacionValue);
    } else {
      askReflejo(iluminacionValue);
    }
  }, [askRotoscopeComplexity, askReflejo]);

  const handleRotoscopeComplexityResponse = useCallback((complexity: string, iluminacionValue: string) => {
    askSemitransparente(iluminacionValue);
  }, []);

  const askSemitransparente = useCallback((iluminacionValue: string) => {
    showQuestion('question7', [
      { text: 'option7_1', handler: () => handleSemitransparenteResponse(true, iluminacionValue) },
      { text: 'option7_2', handler: () => handleSemitransparenteResponse(false, iluminacionValue) },
    ]);
  }, [showQuestion]);

  const handleSemitransparenteResponse = useCallback((value: boolean, iluminacionValue: string) => {
    setSemitransparente(value);
    if (value) {
      setChroma(true);
      showQuestion('question8', [
        { text: 'option8_1', handler: () => { setSemitransparente(false); askReflejo(iluminacionValue); } },
        { text: 'option8_2', handler: () => askReflejo(iluminacionValue) },
      ]);
    } else {
      askReflejo(iluminacionValue);
    }
  }, []);

  const askTvOnOff = useCallback(() => {
    console.log('askTvOnOff llamada');
    setShowDebugInfo(false); // Asegurarse de que la información de depuración no se muestre
    showQuestion('question10', [
      { text: 'option10_1', handler: () => handleTvOnOffResponse(true) },
      { text: 'option10_2', handler: () => handleTvOnOffResponse(false) },
    ]);
  }, [showQuestion]);

  const handleReflejoResponse = useCallback((value: boolean) => {
    setReflejoImportante(value);
    console.log('handleReflejoResponse called with:');
    console.log('soporte:', soporte);
    console.log('iluminacion:', iluminacion);
    console.log('chroma:', chroma);

    if (soporte !== 'Celular' && iluminacion === 'alta' && chroma === false) {
      console.log('Condición cumplida, llamando a askTvOnOff');
      askTvOnOff();
    } else {
      console.log('Condición no cumplida, mostrando información de depuración');
      setShowDebugInfo(true);
    }
  }, [soporte, iluminacion, chroma, askTvOnOff, setShowDebugInfo]);

  const handleTvOnOffResponse = useCallback((value: boolean) => {
    console.log('handleTvOnOffResponse llamada con:', value);
    setTvOnOff(value);
    displayResults();
  }, []);

  const displayResults = useCallback(() => {
    console.log('displayResults called');
    setShowResults(true);
  }, []);

  // Modificar el useEffect
  useEffect(() => {
    console.log('useEffect triggered');
    console.log('Current values:');
    console.log('reflejoImportante:', reflejoImportante, typeof reflejoImportante);
    console.log('soporte:', soporte, typeof soporte);
    console.log('iluminacion:', iluminacion, typeof iluminacion);
    console.log('chroma:', chroma, typeof chroma);

    if (reflejoImportante !== null && soporte !== null && iluminacion !== null) {
      const condition = (soporte !== 'Celular' && iluminacion === 'alta' && chroma === false);
      console.log('Condition in useEffect:', condition);
      if (condition) {
        console.log('Condition met in useEffect, calling askTvOnOff');
        askTvOnOff();
      } else {
        console.log('Condition not met in useEffect, setting showDebugInfo to true');
        setShowDebugInfo(true);
      }
    }
  }, [reflejoImportante, soporte, iluminacion, chroma, askTvOnOff]);

  const handleContinueAfterDebug = useCallback(() => {
    setShowDebugInfo(false);
    displayResults();
  }, []);

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
          {!showResults && !showDebugInfo ? (
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
              <h2 className="text-2xl font-bold mb-6 text-center">
                {t(currentQuestion)}
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
          ) : showDebugInfo ? (
            <motion.div
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
              <h2 className="text-2xl font-bold mb-6 text-center">{t('debugInfoTitle')}</h2>
              <ul className="space-y-2 mb-6">
                <li><strong>{t('support')}:</strong> {soporte}</li>
                <li><strong>{t('illumination')}:</strong> {iluminacion}</li>
                <li><strong>{t('chroma')}:</strong> {chroma.toString()}</li>
              </ul>
              <button
                onClick={handleContinueAfterDebug}
                className="w-full p-4 text-center bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-200"
              >
                {t('continue')}
              </button>
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
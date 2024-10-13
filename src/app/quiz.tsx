'use client'

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ResultsDisplay from './components/ResultsDisplay';

export default function QuizApp() {
  const [currentQuestion, setCurrentQuestion] = useState<string>('');
  const [options, setOptions] = useState<Array<{ text: string; handler: () => void }>>([]);
  const [additionalContent, setAdditionalContent] = useState<string>('');
  const [showResults, setShowResults] = useState<boolean>(false);
  const [results, setResults] = useState<string>('');

  const [cameraMovement, setCameraMovement] = useState<boolean>(false);
  const [soporte, setSoporte] = useState<string | null>(null);
  const [chroma, setChroma] = useState<boolean>(false);
  const [semitransparente, setSemitransparente] = useState<boolean>(false);
  const [reflejoImportante, setReflejoImportante] = useState<boolean | null>(null);
  const [iluminacion, setIluminacion] = useState<string | null>(null);
  const [tvOnOff, setTvOnOff] = useState<boolean | null>(null);

  useEffect(() => {
    // Iniciar con la pregunta de iluminación
    askIluminacion();
  }, []);

  useEffect(() => {
    if (reflejoImportante !== null && soporte !== null && iluminacion !== null) {
      if (soporte !== 'Celular' && iluminacion === 'alta' && chroma === false) {
        askTvOnOff();
      } else {
        displayResults();
      }
    }
  }, [reflejoImportante, soporte, iluminacion, chroma]);

  function showQuestion(
    questionText: string,
    options: Array<{ text: string; handler: () => void }>,
    additionalContent: string = ''
  ) {
    setCurrentQuestion(questionText);
    setOptions(options);
    setAdditionalContent(additionalContent);
  }

  function askIluminacion() {
    showQuestion(
      '¿Cómo es la iluminación de la escena y qué impacto tiene la luz de la pantalla sobre ella?',
      [
        { text: 'Escena luminosa / Poco impacto de la luz de la pantalla', handler: () => handleIluminacionResponse('alta') },
        { text: 'Iluminación media / Impacto moderado', handler: () => handleIluminacionResponse('media') },
        { text: 'Escena oscura / Gran impacto de la luz de la pantalla', handler: () => handleIluminacionResponse('baja') }
      ]
    );
  }

  function handleIluminacionResponse(value: string) {
    setIluminacion(value);
    askSoporte(value); // Preguntar soporte después de la iluminación
  }

  function askSoporte(iluminacionValue: string) {
    showQuestion('¿Qué tipo de pantalla es?', [
      { text: 'Monitor / TV LCD', handler: () => handleSoporteResponse('Monitor/TV LCD', iluminacionValue) },
      { text: 'Monitor / TV CRT (de tubo)', handler: () => handleSoporteResponse('Monitor/TV CRT', iluminacionValue) },
      { text: 'Celular', handler: () => handleSoporteResponse('Celular', iluminacionValue) },
    ]);
  }

  function handleSoporteResponse(option: string, iluminacionValue: string) {
    setSoporte(option);
    askCameraMovement(iluminacionValue, option); // Pasar soporte a la siguiente pregunta
  }

  function askCameraMovement(iluminacionValue: string, soporteValue: string) {
    const questionText =
      soporteValue === 'Celular'
        ? '¿Hay movimiento de cámara o del celular?'
        : '¿Hay movimiento de cámara?';

    showQuestion(
      questionText,
      [
        { text: 'Sí', handler: () => handleCameraMovementResponse(true, iluminacionValue) },
        { text: 'No', handler: () => handleCameraMovementResponse(false, iluminacionValue) }
      ]
    );
  }

  function handleCameraMovementResponse(value: boolean, iluminacionValue: string) {
    setCameraMovement(value);
    askOverlap(iluminacionValue);
  }

  function askOverlap(iluminacionValue: string) {
    showQuestion('¿Hay superposición de algún actor o algún objeto con la pantalla?', [
      { text: 'Sí', handler: () => handleOverlapResponse(true, iluminacionValue) },
      { text: 'No', handler: () => handleOverlapResponse(false, iluminacionValue) },
    ]);
  }

  function handleOverlapResponse(overlap: boolean, iluminacionValue: string) {
    if (overlap) {
      askChromaOverlap(iluminacionValue);
    } else {
      handleChroma(false, iluminacionValue);
    }
  }

  function askChromaOverlap(iluminacionValue: string) {
    showQuestion('¿El actor/objeto se cruza fugazmente o está efectivamente tapando parte de la pantalla?', [
      { text: 'Está efectivamente tapando', handler: () => handleChroma(true, iluminacionValue) },
      { text: 'Se cruza fugazmente', handler: () => handleChroma(false, iluminacionValue) },
    ]);
  }

  function handleChroma(value: boolean, iluminacionValue: string) {
    setChroma(value);
    if (value) {
      askRotoscopeComplexity(iluminacionValue);
    } else {
      askReflejo(iluminacionValue);
    }
  }

  function askRotoscopeComplexity(iluminacionValue: string) {
    const tipsContent = `
      <div class="tips">
        <p><strong>Tips:</strong></p>
        <ul>
          <li><strong>Elementos simples:</strong> objetos con bordes definidos, sin movimiento rápido, sin semitransparencias.</li>
          <li><strong>Elementos complejos:</strong> pelo, objetos fuera de foco, movimiento rápido, bordes difusos, con semitransparencias.</li>
        </ul>
      </div>
    `;
    showQuestion('¿El actor/objeto es simple de rotoscopiar o es complejo?', [
      { text: 'Simple', handler: () => handleRotoscopeComplexityResponse('simple', iluminacionValue) },
      { text: 'Complejo', handler: () => handleRotoscopeComplexityResponse('complejo', iluminacionValue) },
    ], tipsContent);
  }

  function handleRotoscopeComplexityResponse(complexity: string, iluminacionValue: string) {
    askSemitransparente(iluminacionValue);
  }

  function askSemitransparente(iluminacionValue: string) {
    showQuestion('¿Hay un objeto semitransparente por delante de la pantalla? (por ejemplo un vaso)', [
      { text: 'Sí', handler: () => handleSemitransparenteResponse(true, iluminacionValue) },
      { text: 'No', handler: () => handleSemitransparenteResponse(false, iluminacionValue) },
    ]);
  }

  function handleSemitransparenteResponse(value: boolean, iluminacionValue: string) {
    setSemitransparente(value);
    if (value) {
      setChroma(true);
      showQuestion('Complica bastante las cosas. ¿Se puede evitar poner?', [
        { text: 'Sí', handler: () => { setSemitransparente(false); askReflejo(iluminacionValue); } },
        { text: 'No', handler: () => askReflejo(iluminacionValue) },
      ]);
    } else {
      askReflejo(iluminacionValue);
    }
  }

  function askReflejo(iluminacionValue: string) {
    if (iluminacionValue !== 'alta') {
      showQuestion(
        `¿Hay algún reflejo en la pantalla que sea importante para la escena?`,
        [
          { text: 'Sí', handler: () => handleReflejoResponse(true) },
          { text: 'No', handler: () => handleReflejoResponse(false) },
        ]
      );
    } else {
      handleReflejoResponse(false);
    }
  }

  function handleReflejoResponse(value: boolean) {
    setReflejoImportante(value);
  }

  function askTvOnOff() {
    showQuestion('¿Se muestra la acción de prender o apagar la TV en cámara?', [
      { text: 'Sí', handler: () => handleTvOnOffResponse(true) },
      { text: 'No', handler: () => handleTvOnOffResponse(false) },
    ]);
  }

  function handleTvOnOffResponse(value: boolean) {
    setTvOnOff(value);
    displayResults();
  }

  function displayResults() {
    setShowResults(true);
  }

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4">
      <div className={`w-full ${showResults ? 'max-w-2xl' : 'max-w-md'} p-6 bg-white rounded-lg shadow-md overflow-y-auto ${showResults ? 'max-h-[90vh]' : ''}`}>
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
              <h2 className="text-2xl font-bold mb-6 text-center">
                {currentQuestion}
              </h2>
              <div className="space-y-4">
                {options.map((option, index) => (
                  <button
                    key={index}
                    onClick={option.handler}
                    className="w-full p-4 text-left border border-gray-300 rounded-md hover:bg-blue-100 transition-colors duration-200"
                  >
                    {option.text}
                  </button>
                ))}
              </div>
              {additionalContent && (
                <div
                  className="mt-4"
                  dangerouslySetInnerHTML={{ __html: additionalContent }}
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

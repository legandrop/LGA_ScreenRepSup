type TranslationKeys = 'question1' | 'option1_1' | 'option1_2' | 'option1_3' | 'question2' | 'option2_1' | 'option2_2' | 'option2_3' | 'question3' | 'option3_1' | 'option3_2' | 'question4' | 'option4_1' | 'option4_2' | 'question5' | 'option5_1' | 'option5_2' | 'question6' | 'option6_1' | 'option6_2' | 'question7' | 'option7_1' | 'option7_2' | 'question8' | 'option8_1' | 'option8_2' | 'question9' | 'option9_1' | 'option9_2' | 'question10' | 'option10_1' | 'option10_2' | 'tips' | 'tipsSimple' | 'tipsComplex' | 'instructions' | 'mainPlate' | 'mainPlateDescription' | 'black' | 'crtGridDescription' | 'grayJpgDescription' | 'turnOffText' | 'distortionGrid' | 'gray' | 'refPlateDescription' | 'reference' | 'footerVersion' | 'footerYear' | 'debugInfoTitle' | 'support' | 'illumination' | 'chroma' | 'continue' | 'mainPlateAdditional' | 'restartButton';

type TranslationType = {
  [key in TranslationKeys]: string;
};

export const translations: { [key: string]: TranslationType } = {
  es: {
    question1: "¿Cómo es la iluminación de la escena y qué impacto tiene la luz de la pantalla sobre ella?",
    option1_1: "Escena luminosa / Poco impacto de la luz de la pantalla",
    option1_2: "Iluminación media / Impacto moderado",
    option1_3: "Escena oscura / Gran impacto de la luz de la pantalla",
    question2: "¿Qué tipo de pantalla es?",
    option2_1: "Monitor / TV LCD",
    option2_2: "Monitor / TV CRT (de tubo)",
    option2_3: "Celular",
    question3: "¿Hay movimiento de cámara?",
    option3_1: "Sí",
    option3_2: "No",
    question4: "¿Hay superposición de algún actor o algún objeto con la pantalla?",
    option4_1: "Sí",
    option4_2: "No",
    question5: "¿El actor/objeto se cruza fugazmente o está efectivamente tapando parte de la pantalla?",
    option5_1: "Está efectivamente tapando",
    option5_2: "Se cruza fugazmente",
    question6: "¿El actor/objeto es simple de rotoscopiar o es complejo?",
    option6_1: "Simple",
    option6_2: "Complejo",
    question7: "¿Hay un objeto semitransparente por delante de la pantalla? (por ejemplo un vaso)",
    option7_1: "Sí",
    option7_2: "No",
    question8: "Complica bastante las cosas. ¿Se puede evitar poner?",
    option8_1: "Sí",
    option8_2: "No",
    question9: "¿Hay algún reflejo en la pantalla que sea importante para la escena?",
    option9_1: "Sí",
    option9_2: "No",
    question10: "¿Se muestra la acción de prender o apagar la TV en cámara?",
    option10_1: "Sí",
    option10_2: "No",
    tips: "Tips:",
    tipsSimple: "Elementos simples: objetos con bordes definidos, sin movimiento rápido, sin semitransparencias.",
    tipsComplex: "Elementos complejos: pelo, objetos fuera de foco, movimiento rápido, bordes difusos, con semitransparencias.",
    instructions: "Indicaciones:",
    mainPlate: "Plate Principal",
    mainPlateDescription: "Filmar el plano con el {soporte} apagado.",
    black: "Negro",
    crtGridDescription: "JPG con grilla de distorsión durante un 1 segundo, luego cambiar a ",
    grayJpgDescription: "JPG gris durante 1 segundo",
    turnOffText: "y luego apagar el {soporte} en toma",
    distortionGrid: "Grilla de distorsión",
    gray: "Gris",
    refPlateDescription: "{soporte} con contenido real de referencia. Cuanto más similar al contenido que se planea poner en post, mejor.",
    reference: "Referencia",
    footerVersion: "Screen Replacement Supervisor v0.8",
    footerYear: "2024 | Lega Pugliese",
    debugInfoTitle: "Información de depuración",
    support: "Soporte",
    illumination: "Iluminación",
    chroma: "Chroma",
    continue: "Continuar",
    mainPlateAdditional: "En caso de que el {soporte} tenga alguna luz que indique que está encendido, usar un JPG negro para que la pantalla quede oscura y el indicador quede encendido.",
    restartButton: "Volver a empezar",
  },
  en: {
    question1: "How is the scene lighting and what impact does the screen light have on it?",
    option1_1: "Bright scene / Little impact from screen light",
    option1_2: "Medium lighting / Moderate impact",
    option1_3: "Dark scene / High impact from screen light",
    question2: "What type of screen is it?",
    option2_1: "LCD Monitor / TV",
    option2_2: "CRT Monitor / TV (tube)",
    option2_3: "Mobile phone",
    question3: "Is there camera movement?",
    option3_1: "Yes",
    option3_2: "No",
    question4: "Is there any overlap of an actor or object with the screen?",
    option4_1: "Yes",
    option4_2: "No",
    question5: "Does the actor/object cross fleetingly or is it effectively covering part of the screen?",
    option5_1: "It's effectively covering",
    option5_2: "It crosses fleetingly",
    question6: "Is the actor/object simple or complex to rotoscope?",
    option6_1: "Simple",
    option6_2: "Complex",
    question7: "Is there a semi-transparent object in front of the screen? (for example, a glass)",
    option7_1: "Yes",
    option7_2: "No",
    question8: "This complicates things quite a bit. Can it be avoided?",
    option8_1: "Yes",
    option8_2: "No",
    question9: "Is there any reflection on the screen that is important for the scene?",
    option9_1: "Yes",
    option9_2: "No",
    question10: "Is the action of turning the TV on or off shown on camera?",
    option10_1: "Yes",
    option10_2: "No",
    tips: "Tips:",
    tipsSimple: "Simple elements: objects with defined edges, without rapid movement, without semi-transparencies.",
    tipsComplex: "Complex elements: hair, out-of-focus objects, rapid movement, diffuse edges, with semi-transparencies.",
    instructions: "Instructions:",
    mainPlate: "Main Plate",
    mainPlateDescription: "Film the shot with the {soporte} turned off.",
    black: "Black",
    crtGridDescription: "JPG with distortion grid for 1 second, then change to ",
    grayJpgDescription: "Gray JPG for 1 second",
    turnOffText: "and then turn off the {soporte} on camera",
    distortionGrid: "Distortion grid",
    gray: "Gray",
    refPlateDescription: "{soporte} with real reference content. The more similar to the content planned for post-production, the better.",
    reference: "Reference",
    footerVersion: "Screen Replacement Supervisor v0.8",
    footerYear: "2024 | Lega Pugliese",
    debugInfoTitle: "Debug Information",
    support: "Support",
    illumination: "Illumination",
    chroma: "Chroma",
    continue: "Continue",
    mainPlateAdditional: "If the {soporte} has any light indicating that it is on, use a black JPG so that the screen remains dark and the indicator stays on.",
    restartButton: "Start Over",
  }
};

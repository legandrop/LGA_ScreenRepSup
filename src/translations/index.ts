type TranslationKeys = 'question1' | 'option1_1' | 'option1_2' | 'option1_3' | 
  'question2' | 'option2_1' | 'option2_2' | 'option2_3' | 
  'question3' | 'question3Mobile' | 'option3_1' | 'option3_2' | 
  'question4' | 'option4_1' | 'option4_2' | 
  'question5' | 'option5_1' | 'option5_2' | 
  'question6' | 'option6_1' | 'option6_2' | 
  'question7' | 'option7_1' | 'option7_2' | 
  'question8' | 'option8_1' | 'option8_2' | 
  'question9' | 'option9_1' | 'option9_2' | 
  'question10' | 'option10_1' | 'option10_2' | 
  'tips' | 'tipsSimple' | 'tipsComplex' | 
  'instructions' | 'mainPlate' | 'mainPlateDescription' | 
  'black' | 'crtGridDescription' | 'grayJpgDescription' | 
  'turnOffText' | 'distortionGrid' | 'gray' | 
  'refPlateDescription' | 'reference' | 'footerVersion' | 
  'footerYear' | 'debugInfoTitle' | 'support' | 
  'illumination' | 'chroma' | 'continue' | 
  'mainPlateAdditional' | 'restartButton' | 
  'trackPointsOutside' | 'trackPointsInside' | 
  'blackWithTrackPoints' | 'blackWithOutsideTrackPoints' | 
  'trackPointsTips' | 'trackPointsQuantity' | 'trackPointsSize' | 
  'rotoscopeTips' | 'mainPlateGray' | 'plateRefACRT' | 
  'plateRefAOther' | 'plateReflejo' | 'plateReflejoDescription' | 
  'mainPlateGrayWithTrack' | 'grayWithTrackPoints' | 
  'grayWithOutsideTrackPoints' | 'plateRefACRTWithMovement' | 
  'plateRefAOtherWithMovement' | 'mainPlateChroma' | 'green' | 
  'plateRefASemitransparent' | 'mainPlateChromaWithTrack' | 
  'greenWithTrackPoints' | 'greenWithOutsideTrackPoints' | 
  'plateRefASemitransparentWithMovement' | 'plateRefACRTWithMovementChroma' | 
  'plateRefAOtherWithMovementChroma' | 'mobileConsiderationsTitle' | 
  'mobileConsiderationsText' | 'mobileConsiderationsPreparedScreen' | 
  'mobileConsiderationsClicking' | 'question4Mobile' | 
  'altTrackPointsOutside' | 'altTrackPointsInside' | 
  'altDistortionGrid' | 'altGrayJpg' | 'altTurnedOff' | 
  'altReferenceImage' | 'altMainPlateTurnedOff' | 
  'altMainPlateGray' | 'altPlateReflejo' | 
  'altGreyTrackOutside' | 'altGreyTrack' | 
  'altMainPlateGreen' | 'altDistGridGlassA' | 
  'altDistGridGlassB' | 'altGreenTrackOutside' | 
  'altGreenTrack' | 'trackPointsPlacement' | 
  'refPlateCelular1' | 'refPlateCelular2' | 
  'refPlateCelularSemitransparente1' | 'refPlateCelularSemitransparente2' | 
  'altReferenceFinger' | 'altReferenceGlasses' |
  'turnOffIfBlackJPG1' | 'turnOffIfBlackJPG2' | 
  'considerationsTitle' | 'illuminationConsiderations' | 'soporteConsideration' | 
  'rotoscopeTips' | 'rotoscopeTipsWithDarkScene';

type TranslationType = {
  [key in TranslationKeys]: string | { nonCelular: string; celular: string };
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
    question3Mobile: "¿Hay movimiento de cámara o del celular?",
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
    question8: "Usar un objeto semitransparente complica bastante las cosas. ¿Se puede evitar poner?",
    option8_1: "Sí",
    option8_2: "No",
    question9: "¿Hay algún reflejo en la pantalla que sea importante para la escena?",
    option9_1: "Sí",
    option9_2: "No",
    question10: "¿Se muestra la acción de prender o apagar la TV en cámara?",
    option10_1: "Sí",
    option10_2: "No",
    tips: "Tips",
    tipsSimple: "Elementos simples: objetos con bordes definidos, sin movimiento rápido, sin semitransparencias.",
    tipsComplex: "Elementos complejos: pelo, objetos fuera de foco, movimiento rápido, bordes difusos, con semitransparencias.",
    instructions: "Indicaciones:",
    mainPlate: "Plate Principal",
    mainPlateDescription: "Filmar el plano con el {soporte} apagado.",
    black: "Negro",
    crtGridDescription: "JPG con grilla de distorsión durante un 1 segundo, luego cambiar a ",
    grayJpgDescription: "JPG gris durante 1 segundo",
    turnOffText: "y apagar el {soporte} en toma",
    distortionGrid: "Grilla de distorsión",
    gray: "Gris",
    refPlateDescription: "{soporte} con contenido real de referencia, idealmente lo más parecido posible al material que se usará en postproducción.",
    reference: "Referencia",
    footerVersion: "Screen Replacement Supervisor v1.0",
    footerYear: "2024 | Lega Pugliese",
    debugInfoTitle: "Debug Info",
    support: "Soporte",
    illumination: "Iluminación",
    chroma: "Chroma",
    continue: "Continuar",
    mainPlateAdditional: "En caso de que el {soporte} tenga algún indicador luminoso de encendido, usar un JPG negro para que la pantalla quede oscura y el indicador quede encendido.",
    restartButton: "Volver a empezar",
    trackPointsOutside: "Idealmente pegar puntos de track por fuera de la pantalla de vidrio, en el marco plástico del {soporte}.",
    trackPointsInside: "Si el {soporte} no tiene un marco donde pegar puntos de track, entonces usar un JPG Negro con puntos de track.",
    blackWithTrackPoints: "Negro con puntos de track",
    blackWithOutsideTrackPoints: "Negro con puntos de track fuera",
    trackPointsTips: "Tips para puntos de track",
    trackPointsQuantity: "La cantidad de puntos a poner dependerá de cada plano. Cuantos menos se usen, mejor, teniendo en cuenta que siempre tiene que haber 4 puntos visibles en toma.",
    trackPointsPlacement: "Idealmente, se utilizarán puntos de track lo más cercanos posible a los bordes de la pantalla evitando puntos en el centro. Margin 1 se usará siempre que los puntos de track no queden cortados/comidos por los bordes, sino se usarán los JPG Margin 2 (generalmente en TV CRT y celulares con pantallas redondeadas) En casos donde algo cruce la pantalla y bloquee estos puntos, se colocarán puntos en el centro.",
    trackPointsSize: "Cuanto más chicos sean los puntos, mejor. Simplemente tienen que verse en cámara, por lo tanto el tamaño dependerá de que tan grande se vea el {soporte} en cámara. Si es un primer plano, los puntos serán más chicos que en un plano general.",
    rotoscopeTips: "<br><p><strong>Complejos:</strong> Elementos que bloquean de forma continua la pantalla. Pelo, elementos fuera de foco, con movimiento rápido que generan motion blur, en contacto o muy cerca de la pantalla, o con semitransparencias.</p><br><p><strong>Simples:</strong> Elementos que cruzan y tapan la pantalla solo durante pocos frames. Si tapan la pantalla de forma continua, se consideran simples aquellos con bordes definidos, sin movimientos rápidos y sin semitransparencias.</p>",
    rotoscopeTipsWithDarkScene: `<br><p><strong>Complejos:</strong> Elementos que bloquean de forma continua la pantalla. Pelo, elementos fuera de foco, con movimiento rápido que generan motion blur, en contacto o muy cerca de la pantalla, o con semitransparencias.</p><br><p><strong>Simples:</strong> Elementos que cruzan y tapan la pantalla solo durante pocos frames. Si tapan la pantalla de forma continua, se consideran simples aquellos con bordes definidos, sin movimientos rápidos y sin semitransparencias.</p>
      <br><p><strong>Consideraciones para escena oscura:</strong></p>
      En estas escenas, la luz de la pantalla tiene una gran incidencia sobre la iluminación del entorno. Por lo tanto, es clave que la iluminación de la pantalla coincida con el contenido que se insertará en postproducción.
      <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>Contenido estático:</strong> Si el contenido es una imagen fija (como una búsqueda en Google o un presentador en un noticiero), la luz será más constante y estable. En estos casos, podemos utilizar un JPG verde/azul en la pantalla para facilitar el recorte mediante chroma key.
      <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>Contenido dinámico:</strong> En cambio, si se proyecta una película, cada transición entre planos puede modificar considerablemente la cantidad de luz emitida. Esto a veces requiere, en postproducción, elegir opciones que coincidan con los tiempos del video utilizado en el set para mantener la sincronización y que los cambios de luz sean coherentes con el contenido de la pantalla. El uso de un JPG que emite una luz constante no va a ser adecuado en estos casos.`,
    mainPlateGray: "Filmar el plano con un JPG gris. Usar el brillo del {soporte} para lograr un nivel adecuado sin sobreexponer. Tomar nota del nivel de brillo usado.",
    plateRefACRT: "JPG con grilla de distorsión durante un 1 segundo, luego apagar el Monitor/TV en toma",
    plateRefAOther: "Apagar el {soporte} en toma",
    plateReflejo: "Plate Reflejo",
    plateReflejoDescription: "Si la imagen usada en la pantalla del Plate principal supera en brillo al reflejo que hay que capturar, filmar un Plate con el {soporte} apagado y los reflejos, cuidando que nada tape al reflejo.",
    mainPlateGrayWithTrack: "Idealmente pegar puntos de track por fuera de la pantalla de vidrio, en el marco plástico del {soporte} y filmar el plano con un JPG gris. Si el {soporte} no tiene un marco donde pegar puntos de track, entonces usar un JPG gris con puntos de track. En ambos casos, usar el brillo del {soporte} para lograr un nivel adecuado sin sobreexponer. Tomar nota del nivel de brillo usado.",
    grayWithTrackPoints: "Gris con puntos de track",
    grayWithOutsideTrackPoints: "Gris con puntos de track fuera",
    plateRefACRTWithMovement: "JPG con grilla de distorsión durante un 1 segundo. Luego, si para el Plate Principal se usó JPG Gris con puntos de track en lugar de usar stickers fuera de la pantalla, entonces pasar a un JPG gris durante 1 segundo. Finalmente apagar el Monitor/TV en toma",
    plateRefAOtherWithMovement: "Si para el Plate Principal se usó JPG Gris con puntos de track en lugar de usar stickers fuera de la pantalla, entonces en este plate filmar JPG gris durante 1 segundo. Finalmente apagar el {soporte} en toma",
    mainPlateChroma: "Filmar el plano con un JPG Verde o Azul. Usar el brillo del {soporte} para lograr un nivel adecuado sin sobreexponer. Tomar nota del nivel de brillo usado.",
    green: "Verde",
    plateRefASemitransparent: "JPG con grilla de distorsión y objeto semitransparente repitiendo la acción del objeto en el plate principal, luego retirar el objeto semitransparente y apagar el {soporte} en toma.",
    mainPlateChromaWithTrack: "Idealmente pegar puntos de track por fuera de la pantalla de vidrio, en el marco plástico del {soporte} y filmar el plano con un JPG verde o azul. Si el {soporte} no tiene un marco donde pegar puntos de track, entonces usar un JPG verde o azul con puntos de track. En ambos casos, usar el brillo del {soporte} para lograr un nivel adecuado sin sobreexponer. Tomar nota del nivel de brillo usado.",
    greenWithTrackPoints: "Verde con puntos de track",
    greenWithOutsideTrackPoints: "Verde con puntos de track fuera",
    plateRefASemitransparentWithMovement: "JPG con grilla de distorsión y objeto semitransparente repitiendo la acción del objeto en el plate principal, luego retirar el objeto semitransparente y cambiar a JPG gris durante 1 segundo y apagar el {soporte} en toma.",
    plateRefACRTWithMovementChroma: "JPG con grilla de distorsión durante un 1 segundo, luego cambiar a JPG gris durante 1 segundo y apagar el {soporte} en toma",
    plateRefAOtherWithMovementChroma: "JPG gris durante 1 segundo y apagar el {soporte} en toma",
    mobileConsiderationsTitle: "Consideraciones para interacción con celulares:",
    mobileConsiderationsText: "Si hay interacción con la pantalla (ej: alguien está tecleando), la acción tiene que tener coherencia con la ubicación de los elementos que se agregarán después.",
    mobileConsiderationsPreparedScreen: "Conviene tener preparada/programada una pantalla o una app de antemano para que los dedos se apoyen en los lugares correctos.",
    mobileConsiderationsClicking: "Si se usa una imagen en full screen, al tocar la pantalla aparecen elementos gráficos o la imagen sale de full screen. Para que esto no suceda, hay que usar la función GUIDED ACCESS del teléfono para bloquear la pantalla. Instrucciones para [Android](https://www.youtube.com/watch?v=o0ujQcw1tdc) | [iPhone](https://www.youtube.com/watch?v=p6QrNwtR3nc)",
    question4Mobile: "¿Hay superposición de algún actor, dedos o algún objeto con la pantalla?",
    altTrackPointsOutside: "Plate Principal: Puntos de track en los bordes plásticos",
    altTrackPointsInside: "Plate Principal: Puntos de track en el JPG Black",
    altDistortionGrid: "Plate Ref A: Grilla de distorsión",
    altGrayJpg: "Plate Ref A: JPG gris",
    altTurnedOff: "Plate Ref A: Apagado",
    altReferenceImage: "Plate Ref B: Video o imagen de referencia",
    altMainPlateTurnedOff: "Plate Principal: Pantalla apagada",
    altMainPlateGray: "Plate Principal: JPG gris",
    altPlateReflejo: "Plate Reflejo: Pantalla apagada con reflejos importantes",
    altGreyTrackOutside: "Plate Principal: JPG Gris con puntos de track en los bordes plásticos",
    altGreyTrack: "Plate Principal: JPG Gris con puntos de track",
    altMainPlateGreen: "Plate Principal: JPG Verde",
    altDistGridGlassA: "Plate Ref A: Grilla de distorsión con objeto semitransparente",
    altDistGridGlassB: "Plate Ref A: Grilla de distorsión sin objeto semitransparente",
    altGreenTrackOutside: "Plate Principal: JPG Verde con puntos de track en los bordes plásticos",
    altGreenTrack: "Plate Principal: JPG Verde con puntos de track",
    refPlateCelular1: "Celular con contenido real de referencia, idealmente lo más parecido posible al material que se usará en postproducción (por ejemplo youtube, google, videollamada, etc).",
    refPlateCelular2: "Hacer con los dedos la misma acción que se hacía en el plate principal.",
    refPlateCelularSemitransparente1: "Celular con contenido real de referencia, idealmente lo más parecido posible al material que se usará en postproducción (por ejemplo youtube, google, videollamada, etc).",
    refPlateCelularSemitransparente2: "Hacer con los dedos la misma acción que se hacía en el plate principal, además de poner el objeto semitransparente tapando la imagen como en el plate principal.",
    altReferenceFinger: "Plate Ref B: Referencia con acción de dedos",
    altReferenceGlasses: "Plate Ref B: Referencia con objeto semitransparente",
    turnOffIfBlackJPG1: "JPG gris durante 1 segundo",
    turnOffIfBlackJPG2: "Si en el plate principal se usó JPG black con puntos de track en lugar de stickers por fuera de la pantalla, apagar el {soporte} en toma",
    considerationsTitle: "Consideraciones:",
    illuminationConsiderations: `
      <br>
      • <strong>Escena luminosa o media:</strong> La influencia de la luz de la pantalla no solo depende de la iluminación general, sino también de la proximidad de otros elementos a la pantalla. {soporteConsideration}
      <br><br>
      • <strong>Escena oscura:</strong> En estas escenas, la luz de la pantalla influye significativamente en la iluminación del entorno. Por lo tanto, es fundamental que la iluminación de la pantalla se alinee con el contenido que se utilizará en postproducción para proyectarse en ella:
      <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>Contenido estático:</strong> Cuando el contenido es una imagen fija (como una búsqueda en Google o un presentador en un noticiero), la luz será más constante y estable.
      <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>Contenido dinámico:</strong> Si se proyecta una película, cada transición entre planos puede modificar considerablemente la cantidad de luz emitida. Esto puede requerir en postproducción elegir opciones que coincidan con los tiempos del video utilizado en el set para mantener la sincronización y que los cambios de luz sean coherentes.
      <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Por este motivo, este tipo de contenido con esta iluminación no es un candidato fácil. Es clave en estos casos utilizar una video de referencia que se ajuste lo más posible con el contenido que se aplicará en postproducción.`,
    soporteConsideration: {
      nonCelular: "<br>&nbsp;&nbsp;&nbsp;Si una persona está cerca de la pantalla, incluso en una escena luminosa, hay que evaluar si la luz afecta a la persona. Si es así, seleccionar 'Impacto moderado'.",
      celular: "<br>&nbsp;&nbsp;&nbsp;Si los dedos cubren la pantalla, hay que analizar si la luz de la pantalla afecta a los dedos, incluso en una escena luminosa. Si es así, seleccionar 'Impacto moderado'."
    },
  },
  en: {
    question1: "How is the scene lit and what impact does the screen's light have on it?",
    option1_1: "Bright scene / Minimal impact from screen light",
    option1_2: "Medium lighting / Moderate impact",
    option1_3: "Dark scene / Significant impact from screen light",
    question2: "What type of screen is it?",
    option2_1: "LCD Monitor / TV",
    option2_2: "CRT Monitor / TV (tube)",
    option2_3: "Mobile phone",
    question3: "Is there camera movement?",
    question3Mobile: "Is there movement of the camera or mobile phone?",
    option3_1: "Yes",
    option3_2: "No",
    question4: "Does an actor or object overlap with the screen?",
    option4_1: "Yes",
    option4_2: "No",
    question5: "Does the actor/object cross fleetingly or is it effectively covering part of the screen?",
    option5_1: "It's effectively covering",
    option5_2: "It crosses fleetingly",
    question6: "Is the actor/object simple or complex to rotoscope?",
    option6_1: "Simple",
    option6_2: "Complex",
    question7: "Is there a semi-transparent object in front of the screen? (e.g., a glass)",
    option7_1: "Yes",
    option7_2: "No",
    question8: "Using a semi-transparent object complicates things considerably. Can it be avoided?",
    option8_1: "Yes",
    option8_2: "No",
    question9: "Is there any reflection on the screen that is important for the scene?",
    option9_1: "Yes",
    option9_2: "No",
    question10: "Is the action of turning the TV on or off shown on camera?",
    option10_1: "Yes",
    option10_2: "No",
    tips: "Tips",
    tipsSimple: "Simple elements: objects with defined edges, without rapid movement, without semi-transparencies.",
    tipsComplex: "Complex elements: hair, out-of-focus objects, rapid movement, diffuse edges, with semi-transparencies.",
    instructions: "Instructions:",
    mainPlate: "Main Plate",
    mainPlateDescription: "Film the shot with the {soporte} turned off.",
    black: "Black",
    crtGridDescription: "JPG with distortion grid for 1 second, then switch to ",
    grayJpgDescription: "Gray JPG for 1 second",
    turnOffText: "and turn off the {soporte} on camera",
    distortionGrid: "Distortion grid",
    gray: "Gray",
    refPlateDescription: "{soporte} with real reference content. The more similar to the content planned for post-production, the better.",
    reference: "Reference",
    footerVersion: "Screen Replacement Supervisor v1.0",
    footerYear: "2024 | Lega Pugliese",
    debugInfoTitle: "Debug Information",
    support: "Support",
    illumination: "Illumination",
    chroma: "Chroma",
    continue: "Continue",
    mainPlateAdditional: "If the {soporte} has any indicator light showing it's on, use a black JPG to keep the screen dark while the indicator remains lit.",
    restartButton: "Start Over",
    trackPointsOutside: "Ideally, place tracking points outside the glass screen, on the plastic frame of the {soporte}.",
    trackPointsInside: "If the {soporte} doesn't have a frame to place tracking points, then use a Black JPG with tracking points.",
    blackWithTrackPoints: "Black with tracking points",
    blackWithOutsideTrackPoints: "Black with external tracking points",
    trackPointsTips: "Tracking point tips",
    trackPointsQuantity: "The number of points to be placed will depend on each shot. The fewer used, the better, keeping in mind that there should always be 4 visible points in the shot.",
    trackPointsPlacement: "Ideally, tracking points will be placed as close as possible to the screen edges, avoiding points in the center. Margin 1 will be used whenever the tracking points are not cut off/eaten by the edges, otherwise JPG Margin 2 will be used (generally on CRT TVs and mobile phones with rounded screens). In cases where something crosses the screen and blocks these points, points will be placed in the center.",
    trackPointsSize: "The smaller the points, the better. They just need to be visible on camera, so size depends on how large the {soporte} appears. For close-ups, use smaller points than for wide shots.",
    rotoscopeTips: "<br><p><strong>Complex:</strong> Elements that continuously block the screen. Hair, out-of-focus elements, with rapid movement generating motion blur, in contact with or very close to the screen, or with semi-transparencies.</p><br><p><strong>Simple:</strong> Elements that cross and cover the screen only for a few frames. If they continuously cover the screen, those with defined edges, without rapid movements, and without semi-transparencies are considered simple.</p>",
    rotoscopeTipsWithDarkScene: `<br><p><strong>Complex:</strong> Elements that continuously block the screen. Hair, out-of-focus elements, with rapid movement generating motion blur, in contact with or very close to the screen, or with semi-transparencies.</p><br><p><strong>Simple:</strong> Elements that cross and cover the screen only for a few frames. If they continuously cover the screen, those with defined edges, without rapid movements, and without semi-transparencies are considered simple.</p>
      <br><p><strong>Considerations for dark scene:</strong></p>
      In these scenes, the screen's light has a significant impact on the environment's lighting. Therefore, it is crucial that the screen's lighting matches the content that will be inserted in post-production.
      <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>Static content:</strong> If the content is a static image (like a Google search or a news presenter), the light will be more constant and stable. In these cases, we can use a green/blue JPG on the screen to facilitate chroma key removal.
      <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>Dynamic content:</strong> However, if a movie is projected, each transition between shots can significantly change the amount of light emitted. This sometimes requires, in post-production, choosing options that match the timing of the video used on set to maintain synchronization and ensure light changes are consistent with the screen content. Using a JPG that emits constant light will not be suitable in these cases.`,
    mainPlateGray: "Film the shot with a gray JPG. Adjust the {soporte}'s brightness to an appropriate level without overexposing. Take Note of the brightness level used.",
    plateRefACRT: "JPG with distortion grid for 1 second, then turn off the Monitor/TV on camera",
    plateRefAOther: "Turn off the {soporte} on camera",
    plateReflejo: "Reflection Plate",
    plateReflejoDescription: "If the image used on the screen of the main Plate exceeds in brightness the reflection that needs to be captured, film a Plate with the {soporte} turned off and the reflections, ensuring nothing obstructs the reflection.",
    mainPlateGrayWithTrack: "Ideally, place tracking points outside the glass screen on the {soporte}'s plastic frame and film with a gray JPG. If there's no frame for tracking points, use a gray JPG with tracking points. In both cases, adjust the {soporte}'s brightness appropriately without overexposing. Take Note of the brightness level used.",
    grayWithTrackPoints: "Gray with tracking points",
    grayWithOutsideTrackPoints: "Gray with external tracking points",
    plateRefACRTWithMovement: "JPG with distortion grid for 1 second. If the Main Plate used a Gray JPG with tracking points instead of external stickers, switch to a gray JPG for 1 second. Finally, turn off the Monitor/TV on camera",
    plateRefAOtherWithMovement: "If the Main Plate used a Gray JPG with tracking points instead of external stickers, film a gray JPG for 1 second. Then turn off the {soporte} on camera",
    mainPlateChroma: "Film the shot with a Green or Blue JPG. Adjust the {soporte}'s brightness to an appropriate level without overexposing. Take note of the brightness level used.",
    green: "Green",
    plateRefASemitransparent: "JPG with distortion grid and semi-transparent object repeating the action of the object in the main plate, then remove the semi-transparent object and turn off the {soporte} on camera.",
    mainPlateChromaWithTrack: "Ideally, place tracking points outside the glass screen on the {soporte}'s plastic frame and film with a green or blue JPG. If there's no frame for tracking points, use a green or blue JPG with tracking points. In both cases, adjust the {soporte}'s brightness appropriately without overexposing. Take note of the brightness level used.",
    greenWithTrackPoints: "Green with tracking points",
    greenWithOutsideTrackPoints: "Green with external tracking points",
    plateRefASemitransparentWithMovement: "JPG with distortion grid and semi-transparent object repeating the action from the main plate, then remove the semi-transparent object, switch to gray JPG for 1 second, and turn off the {soporte} on camera.",
    plateRefACRTWithMovementChroma: "JPG with distortion grid for 1 second, then switch to gray JPG for 1 second and turn off the {soporte} on camera",
    plateRefAOtherWithMovementChroma: "Gray JPG for 1 second, then turn off the {soporte} on camera",
    mobileConsiderationsTitle: "Considerations for interaction with mobile phones:",
    mobileConsiderationsText: "If there is interaction with the screen (e.g., someone is typing), the action must be consistent with the location of the elements that will be added later.",
    mobileConsiderationsPreparedScreen: "It is advisable to have a screen or app prepared/programmed in advance so that the fingers are placed in the correct locations.",
    mobileConsiderationsClicking: "If a full-screen image is used, touching the screen may cause graphic elements to appear or the image to exit full-screen mode. To prevent this, use the phone's GUIDED ACCESS function to lock the screen. Instructions for [Android](https://www.youtube.com/watch?v=o0ujQcw1tdc) | [iPhone](https://www.youtube.com/watch?v=p6QrNwtR3nc)",
    question4Mobile: "Is there any overlap of an actor, fingers, or any object with the screen?",
    altTrackPointsOutside: "Main Plate: Tracking points on plastic edges",
    altTrackPointsInside: "Main Plate: Tracking points on Black JPG",
    altDistortionGrid: "Plate Ref A: Distortion grid",
    altGrayJpg: "Plate Ref A: Gray JPG",
    altTurnedOff: "Plate Ref A: Turned off",
    altReferenceImage: "Plate Ref B: Reference video or image",
    altMainPlateTurnedOff: "Main Plate: Screen turned off",
    altMainPlateGray: "Main Plate: Gray JPG",
    altPlateReflejo: "Reflection Plate: Screen turned off with the important reflections",
    altGreyTrackOutside: "Main Plate: Gray JPG with tracking points on plastic edges",
    altGreyTrack: "Main Plate: Gray JPG with tracking points",
    altMainPlateGreen: "Main Plate: Green JPG",
    altDistGridGlassA: "Plate Ref A: Distortion grid with semi-transparent object",
    altDistGridGlassB: "Plate Ref A: Distortion grid without semi-transparent object",
    altGreenTrackOutside: "Main Plate: Green JPG with tracking points on plastic edges",
    altGreenTrack: "Main Plate: Green JPG with tracking points",
    refPlateCelular1: "Mobile phone with real reference content, ideally as close as possible to the material that will be used in post-production (for example YouTube, Google, video call, etc).",
    refPlateCelular2: "Perform the same action with the fingers as was done in the main plate.",
    refPlateCelularSemitransparente1: "Mobile phone with real reference content, ideally as close as possible to the material that will be used in post-production (for example YouTube, Google, video call, etc).",
    refPlateCelularSemitransparente2: "Perform the same action with the fingers as was done in the main plate, in addition to placing the semi-transparent object covering the image as in the main plate.",
    altReferenceFinger: "Plate Ref B: Reference with finger action",
    altReferenceGlasses: "Plate Ref B: Reference with semi-transparent object",
    turnOffIfBlackJPG1: "Gray JPG for 1 second",
    turnOffIfBlackJPG2: "If a black JPG with tracking points was used in the main plate instead of stickers outside the screen, turn off the {soporte} on camera",
    considerationsTitle: "Considerations:",
    illuminationConsiderations: `
      <br>
      • <strong>Bright or medium lighting:</strong> The influence of the screen's light depends not only on the general lighting but also on the proximity of other elements to the screen. {soporteConsideration}
      <br><br>
      • <strong>Dark scene:</strong> In these scenes, the screen's light significantly influences the environment's lighting. Therefore, it is essential that the screen's lighting aligns with the content that will be used in post-production to be projected on it:
      <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>Static content:</strong> When the content is a static image (like a Google search or a news presenter), the light will be more constant and stable.
      <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>Dynamic content:</strong> If a movie is projected, each transition between shots can significantly modify the amount of light emitted. This may require choosing options in post-production that match the timing of the video used on set to maintain synchronization and ensure light changes are coherent.
      <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;For this reason, this type of content with this lighting is not an easy candidate. It is crucial in these cases to use a reference video that matches as closely as possible with the content that will be applied in post-production.`,
    soporteConsideration: {
      nonCelular: "<br>&nbsp;&nbsp;&nbsp;If a person is near the screen, even in bright scenes, evaluate if the light affects them. If so, select 'Moderate impact'.",
      celular: "<br>&nbsp;&nbsp;&nbsp;If fingers cover the screen, analyze if the screen's light affects them. If so, select 'Moderate impact'."
    },
  }
};

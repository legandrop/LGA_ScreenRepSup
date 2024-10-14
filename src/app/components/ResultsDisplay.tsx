import SpecificResult1 from './SpecificResult1';
import SpecificResult2 from './SpecificResult2';
import SpecificResult3 from './SpecificResult3';
import SpecificResult4 from './SpecificResult4';
import SpecificResult5 from './SpecificResult5';
import SpecificResult6 from './SpecificResult6';
import { useTranslation } from '../../hooks/useTranslation';

type ResultsDisplayProps = {
  cameraMovement: boolean;
  soporte: string;
  chroma: boolean;
  semitransparente: boolean;
  reflejoImportante: boolean;
  iluminacion: string;
  tvOnOff: boolean | null;
  basePath: string;
};

export default function ResultsDisplay(props: ResultsDisplayProps) {
  const { cameraMovement, soporte, chroma, semitransparente, reflejoImportante, iluminacion, tvOnOff, basePath } = props;

  console.log('ResultsDisplay received props:', props);

  // Renderizar el resultado específico si se cumplen las condiciones
  if (iluminacion === 'alta' && chroma === false && cameraMovement === false) {
    console.log('Rendering SpecificResult1');
    return <SpecificResult1 soporte={soporte} tvOnOff={tvOnOff} basePath={basePath} />;
  }

  if (iluminacion === 'alta' && chroma === false && cameraMovement === true) {
    console.log('Rendering SpecificResult2');
    return <SpecificResult2 soporte={soporte} tvOnOff={tvOnOff} basePath={basePath} />;
  }

  if ((iluminacion === 'media' || iluminacion === 'baja') && chroma === false && cameraMovement === false) {
    console.log('Rendering SpecificResult3');
    return <SpecificResult3 soporte={soporte} tvOnOff={tvOnOff} reflejoImportante={reflejoImportante} basePath={basePath} />;
  }

  if ((iluminacion === 'media' || iluminacion === 'baja') && chroma === false && cameraMovement === true) {
    console.log('Rendering SpecificResult4');
    return <SpecificResult4 soporte={soporte} tvOnOff={tvOnOff} reflejoImportante={reflejoImportante} basePath={basePath} />;
  }

  if (chroma === true && cameraMovement === false) {
    console.log('Rendering SpecificResult5');
    return <SpecificResult5 soporte={soporte} tvOnOff={tvOnOff} semitransparente={semitransparente} reflejoImportante={reflejoImportante} basePath={basePath} />;
  }

  if (chroma === true && cameraMovement === true) {
    console.log('Rendering SpecificResult6');
    return <SpecificResult6 soporte={soporte} tvOnOff={tvOnOff} semitransparente={semitransparente} reflejoImportante={reflejoImportante} basePath={basePath} />;
  }

  // Resultado general
  console.log('Rendering general result');
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-center">Resultados Generales</h2>
    </div>
  );
}

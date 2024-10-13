import SpecificResult1 from './SpecificResult1';
import SpecificResult2 from './SpecificResult2';
import SpecificResult3 from './SpecificResult3';
import SpecificResult4 from './SpecificResult4';
import SpecificResult5 from './SpecificResult5';
import SpecificResult6 from './SpecificResult6';

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

  // Componente para mostrar todas las variables
  const AllVariables = () => (
    <div className="mt-8 p-4 bg-gray-100 rounded-md">
      <h3 className="text-xl font-bold mb-4">Todas las variables:</h3>
      <ul className="space-y-2">
        <li><strong>CameraMovement:</strong> {cameraMovement.toString()}</li>
        <li><strong>Soporte:</strong> {soporte}</li>
        <li><strong>Chroma:</strong> {chroma.toString()}</li>
        <li><strong>Semitransparente:</strong> {semitransparente.toString()}</li>
        <li><strong>ReflejoImportante:</strong> {reflejoImportante.toString()}</li>
        <li><strong>Iluminacion:</strong> {iluminacion}</li>
        <li><strong>TvOnOff:</strong> {tvOnOff !== null ? tvOnOff.toString() : 'N/A'}</li>
      </ul>
    </div>
  );

  // Renderizar el resultado específico si se cumplen las condiciones
  if (iluminacion === 'alta' && chroma === false && cameraMovement === false) {
    return (
      <>
        <SpecificResult1 soporte={soporte} tvOnOff={tvOnOff} basePath={basePath} />
        <AllVariables />
      </>
    );
  }

  if (iluminacion === 'alta' && chroma === false && cameraMovement === true) {
    return (
      <>
        <SpecificResult2 soporte={soporte} tvOnOff={tvOnOff} basePath={basePath} />
        <AllVariables />
      </>
    );
  }

  if ((iluminacion === 'media' || iluminacion === 'baja') && chroma === false && cameraMovement === false) {
    return (
      <>
        <SpecificResult3 soporte={soporte} tvOnOff={tvOnOff} reflejoImportante={reflejoImportante} basePath={basePath} />
        <AllVariables />
      </>
    );
  }

  if ((iluminacion === 'media' || iluminacion === 'baja') && chroma === false && cameraMovement === true) {
    return (
      <>
        <SpecificResult4 soporte={soporte} tvOnOff={tvOnOff} reflejoImportante={reflejoImportante} basePath={basePath} />
        <AllVariables />
      </>
    );
  }

  if (chroma === true && cameraMovement === false) {
    return (
      <>
        <SpecificResult5 soporte={soporte} tvOnOff={tvOnOff} semitransparente={semitransparente} reflejoImportante={reflejoImportante} basePath={basePath} />
        <AllVariables />
      </>
    );
  }

  if (chroma === true && cameraMovement === true) {
    return (
      <>
        <SpecificResult6 soporte={soporte} tvOnOff={tvOnOff} semitransparente={semitransparente} reflejoImportante={reflejoImportante} basePath={basePath} />
        <AllVariables />
      </>
    );
  }

  // Resultado general
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-center">Resultados Generales</h2>
      <AllVariables />
    </div>
  );
}
import React from 'react';

type AllVariablesProps = {
  cameraMovement: boolean;
  soporte: string | null;
  chroma: boolean;
  semitransparente: boolean;
  reflejoImportante: boolean | null;
  iluminacion: string | null;
  tvOnOff: boolean | null;
};

const AllVariables: React.FC<AllVariablesProps> = ({
  cameraMovement,
  soporte,
  chroma,
  semitransparente,
  reflejoImportante,
  iluminacion,
  tvOnOff
}) => {
  const getSpecificResultNumber = (): number => {
    if (iluminacion === 'alta' && !chroma && !cameraMovement) return 1;
    if (iluminacion === 'alta' && !chroma && cameraMovement) return 2;
    if ((iluminacion === 'media' || iluminacion === 'baja') && !chroma && !cameraMovement) return 3;
    if ((iluminacion === 'media' || iluminacion === 'baja') && !chroma && cameraMovement) return 4;
    if (chroma && !cameraMovement) return 5;
    if (chroma && cameraMovement) return 6;
    return 0; // Para el caso general
  };

  return (
    <div className="mt-8 p-4 bg-gray-100 rounded-lg">
      <h3 className="text-lg font-bold mb-2">SpecificResult{getSpecificResultNumber()}</h3>
      <ul className="list-disc list-inside">
        <li>Iluminación: {iluminacion}</li>
        <li>Chroma: {chroma.toString()}</li>
        <li>Camera Movement: {cameraMovement.toString()}</li>
        <li className="mt-2">Reflejo Importante: {reflejoImportante?.toString()}</li>
        <li>TV On/Off: {tvOnOff?.toString()}</li>
        <li>Semitransparente: {semitransparente.toString()}</li>
        <li>Soporte: {soporte}</li>
      </ul>
    </div>
  );
};

export default AllVariables;

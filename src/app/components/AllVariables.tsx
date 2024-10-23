import React from 'react';
import { useTranslation } from '../../hooks/useTranslation';

type AllVariablesProps = {
  cameraMovement: boolean;
  soporte: string;
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
  const { t } = useTranslation();

  const getResultNumber = (): number => {
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
      <h3 className="font-bold mb-2">{t('debugInfoTitle')}:</h3>
      <p className="mb-2">SpecificResult{getResultNumber()}</p>
      <ul className="list-disc list-inside">
        <li>{t('support')}: {soporte}</li>
        <li>{t('illumination')}: {iluminacion}</li>
        <li>{t('chroma')}: {chroma.toString()}</li>
        <li>Camera Movement: {cameraMovement.toString()}</li>
        <li>Semitransparente: {semitransparente.toString()}</li>
        <li>Reflejo Importante: {reflejoImportante?.toString() ?? 'null'}</li>
        <li>TV On/Off: {tvOnOff?.toString() ?? 'null'}</li>
      </ul>
    </div>
  );
};

export default AllVariables;

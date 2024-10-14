import ImageViewer from './ImageViewer';
import Link from 'next/link';
import { useTranslation } from '../../hooks/useTranslation';

type SpecificResult1Props = {
  soporte: string;
  tvOnOff: boolean | null;
  basePath: string;
};

export default function SpecificResult1({ soporte, tvOnOff, basePath }: SpecificResult1Props) {
  const { t } = useTranslation();
  const apagarTexto = tvOnOff ? t('turnOffText', { soporte }) : '';
  
  return (
    <div className="standard-results">
      <h2 className="result-title text-2xl font-bold mb-6">{t('instructions')}</h2>
      <ol className="list-decimal list-outside space-y-8 ml-5">
        <li>
          <p className="mb-2 -mt-1"><strong>{t('mainPlate')}:</strong> {t('mainPlateDescription', { soporte })}</p>
          <div className="mb-4">
            <ImageViewer src="/images/Negro.jpg" alt={t('black')} width={100} height={100} basePath={basePath} />
          </div>
        </li>

        <li>
          <p className="mb-2 -mt-1">
            <strong>Plate Ref A: </strong> 
            {soporte === 'Monitor/TV CRT' && t('crtGridDescription')}
            {t('grayJpgDescription')} {apagarTexto}
          </p>
          <div className="mb-4 flex space-x-4">
            {soporte === 'Monitor/TV CRT' && (
              <ImageViewer src="/images/GrillaDistorsion.jpg" alt={t('distortionGrid')} width={100} height={100} basePath={basePath} />
            )}
            <ImageViewer src="/images/Gris.jpg" alt={t('gray')} width={100} height={100} basePath={basePath} />
          </div>
        </li>

        <li>
          <p className="mb-2 -mt-1"><strong>Plate Ref B:</strong> {t('refPlateDescription', { soporte })}</p>
          <div className="mb-4">
            <ImageViewer src="/images/Referencia.jpg" alt={t('reference')} width={100} height={100} basePath={basePath} />
          </div>
        </li>
      </ol>
      
      {/* Nuevo pie de página */}
      <footer className="mt-8 pt-4 border-t text-sm text-gray-600">
        <p>{t('footerVersion')}</p>
        <p>{t('footerYear')}</p>
        <p>
          <Link href="https://www.wanka.tv" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
            www.wanka.tv
          </Link> | {' '}
          <Link href="https://github.com/legandrop/LGA_ScreenRepSup" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
            github
          </Link>
        </p>
      </footer>
    </div>
  );
}

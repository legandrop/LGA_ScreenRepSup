import ImageViewer from './ImageViewer';
import Link from 'next/link';
import { useTranslation } from '../../hooks/useTranslation';
import { useLanguage } from '../../contexts/LanguageContext';

type SpecificResult6Props = {
  soporte: string;
  tvOnOff: boolean | null;
  semitransparente: boolean;
  reflejoImportante: boolean;
  basePath: string;
};

export default function SpecificResult6({ soporte, tvOnOff, semitransparente, reflejoImportante, basePath }: SpecificResult6Props) {
  console.log('SpecificResult6 received props:', { soporte, tvOnOff, semitransparente, reflejoImportante, basePath });

  const { t } = useTranslation();
  const { language } = useLanguage();

  const soporteShort = soporte.startsWith('Monitor/TV') ? 'Monitor/TV' : soporte;
  const translatedSoporteShort = language === 'en' && soporteShort === 'Celular' ? 'Mobile phone' : soporteShort;
  
  const createMarkup = (html: string) => {
    // Esta función simple reemplaza los enlaces con elementos <a> seguros y con estilo
    const sanitizedHtml = html.replace(
      /\[([^\]]+)\]\(([^)]+)\)/g, 
      '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-blue-500 underline">$1</a>'
    );
    return { __html: sanitizedHtml };
  }

  return (
    <div className="standard-results w-full">
      <h2 className="result-title text-2xl font-bold mb-6">{t('instructions')}</h2>
      <ol className="list-decimal list-outside space-y-8 ml-5">
        <li>
          <p className="mb-2 -mt-1">
            <strong>{t('mainPlate')}:</strong> <br />
            {t('mainPlateChromaWithTrack', { soporte: translatedSoporteShort })}
          </p>
          <div className="mb-4 flex space-x-4">
            <ImageViewer src="/images/Verde_Track.jpg" alt={t('greenWithTrackPoints')} width={100} height={100} basePath={basePath} />
            <ImageViewer src="/images/Verde_TrackOutside.jpg" alt={t('greenWithOutsideTrackPoints')} width={100} height={100} basePath={basePath} />
          </div>
          <div className="tips mt-4">
            <p className="font-bold mb-2">{t('trackPointsTips')}:</p>
            <ul className="list-disc list-inside">
              <li>{t('trackPointsQuantity')}</li>
              <li>{t('trackPointsSize', { soporte: translatedSoporteShort })}</li>
            </ul>
          </div>
        </li>

        <li>
          <p className="mb-2 -mt-1">
            <strong>Plate Ref A: </strong> <br />
            {semitransparente 
              ? t('plateRefASemitransparentWithMovement', { soporte: translatedSoporteShort })
              : soporte === 'Monitor/TV CRT' 
                ? t('plateRefACRTWithMovementChroma')
                : t('plateRefAOtherWithMovementChroma', { soporte: translatedSoporteShort })
            }
          </p>
          <div className="mb-4 flex space-x-4">
            {soporte === 'Monitor/TV CRT' && (
              <ImageViewer src="/images/GrillaDistorsion.jpg" alt={t('distortionGrid')} width={100} height={100} basePath={basePath} />
            )}
            <ImageViewer src="/images/Gris.jpg" alt={t('gray')} width={100} height={100} basePath={basePath} />
          </div>
        </li>

        <li>
          <p className="mb-2 -mt-1"><strong>Plate Ref B:</strong><br /> 
            {t('refPlateDescription', { soporte: translatedSoporteShort })}
          </p>
          <div className="mb-4">
            <ImageViewer src="/images/Referencia.jpg" alt={t('reference')} width={100} height={100} basePath={basePath} />
          </div>
        </li>

        {reflejoImportante && (
          <li>
            <p className="mb-2 -mt-1"><strong>{t('plateReflejo')}:</strong> {t('plateReflejoDescription', { soporte: translatedSoporteShort })}</p>
          </li>
        )}
      </ol>
      
      {soporte === 'Celular' && (
        <div className="mt-8 p-4 bg-yellow-100 rounded-lg">
          <h3 className="font-bold mb-2">{t('mobileConsiderationsTitle')}</h3>
          <p>{t('mobileConsiderationsText')}</p>
          <ul className="list-disc list-inside mt-2">
            <li>{t('mobileConsiderationsPreparedScreen')}</li>
            <li>
              {t('mobileConsiderationsClicking').split('Instrucciones para')[0]}
              <br />
              <span className="ml-3" dangerouslySetInnerHTML={createMarkup('Instrucciones para ' + t('mobileConsiderationsClicking').split('Instrucciones para')[1])} />
            </li>
          </ul>
        </div>
      )}
      
      {/* Pie de página con texto más pequeño */}
      <footer className="mt-8 pt-4 border-t text-xs text-gray-500">
        <p>{t('footerVersion')}</p>
        <p>{t('footerYear')}</p>
        <p>
          <Link href="https://www.wanka.tv" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
            www.wanka.tv
          </Link> | {' '}
          <Link href="https://github.com/legandrop/LGA_ScreenRepSup" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
            github
          </Link>
        </p>
      </footer>
    </div>
  );
}

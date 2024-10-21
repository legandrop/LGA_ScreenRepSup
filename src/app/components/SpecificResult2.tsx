import ImageViewer from './ImageViewer';
import Link from 'next/link';
import { useTranslation } from '../../hooks/useTranslation';
import { useLanguage } from '../../contexts/LanguageContext';

type SpecificResult2Props = {
  soporte: string;
  tvOnOff: boolean | null;
  basePath: string;
};

export default function SpecificResult2({ soporte, tvOnOff, basePath }: SpecificResult2Props) {
  console.log('SpecificResult2 received props:', { soporte, tvOnOff, basePath });
  
  const { t } = useTranslation();
  const { language } = useLanguage();

  const soporteShort = soporte.startsWith('Monitor/TV') ? 'Monitor/TV' : soporte;
  const translatedSoporteShort = language === 'en' && soporteShort === 'Celular' ? 'Mobile phone' : soporteShort;

  const apagarTexto = tvOnOff ? t('turnOffText', { soporte: translatedSoporteShort }) : '';
  
  const allImages = [
    { src: "/images/LCD_Black_Track-Outside.jpg", alt: t('altTrackPointsOutside') },
    { src: "/images/LCD_Black_Track-4.jpg", alt: t('altTrackPointsInside') },
    ...(soporte === 'Monitor/TV CRT' ? [{ src: "/images/CRT_DistGrid.jpg", alt: t('altDistortionGrid') }] : []),
    { src: "/images/LCD_Grey.jpg", alt: t('altGrayJpg') },
    { src: "/images/LCD_Off.jpg", alt: t('altTurnedOff') },
    { src: "/images/LCD_Ref.jpg", alt: t('altReferenceImage') },
  ];

  return (
    <div className="standard-results w-full">
      <h2 className="result-title text-2xl font-bold mb-6">{t('instructions')}</h2>
      <ol className="list-decimal list-outside space-y-8 ml-5">
        <li>
          <p className="mb-2 -mt-1">
            <strong>{t('mainPlate')}:</strong> <br />
            {t('mainPlateDescription', { soporte: translatedSoporteShort })} <br />
            {t('mainPlateAdditional', { soporte: translatedSoporteShort })} <br />
            {t('trackPointsOutside', { soporte: translatedSoporteShort })} <br />
            {t('trackPointsInside', { soporte: translatedSoporteShort })}
          </p>
          <div className="mb-4 flex space-x-4">
            <ImageViewer images={allImages} initialIndex={0} width={100} height={100} basePath={basePath} />
            <ImageViewer images={allImages} initialIndex={1} width={100} height={100} basePath={basePath} />
          </div>
          <div className="tips mt-4">
            <p className="font-bold mb-2">{t('trackPointsTips')}:</p>
            <ul className="list-disc list-inside">
              <li>{t('trackPointsQuantity')}</li>
              <li>{t('trackPointsPlacement')}</li>
              <li>{t('trackPointsSize', { soporte: translatedSoporteShort })}</li>
            </ul>
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
              <ImageViewer images={allImages} initialIndex={2} width={100} height={100} basePath={basePath} />
            )}
            <ImageViewer images={allImages} initialIndex={soporte === 'Monitor/TV CRT' ? 3 : 2} width={100} height={100} basePath={basePath} />
            <ImageViewer images={allImages} initialIndex={soporte === 'Monitor/TV CRT' ? 4 : 3} width={100} height={100} basePath={basePath} />
          </div>
        </li>

        <li>
          <p className="mb-2 -mt-1"><strong>Plate Ref B:</strong> {t('refPlateDescription', { soporte: translatedSoporteShort })}</p>
          <div className="mb-4">
            <ImageViewer images={allImages} initialIndex={allImages.length - 1} width={100} height={100} basePath={basePath} />
          </div>
        </li>
      </ol>
      
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

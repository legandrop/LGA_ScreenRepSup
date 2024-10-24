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
    const sanitizedHtml = html.replace(
      /\[([^\]]+)\]\(([^)]+)\)/g, 
      '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-blue-500 underline">$1</a>'
    );
    return { __html: sanitizedHtml };
  }

  const isCelular = soporte === 'Celular';

  const allImages = isCelular
    ? [
        { src: "/images/Cel_Green_Track-4.jpg", alt: t('altGreenTrack') },
        { src: "/images/Cel_Grey.jpg", alt: t('altGrayJpg') },
        { src: "/images/Cel_Off.jpg", alt: t('altTurnedOff') },
        { src: "/images/Cel_Ref.jpg", alt: t('altReferenceImage') },
        { src: "/images/Cel_Ref_Dedo.jpg", alt: t('altReferenceFinger') },
        ...(semitransparente ? [{ src: "/images/Cel_Ref_Gafas.jpg", alt: t('altReferenceGlasses') }] : []),
        ...(reflejoImportante ? [{ src: "/images/Cel_Off.jpg", alt: t('altPlateReflejo') }] : []),
      ]
    : [
        { src: "/images/LCD_Green_Track-Outside.jpg", alt: t('altGreenTrackOutside') },
        { src: "/images/LCD_Green_Track-4.jpg", alt: t('altGreenTrack') },
        ...(semitransparente
          ? [
              { src: "/images/LCD_DistGrid_Glass.jpg", alt: t('altDistGridGlassA') },
              { src: "/images/LCD_DistGrid_Glass-B.jpg", alt: t('altDistGridGlassB') },
              { src: "/images/LCD_Grey.jpg", alt: t('altGrayJpg') },
              { src: "/images/LCD_Off.jpg", alt: t('altTurnedOff') },
            ]
          : [
              ...(soporte === 'Monitor/TV CRT' ? [{ src: "/images/CRT_DistGrid.jpg", alt: t('altDistortionGrid') }] : []),
              { src: "/images/LCD_Grey.jpg", alt: t('altGrayJpg') },
              { src: "/images/LCD_Off.jpg", alt: t('altTurnedOff') },
          ]),
        { src: "/images/LCD_Ref.jpg", alt: t('altReferenceImage') },
        ...(reflejoImportante ? [{ src: "/images/LCD_Off.jpg", alt: t('altPlateReflejo') }] : []),
    ];

  return (
    <div className="standard-results w-full">
      <h2 className="result-title text-2xl font-bold mb-6">{t('instructions')}</h2>
      <ol className="list-decimal list-outside space-y-8 ml-5">
        <li>
          <p className="mb-2 -mt-1">
            <strong>{t('mainPlate')}:</strong> <br /> 
            {t('mainPlateChromaWithTrack').replace(/{soporte}/g, translatedSoporteShort)}
          </p>
          <div className="mb-4 flex space-x-4">
            <ImageViewer images={allImages} initialIndex={0} width={100} height={100} basePath={basePath} />
            {!isCelular && <ImageViewer images={allImages} initialIndex={1} width={100} height={100} basePath={basePath} />}
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
            <strong>Plate Ref A: </strong> <br />
            {isCelular
              ? t('plateRefAOther', { soporte: translatedSoporteShort })
              : semitransparente 
                ? t('plateRefASemitransparent', { soporte: translatedSoporteShort })
                : soporte === 'Monitor/TV CRT' 
                  ? t('plateRefACRT')
                  : t('plateRefAOther', { soporte: translatedSoporteShort })
            }
          </p>
          <div className="mb-4 flex space-x-4">
            {isCelular ? (
              <>
                <ImageViewer images={allImages} initialIndex={1} width={100} height={100} basePath={basePath} />
                <ImageViewer images={allImages} initialIndex={2} width={100} height={100} basePath={basePath} />
              </>
            ) : semitransparente ? (
              <>
                <ImageViewer images={allImages} initialIndex={2} width={100} height={100} basePath={basePath} />
                <ImageViewer images={allImages} initialIndex={3} width={100} height={100} basePath={basePath} />
                <ImageViewer images={allImages} initialIndex={4} width={100} height={100} basePath={basePath} />
                <ImageViewer images={allImages} initialIndex={5} width={100} height={100} basePath={basePath} />
              </>
            ) : (
              <>
                {soporte === 'Monitor/TV CRT' && (
                  <ImageViewer images={allImages} initialIndex={2} width={100} height={100} basePath={basePath} />
                )}
                <ImageViewer images={allImages} initialIndex={soporte === 'Monitor/TV CRT' ? 3 : 2} width={100} height={100} basePath={basePath} />
                <ImageViewer images={allImages} initialIndex={soporte === 'Monitor/TV CRT' ? 4 : 3} width={100} height={100} basePath={basePath} />
              </>
            )}
          </div>
        </li>

        <li>
          <p className="mb-2 -mt-1"><strong>Plate Ref B:</strong> <br /> 
            {isCelular
              ? semitransparente
                ? (
                  <>
                    {t('refPlateCelularSemitransparente1')}
                    <br />
                    {t('refPlateCelularSemitransparente2')}
                  </>
                )
                : (
                  <>
                    {t('refPlateCelular1')}
                    <br />
                    {t('refPlateCelular2')}
                  </>
                )
              : t('refPlateDescription', { soporte: translatedSoporteShort })
            }
          </p>
          <div className="mb-4 flex space-x-4">
            {isCelular ? (
              <>
                <ImageViewer images={allImages} initialIndex={3} width={100} height={100} basePath={basePath} />
                <ImageViewer images={allImages} initialIndex={4} width={100} height={100} basePath={basePath} />
                {semitransparente && (
                  <ImageViewer images={allImages} initialIndex={5} width={100} height={100} basePath={basePath} />
                )}
              </>
            ) : (
              <ImageViewer images={allImages} initialIndex={allImages.length - (reflejoImportante ? 2 : 1)} width={100} height={100} basePath={basePath} />
            )}
          </div>
        </li>

        {reflejoImportante && (
          <li>
            <p className="mb-2 -mt-1"><strong>{t('plateReflejo')}:</strong> {t('plateReflejoDescription', { soporte: translatedSoporteShort })}</p>
            <div className="mb-4">
              <ImageViewer images={allImages} initialIndex={allImages.length - 1} width={100} height={100} basePath={basePath} />
            </div>
          </li>
        )}
      </ol>
      
      {isCelular && (
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

import ImageViewer from './ImageViewer';
import Link from 'next/link';
import { useTranslation } from '../../hooks/useTranslation';
import { useLanguage } from '../../contexts/LanguageContext';

type SpecificResult3Props = {
  soporte: string;
  tvOnOff: boolean | null;
  reflejoImportante: boolean;
  basePath: string;
};

export default function SpecificResult3({ soporte, tvOnOff, reflejoImportante, basePath }: SpecificResult3Props) {
  console.log('SpecificResult3 received props:', { soporte, tvOnOff, reflejoImportante, basePath });

  const { t } = useTranslation();
  const { language } = useLanguage();

  const soporteShort = soporte.startsWith('Monitor/TV') ? 'Monitor/TV' : soporte;
  const translatedSoporteShort = language === 'en' && soporteShort === 'Celular' ? 'Mobile phone' : soporteShort;

  const apagarTexto = tvOnOff ? t('turnOffText', { soporte: translatedSoporteShort }) : '';
  
  return (
    <div className="standard-results w-full">
      <h2 className="result-title text-2xl font-bold mb-6">{t('instructions')}</h2>
      <ol className="list-decimal list-outside space-y-8 ml-5">
        <li>
          <p className="mb-2 -mt-1">
            <strong>{t('mainPlate')}:</strong> <br />
            {t('mainPlateGray', { soporte: translatedSoporteShort })}
          </p>
          <div className="mb-4">
            <ImageViewer src="/images/LCD_Grey.jpg" alt="LCD_Grey.jpg" width={100} height={100} basePath={basePath} />
          </div>
        </li>

        <li>
          <p className="mb-2 -mt-1">
            <strong>Plate Ref A: </strong><br />
            {soporte === 'Monitor/TV CRT'
              ? t('plateRefACRT')
              : t('plateRefAOther', { soporte: translatedSoporteShort })}
          </p>
          <div className="mb-4 flex space-x-4">
            {soporte === 'Monitor/TV CRT' && (
              <ImageViewer src="/images/CRT_DistGrid.jpg" alt="CRT_DistGrid.jpg" width={100} height={100} basePath={basePath} />
            )}
          </div>
        </li>

        <li>
          <p className="mb-2 -mt-1"><strong>Plate Ref B:</strong> <br />
            {t('refPlateDescription', { soporte: translatedSoporteShort })}
          </p>
          <div className="mb-4">
            <ImageViewer src="/images/LCD_Ref.jpg" alt="LCD_Ref.jpg" width={100} height={100} basePath={basePath} />
          </div>
        </li>

        {reflejoImportante && (
          <li>
            <p className="mb-2 -mt-1"><strong>{t('plateReflejo')}:</strong> {t('plateReflejoDescription', { soporte: translatedSoporteShort })}</p>
          </li>
        )}
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

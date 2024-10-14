import ImageViewer from './ImageViewer';
import Link from 'next/link';

type SpecificResult1Props = {
  soporte: string;
  tvOnOff: boolean | null;
  basePath: string;
};

export default function SpecificResult1({ soporte, tvOnOff, basePath }: SpecificResult1Props) {
  const apagarTexto = tvOnOff ? `y luego apagar el ${soporte} en plano` : '';
  
  return (
    <div className="standard-results">
      <h2 className="result-title text-2xl font-bold mb-6">Indicaciones:</h2>
      <ol className="list-decimal list-outside space-y-8 ml-5">
        <li>
          <p className="mb-2 -mt-1"><strong>Plate Principal:</strong> Filmar el plano con el {soporte} apagado. En caso de que el {soporte} tenga alguna luz que indique que está encendido, usar un JPG negro para que la pantalla quede oscura y el indicador quede encendido.</p>
          <div className="mb-4">
            <ImageViewer src="/images/Negro.jpg" alt="Negro" width={100} height={100} basePath={basePath} />
          </div>
        </li>

        <li>
          <p className="mb-2 -mt-1">
            <strong>Plate Ref A: </strong> 
            {soporte === 'Monitor/TV CRT' && 'JPG con grilla de distorsión durante un 1 segundo, luego cambiar a '}
            JPG gris durante 1 segundo {apagarTexto}
          </p>
          <div className="mb-4 flex space-x-4">
            {soporte === 'Monitor/TV CRT' && (
              <ImageViewer src="/images/GrillaDistorsion.jpg" alt="GrillaDistorsion" width={100} height={100} basePath={basePath} />
            )}
            <ImageViewer src="/images/Gris.jpg" alt="Gris" width={100} height={100} basePath={basePath} />
          </div>
        </li>

        <li>
          <p className="mb-2 -mt-1"><strong>Plate Ref B:</strong> {soporte} con contenido real de referencia. Cuanto más similar al contenido que se planea poner en post, mejor.</p>
          <div className="mb-4">
            <ImageViewer src="/images/Referencia.jpg" alt="Referencia" width={100} height={100} basePath={basePath} />
          </div>
        </li>
      </ol>
      
      {/* Nuevo pie de página */}
      <footer className="mt-8 pt-4 border-t text-sm text-gray-600">
        <p>Screen Replacement Supervisor v0.8</p>
        <p>2024 | Lega Pugliese</p>
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

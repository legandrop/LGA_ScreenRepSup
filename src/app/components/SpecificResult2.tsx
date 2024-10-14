import ImageViewer from './ImageViewer';
import Link from 'next/link';

type SpecificResult2Props = {
  soporte: string;
  tvOnOff: boolean | null;
  basePath: string;
};

export default function SpecificResult2({ soporte, tvOnOff, basePath }: SpecificResult2Props) {
  const apagarTexto = tvOnOff ? `y luego apagar el ${soporte} en toma` : '';
  
  return (
    <div className="standard-results">
      <h2 className="result-title text-2xl font-bold mb-6">Indicaciones:</h2>
      <ol className="list-decimal list-outside space-y-8 ml-5">
        <li>
          <p className="mb-2 -mt-1">
            <strong>Plate Principal:</strong> <br />
            Filmar el plano con el {soporte} apagado. <br />
            En caso de que el {soporte} tenga alguna luz que indique que está encendido, usar un JPG negro para que la pantalla quede oscura y el indicador quede encendido. <br />
            Idealmente pegar puntos de track por fuera de la pantalla de vidrio, en el marco plástico del {soporte}. <br />
            Si el {soporte} no tiene un marco donde pegar puntos de track, entonces usar un JPG Negro con puntos de track.
          </p>
          <div className="mb-4 flex space-x-4">
            <ImageViewer src="/images/Negro_Track.jpg" alt="Negro con puntos de track" width={100} height={100} basePath={basePath} />
            <ImageViewer src="/images/Negro_TrackOutside.jpg" alt="Negro con puntos de track fuera" width={100} height={100} basePath={basePath} />
          </div>
          <div className="tips mt-4">
            <p className="font-bold mb-2">Tips para puntos de track:</p>
            <ul className="list-disc list-inside">
              <li>La cantidad de puntos a poner dependerá de cada plano. Cuantos menos se usen, mejor, teniendo en cuenta que siempre tiene que haber 4 puntos visibles en toma.</li>
              <li>Cuanto más chicos sean los puntos, mejor. Simplemente tienen que verse en cámara, por lo tanto el tamaño dependerá de que tan grande se vea el {soporte} en cámara. Si es un primer plano, los puntos serán más chicos que en un plano general.</li>
            </ul>
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

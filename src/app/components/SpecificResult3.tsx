import ImageViewer from './ImageViewer';

type SpecificResult3Props = {
  soporte: string;
  tvOnOff: boolean | null;
  reflejoImportante: boolean;
  basePath: string;
};

export default function SpecificResult3({ soporte, tvOnOff, reflejoImportante, basePath }: SpecificResult3Props) {
  const apagarTexto = tvOnOff ? `y luego apagar el ${soporte} en toma` : '';
const soporteShort = soporte.startsWith('Monitor/TV') ? 'Monitor/TV' : soporte;
  
  return (
    <div className="standard-results">
      <h2 className="result-title text-2xl font-bold mb-6">Indicaciones:</h2>
      <ol className="list-decimal list-outside space-y-8 ml-5">
        <li>
          <p className="mb-2 -mt-1">
            <strong>Plate Principal:</strong> <br />
            Filmar el plano con un JPG gris. Usar el brillo del {soporteShort} para lograr un nivel adecuado sin sobreexponer. Tomar nota del nivel de brillo usado.
          </p>
          <div className="mb-4">
            <ImageViewer src="/images/Gris.jpg" alt="Gris" width={100} height={100} basePath={basePath} />
          </div>
        </li>

        <li>
          <p className="mb-2 -mt-1">
                <strong>Plate Ref A: </strong><br />
                {soporte === 'Monitor/TV CRT'
                    ? 'JPG con grilla de distorsión durante un 1 segundo, luego apagar el Monitor/TV CRT en toma'
                    : `Apagar el ${soporteShort} en toma`}
          </p>
          <div className="mb-4 flex space-x-4">
            {soporte === 'Monitor/TV CRT' && (
              <ImageViewer src="/images/GrillaDistorsion.jpg" alt="GrillaDistorsion" width={100} height={100} basePath={basePath} />
            )}
          </div>
        </li>

        <li>
          <p className="mb-2 -mt-1"><strong>Plate Ref B:</strong> <br />
            {soporteShort} con contenido real de referencia. Cuanto más similar al contenido que se planea poner en post, mejor.
          </p>
          <div className="mb-4">
            <ImageViewer src="/images/Referencia.jpg" alt="Referencia" width={100} height={100} basePath={basePath} />
          </div>
        </li>
      </ol>
      
      {reflejoImportante && (
        <div className="mt-6 p-4 bg-yellow-100 rounded-md">
          <p className="font-bold">Plate Reflejo:</p>
          <p>Si la imagen usada en la pantalla del Plate principal supera en brillo al reflejo que hay que capturar, filmar un Plate con el {soporteShort} apagado y los reflejos, cuidando que nada tape al reflejo. </p>
        </div>
      )}
    </div>
  );
}
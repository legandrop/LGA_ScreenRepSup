import ImageViewer from './ImageViewer';

type SpecificResult6Props = {
  soporte: string;
  tvOnOff: boolean | null;
  semitransparente: boolean;
  reflejoImportante: boolean;
  basePath: string;
};

export default function SpecificResult6({ soporte, tvOnOff, semitransparente, reflejoImportante, basePath }: SpecificResult6Props) {
  const soporteShort = soporte.startsWith('Monitor/TV') ? 'Monitor/TV' : soporte;
  
  return (
    <div className="standard-results">
      <h2 className="result-title text-2xl font-bold mb-6">Indicaciones:</h2>
      <ol className="list-decimal list-outside space-y-8 ml-5">
        <li>
          <p className="mb-2 -mt-1">
            <strong>Plate Principal:</strong> <br />
            Idealmente pegar puntos de track por fuera de la pantalla de vidrio, en el marco plástico del {soporteShort} y filmar el plano con un JPG verde o azul.<br />
            Si el {soporteShort} no tiene un marco donde pegar puntos de track, entonces usar un JPG verde o azul con puntos de track.<br />
            En ambos casos, usar el brillo del {soporteShort} para lograr un nivel adecuado sin sobreexponer. Tomar nota del nivel de brillo usado.
          </p>
          <div className="mb-4 flex space-x-4">
            <ImageViewer src="/images/Verde_Track.jpg" alt="Verde con puntos de track" width={100} height={100} basePath={basePath} />
            <ImageViewer src="/images/Verde_TrackOutside.jpg" alt="Verde con puntos de track fuera" width={100} height={100} basePath={basePath} />
          </div>
          <div className="tips mt-4">
            <p className="font-bold mb-2">Tips para puntos de track:</p>
            <ul className="list-disc list-inside">
              <li>La cantidad de puntos a poner dependerá de cada plano. Cuantos menos se usen, mejor, teniendo en cuenta que siempre tiene que haber 4 puntos visibles en toma.</li>
              <li>Cuanto más chicos sean los puntos, mejor. Simplemente tienen que verse en cámara, por lo tanto el tamaño dependerá de que tan grande se vea el {soporteShort} en cámara. Si es un primer plano, los puntos serán más chicos que en un plano general.</li>
            </ul>
          </div>
        </li>

        <li>
          <p className="mb-2 -mt-1">
            <strong>Plate Ref A: </strong> <br />
            {semitransparente ? (
              <>
                JPG con grilla de distorsión y objeto semitransparente repitiendo la acción del objeto en el plate principal, luego retirar el objeto semitransparente y cambiar a JPG gris durante 1 segundo y apagar el {soporteShort} en toma.
              </>
            ) : (
              <>
                {soporte === 'Monitor/TV CRT' 
                    ? `JPG con grilla de distorsión durante un 1 segundo, luego cambiar a JPG gris durante 1 segundo y apagar el ${soporteShort} en toma`
                  : `JPG gris durante 1 segundo y apagar el ${soporteShort} en toma`}
              </>
            )}
          </p>
          <div className="mb-4 flex space-x-4">
            {soporte === 'Monitor/TV CRT' && (
              <ImageViewer src="/images/GrillaDistorsion.jpg" alt="GrillaDistorsion" width={100} height={100} basePath={basePath} />
            )}
            <ImageViewer src="/images/Gris.jpg" alt="Gris" width={100} height={100} basePath={basePath} />
          </div>
        </li>

        <li>
          <p className="mb-2 -mt-1"><strong>Plate Ref B:</strong><br /> 
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
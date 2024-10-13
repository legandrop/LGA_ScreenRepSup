# Screen Replacement Supervisor

Este proyecto es un quiz interactivo diseñado para ayudar a determinar el mejor método para realizar reemplazos de pantalla en producción audiovisual.

## Configuración del proyecto

Para trabajar en este proyecto, sigue estos pasos:

1. Navega al directorio del proyecto:
   ```
   cd screen-rep-quiz
   ```

2. Instala las dependencias (si aún no lo has hecho):
   ```
   npm install
   ```

## Desarrollo local

Para ejecutar el proyecto localmente:

1. Inicia el servidor de desarrollo:
   ```
   npm run dev
   ```

2. Abre tu navegador y ve a:
   ```
   http://localhost:3000/ScreenRepSup
   ```

## Compilación para producción

Para compilar el proyecto para producción:

1. Ejecuta el comando de compilación:
   ```
   npm run build
   ```
   o:
   ```
   npm run export
   ```

2. Los archivos compilados se generarán en la carpeta `out`.

## Manejo de imágenes

- Durante el desarrollo, las imágenes deben colocarse en:
  ```
  public/images/
  ```

- Después de la compilación, las imágenes se encontrarán en:
  ```
  out/images/
  ```

- En el servidor de producción, las imágenes deben estar en:
  ```
  vfx/images/
  ```

## Estructura del proyecto

- `src/app/quiz.tsx`: Componente principal del quiz
- `src/app/components/`: Contiene los componentes utilizados en el quiz
- `src/app/components/ResultsDisplay.tsx`: Muestra los resultados del quiz
- `src/app/components/SpecificResult1.tsx` y `SpecificResult2.tsx`: Muestran resultados específicos basados en las respuestas del usuario



## Si todofalla, ejecutar estos comandos para borrar la carpeta .next y volver a instalar las dependencias:

```
rm -rf .next       
```
```
npm install    
```


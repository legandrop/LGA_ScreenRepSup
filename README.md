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


## Si todo falla, ejecutar estos comandos para borrar la carpeta .next y volver a instalar las dependencias:

```
rm -rf .next       
```
```
npm install    
```


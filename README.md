# Screen Replacement Supervisor

Este proyecto es un quiz interactivo diseñado para ayudar a determinar el mejor método para realizar reemplazos de pantalla en producción audiovisual.

## Configuración del proyecto


Para ejecutar el proyecto localmente:

1a. Iniciar el servidor de desarrollo:
   ```
   npm run dev
   ```
   o para inicialo con inspector:
   ```
   $env:NODE_OPTIONS='--inspect'; npm run dev
   ```

1b. Si falla ejecutar estos comandos para borrar la carpeta .next y volver a instalar las dependencias:

   ```
   Remove-Item -Recurse -Force -ErrorAction SilentlyContinue .\node_modules, .\.next   
   ```
   ```
   npm install    
   ```

1c. Se puede probar cambiar de puerto si falla:

   ```
   npm run dev --port 3001
   ```
   y chequear si el puerto está en uso:
   ```
   netstat -ano | findstr :3000
   ```

2. Abrir el navegador y acceder a:
   ```
   http://localhost:3000/ScreenRepSup
   ```

## Compilación para producción

   ```
   npm run build
   ```
   o:
   ```
   npm run export
   ```
Los archivos compilados se generarán en la carpeta `out`.




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





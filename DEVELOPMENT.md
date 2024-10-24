# Guía de Desarrollo para Screen Replacement Supervisor

## Configuración del proyecto

Para ejecutar el proyecto localmente:

**1a.** Iniciar el servidor de desarrollo:
   ```
   npm run dev
   ```
   o para iniciarlo con inspector:
   ```
   $env:NODE_OPTIONS='--inspect'; npm run dev
   ```  

<br />


**1b.** Si falla, ejecutar estos comandos para borrar la carpeta .next y volver a instalar las dependencias:
   ```
   Remove-Item -Recurse -Force -ErrorAction SilentlyContinue .\node_modules, .\.next
   ```
   ```
   npm install
   ```

<br />


**1c.** Se puede probar cambiar de puerto si falla:
   ```
   npm run dev --port 3001
   ```
   y chequear si el puerto está en uso:
   ```
   netstat -ano | findstr :3000
   ```  
   y para matar el proceso:
   ```
   taskkill /PID <PID> /F
   ```

<br />


**2.** Abrir el navegador y acceder a:
   ```
   http://localhost:3000/ScreenRepSup
   ```

<br />


## Compilación para producción para sitio estático
   ```
   npm run export
   ```

Los archivos compilados se generarán en la carpeta `out`.

<br />


## Manejo de imágenes

Durante el desarrollo, las imágenes deben colocarse en:
  ```
  public/images/
  ```

Después de la compilación, las imágenes se encontrarán en:
  ```
  out/images/
  ```

En el servidor de producción, las imágenes deben estar en:
  ```
  vfx/images/
  ```

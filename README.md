# Screen Replacement Supervisor

Este proyecto es un quiz interactivo diseñado para ayudar a determinar el mejor método para realizar reemplazos de pantalla en producción audiovisual.

## Configuración del proyecto


Para ejecutar el proyecto localmente:

1. Iniciar el servidor de desarrollo:
   ```
   npm run dev
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


## Si falla, ejecutar estos comandos para borrar la carpeta .next y volver a instalar las dependencias:

```
rm -rf .next       
```
```
npm install    
```

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





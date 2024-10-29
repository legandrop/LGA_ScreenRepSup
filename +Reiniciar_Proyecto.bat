@echo off
REM Cambiar al directorio del proyecto
cd /d C:\Portable\LGA_ScreenRepSup

REM Verificar si el cambio de directorio fue exitoso
if %ERRORLEVEL% neq 0 (
    echo Error: No se pudo cambiar al directorio especificado.
    pause
    exit /b %ERRORLEVEL%
)

REM Eliminar node_modules si existe
if exist "node_modules" (
    echo Eliminando node_modules...
    rd /s /q "node_modules"
    if %ERRORLEVEL% neq 0 (
        echo Error: No se pudo eliminar node_modules.
        pause
        exit /b %ERRORLEVEL%
    )
) else (
    echo node_modules no existe, omitiendo eliminación.
)

REM Eliminar .next si existe
if exist ".next" (
    echo Eliminando .next...
    rd /s /q ".next"
    if %ERRORLEVEL% neq 0 (
        echo Error: No se pudo eliminar .next.
        pause
        exit /b %ERRORLEVEL%
    )
) else (
    echo .next no existe, omitiendo eliminación.
)

REM Ejecutar npm install
echo Ejecutando npm install...
npm install
if %ERRORLEVEL% neq 0 (
    echo Error: npm install falló.
    pause
    exit /b %ERRORLEVEL%
)

REM Ejecutar npm run dev
echo Ejecutando npm run dev...
npm run dev
if %ERRORLEVEL% neq 0 (
    echo Error: npm run dev falló.
    pause
    exit /b %ERRORLEVEL%
)

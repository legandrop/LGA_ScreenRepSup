# Eliminar carpetas
Write-Host "Eliminando carpetas node_modules, .next y out..." -ForegroundColor Yellow
Remove-Item -Recurse -Force -ErrorAction SilentlyContinue .\node_modules, .\.next, .\out

# Instalar dependencias
Write-Host "`nInstalando dependencias..." -ForegroundColor Yellow
npm install

# Compilar proyecto
Write-Host "`nCompilando proyecto..." -ForegroundColor Yellow
npm run export 
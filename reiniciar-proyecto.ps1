# Eliminar carpetas
Write-Host "Eliminando carpetas node_modules y .next..." -ForegroundColor Yellow
Remove-Item -Recurse -Force -ErrorAction SilentlyContinue .\node_modules, .\.next

# Instalar dependencias
Write-Host "`nInstalando dependencias..." -ForegroundColor Yellow
npm install

# Iniciar servidor de desarrollo
Write-Host "`nIniciando servidor de desarrollo..." -ForegroundColor Yellow
npm run dev 
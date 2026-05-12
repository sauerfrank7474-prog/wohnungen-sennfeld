@echo off
chcp 65001 >nul
title Webseite aktualisieren
cd /d "%~dp0"

echo.
echo ============================================================
echo   Webseite "Wohnungen Sennfeld" aktualisieren und hochladen
echo ============================================================
echo.

git status --short
echo.

set /p NACHRICHT="Was hast du geaendert? (kurze Beschreibung): "
if "%NACHRICHT%"=="" set NACHRICHT=Update

echo.
echo Lade Aenderungen auf GitHub hoch...
echo.

git add .
git commit -m "%NACHRICHT%"
git push

echo.
echo ============================================================
echo   Fertig. In ca. 1 Minute ist die Webseite aktualisiert:
echo   https://sauerfrank7474-prog.github.io/wohnungen-sennfeld/
echo ============================================================
echo.
pause

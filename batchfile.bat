mongo --shell
set mypath=%cd%
@echo %mypath%
start cmd.exe
cd front-end 
start cmd.exe
cd..
cd back-end
node server.js


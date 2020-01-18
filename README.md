# wazedev
App de localização de desenvolvedores feita durante a semana omnistack 10 da rocketseat

## Segue diário de desenvolvimento, bem passo-a-passo e outras anotações:

01-entender o que o mercado esta procurando hoje
02-quais empresas e quantas empresas estao utilizando
03-qual tamanho da comunidade e do ecossistema ao redor dessas tecnologias
04-quem esta por tras do desenvolvimento delas
05-quais sao os casos de uso das tecnologias
06-a quantidade de vagas disponivels no mercado
07-o quanto essas tecnologias estao alinhadas com seus objetivos
08-o quando e possivel de reaproveitar de conhecimento dessas tecnologias para multiplicar suas oportunidades
09-vantagens tecnicas de cada uma: componentizaçao, performance, desenvolvimento multiplataforma, realtime, etc 

14/01/2020
dia 01
instalar vscode

instalar node.js ou Isar o gerenciador de pacotes  ->usar o https://chocolatey.org/install
	abra o powershell como admin
	Run Get-ExecutionPolicy. If it returns Restricted, then run Set-ExecutionPolicy AllSigned or Set-ExecutionPolicy Bypass -Scope Process.
	Set-ExecutionPolicy Bypass -Scope Process -Force; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))
	Instale a versao lts-long term support do node.js
	choco install nodejs-lts
	reiniciar o powershell
	y
	Node Package Manager - npm ja vem junto com o noje.js
	npm -v
    o YARN eh melhor que o npm -> https://yarnpkg.com/lang/en/
	choco install yarn
	instalar o vscode
	instalar os plugins para o vscode?
	Dracula
	Material Icon Theme
	RocketSeat ReactJS
	RocketSeat React Native
	Instalar o FiraCode
	 vá em https://github.com/tonsky/FiraCode e depois em solutions -> Download
	 https://github.com/tonsky/FiraCode/releases/download/2/FiraCode_2.zip
	 Extraia os arquivos ttf para o c:\windows\fontes
	 Vá no VSCODE e TECLE crtrl + shift + P
      Open Settings JSON	 
	  inclua as duas últimas linhas dos colchetes abaixo
	 {
    "workbench.colorTheme": "Dracula",
      "editor.fontFamily": "Fira Code",
      "editor.fontLigatures": true
     }
	 
	 crie a pasta do backend
	 
	 E:\PROFESSIONAL\curso_2020\omnistack\10\wazedev
	 
	 mkdir backend
	 cd backend
	 yarn init -y
	 
	 vai criar  o arquivo package.json
	 
	 code .
	 
	 abra o terminal dentro do vscode
	 yarn add express
	 
	 teste com node index.js
	 
	 instale o json viewer para o chrome
	 
	 Instale a dependência abaixo para atualizar o fonte no node.js
	 
	 yarn add nodemon -D
	 
	 ele vai add isso no package.json
	 
	"devDependencies": {
      "nodemon": "^2.0.2"
    }
	 
	 execute no terminal 
	 yarn nodemon index.js
	 
	 teste uma atualização no código e um refresh na página, atualizou! Certo?
	 ]
	 add o código no package.json para um shortcut
	 
	 "scripts": {
	   "dev": "nodemon index.js"
	 }
	 
	 agora é yarn dev e não yarn nodemon index.js
	 
	 
	baixa o https://insomnia.rest/download/
  
  
  
  
  

const youtube = require('./index.js');
const program = require('commander');
const colors  = require('colors');
const path = require('path'); 
const fs = require('fs'); 


 function lista(entrada,dummyPrevious) {

    var entrada = path.join(__dirname,entrada);
    
    fs.readFile(entrada,(err,data)=>{
            var  buf = Buffer.from(data);
            var data = buf.toString();
            var list = data.split("\n"); 
            
            youtube.find_list_youtube(list) 
    });
    
 }

var banner = `
▓██   ██▓ ▒█████   █    ██ ▄▄▄█████▓ █    ██  ▄▄▄▄   ▓█████ 
▒██  ██▒▒██▒  ██▒ ██  ▓██▒▓  ██▒ ▓▒ ██  ▓██▒▓█████▄ ▓█   ▀ 
 ▒██ ██░▒██░  ██▒▓██  ▒██░▒ ▓██░ ▒░▓██  ▒██░▒██▒ ▄██▒███   
 ░ ▐██▓░▒██   ██░▓▓█  ░██░░ ▓██▓ ░ ▓▓█  ░██░▒██░█▀  ▒▓█  ▄ 
 ░ ██▒▓░░ ████▓▒░▒▒█████▓   ▒██▒ ░ ▒▒█████▓ ░▓█  ▀█▓░▒████▒
  ██▒▒▒ ░ ▒░▒░▒░ ░▒▓▒ ▒ ▒   ▒ ░░   ░▒▓▒ ▒ ▒ ░▒▓███▀▒░░ ▒░ ░
▓██ ░▒░   ░ ▒ ▒░ ░░▒░ ░ ░     ░    ░░▒░ ░ ░ ▒░▒   ░  ░ ░  ░
▒ ▒ ░░  ░ ░ ░ ▒   ░░░ ░ ░   ░       ░░░ ░ ░  ░    ░    ░   
░ ░         ░ ░     ░                 ░      ░         ░  ░
░ ░                                               ░        `

console.log(banner.red)
console.log("\nCreado por: Ronal Oswaldo \n".yellow);

program
    .name('youtube-search'.cyan)
    .usage("[options] <file-path>".red)
    .option('-f, --file <string>', 'ruta de archivo'.green, lista)
    .helpOption('-h, --help ','mostrar esta ayuda y salir'.green);



program.parse(process.argv);



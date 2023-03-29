
const { ls } = require('./commands');
const comando = require('./commands');



// Un prompt como output


process.stdout.write('prompt > ');


// El evento STDIN 'data' se dispara cuando el usuario escribe una línea

process.stdin.on('data', function (data) {
    

 let [cmd, str] = data.toString().split(' ')
 console.log(cmd)
 
  
 /*  let cmd = data.toString().trim(); // Remueve la nueva línea
  console.log(`variable cmd : ${cmd}`)
 */
  if (cmd[0].trim() == "pwd") {comando.pwd() }
 
  if (cmd[0].trim() == "date") {comando.date()}

  if (cmd[0].trim() == "ls") {comando.ls()}
  
  if (cmd == "echo") {comando.echo(process.strin.write)}

 // process.stdout.write('You typed: ' + cmd);
  process.stdout.write('\nprompt > ');


});






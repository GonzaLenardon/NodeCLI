const fs = require('fs');

/* const pwd =  () => process.stdout.write('\nprompt >' + process.cwd() + `\n`)
module.exports = pwd 
 */ 



 module.exports = {
    pwd: function() {
      // Código pwd
      process.stdout.write('\nprompt >' + process.cwd() + `\n`)
    },
    date : function (){
        let dia = new Date().toString()
        process.stdout.write('\nprompt >' + dia + '\n')
    },
    ls: function () {
        let path = process.cwd()         
        process.stdout.write(path +'>'+ fs.readdir('.', function(err, files) {
            if (err) throw err;
            files.forEach(function(file) {
              process.stdout.write(file.toString() + "\n");
            })
            process.stdout.write("prompt > ");
          }))
    
    },
    echo: function (str) {
         let arr = str.slice(4)
             

          process.listenerCount.write('\nprompt >'+ str + '\n')
    }
  }





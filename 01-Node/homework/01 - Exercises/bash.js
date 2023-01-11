const process = require("process");
const commands = require("./commands/index.js");

function bash() {
  process.stdout.write(`prompt > `)
  process.stdin.on('data', (data) => {
    var args = data.toString().trim().split(" ")
    var cmd = args.shift()
    // var args = input.join(' ')
    //console.log('---------->', args)
    if(commands.hasOwnProperty(cmd)){
    commands[cmd] (print, args.join(' '))
    }else {
      print(`command not found: ${cmd}`)
    }
  })
}

function print(output){
  process.stdout.write(output)
  process.stdout.write(`\nprompt > `)
}

bash();
module.exports = {
  print,
  bash,
};

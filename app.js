//core modules
const chalk = require('chalk');
const yargs= require('yargs');

//local files
const notes = require('./notes.js')

//const msg = getNotes();
// console.log(chalk.red.bgYellow('error msg with yellow Background!!!!!!!!!!!!!!'));

// console.log(msg);
//console.log(process.argv);
yargs.command({
    command: 'add',
    describe: 'Add note',
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: 'string'
        },
        body:{
            describe: "Note body",
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        // console.log("title :" + " " + argv.title);
        // console.log("body :" +" " + argv.body);
        notes.addNote(argv.title, argv.body);
        
        
    }
})

yargs.command({
    command: 'remove',
    describe: 'remove note',
    builder:{
        title: {
            describe: 'note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'note body'
        }
    },
    handler: function(argv){
        notes.removeNote(argv.title);
        
    }
})

yargs.command({
    command: 'list',
    describe: 'listing note',
    handler: function(){
        console.log("listing all notes");
        
    }
})

yargs.command({
    command: 'read',
    describe: 'read note',    
    handler: function(){
        console.log("reading a note from the list");
        
    }
})
//console.log(yargs.argv);
yargs.parse();

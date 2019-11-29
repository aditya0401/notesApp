//const myNotes = "This is my note";

const fs = require('fs');
getNotes = function () {
    return "My notes";
}

addNote = function (title, body) {
    const notes = loadNotes();

    const noteExists= notes.filter( function(obj){
        return obj.title == title;
    });
    if(noteExists.length == 0){
        notes.push(
            {
                title: title,
                body: body
            }
        )
        saveNotes(notes);       
    }else{
        console.log("Title is already taken");
    }
}

removeNote = function (title) {
    //load notes first
    const notes = loadNotes();
    let notesExists= false;
    const newNotes = notes.filter(function (obj) {
        if(obj.title == title){
            notesExists= true;
        }
        return obj.title !== title;
    });

    if(notesExists){
        console.log("newNotes", newNotes);
            saveNotes(newNotes);
        
    }else{
        console.log("Note with title '" + title + "' does not exist");
    }

}
const loadNotes = function () {
    try {
        const bufferData = fs.readFileSync('notes.json');
        const dataJson = bufferData.toString();
        return JSON.parse(dataJson);
    } catch (error) {
        return [];
    }

}

function saveNotes(notes) {
    console.log(notes);
    
    notesJson = JSON.stringify(notes);
    fs.writeFileSync('notes.json', notesJson);

}
module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
};
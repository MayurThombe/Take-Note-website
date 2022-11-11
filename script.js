let noteList = [];

let view = "grid"; //default view is grid-view
let idCount = 0;
let titleVar = document.getElementById("titleId");
let contentVar = document.getElementById("contentId");

let saveNoteVar = document.getElementById("saveNoteId");

saveNoteVar.onclick =function() {createNoteCard(idCount)};
saveNoteVar.addEventListener("click",saveNote);
function saveNote() {
    noteList.push({id: idCount,
                    Title: titleVar.value,
                    Content:contentVar.value
    })
console.log("Note of Id "+ idCount+" has been created");
idCount = idCount + 1;
console.log(noteList);
document.getElementById('myform').reset();
}


function deleteNote(note) {
    //deleting respective div from container
    let idArray = note.split("");
    idArray.splice(0,6,'n','o','t','e');
    noteId = idArray.join('');
    document.getElementById(noteId).remove();

    //deleting respective element from array
    idNum = idArray.slice(4).join('');
    noteList.splice(idNum,1);
    console.log(idNum);
    console.log(noteId);
}

let clearFieldsVar=document.getElementById("clearFieldsId");
clearFieldsVar.addEventListener("click",clearFields)
function clearFields() {
    document.getElementById("myform").reset();
    console.log("Form has been reset");
    
}

function fetchNotes() {
    
}

function loadNoteData() {
    
}

function updateNoteData(note) {
    
}

function createNoteCard(note) {

    let newPcont = document.createElement("div");
    newPcont.setAttribute('id','note'+note);
    newPcont.setAttribute('class','notes');
    newPcont.style.width="100%";
    // newPcont.style.border='2px solid green';
    document.getElementById("note-container").append(newPcont);

    let newP = document.createElement("h2");
    document.getElementById('note'+note).append(newP);
    newP.setAttribute('class','noteCards');
    newP.innerHTML = idCount;
    newP.style.display='inline-block';
    //newP.style.backgroundColor='#cc99ff';
    newP.style.width="5%";
    // newP.style.border='2px solid ';

    let newPP = document.createElement("h4");
    document.getElementById('note'+note).append(newPP);
    newPP.setAttribute('style','word-wrap: break-word');
    newPP.style.display='inline-block';
    newPP.style.width="20%";
    // newPP.style.border='2px solid blue';
    newPP.innerHTML = titleVar.value;
    //newPP.style.backgroundColor="#d9b3ff";

    let newPPP = document.createElement("p");
    document.getElementById('note'+note).append(newPPP);
    
    newPPP.setAttribute('style','word-wrap: break-word');
    newPPP.style.display='inline-block';
    newPPP.style.width="60%";
    // newPPP.style.border='2px solid blue';
    newPPP.innerHTML = contentVar.value;
    //newPPP.style.backgroundColor="#e6ccff";

    let newPPPP = document.createElement("button");
    document.getElementById('note'+note).append(newPPPP);
    newPPPP.setAttribute('id','delete'+note);
    newPPPP.setAttribute('class','note'+note);
    newPPPP.setAttribute('onclick',"deleteNote(this.id)");
    newPPPP.style.display='inline-block';
    newPPPP.style.width="12%";
    // newPPPP.style.border='2px solid blue';
    newPPPP.style.margin='5px';
    newPPPP.innerHTML = "Delete";
    // newPPPP.style.backgroundColor="#ff6666";
    
    console.log("Note card created");

    let ruler = document.createElement('hr');
    document.getElementById('note'+note).append(ruler);
    
    
    
}

function toggleView() {
    let cont = document.getElementById('note-container');
    cont.style.display='none';

    let toggleCont = document.createElement("div");
    document.body.append(toggleCont);
    toggleCont.setAttribute('id','tog-cont');
    toggleCont.classList.add('toggle-container');
    toggleCont.classList.add('row');

    for(const list of noteList){
        let oneNote = document.createElement("div");
        document.getElementById('tog-cont').append(oneNote);
        oneNote.classList.add('col-3');
        oneNote.setAttribute('id','noteNo'+list.id)
        oneNote.style.backgroundColor=' #e6e6e6';
        oneNote.style.border = '2px solid black';
        oneNote.style.padding="20px";
        
        let noteTitle = document.createElement('h3');
        document.getElementById('noteNo'+list.id).append(noteTitle);
        noteTitle.innerHTML = list.id+" | "+list.Title;
        noteTitle.style.textDecoration='underline';
        noteTitle.setAttribute('style','word-wrap: break-word');

        let noteContent = document.createElement('div');
        document.getElementById('noteNo'+list.id).append(noteContent);
        noteContent.innerHTML = list.Content;
        noteContent.setAttribute('style','word-wrap: break-word');
        

    }

    


    
    
}

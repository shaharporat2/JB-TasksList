

//TODO - Adding appropriate validation 

//TODO - Transition Only in when adding the note

function saveTask(){
    var taskDetail=document.getElementById('taskDetail').value;
    var endDate=document.getElementById('endDate').value;
    var endHour=document.getElementById('endHour').value;

    if(taskDetail != "" && endDate != ""){
        
            var indexTask = localStorage.length;
            var task = { 
                'id' : indexTask,
                'taskDetail' : taskDetail,
                'endDate' : endDate,
                'endHour' : endHour
            }
            localStorage.setItem(task.id, JSON.stringify(task));
            addNote(indexTask);
            indexTask++;
    }
}

function buildNotes(){
    for (i = 0; i < localStorage.length; i++) {
        addNote(i);
      }
}

function addNote(i){

    // fetching the "notes" section where all the notes are being saved
    notesBord = document.getElementById("notes");


    // 
    var task;
    var note;
    var spanEl;

    // creating a wrapper div element for a task
    task = document.createElement("DIV");
    task.setAttribute("class","col-12 col-sm-12 col-md-6 col-lg-4 col-xl-2");
    task.setAttribute("id","note"+i);
    task.setAttribute("onmouseover","displayRemoveNote(this)");
    task.setAttribute("onmouseout","undisplayRemoveNote(this)");


    // creting an img elemet 
    note = document.createElement("IMG");
    note.setAttribute("src", "./imgs/notebg.png");
    note.setAttribute("class","note");

    
    // creating span element for exit
    spanEl = document.createElement("SPAN");
    spanEl.setAttribute("class","glyphicon glyphicon-remove glyphRemove");
    spanEl.setAttribute("onclick","deleteNote(this)");
    spanEl.setAttribute("id","removeNote"+i);
    
    // creating the entire note elements
    task.appendChild(spanEl);
    task.appendChild(note);
    notesBord.appendChild(task);
}

function deleteNote(i){
    i= (i.id.slice(-1));
    document.getElementById("note"+i).remove();
    localStorage.removeItem(i)
    
}

function displayRemoveNote(i){
    i= (i.id.slice(-1));
    el = 'removeNote' + i;
    document.getElementById(el).style.visibility = "visible";
}

function undisplayRemoveNote(i){
    i= (i.id.slice(-1));
    el = 'removeNote' + i;
    document.getElementById(el).style.visibility = "hidden";
}


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
            indexTask++;
            addNote();
    }
}

function buildNotes(){
    for (i = 0; i < localStorage.length; i++) {
        addNote(i);
      }
}

function addNote(i){
    notesBord = document.getElementById("notes");

    var task;
    var note;

    task = document.createElement("DIV");
    task.setAttribute("class","col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2");
    note = document.createElement("IMG");
    note.setAttribute("src", "./imgs/notebg.png");
    note.setAttribute("class", "note");
    task.appendChild(note);
    notesBord.appendChild(task);
}
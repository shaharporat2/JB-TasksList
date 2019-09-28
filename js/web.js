

function saveTask(){
    var taskDetail=document.getElementById('taskDetail').value;
    var endDate=document.getElementById('endDate').value;
    var endHour=document.getElementById('endHour').value;

    var indexTask = localStorage.length;
    var task = { 
        'id' : indexTask,
        'taskDetail' : taskDetail,
        'endDate' : endDate,
        'endHour' : endHour
    }
    localStorage.setItem(task.id, JSON.stringify(task));
    indexTask++;
}
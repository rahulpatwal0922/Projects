$(document).ready(function(){
    let inpNewTask = $("#inpNewTask")
    let btnAdd = $("#btnAdd")
    let btnSort = $("#btnSort")
    let btnClear = $("#btnClear")
    let btnDelete = $("#btnDelete")
    let ulTasks = $('#ulTasks')

    function addItem(){
        let listItem = $('<li>',{
            'class':'list-group-item',
            text: inpNewTask.val()
        })

        if(inpNewTask.val())
            ulTasks.append(listItem)
        inpNewTask.val('')
        toggleInputbtn()
        listItem.click(()=>{
            listItem.toggleClass('done')
        })
    }

    // add items by pressing enter
    inpNewTask.keypress((e)=>{
        if(e.which == 13)
            addItem()
    })

    // delete funtion 

    function clearDone(){
        $('#ulTasks .done').remove();
        toggleInputbtn()
    }

    // function to sort the tasks that are done 

    function sortTask(){
        $('#ulTasks .done').appendTo(ulTasks)
    }

    //function to toggle clear button 

    function toggleInputbtn() {
        btnClear.prop('disabled',inpNewTask.val()=='')
        btnAdd.prop('disabled', inpNewTask.val()=='')
        btnSort.prop('disabled',ulTasks.children().length<2)
        btnDelete.prop('disabled',ulTasks.children().length<1)
    }

    btnAdd.click(addItem)
    btnClear.click(() =>{
        inpNewTask.val('')
        toggleInputbtn()
    })
    btnDelete.click(clearDone)
    btnSort.click(sortTask);
    inpNewTask.on('input',toggleInputbtn)

});
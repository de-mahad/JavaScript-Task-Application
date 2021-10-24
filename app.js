

const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearButton = document.querySelector('.clear-task');
const filter = document.querySelector('#filter');
const task = document.querySelector('#task');
loadAllEvent();

function loadAllEvent() {
    form.addEventListener('submit', addTask);

    taskList.addEventListener('click', removeTask);

    clearButton.addEventListener('click', clearTask);

    task.addEventListener('click', filter);


    filter.addEventListener('keyup', filterTask);
}


function addTask(e) {

    e.preventDefault();
    if (task.value === "") {
        Swal.fire(
            "No input",
            'Did You this this this'
        )

    }
    else {
        const item = document.createElement('li');
        item.className = 'collection-item';
        item.innerText = task.value;
        taskList.appendChild(item);


        const link = document.createElement('a');
        link.className = 'delete-item secondary-content';
        link.innerHTML = '<i class="fa fa-remove"></i>'
        item.appendChild(link);



        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Your task has been saved',
            showConfirmButton: false,
            timer: 1500
        })
    }



    // console.log('Code Executed')

}


function removeTask(e) {
    const target = e.target.parentElement.classList.contains('delete-item')
    if (target) {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                e.target.parentElement.parentElement.remove();
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            }
        })
    }
}

function clearTask(e) {
    e.preventDefault();

    const target = taskList.children

    if (target.length == 0) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'No task exists yet!',
            footer: 'Firtsly try adding some tasks!'
        })


    }
    else {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                while (taskList.firstChild) {
                    taskList.firstChild.remove();
                }
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            }
        })



    }
}


function filterTask(e) {
    e.preventDefault();
    text = e.target.value.toLowerCase();


    allTasks = document.querySelectorAll('.collection-item');

    Array.from(allTasks).forEach(element => {

        if (element.firstChild.textContent.indexOf(text) != -1) {
            element.style.display = 'block';
        }
        else {
            element.style.display = 'none';
        }
    })
}
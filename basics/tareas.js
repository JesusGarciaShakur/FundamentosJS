const inputTarea = document.querySelector('#inputTarea');
const tareas = document.querySelector('#tareas');
const btnTarea = document.querySelector('#btnTarea');

function createAlert(message){
    /*
    <div class="alert alert-primary" role="alert">
    A simple primary alert-check it out!
    </div>
    */
   const alerta = document.createElement('div');
   alerta.classList.add ('alert');
   alerta.classList.add ('alert-primary');
   alerta.setAttribute('role', 'alert');
   alerta.innerText = message;
   return alerta; 
}

function addTarea(){
    const data = inputTarea.value; 
    tareas.appendChild(createAlert(data));
    inputTarea.value = '';
}
btnTarea.addEventListener('click', addTarea);
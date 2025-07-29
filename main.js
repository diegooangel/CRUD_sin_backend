const form = document.getElementById('form');
const input = document.getElementById('titulo');
const text = document.getElementById('tarea');
const button = document.getElementById('button');
const ul = document.getElementById('ul');
//div
const div = document.getElementById('div');


let notas = [];

form.addEventListener('submit', (e) => {
    e.preventDefault();
});

button.addEventListener('click', () => {
    console.log(input.value, text.value);
    const titulo = input.value;
    const tarea = text.value;
    if (titulo.trim() == "" || tarea.trim() == "") {
        alert("no se puede agregar titulos o tareas vacias");
    } else {

        notas.push({id: Date.now(),titulo: titulo, tarea: tarea}); //date.now() lo use para darle un id unico.
        mostrarNotas();
        input.value = "";
        text.value = "";
    }
});


function mostrarNotas() {
    ul.innerText = "";
    notas.forEach(element => {
        const li = document.createElement('li');
        li.innerHTML =  
        `<div class="nota-card">
            <h3>${element.titulo}</h3>
            <p>${element.tarea}</p>
        </div> `
        ul.appendChild(li);
        const botonEliminar = document.createElement('button');
        botonEliminar.setAttribute('data-id', element.id);
        botonEliminar.textContent = "edit"
        li.appendChild(botonEliminar);
        botonEliminar.addEventListener('click', (e) => {
            console.log(e.target.dataset.id); //asi accedo al numero de data-id del boton.
            const data_id = parseInt(e.target.dataset.id); //pase de string a entero el data_id
            eliminar(data_id);
        });
    });
}

function eliminar(params) {
    const nuevaNotas = notas.filter(nota => nota.id !== params);  
    notas = nuevaNotas;
    mostrarNotas();
}
/*
filter() devuelve un nuevo array (osea nuevaNotas) con la condicion indicada, en este caso que no sea igual al parametro, asi me deja todos los
elementos que no coinsiden con el id y me saque del nuevo array el que si coincidio.
Porque sino me daria un array de un solo elemento, que seria el que si coincidia con el id y el parametro
*/

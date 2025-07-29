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

        notas.push({id: Date.now(),titulo, tarea}); //date.now() lo use para darle un id unico.
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
            console.log(li);
            const item = e.target.parentNode;
            ul.removeChild(item);
            console.log(item);
        });
    });
}


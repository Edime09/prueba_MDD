const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const p2 = document.querySelector('.parrafo2');
const p3 = document.getElementById('parrafo3');
const input = document.querySelector('input');

//console.log(input.value);

console.log({
    h1,
    p,
    p2,
    p3,
    input
});

//h1.innerHTML = "Nuevo <br> Titulo" // interpreta lo que esta dentro del inner como codigo html.
//h1.innerText = "Nuevo Titulo" // convierte lo que esta dentro del inner a solo texto.
//h1.getAttribute('') // nos permite obtener alguno de los atrivutos de la clase. console.log(h1.getAttribute('class'));
//h1.setAttribute('class', 'rojo') // nos permite modificar los atributos de un elemento y el cambio se vera en el codigo html del navegador, console.log(h1.setAttribute('class', 'rojo'))

// De igual manera hay formas para editar las clases de los elementos asi:

h1.classList.add('rojo'); // De esta forma podemos adicional clases sin eliminar las que ya existian anteriormente.
h1.classList.remove('verde'); // De esta manera podemos eliminar clases especificas sin afectar las damos clases.

// h1.classlist.toggle('verde);
// h1.classlist.contains('verde);

input.value = "456"

const img = document.createElement('img');
img.setAttribute('src', 'https://static9.depositphotos.com/1005314/1171/v/600/depositphotos_11716339-stock-illustration-black-monster.jpg');

console.log(img);

parrafo3.append(img);




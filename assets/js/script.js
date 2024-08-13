// Función asincrónica para consultar datos desde una API
const consultarDatos = async () => {
    const url = "https://jsonplaceholder.typicode.com/posts"; // URL de la API
    try {
        // Realiza una solicitud para obtener datos de la API
        const respuesta = await fetch(url);
        // Convierte la respuesta en formato JSON
        const datos = await respuesta.json();

        // Selecciona el elemento <ul> donde se mostrarán los datos
        const listaDesordenada = document.getElementById("postDatos");
        listaDesordenada.innerHTML = ""; // Limpiar contenido previo para evitar duplicados

        // Itera sobre cada elemento de los datos recibidos
        datos.forEach(post => {
            // Crea un nuevo elemento <li> para cada post
            const itemLista = document.createElement("li");
            // Agrega clases al elemento <li> para aplicar estilos
            itemLista.classList.add("list-group-item", "mx-5");
            // Define el contenido HTML del elemento <li> usando los datos del post
            itemLista.innerHTML = `
                <h4>${post.title}</h4>
                <p>${post.body}</p>
            `;
            // Añade el elemento <li> a la lista desordenada en el DOM
            listaDesordenada.appendChild(itemLista);
        });
    } catch (error) {
        // Muestra un error en la consola si la solicitud falla
        console.error(error);
    }
};

// Función para vincular el botón de consulta de datos con la función `consultarDatos`
function botonConsulta() {
    // Selecciona el botón por su ID y le agrega un evento de clic
    const boton = document.getElementById("traerDatos");
    boton.addEventListener("click", consultarDatos);
}

// Llama a la función `botonConsulta` para activar la vinculación
botonConsulta();

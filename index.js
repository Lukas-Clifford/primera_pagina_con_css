
function agregarVideojuego() {
    title = document.querySelector('#ingresarTitulo').value;
    company = document.querySelector('#ingresarCompañia').value;
    year = document.querySelector('#ingresarAño').value;
    genre = document.querySelector('#ingresarGenero').value;

    cadenaOutput = title + " " + company + " " + year + " " + genre;

    document.querySelector('#Output').textContent = cadenaOutput;
    console.log(cadenaOutput);
}



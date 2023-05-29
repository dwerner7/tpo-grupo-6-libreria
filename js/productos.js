const busquedaPorDefecto = "fiction";

function getBuscador(){
    let buscador = `<input  id="input-busqueda" type="search" autocomplete="off" placeholder="Ingresar título, autor, género o palabra clave">
    <button id="btn-busqueda" class="boton" onclick="buscarLibros()"> Buscar </button>
    <button id="btn-reset-busqueda" class="boton" type="reset" onclick="resetBusqueda()">Borrar</button>`
    document.querySelector(".buscador").innerHTML=buscador;
}

function buscarLibros(){
    let busqueda = document.getElementById("input-busqueda").value;
    if(busqueda != " "){
        busqueda = busqueda.toLowerCase();
        let search = "";
        for(const letra of busqueda){
            if(letra == " "){
                search += "+";
            }else {
                search += letra;
            }
        }
        console.log(search);
        getLibrosAxios(search);
    } else {
        getLibrosAxios(busquedaPorDefecto);
    }
}


function resetBusqueda(){
    getLibrosAxios(busquedaPorDefecto);
    document.getElementById("input-busqueda").value="";
}

function crearDivsLibros(cantidad){
    let divs = "";
    for (let i=1; i<=cantidad;i++){
        divs = divs + `<div id="libro-${i}"></div>`
    }
    document.querySelector(".container-libros").innerHTML=divs;
}

//Como la api no tiene precio, puse esta función para que al menos haya algun valor
function random(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

const getLibrosAxios = async(busqueda) => {
    try {
        let response = await axios(`https://www.googleapis.com/books/v1/volumes?q=${busqueda}&printType=books`);
        
        const libros=response.data.items;
        
        //crea los divs de los libros
        crearDivsLibros(libros.length);

        //para cuando encuentra que a algun libro le falta info no deje un espacio vacio y siga con el siguiente
        let contadorLibros=1;
        
        for (let i = 1; i<=libros.length;i++){    
            //validacion para que muestre más libros
            if(libros[i]===undefined){continue;}

             //validacion para que muestre más libros
            if(libros[i].volumeInfo.imageLinks===undefined){continue;}

            //lo hice para que queda mas prolijo pero no se si hace falta
            const portada = libros[i].volumeInfo.imageLinks.thumbnail;
            const titulo = libros[i].volumeInfo.title;
            const autor = libros[i].volumeInfo.authors[0];
            const editorial = libros[i].volumeInfo.publisher;
            
            let tituloAcortado = "";
            if(titulo.includes("/")){
                for (const letra of titulo){
                    if(letra=="/"){
                        break;
                    }else{
                        tituloAcortado+=letra;
                    }
                }
                console.log(tituloAcortado);
            }else{
                tituloAcortado=titulo;
            }

            const libro = `       
            <div class="libro" >
                <img src= ${portada} alt=${tituloAcortado}>
                <div class="infoLibro">
                    <p class="titulo-libro info-padding"> ${tituloAcortado} </p>
                    <p class="autor-libro info-padding"> ${autor}  </p>
                    <h5 class="info-padding"> ${editorial} </h5> 
                    <p class="precio-libro info-padding">$${random(3000,8000)} </p> 
                </div>
            </div>
             `   

            document.querySelector(`#libro-${contadorLibros}`).innerHTML=  libro;
            
            contadorLibros++;
        }

    } catch (error) {
        console.log(error);
    }
}



getBuscador();

getLibrosAxios(busquedaPorDefecto);


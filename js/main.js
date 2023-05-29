let nav=`<nav class="nav">
            <div class="container-nav">
                <div class="container-contacto fondo-gris-oscuro">
                    <div class ="contacto">
                        <ul class="nav-contacto">
                            <li class="blanco">Teléfonos:<a href="#" class="phone">54-11-4362-4444/ 8018</a></li>
                            <li class="blanco">Email:<a href="#" class="email">tuslibros@bookshop.com.ar</a></li>
                        </ul>
                    </div>      
            

                <div class="social-links">
                    <a href="#"><i class="fab fa-facebook-f blanco"></i></a>
                    <a href="#"><i class="fab fa-twitter blanco"></i></a>
                    <a href="#"><i class="fab fa-instagram blanco"></i></a>
                    <a href="#"><i class="fab fa-linkedin-in blanco"></i></a>
                </div>

            </div>    
 
            <h1 class="animate__animated animate__backInLeft">BOOK SHOP</h1>
        
            <div class="nav-items">
            <a href="index.html"><img id="logo" src="img/logo-libro.png" alt="Logo Book Shop"></a>
                <button class="nav-toggle" aria-label="Abrir menú">
                    <i class="fas fa-bars"></i>
                </button>
                <ul class="nav-menu">
                    <li class="menu-item"><a href="index.html">Home</a></li>
                    <li class="menu-item"><a href="productos.html">Productos</a></li>
                    <li class="menu-item"><a href="sucursales.html">Sucursales</a></li>
                    <li class="menu-item"><a href="formulario.html">Contacto</a></li>
                </ul>
            </div>              
        </div>
    </nav>`

document.querySelector(".header").innerHTML=nav;

let footer=`<div class="container-footer">
<div class="row-footer">
    <div class= "footer-col">
        <h4 class="title blanco">Book shop</h4>
        <ul>
            <li><a href="home.html">Nosotros</a> </li>
            <li><a href="productos.html">Nuestros Productos</a></li>
            <li><a href="sucursales.html">Nuestras Sucursales</a></li>
            <li><a href="contacto.html">Contactate con Nosotros</a></li>
        </ul>
    </div>   

    <div class="footer-col">
        <h4 class="title blanco">Guía de Compra</h4>
        <ul>
            <li><a href="#">Atención al Cliente</a></li>
            <li><a href="#">Promociones</a></li>
            <li><a href="#">Costos y tiempos de envío</a></li>
            <li><a href="#">Devoluciones</a></li>
            <li><a href="#">Formas de pagos</a></li>
        </ul>
    </div>    
        

    <div class="footer-col">
        <h4 class="title blanco">Catálogos</h4>
        <ul>
            <li><a href="#">Libros</a></li>
            <li><a href="#">Enciclopedias</a></li>
            <li><a href="#">Temática</a></li>
            <li><a href="#">Búsqueda avanzada</a></li>
        </ul>
    </div>    
        

    <div class="footer-col">
        <h4 class="title blanco">Síguenos</h4>
        <div class="social-links">
            <a href="#"><i class="fab fa-facebook-f"></i></a>
            <a href="#"><i class="fab fa-twitter"></i></a>
            <a href="#"><i class="fab fa-instagram"></i></a>
            <a href="#"><i class="fab fa-linkedin-in"></i></a>
        </div>
    </div>               
</div>

</div>
`

document.querySelector(".footer").innerHTML=footer
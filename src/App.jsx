import React from 'react'

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">OmniStore</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" href="#">Inicio</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Productos</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Ofertas</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Contacto</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

function Header() {
  return (
    <header className="jumbotron text-center">
      <h1 className="display-4">¡Bienvenidos a OmniStore!</h1>
      <p className="lead">Tu tienda de confianza para todo tipo de productos</p>
      <a className="btn btn-primary btn-lg" href="#" role="button">Ver Productos</a>
    </header>
  )
}

function Productos(props) {
  return (
    <div className="col-md-4">
      <div className="card mb-4">
        <img
          src={props.imagen} className="card-img-top" alt={props.nombre} width="150"
        />
        <div className="card-body">
          <h5 className="card-title">{props.nombre}</h5>
          <p className="card-text">$ {props.precio}</p>
          <a href="#" className="btn btn-primary">Comprar</a>
        </div>
      </div>
    </div>

  )
}

function Footer() {
  return (
    <footer className="bg-light text-center text-lg-start">
      <div className="container p-4">
        <div className="row">
          <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
            <h5 className="text-uppercase">OmniStore</h5>
            <p>Tu tienda de confianza para todo tipo de productos.</p>
          </div>
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Enlaces</h5>
            <ul className="list-unstyled mb-0">
              <li>
                <a href="#" className="text-dark">Inicio</a>
              </li>
              <li>
                <a href="#" className="text-dark">Productos</a>
              </li>
              <li>
                <a href="#" className="text-dark">Ofertas</a>
              </li>
              <li>
                <a href="#" className="text-dark">Contacto</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Contacto</h5>
            <ul className="list-unstyled mb-0">
              <li>
                <a href="#" className="text-dark">Email: info@omnistore.com</a>
              </li>
              <li>
                <a href="#" className="text-dark">Teléfono: +123 456 7890</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center p-3 bg-dark text-white">
        &copy; 2024 OmniStore. Todos los derechos reservados.
      </div>
    </footer>
  )
}

function App() {
  return (
    <>
      <Nav />
      <Header />
      <div className="container">
        <div className="row">
          <Productos
            imagen="https://www.whiskas.com.mx/sites/g/files/fnmzdf4861/files/2023-04/750617451511.H.png"
            nombre="Comida para gatos Whiskas"
            precio={30}
          />
          <Productos
            imagen="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRus06COvKWEPeiQUHxdplUQE4aPbeWO1J1Jg&s"
            nombre="Teclado mecanico"
            precio={50}
          />
          <Productos
            imagen="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRthoTYCn66nwQYLnX4Tp48BSd--hiigjBY7g&s"
            nombre="Juguete para perros"
            precio={10}
          />
        </div>
      </div>      
      <Footer />
    </>
  )
}

export default App

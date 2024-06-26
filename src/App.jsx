import Nav from "./components/Nav"
import Footer from "./components/Footer"
import Header from "./components/Header"
import SecProductos from "./components/SecProductos"


function App() {
  return (
    <>
      <Nav />
      <Header titulo="¡Bienvenidos a OmniStore!" subTitulo="Tu tienda de confianza para todo tipo de productos"/>
      <SecProductos/>
      <Footer />
    </>
  )
}

export default App

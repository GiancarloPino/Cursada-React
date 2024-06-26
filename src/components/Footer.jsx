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
export default Footer;
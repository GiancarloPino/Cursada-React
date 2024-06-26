
function Productos(props) {
    return (
        <div className="col-md-4">
            <div className="card mb-4">
                <img
                    id="imagen-card"  src={props.imagen} className="card-img-top" alt={props.nombre} width="150"
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
export default Productos;
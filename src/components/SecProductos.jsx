import Productos from "./Productos"

function SecProductos() {
    return(
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
    )
}
export default SecProductos;
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
                imagen="https://abucow.com/cdn/shop/files/2_bc946045-d723-4dcc-890a-9155aa5d7c9b.jpg?v=1699866215"
                nombre="Teclado mecanico"
                precio={50}
            />
            <Productos
                imagen="https://promart.vteximg.com.br/arquivos/ids/6561757-1000-1000/image-dc319344bcb84db59893e8c374dc687c.jpg?v=638007866111200000"
                nombre="Juguete para perros"
                precio={10}
            />
            <Productos
                imagen="https://dermashop.pe/cdn/shop/files/eucerin-sun-1-1.png?v=1704474125&width=1000"
                nombre="Bloqueador solar"
                precio={15}
            />
            <Productos
                imagen="https://rimage.ripley.com.pe/home.ripley/Attachment/MKP/2269/PMP00002010255/Image-1.png"
                nombre="Pelota de basket"
                precio={40}
            />
            <Productos
                imagen="https://dcdn.mitiendanube.com/stores/001/334/030/products/classic_classic_morsa1-6e920fd541eea69a2515994505146153-240-0.png"
                nombre="Lampara de escritorio"
                precio={25}
            />
        </div>
    </div>
    )
}
export default SecProductos;
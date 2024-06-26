function Header(props) {
  return (
    <header className="jumbotron text-center">
        <h1 className="display-4">{props.titulo}</h1>
        <p className="lead">{props.subTitulo}</p>
    </header>
  )
}
export default Header;
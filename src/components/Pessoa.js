function Pessoa (props) {

    return (
        <div>
            <img src={props.foto} alt={props.nome} />
            <h1>Nome: {props.nome}</h1>
            <p>Idade: {props.idade}</p>
            <p>Profissâo: {props.profissao}</p>
        </div>
    )
}

export default Pessoa
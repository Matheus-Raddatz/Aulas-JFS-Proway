export default function Resultado({ nome, sobrenome, idade, maimen }) {
    return (
            <p className="form-control">
                Olá! Vejo que seu nome é "
                <label id="nome">{nome}</label>
                " e seu sobrenome é "
                <label id="sobrenome">{sobrenome}</label>
                ". Você tem "
                <label id="idade">{idade}</label>
                " anos e você é "
                <label id="maimen">{maimen}</label>
                " de idade!
            </p>
    )
}
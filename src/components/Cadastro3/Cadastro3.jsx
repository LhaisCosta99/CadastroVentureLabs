import Button from "../Button/Button"
import style from "./Cadastro3.module.css"

export default function Cadastro1(){
    return (
        <form>
            <div>
                <label>Data de Nascimento:</label>
                <input type="date" name="nascimento" />
            </div>
            <div>
                <label>CPF:</label>
                <input type="text" name="cpf" />
            </div>
            <div>
                <label>Renda mensal R$:</label>
                <input type="number" name="renda" />
            </div>
            <Button texto={"Enviar"}/>
        </form> 
    )
}
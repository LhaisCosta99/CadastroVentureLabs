import Button from "../Button/Button"
import style from "./Cadastro2.module.css"

export default function Cadastro2(){
    return (
        <form>
            <div>
                <label>CEP:</label>
                <input type="text" name="cep" />
            </div>
            <div>
                <label>Endereço 1:</label>
                <input type="text" name="endereco1" />
            </div>
            <div>
                <label>Endereço 2:</label>
                <input type="text" name="endereco2" />
            </div>
            <Button texto={"Próximo"}/>
        </form>
    )
}
import Button from "../Button/Button"
import style from "./Cadastro1.module.css"

export default function Cadastro1(){
    return (
        <form>
            <div>
                <label htmlFor="">Nome:</label>
                <input type="text" />
            </div>
            <div>
                <label htmlFor="">Sobrenome:</label>
                <input type="text" />
            </div>
            <div>
                <label htmlFor="">E-mail:</label>
                <input type="text" />
            </div>
            <div>
                <label htmlFor="">Telefone:</label>
                <input type="text" />
            </div>
            <Button texto={"Próximo"}/>
        </form>
    )
}
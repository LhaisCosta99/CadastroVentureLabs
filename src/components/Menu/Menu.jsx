import Button from "../Button/Button"
import style from "./Menu.module.css"

export default function Menu(){
    const year = new Date().getFullYear()
    return(
        <nav>
            <Button texto={"Cadastrar"}/>
            <Button texto={"Listar"}/>
            <footer>
                <p>Lhaís Costa © {year}</p>
            </footer>
        </nav>
    )
}
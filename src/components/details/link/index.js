import "./styles.css"
import { Link } from "react-router-dom"

export function DetailsLink() {
    return(
        <div className="link-home">
            <Link className="link-home-text" to={'/'}>Voltar</Link>
        </div>
    )
}
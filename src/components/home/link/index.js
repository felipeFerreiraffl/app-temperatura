import { Link } from "react-router-dom"
import "./styles.css"

export function HomeLink() {
    return(
        <div className="link-detail">
            <div className="link-container">
                <Link className="link-text" to={'/detalhes'}>Informações detalhadas</Link>
            </div>
        </div>
    )
}
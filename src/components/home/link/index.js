import { Link } from "react-router-dom"
import "./styles.css"

export function HomeLink({ state }) {
    return(
        <div className="link-detail">
            <div className="link-container">
                <Link className="link-text" to={'/detalhes' } state={{ dados: state }}>Informações detalhadas</Link>
            </div>
        </div>
    )
}
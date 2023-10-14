import pages from "../json-files/pages.json"
import { NavLink } from "react-router-dom"


export default function Navigation() {
    return (
        <nav>
            {pages.map(page => (
                <NavLink key={page.id} to={page.link} className="navlink">{page.name}</NavLink>
            ))
            }
        </nav>
    )
}


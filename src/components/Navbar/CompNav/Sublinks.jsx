import { Link } from "react-router-dom"
function Sublinks({ subLinks }) {
    const listItems = subLinks.map((sublink) =>
        <li key={sublink}>
            <Link to={`/gameShop-Lucas-Vasquez/${sublink}`}>
                <button className="dropdown-item link" >{sublink}</button>
            </Link>
        </li>
    );
    return listItems
}

export default Sublinks
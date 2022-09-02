function Sublinks({ subLinks }) {
    const listItems = subLinks.map((sublink) =>
        <li key={sublink}>
            <button className="dropdown-item link" >{sublink}</button>
        </li>
    );
    return listItems
}

export default Sublinks
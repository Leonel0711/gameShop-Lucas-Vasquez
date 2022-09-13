import Sublinks from "./Sublinks";
function Dropwdown({ title, subLinks }) {
    //DropwDown componente para crear botones con sublinks osea botones desplegables
    return (<div className='div-links nav-item dropdown'>
        <button className="nav-link dropdown-toggle link" data-bs-toggle="dropdown" aria-expanded="false">
            {title}
        </button>
        <ul className="dropdown-menu dropdown-menu-dark">
            <Sublinks subLinks={subLinks}></Sublinks>
        </ul>
    </div>)
}

export default Dropwdown;
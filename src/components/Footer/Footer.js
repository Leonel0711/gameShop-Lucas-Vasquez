import "./Footer.css"
export default function Footer() {
    return (<footer>
        <footer className="footer container-fluid" id="redes">
            <div className="footer_container">
                <div className="redes fs-3 gap-2 link_containers">
                    <p className="footer_titulo text-center">Redes Sociales</p>
                    <a href="#Instagram" className="footer_redes" id="insta">Instagram
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="#6A696E" d="M21.147 0H2.853A2.85 2.85 0 000 2.846v18.308A2.85 2.85 0 002.853 24h18.294A2.85 2.85 0 0024 21.154V2.846A2.85 2.85 0 0021.147 0zM17.25 3.75A.75.75 0 0118 3h2.25a.75.75 0 01.75.75V6a.75.75 0 01-.75.75H18a.75.75 0 01-.75-.75V3.75zm-5.222 3.673a4.61 4.61 0 014.615 4.605 4.61 4.61 0 01-4.615 4.604c-2.549 0-4.615-2.061-4.615-4.604s2.066-4.605 4.615-4.605zM21.75 21a.75.75 0 01-.75.75H3a.75.75 0 01-.75-.75V9.75h3c-.39.562-.523 1.611-.523 2.278 0 4.016 3.276 7.284 7.3 7.284 4.027 0 7.302-3.268 7.302-7.284 0-.667-.095-1.7-.579-2.278h3V21z" ></path></svg>
                    </a>
                    <a href="#Facebook" className="footer_redes" id="face">Facebook
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="#6A696E" d="M12.82 24H1.324A1.325 1.325 0 010 22.675V1.325C0 .593.593 0 1.325 0h21.35C23.407 0 24 .593 24 1.325v21.35c0 .732-.593 1.325-1.325 1.325H16.56v-9.294h3.12l.466-3.622H16.56V8.77c0-1.048.29-1.763 1.795-1.763h1.918v-3.24c-.332-.045-1.47-.143-2.795-.143-2.766 0-4.659 1.688-4.659 4.788v2.67H9.692v3.623h3.127V24z" ></path></svg>
                    </a>
                </div>
            </div>
            <p className="footer_text fs-5">© 2022 Vasquez — All rights reserved.</p>
        </footer>
    </footer>)
}
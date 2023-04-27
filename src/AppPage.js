import Page from "./components/Page";
import {useState} from "react";

const AppPage = () => {
    const [activePage, setActivePage] = useState('home')
    return (
        <>
            <nav>
                <button onClick={() => setActivePage('home')}>Home</button>
                <button onClick={() => setActivePage('about')}>About</button>
                <button onClick={() => setActivePage('portfolio')}>Portfolio</button>
            </nav>

            {activePage === 'home' && <h1>Homepage</h1>}
            {activePage === 'about' && <h1>About</h1>}
            {activePage === 'portfolio' && <h1>Portfolio</h1>}
            </>
    )
}

export default AppPage
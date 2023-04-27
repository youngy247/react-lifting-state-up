import Page from "./components/Page";
import {useState} from "react";

const AppPage = () => {
    const [pageActive, setPageActive] = useState(true)
    return (
        <>
            <button onClick={() => setPageActive(!pageActive)} >Page</button>
            {pageActive ?  <Page /> : '404 not found' }
        </>
    )
}

export default AppPage
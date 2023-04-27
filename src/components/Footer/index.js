import Button from "./Button";

const Footer = ({loggedIn, toggleLoggedIn}) => {
    return (
        <div>
            Footer
            <Button loggedIn={loggedIn} toggleLoggedIn={toggleLoggedIn}/>
        </div>
    )
}

export default Footer
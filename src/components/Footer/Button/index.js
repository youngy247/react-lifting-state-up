const Button = ({loggedIn, toggleLoggedIn}) => {
    return (
        <button onClick={toggleLoggedIn}>{loggedIn ? 'Login' : 'Logout'}</button>
    )
}

export default Button
const Button = ({loggedIn, toggleLoggedIn}) => {
    return (
        <div>{loggedIn ? 'Login' : 'Logout'}</div>
    )
}

export default Button
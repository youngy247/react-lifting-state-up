const Button = ({loggedIn}) => {
    return (
        <div>{loggedIn ? 'Login' : 'Logout'}</div>
    )
}

export default Button
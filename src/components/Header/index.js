const Header = ({loggedIn}) => {
    return (
        <div>
            <h3>Header</h3>
            {loggedIn ? 'Welcome Back!' : 'Welcome stranger!'}
        </div>
    )
}

export default Header

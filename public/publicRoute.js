const PublicRoute = ({...props}) => {
    const [user, setUser] = React.useState(false);

    firebase.auth().onAuthStateChanged((firebaseUser) => {
        return firebaseUser ? setUser(true) : setUser(false)
    });
    console.log(user);
    return user ? <Redirect to="/" /> : <Route {...props} />
}
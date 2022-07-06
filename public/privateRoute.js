const PrivateRoute = ({...props}) => {
    const [user, setUser] = React.useState(true);

    firebase.auth().onAuthStateChanged((firebaseUser) => {
        return firebaseUser ? setUser(true) : setUser(false)
    });
    console.log(user)
    return user ? <Route {...props} /> : <Redirect to="/login/" />
}
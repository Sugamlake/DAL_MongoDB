function NavBar(){
  const [user, setUser] = React.useState(true);
  const [email, setEmail] = React.useState("");

  firebase.auth().onAuthStateChanged((firebaseUser) => {
    if (firebaseUser) {
      setUser(true);
      setEmail(firebaseUser.email);
      console.log(firebaseUser);
    } else {
      setUser(false);
      setEmail("");
    }
    // return firebaseUser ? setUser(true) : setUser(false)
  });

  console.log(user);

  return(

    <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">BadBank</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          {!user ? <li className="nav-item">
            <Link className="nav-link" to="/CreateAccount/">Create Account</Link>
          </li> : ""}
          {!user ? <li className="nav-item">
            <Link className="nav-link" to="/login/">Login</Link>
          </li> : ""}
          {user ? <li className="nav-item">
            <Link className="nav-link" to="/deposit/">Deposit</Link>
          </li> : ""}
          {user ? <li className="nav-item">
            <Link className="nav-link" to="/withdraw/">Withdraw</Link>
          </li> : ""}
          {user ? <li className="nav-item">
            <Link className="nav-link" to="/balance/">Balance</Link>
          </li> : ""}
          {user ? <li className="nav-item">
            <Link className="nav-link" to="/alldata/">AllData</Link>
          </li> : ""}
          {user ? <li className="nav-item">
            <Link className="nav-link" to="/logout/">Logout</Link>
          </li> : ""}
        </ul>
        
      </div>
    </nav>
    <div className="d-flex justify-content-end">{email}</div>
    </div>
  );
}
function Spa() {
  return (
    <HashRouter>
      <div>
        <NavBar/>    
        <UserContext.Provider value={{users:[{name:'abel',email:'abel@mit.edu',password:'secret',balance:100}]}}>
          <div className="container" style={{padding: "20px"}}>
            <Switch>
              <Route path="/" exact component={Home} />
              <PublicRoute path="/CreateAccount/" exact component={CreateAccount} />
              <PublicRoute path="/login/" exact component={Login} />
              <PrivateRoute path="/deposit/" exact component={Deposit} />
              <PrivateRoute path="/withdraw/" exact component={Withdraw} />
              {/* <Route path="/transactions/" component={Transactions} /> */}
              <PrivateRoute path="/balance/" exact component={Balance} />
              <PrivateRoute path="/alldata/" exact component={AllData} />
              <PrivateRoute path="/logout/" exact component={Logout} />
            </Switch>
          </div>
        </UserContext.Provider>
      </div>
    </HashRouter>
  );
}

ReactDOM.render(
  <Spa/>,
  document.getElementById('root')
);

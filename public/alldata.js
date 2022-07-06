function AllData(){
    const [data, setData] = React.useState('');
    const [email, setEmail] = React.useState("");

    firebase.auth().onAuthStateChanged((firebaseUser) => {
        return firebaseUser ? setEmail(firebaseUser.email) : setEmail("")
    });

    console.log(email);

    React.useEffect(() => {

        // fetch all accounts from API
        fetch(`/account/findOne/${email}`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setData(data);
            });

    }, [email]);

    return (<>
        <h5>All Data in Store:</h5>
        <Card
            bgcolor="info"
            header="User Data"
            body={
                <div>
                    <p>{`name: ${data.name}`}</p>
                    <p>{`email: ${data.email}`}</p>
                    <p>{`password: ${data.password}`}</p>
                    <p>{`balance: ${data.balance}`}</p>
                </div>
            }
        />
    </>);
}

function AllData(){
    const [data, setData] = React.useState('');    

    React.useEffect(() => {
        
        // fetch all accounts from API
        let email = "test@test.com"
        fetch(`/account/findOne/${email}`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setData(data);                
            });

    }, []);

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

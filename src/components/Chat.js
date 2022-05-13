import React, {useState, useEffect} from "react";
import {
    Wrapper,
    LoginTitle,
    Form, 
    Input,
    InputSubmit,
    Text,
    ChatWrapper,
} from "../styles/Chatstyled";

function Login(props) {
    const [name, setName] = useState("");




    return (
        <Wrapper>
            <LoginTitle>Enter Your Name</LoginTitle>
            <Form onSubmit={()=> props.createUser(name)}>
                <Input type="name" placeholder="&#xf007;  name" onChange={(e) => setName(e.target.value)}/>
                <InputSubmit type="submit" value="Submit" />
            </Form> 
        </Wrapper>
    );
}

function ChatLogs() {
    const [dummyData, setDummyData] = useState();
    const [loaded, setLoaded] = useState(false);
    const [message, setMessage] = useState();


    useEffect(() => {
        // fetch data from api 
        console.log("got data");
        setDummyData({
            "user1": "hows it going",
            "user2": "good",
            "user3": "hello there",
            "tom": "my name is tom"
        })
        setLoaded(true);
    }, [])

    return (
        <ChatWrapper>
            
            {loaded && Object.entries(dummyData).map(([key, val]) =>
                
                    <Text>{key + ": " + val}</Text>
                
            )}
            
            <Form onSubmit={()=> console.log("update backend with new message")}>
                <Input type="message" placeholder="&#xf007;  message" onChange={(e) => setMessage(e.target.value)}/>
                <InputSubmit type="submit" value="Submit" />
            </Form> 

        </ChatWrapper>
    )
}

function Chat() {

    const [login, setLogin] = useState(false);

    const createUser = (name) => {
        localStorage.setItem("name", name)
        setLogin(true);
    }

    useEffect(() => {
        const saved = localStorage.getItem("name");
        if (saved){
            setLogin(true);
        }
      }, []);
    
    
    return (
        <>
            {!login ? (
                <Login createUser={createUser}/>
            ) : (
                <ChatLogs />
            )}
            
        </>
    )
}

export default Chat;


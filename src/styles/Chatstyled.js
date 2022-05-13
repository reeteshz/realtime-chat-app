import styled from "styled-components";


export const Wrapper = styled.div`
    width: 30vw;
    height: 60vh;
    min-height: 40vw;
    min-width: 400px;
    max-witdh: 800px;
    position: absolute;
    left: 35vw;
    top: 15vh;
    font-size: 24px;
    @media screen and (max-width:750px) {
        width: 80vw;
        left: 10vw;;
        min-width: 100px;
    }
`;

export const LoginTitle = styled.p`
    margin: 0;
    margin-bottom: 2vh;
    padding: 10px;
    text-align: center;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    padding: 10px;
`;

export const Input = styled.input`
    padding: 10px;
    margin-bottom: 3vh;
`;

export const InputSubmit = styled.input`
    padding: 10px 7.5px;
    margin: 0 4vw;
`;

export const Text = styled.p`
margin:4vh;
`;

export const ChatWrapper = styled.div`
position: absolute;
bottom: 0;
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
`;


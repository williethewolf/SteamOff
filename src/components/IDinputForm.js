import styled from "styled-components";
import { useState } from 'react'

const StyledForm = styled.div`
    /* display : flex; */
    justify-content: center;

div{
    font-size: calc(10px + 1vmin);
    padding: 3rem;
}
form{
    font-size: calc(10px + 1.5vmin);
    
}
label{
    span{ margin-top: 12px;}
};
input{
    padding: 12px 20px;
    margin: 8px 0;
    box-sizing: border-box;
}
a{
    color: inherit;
}
`

function IDForm ({ setUserID }){

    const [updateID,setUpdateID] = useState(null)

    const handleChange = (evt) => {
        setUpdateID(( prevState) => ({
            ...prevState,
            ID64: evt.target.value
        }))
    }

    const handleSubmit = (evt)=>{
        evt.preventDefault()
        // userID= evt.target.value
        setUserID(updateID)

    }

    const noInputPrompt = () =>{
        return(
            <div>ㅤ</div>
        )
    }

    const inputPrompt = () =>{
        return(
            <div> Introduce your <a href="https://steamcommunity.com/discussions/forum/1/1736588252411302797" target="_blank">Steam ID64</a> below to retrive your games</div>
        )
    }

    return (
        <StyledForm>
            {updateID
            ?noInputPrompt()
            :inputPrompt()}
        <form onSubmit={handleSubmit}>
            <label>
                <span>Steam ID64:</span>
                <input 
                    type="number"
                    name="ID64"
                    onChange={handleChange}
                    placeholder = "Your Steam ID64"
                    autoFocus
                />
            </label>
            <input type="submit" value="Submit" />        
        </form>
        </StyledForm>
    )
    }

export default IDForm

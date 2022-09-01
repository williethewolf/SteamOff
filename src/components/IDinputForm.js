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
`

function IDForm ({ userID, setUserID }){

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
        console.log(userID)

    }

    return (
        <StyledForm>
        <div> Introduce your Steam ID64 below to retrive your games</div>
        <form onSubmit={handleSubmit}>
            <label>
                <span>Steam ID64:</span>
                <input 
                    type="number"
                    name="ID64"
                    onChange={handleChange}
                    placeholder = "Your Steam ID64"
                />
            </label>
            <input type="submit" value="Submit" />        
        </form>
        </StyledForm>
    )
    }

export default IDForm

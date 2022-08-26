
import React, {useState} from 'react';

function Contact(){
    const [name , setName] = useState('');
    const [email , setEmail] = useState('');
    const [message , setMessage] = useState('');

    const handleName =(e)=>{
        setName(e.target.value);
    }
    const handleEmail =(e)=>{
        setEmail(e.target.value);
    }
    const handleMessage =(e)=>{
        setMessage(e.target.value);
    }
    const handleSubmit=(e)=>{
        if(!email || !name || !message)
        {
            alert("Field not valid!");
        } else{
            alert('A contact form was submitted');
        }
        e.preventDefault();
    }


    return(
        <div id="contact" className="App">
            <header className="App-header">
                <h2>Contact Me:</h2>
                <ul>
                    <li><a href='mailto: snyh121@gmail.com'>snyh121@gmail.com</a></li>
                    <li><a href='https://www.linkedin.com/in/shmuel-hoffman-254b0223b/' target='_blank' rel='noreferrer'>LinkIn</a></li>
                    <li><a href='https://github.com/snyh212?tab=repositories' target='_blank' rel='noreferrer'>GitHub</a></li>
                </ul>
                
                <form onSubmit={(e) => {handleSubmit(e)}}>
                    <label>Name</label><br/>
                    <input type="text" value={name} required onChange={(e) => {handleName(e)}} /><br/>
                    <label>Email</label><br/>
                    <input type="email" value={email} required onChange={(e) => {handleEmail(e)}} /><br/>
                    <label>Message</label><br/>
                    <input type="text" value={message} required onChange={(e) => {handleMessage(e)}} /><br/>
                    <input type="submit" value="Submit"/>
                </form>
            </header>
        </div>
    )
}

export default Contact;
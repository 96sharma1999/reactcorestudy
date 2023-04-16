//import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';


function FormData(props){
  const [message,setmessage] = useState('xyz');
  const [message1,setmessage1] = useState('');
  const tmparray = [];
  const handlechange = (event) => {
    setmessage(event.target.value);
  }
  const handlemanage = () =>{
    tmparray.push(...message1,message); 
    if(tmparray.length>0){
    const datamanage  = tmparray.map((num,i) => <li>{num}</li>)
    setmessage1(datamanage);
  }
}
    return (
    <div className="container mt-3">
    <h2>Codes Project Form</h2>
    <div className="mb-3 mt-3">
      <label htmlfor="Name">Name:</label>
      <input type="text" className="form-control" id="email"
       placeholder="Enter Name" name="email" value={message} 
       onChange={handlechange}/> 
       <h2>{message}</h2>
    </div>
    <button type="submit" className="btn btn-primary" onClick={handlemanage}>Submit</button>
    
  <ul className='list-unstyled'>
    {message1}
  </ul>
</div>
    )
}
FormData.propTypes ={
    name:PropTypes.string
}
export default FormData;
import React from 'react';


function Formdata(props){
    const linklist =
        props.name.map((num,i) => <li>{num}</li> );
return <>
    <li>{linklist}</li>
</>
}

export default Formdata;
import React from "react";

function ContactItem({id, picture, name, popularity}){
  return(

    <div className="contact-item">
      <td><img src={picture} alt="picture"></img> </td>
      <td>{name}</td>
      <td>{popularity}</td>
    </div>
  )



}



export default ContactItem;


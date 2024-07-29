import React from "react";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';


const ContactList = ( props ) => {
    const {contact, deleteContact}= props;
    if (contact.length === 0) {
      return null; 
    }  
  
  return (
    <div className="container"> 
      <table class="table table-dark my-4">
        <thead>
          <tr className="table-dark">
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody className="table-success">
          {contact.map((val,index) => (
            <tr key={index}>
              <td>{val.data.name}</td>
              <td>{val.data.email}</td>
              <td><span onClick={()=>deleteContact(val.id)}><DeleteForeverIcon/></span></td>
               
            </tr>
          )) }
        </tbody>
      </table>
    </div>
  );
};

export default ContactList;
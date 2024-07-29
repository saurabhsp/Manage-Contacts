import React, { useState } from "react";


export default function AddContacts({addContact}) {
  const [contactData, setContactData] = useState({ name: "", email: "" });
  const handleChange = (e) => {
    if (e.target.name === "name") {
      setContactData({ ...contactData, name: e.target.value });
    } else {
      setContactData({ ...contactData, email: e.target.value });
    }
  };

  const handleAdd = (e) => {
    e.preventDefault();
    if (contactData.name === "" || contactData.email === "") {
      alert("All Fields are mandatory");
      return;
    }
    addContact(contactData);
    setContactData({name:"" , email:""})
  }
  return (
    <div>
      <h2>Add Contacts</h2>
      <form>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={contactData.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            name="email"
            className="form-control "
            value={contactData.email}
            onChange={handleChange}
          />
          <div>This Application uses localStorage to store data in JSON form</div>
        </div>

        <button onClick={handleAdd} className="btn btn-primary">
          Add Contacts
        </button>
      </form>
    </div>
  );
}
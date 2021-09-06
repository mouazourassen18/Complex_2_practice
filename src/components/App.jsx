import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function handleChange(event) {
    const inVal = event.target.value;
    const name = event.target.name;
    // const {name, inVal} = event.target;

    console.log(name);

    // function pre(pro) {
    //   return {
    //     ...pro,
    //     [name]: inVal
    //   };
    // }
    setContact((pro) => {
      return {
        ...pro,
        [name]: inVal
      };
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input
          onChange={handleChange}
          name="fName"
          value={contact.fName}
          placeholder="First Name"
        />
        <input onChange={handleChange} name="lName" placeholder="Last Name" />
        <input onChange={handleChange} name="email" placeholder="Email" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;

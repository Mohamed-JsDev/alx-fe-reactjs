import { useState } from "react";

const RegistrationForm = () => {
  const [user, setUser] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevState) => ({ ...prevState, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.prevent.default();
    console.log(user);
  };
  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <label>name</label>
      <input type="text" id="name" value={user.name} onChange={handleChange} />
      <label>email</label>
      <input
        type="email"
        id="email"
        value={user.name}
        onChange={handleChange}
      />
      <label>password</label>
      <input
        type="password"
        id="password"
        value={user.password}
        onChange={handleChange}
      />
      <button type="submit">submit</button>
    </form>
  );
};

export default RegistrationForm;

import { useNavigate } from "react-router-dom";

function Input({ setName, setCity, setEmail, setGender }) {
  const navigate = useNavigate();

  return (
    <div className="page">
      <div className="form-box">

        <h1>Registration Form</h1>
        <p className="subtitle">Please enter your details</p>

        <label>Name</label>
        <input
          type="text"
          placeholder="Enter your name"
          onChange={(e) => setName(e.target.value)}
        />

        <label>City</label>
        <input
          type="text"
          placeholder="Enter your city"
          onChange={(e) => setCity(e.target.value)}
        />

        <label>Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Gender</label>

        <div className="gender">
          <input
            type="radio"
            name="gender"
            value="Male"
            onChange={(e) => setGender(e.target.value)}
          />
          Male

          <input
            type="radio"
            name="gender"
            value="Female"
            onChange={(e) => setGender(e.target.value)}
          />
          Female
        </div>

        <button onClick={() => navigate("/display")}>
          Submit
        </button>

      </div>
    </div>
  );
}

export default Input;
function Display({ name, city, email, gender }) {
  return (
    <div className="page">
      <div className="form-box">

        <h1>Your Details</h1>

        <p><b>Name:</b> {name}</p>
        <p><b>City:</b> {city}</p>
        <p><b>Email:</b> {email}</p>
        <p><b>Gender:</b> {gender}</p>

      </div>
    </div>
  );
}

export default Display;
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Input from "./Input";
import Display from "./Display";

function App() {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Input
              setName={setName}
              setCity={setCity}
              setEmail={setEmail}
              setGender={setGender}
            />
          }
        />

        <Route
          path="/display"
          element={
            <Display
              name={name}
              city={city}
              email={email}
              gender={gender}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
import { useState } from "react";

function DisplayText() {
  const [text, setText] = useState("");

  return (
    <div className="component">
      <h2>Display Text</h2>

      <input
        type="text"
        placeholder="Type something"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <h3>{text}</h3>
    </div>
  );
}

export default DisplayText;
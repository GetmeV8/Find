import React, { useState } from "react";

const Box = () => {
  const [boxes, setBoxes] = useState([]);
  const [color, setColor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (color.trim()) {
      setBoxes([...boxes, color]);
      setColor("");
    }
  };    


  const handleChange = (e) => {
    setColor(e.target.value);
  };

  const handleDelete = (indexToDelete) => {
    setBoxes(boxes.filter((_, index) => index !== indexToDelete));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={color}
          onChange={handleChange}
          placeholder="Enter a color"  
        />
        <button type="submit">Add Box</button>
      </form>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginTop: "20px" }}>
        {boxes.map((boxColor, index) => (
          <div key={index} style={{ position: "relative" }}>
            <div
              style={{
                width: "100px",
                height: "100px",
                backgroundColor: boxColor,
                border: "1px solid black"
              }}
            />
            <button
              onClick={() => handleDelete(index)}
              style={{
                position: "absolute",
                top: "-10px",
                right: "-10px",
                backgroundColor: "red",
                color: "white",
                border: "none",
                borderRadius: "50%",
                width: "20px",
                height: "20px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "12px"
              }}
            >
              ×
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Box;

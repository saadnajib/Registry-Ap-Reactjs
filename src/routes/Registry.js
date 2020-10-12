import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

function Registry() {
  const [text, settext] = useState("");
  const [regdata, setregdata] = useState([]);
  const [error, seterror] = useState(false);

  const additem = (e) => {
    e.preventDefault();
    if (error) return;
    const temp = [...regdata];
    temp.push(text);
    setregdata(temp);
    settext("");
  };
  const removeitem = (index) => {
    if (error) return;
    let newdata = [...regdata];
    newdata.splice(index, 1);
    setregdata(newdata);
  };
  const updateitem = (index) => {
    if (error) return;
    let newdata = [...regdata];
    newdata[index] = text;
    setregdata(newdata);
  };

  console.log(regdata);

  useEffect(() => {
    if (text.length > 10) seterror(true);
    else seterror(false);
  }, [text]);

  return (
    <div>
      <h1>REGISTRY</h1>
      <Link to="/">click here to go HOME</Link>
      <form onSubmit={additem}>
        <input
          type="text"
          value={text}
          onChange={(e) => {
            settext(e.target.value);
          }}
        />
        <input type="submit" />
      </form>
      {error ? <span style={{ color: "red" }}>error!</span> : null}
      {regdata.map((item, index) => {
        return (
          <li key={index}>
            {item} <button onClick={() => removeitem(index)}>Remove</button>
            <button onClick={() => updateitem(index)}>Update</button>
          </li>
        );
      })}
    </div>
  );
}

export default Registry;

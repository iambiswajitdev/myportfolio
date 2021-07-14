import React, { useEffect, useState } from "react";

const Settings = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `assessment(${count})`;
  });

  return (
    <div>
      <h1 className="studant">{count}</h1>
      <button onClick={() => setCount(count + 1)}>click</button>
      <br></br>
      <h2>child component</h2>
    </div>
  );
};

export default Settings;

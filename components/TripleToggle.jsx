import React, { useState } from "react";

const TripleToggle = () => {
  let selectedTheme = "dark--theme";
  const [radioActive, setRadioActive] = useState("1");

  const changeTheme = (e) => {
    const theme = e.target.id;
    const bodyEl = document.body;
    bodyEl.classList.remove(selectedTheme);
    setRadioActive(theme);

    switch (theme) {
      case "1":
        selectedTheme = "dark--theme";
        break;
      case "2":
        selectedTheme = "light--theme"; //light--theme
        break;
      case "3":
        selectedTheme = "purple--theme"; //purple-theme
        break;
    }
    bodyEl.classList.add(selectedTheme);
  };

  return (
    <div className="toggle__component">
      <div className="choices">
        <label htmlFor="1">1</label>
        <label htmlFor="2">2</label>
        <label htmlFor="3">3</label>
      </div>
      <div className="radio__wrapper">
        <input
          id="1"
          name="theme"
          type="radio"
          onClick={changeTheme}
          checked={radioActive === "1"}
        />
        <input
          id="2"
          name="theme"
          type="radio"
          onClick={changeTheme}
          checked={radioActive === "2"}
        />
        <input
          id="3"
          name="theme"
          type="radio"
          onClick={changeTheme}
          checked={radioActive === "3"}
        />
      </div>
    </div>
  );
};

export default TripleToggle;

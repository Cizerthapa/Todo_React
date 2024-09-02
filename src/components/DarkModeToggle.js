import React, { useState } from 'react';
import { Switch } from 'antd';
import './DarkModeToggle.css';

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode', !darkMode);
  };

  return (
    <Switch checked={darkMode} onChange={toggleDarkMode} />
  );
};

export default DarkModeToggle;

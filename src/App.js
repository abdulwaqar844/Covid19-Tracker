import React, { useState } from 'react';
import AppBar from "./Components/NavBar";
import InfoBar from "./Components/InfoPanel"
import FootNavigation from "./Components/FootNav"

function App() {
  const screenConfig=useState(0);
  return (
    <div >
      <AppBar/>
      <InfoBar currentScreen={screenConfig[0]}/>
      <FootNavigation screenConfig={screenConfig} />
    </div>
  );
}

export default App;

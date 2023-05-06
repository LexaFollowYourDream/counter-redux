import React from 'react';
import './App.css';
import {Count} from "./components/count/Count";
import {SettingBoard} from "./components/settingBoard/SettingBoard";

function App() {



    return (
        <div className="App">
            <SettingBoard/>
            <Count/>
        </div>
    );
}

export default App;

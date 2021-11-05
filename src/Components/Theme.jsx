import React,{useState} from 'react'
import Home from '../Home';

const Theme = () => {
  const [lightMode, setLightMode] = useState(false);

    return (
        <>
            <div className={lightMode ? "light-mode" : "dark-mode"}>
                <div className="container">
                    <span style={{ color: lightMode ? "yellow" : "gray" }}>☽</span>
                    <div className="switch-checkbox">
                        <label className="switch">
                            <input type="checkbox" onChange={() => setLightMode(!lightMode)} />
                            <span className="slider round"> </span>
                        </label>
                    </div>
                    <span style={{ color: lightMode ? "gray" : "#c96dfd" }}>☀︎</span>
                </div>
                <div>
                    <h1 className="mx-auto text-center m-2">Live Weather App {lightMode ? "Light" : "Dark"} Mode </h1>
                        <Home />
                </div>
            </div>
        </>
    )
}

export default Theme;

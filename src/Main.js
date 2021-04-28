import './App.css';
import { useState } from 'react';

function Main() {
    const [rfId, setRfId] = useState('')
    return (
        <>
            <input autoFocus onBlur={({ target }) => target.focus()} className="input-hidden"
                value={rfId} onChange={(e) => {
                    setRfId(e.target.value);
                    console.log(e.target.value)
                }}></input>
            <div className="header">
                <div className="container-left">
                    <div className="info">
                        <div>Le Pham Huy Cuong</div>
                        <div>70D1-25710</div>
                    </div>
                </div>
                <div className="container-right">
                    <div className="payment">
                        <div>Tinh tien</div>
                        <div>30000 VND</div>
                    </div>
                </div>
            </div>
            <div className="grid-container">
                <div className="camera">1</div>
                <div className="camera">2</div>
                <div className="image">3</div>
                <div className="image">4</div>
            </div>

        </>
    );
}

export default Main;

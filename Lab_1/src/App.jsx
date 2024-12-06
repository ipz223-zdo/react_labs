import { useState } from 'react';
import './App.css';
import PasswordInput from "./Components/PasswordInput.jsx";
import PasswordStrengthMeter from "./Components/PasswordStrengthMeter.jsx";

function App() {
    const [password, setPassword] = useState('');

    return (
        <div className="App">
            <h1>Перевірка сили пароля</h1>
            <PasswordInput password={password} setPassword={setPassword} />
            <PasswordStrengthMeter password={password} />
        </div>
    );
}

export default App;

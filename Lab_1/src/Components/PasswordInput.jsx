import React from "react";
// Компонент для введення пароля
function PasswordInput({ password, setPassword }) {
    return (
        <div>
            <label htmlFor="password">Пароль: </label>
            <input
                type="text"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Введіть пароль"
            />
        </div>
    );
}
export default PasswordInput;
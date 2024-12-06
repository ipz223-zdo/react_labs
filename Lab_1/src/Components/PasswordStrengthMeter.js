import React from "react";
// Компонент для перевірки сили пароля
function PasswordStrengthMeter({ password }) {
    const getPasswordStrength = () => {
        let strength = 0;
        if (password.length >= 8) strength += 1;
        if (/[A-Z]/.test(password)) strength += 1; // Велика літера
        if (/[a-z]/.test(password)) strength += 1; // Мала літера
        if (/[0-9]/.test(password)) strength += 1; // Цифра
        if (/[^A-Za-z0-9]/.test(password)) strength += 1; // Спец. символи
        return strength;
    };

    const strength = getPasswordStrength();
    const strengthLabel = ['Дуже слабкий', 'Слабкий', 'Посередній', 'Сильний', 'Дуже сильний', 'OMG'];

    return (
        <div>
            <p>Сила пароля: <strong>{strengthLabel[strength]}</strong></p>
            <div className="strength-meter">
                <div className="strength-bar" style={{ width: `${(strength / 4) * 100}%` }}></div>
            </div>
        </div>
    );
}
export default PasswordStrengthMeter;

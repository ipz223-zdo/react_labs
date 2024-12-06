import React from "react";
// Компонент для перевірки сили пароля
function PasswordStrengthMeter({ password }) {
    const MIN_PASSWORD_LENGTH = 8;
    const strengthLabel = ['Дуже слабкий', 'Слабкий', 'Посередній', 'Сильний', 'Дуже сильний', 'OMG'];

    const getPasswordStrength = () => {
        let strength = 0;
        if (password.length >= MIN_PASSWORD_LENGTH) strength += 1;
        if (/[A-Z]/.test(password)) strength += 1; // Велика літера
        if (/[a-z]/.test(password)) strength += 1; // Мала літера
        if (/[0-9]/.test(password)) strength += 1; // Цифра
        if (/[^A-Za-z0-9]/.test(password)) strength += 1; // Спец. символи
        return strength;
    };

    const strength = getPasswordStrength();

    return (
        <div>
            <p>Сила пароля: <strong>{strengthLabel[strength]}</strong></p>
        </div>
    );
}

export default PasswordStrengthMeter;

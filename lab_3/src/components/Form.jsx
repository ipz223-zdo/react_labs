// eslint-disable-next-line no-unused-vars
import React, {useState} from "react";

export default function Form() {
    const [places, setPlaces] = useState([{ quantity: 1, cost: "", weight: "", length: "", width: "", height: "" }]);

    const handleAddPlace = () => {
        setPlaces([...places, { quantity: 1, cost: "", weight: "", length: "", width: "", height: "" }]);
    };

    const handleRemovePlace = (index) => {
        const updatedPlaces = places.filter((_, i) => i !== index);
        setPlaces(updatedPlaces);
    };

    const handlePlaceChange = (index, field, value) => {
        const updatedPlaces = [...places];
        updatedPlaces[index][field] = value;
        setPlaces(updatedPlaces);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Дані форми:", { places });
    };

    return (
        <form onSubmit={handleSubmit}>
            <h3>Маршрут:</h3>
            <label>Місто-відправник:</label>
            <select>
                <option value=""></option>
                <option value="Vinnytsia">Вінниця</option>
                <option value="Zaporizhzhia">Запоріжжя</option>
                <option value="Kyiv">Київ</option>
                <option value="Kryvyi Rih">Кривий Ріг</option>
                <option value="Lviv">Львів</option>
                <option value="Mykolaiv">Миколаїв</option>
                <option value="Odesa">Одеса</option>
                <option value="Poltava">Полтава</option>
                <option value="Kharkiv">Харків</option>
            </select>

            <label>Місто-одержувач:</label>
            <select>
                <option value=""></option>
                <option value="Vinnytsia">Вінниця</option>
                <option value="Zaporizhzhia">Запоріжжя</option>
                <option value="Kyiv">Київ</option>
                <option value="Kryvyi Rih">Кривий Ріг</option>
                <option value="Lviv">Львів</option>
                <option value="Mykolaiv">Миколаїв</option>
                <option value="Odesa">Одеса</option>
                <option value="Poltava">Полтава</option>
                <option value="Kharkiv">Харків</option>
            </select>

            <h3>Вид відправлення:</h3>
            <select>
                <option value="Parcels">Посилки</option>
                <option value="Cargoes">Вантажі</option>
                <option value="Documents">Документи</option>
                <option value="Tyres and discs">Шини та диски</option>
                <option value="Pallets">Кривий Ріг</option>
            </select>

            <h3>Характеристика місць:</h3>
            <table>
                <thead>
                <tr>
                    <th>Кількість</th>
                    <th>Оголошена вартість</th>
                    <th>Вага</th>
                    <th>Довжина</th>
                    <th>Ширина</th>
                    <th>Висота</th>
                </tr>
                </thead>
                <tbody>
                {places.map((place, index) => (
                    <tr key={index}>
                        <td>
                            <input
                                type="number"
                                min={1}
                                value={place.quantity}
                                onChange={(e) => handlePlaceChange(index, "quantity", e.target.value)}
                            />
                        </td>
                        <td>
                            <input
                                type="text"
                                value={place.cost}
                                onChange={(e) => handlePlaceChange(index, "cost", e.target.value)}
                            />{" "}
                            грн
                        </td>
                        <td>
                            <input
                                type="text"
                                value={place.weight}
                                onChange={(e) => handlePlaceChange(index, "weight", e.target.value)}
                            />{" "}
                            кг
                        </td>
                        <td>
                            <input
                                type="text"
                                value={place.length}
                                onChange={(e) => handlePlaceChange(index, "length", e.target.value)}
                            />
                        </td>
                        <td>
                            <input
                                type="text"
                                value={place.width}
                                onChange={(e) => handlePlaceChange(index, "width", e.target.value)}
                            />
                        </td>
                        <td>
                            <input
                                type="text"
                                value={place.height}
                                onChange={(e) => handlePlaceChange(index, "height", e.target.value)}
                            />{" "}
                            см
                        </td>
                        <td>
                            {places.length > 1 && (
                                <button type="button" onClick={() => handleRemovePlace(index)}>
                                    Видалити
                                </button>
                            )}
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            <button type="button" onClick={handleAddPlace}>
                Додати місце
            </button>
            <br/>
            <button type="submit">Розрахувати вартість</button>
        </form>
    );
}

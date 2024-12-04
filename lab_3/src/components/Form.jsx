import React from "react";
import { useForm, Controller, useFieldArray } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { validationSchema } from "../FormValidation";

export default function Form() {
    const {
        control,
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(validationSchema),
        defaultValues: {
            senderCity: "",
            receiverCity: "",
            shipmentType: "",
            places: [{ quantity: 1, cost: "", weight: "", length: "", width: "", height: "" }],
        },
    });

    const { fields, append, remove } = useFieldArray({
        control,
        name: "places",
    });

    const onSubmit = (data) => {
        console.log("Дані форми:", data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h3>Маршрут:</h3>
            <label>Місто-відправник:</label>
            <select {...register("senderCity")}>
                <option value="">Виберіть місто</option>
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
            <div>{errors.senderCity?.message}</div>

            <label>Місто-одержувач:</label>
            <select {...register("receiverCity")}>
                <option value="">Виберіть місто</option>
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
            <div>{errors.receiverCity?.message}</div>

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
                    <th>Дії</th>
                </tr>
                </thead>
                <tbody>
                {fields.map((item, index) => (
                    <React.Fragment key={item.id}>
                        <tr>
                            <td>
                                <Controller
                                    control={control}
                                    name={`places.${index}.quantity`}
                                    render={({ field }) => <input type="number" min={1} {...field} />}
                                />
                            </td>
                            <td>
                                <Controller
                                    control={control}
                                    name={`places.${index}.cost`}
                                    render={({ field }) => <input type="text" {...field} />}
                                />
                            </td>
                            <td>
                                <Controller
                                    control={control}
                                    name={`places.${index}.weight`}
                                    render={({ field }) => <input type="text" {...field} />}
                                />
                            </td>
                            <td>
                                <Controller
                                    control={control}
                                    name={`places.${index}.length`}
                                    render={({ field }) => <input type="text" {...field} />}
                                />
                            </td>
                            <td>
                                <Controller
                                    control={control}
                                    name={`places.${index}.width`}
                                    render={({ field }) => <input type="text" {...field} />}
                                />
                            </td>
                            <td>
                                <Controller
                                    control={control}
                                    name={`places.${index}.height`}
                                    render={({ field }) => <input type="text" {...field} />}
                                />
                            </td>
                            <td>
                                {fields.length > 1 && (
                                    <button type="button" onClick={() => remove(index)}>
                                        Видалити
                                    </button>
                                )}
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <div className="error-row">{errors.places?.[index]?.quantity?.message}</div>
                            </td>
                            <td>
                                <div className="error-row">{errors.places?.[index]?.cost?.message}</div>
                            </td>
                            <td>
                                <div className="error-row">{errors.places?.[index]?.weight?.message}</div>
                            </td>
                            <td>
                                <div className="error-row">{errors.places?.[index]?.length?.message}</div>
                            </td>
                            <td>
                                <div className="error-row">{errors.places?.[index]?.width?.message}</div>
                            </td>
                            <td>
                                <div className="error-row">{errors.places?.[index]?.height?.message}</div>
                            </td>
                            <td></td>
                        </tr>
                    </React.Fragment>
                ))}
                </tbody>
            </table>
            <button type="button" onClick={() => append({ quantity: 1, cost: "", weight: "", length: "", width: "", height: "" })}>
                Додати місце
            </button>
            <br />
            <button type="submit">Розрахувати вартість</button>
        </form>
    );
}

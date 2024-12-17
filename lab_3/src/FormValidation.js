import * as yup from "yup";

export const validationSchema = yup.object().shape({
    senderCity: yup.string().required("Місто-відправник обов'язкове"),
    receiverCity: yup.string().required("Місто-одержувач обов'язкове"),
    shipmentType: yup.string().required("Вид відправлення обов'язковий"),
    reverseDeliveryType: yup
        .string()
        .when("reverseDelivery", {
            is: true,
            then: yup.string().required("Вид зворотної доставки обов'язковий"),
        }),
    places: yup.array().of(
        yup.object().shape({
            quantity: yup
                .number()
                .min(1, "Кількість повинна бути не менше 1")
                .required("Кількість обов'язкова"),
            cost: yup
                .number()
                .typeError("Оголошена вартість повинна бути числом")
                .positive("Оголошена вартість повинна бути більше 0")
                .required("Оголошена вартість обов'язкова"),
            weight: yup
                .number()
                .typeError("Вага повинна бути числом")
                .positive("Вага повинна бути більше 0")
                .required("Вага обов'язкова"),
            length: yup
                .number()
                .typeError("Довжина повинна бути числом")
                .positive("Довжина повинна бути більше 0")
                .required("Довжина обов'язкова"),
            width: yup
                .number()
                .typeError("Ширина повинна бути числом")
                .positive("Ширина повинна бути більше 0")
                .required("Ширина обов'язкова"),
            height: yup
                .number()
                .typeError("Висота повинна бути числом")
                .positive("Висота повинна бути більше 0")
                .required("Висота обов'язкова"),
        })
    ),
});

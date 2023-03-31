import { useState } from "react";

export const useForm = (initialValues, onSubmitHandler) => {

    const [formValues, setFormValues] = useState(initialValues);
    const [errors, setErrors] = useState({});

    const onChangeHandler = (e) => {
        setFormValues(() => ({...formValues, [e.target.name] : e.target.value}))
    }

    const onSubmit = (e) => {
        e.preventDefault();

        if (onSubmitHandler && !Object.values(formValues).some(x => x === '')) {
            onSubmitHandler(formValues);

            setFormValues(initialValues);
        }
    } 

    const checkLength = (e, min, max) => {
        setErrors(state => ({
            ...state,
            [e.target.name]: formValues[e.target.name].length < min || formValues[e.target.name].length > max 
        }))
    };

    const urlCheck = (e) => {
        const regex = /^https?:\/\/.+$/
        setErrors(state => ({
            ...state,
            [e.target.name]: !regex.test(formValues[e.target.name])
        }));
    };

    const emailCheck = (e) => {
        const regex = /^[A-z]+@[A-z]+\.[A-z]+$/;
        setErrors(state => ({
            ...state,
            [e.target.name]: !regex.test(formValues[e.target.name])
        }));
    };

    const changeFormValues = (newValues) => {
        setFormValues(newValues);
    }

    return {
        formValues,
        onSubmit,
        onChangeHandler,
        changeFormValues,
        checkLength,
        urlCheck,
        emailCheck,
        errors
    }
}




import { useState } from "react";

export const useForm = (initialValues, onSubmitHandler) => {

    const [formValues, setFormValues] = useState(initialValues);

    const onChangeHandler = (e) => {
        setFormValues(() => ({...formValues, [e.target.name] : e.target.value}))
    }

    const onSubmit = (e) => {
        e.preventDefault();

        if (onSubmitHandler && !Object.values(formValues).some(x => x === '')) {
            onSubmitHandler(formValues);
        }
    } 

    return {
        formValues,
        onSubmit,
        onChangeHandler
    }
}


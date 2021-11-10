import { ChangeEvent, useState } from 'react';

export const useForm = <T extends Object> ( initialValue : T ) => {
    const [ form, setForm ] = useState( initialValue );

    const handleInputChange = ( { target } : ChangeEvent<HTMLInputElement> ) => {
        const { name, value } = target;
        setForm({
            ...form,
            [ name ]: value,
        });
    };
    
    const handleReset = () =>
        setForm( initialValue );

    return {
        form,
        handleInputChange,
        handleReset,
        ...form
    };
};

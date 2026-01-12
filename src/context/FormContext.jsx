import React, { createContext, useContext, useState } from 'react';

const FormContext = createContext();

export const FormProvider = ({ children }) => {
    const [isFormOpen, setIsFormOpen] = useState(false);

    const openForm = () => {
        setIsFormOpen(true);
        // Small delay to allow state update to render the form container if needed,
        // though in Footer it renders usually. simpler to just scroll.
        setTimeout(() => {
            const footerForm = document.getElementById('register-interest');
            if (footerForm) {
                footerForm.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }, 100);
    };

    const closeForm = () => setIsFormOpen(false);

    return (
        <FormContext.Provider value={{ isFormOpen, setIsFormOpen, openForm, closeForm }}>
            {children}
        </FormContext.Provider>
    );
};

export const useForm = () => useContext(FormContext);

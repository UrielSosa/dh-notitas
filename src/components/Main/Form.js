import React from 'react';

const Form = ({ action, method, evento, children }) => {
    return (
        <form action={action} method={method} onSubmit={evento}>
            {children}
        </form>
    );
}
 
export default Form;
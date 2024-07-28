import React from 'react';

export const Form = () => {
    const HandleForm = (e) => {
        e.preventDefault();
        let form = e.target;
        let formdata = new FormData(form);
        
        let branches = [];
        form.querySelectorAll('input[name="branch"]:checked').forEach((checkbox) => {
            branches.push(checkbox.value);
        });

        let formobj = Object.fromEntries(formdata.entries());
        formobj.branch = branches;

        console.log(formobj);
    }

    return (
        <>
            <form onSubmit={HandleForm}>
                <label htmlFor="Name">Name: </label>
                <input type="text" name="name" />

                <label htmlFor="Email">Email: </label>
                <input type="email" name="email" />

                <label htmlFor="Male">Male</label>
                <input type="radio" name="gender" value="Male" />

                <label htmlFor="Female">Female</label>
                <input type="radio" name="gender" value="Female" />

                <label htmlFor="CSE">CSE</label>
                <input type="checkbox" name="branch" value="CSE" />

                <label htmlFor="IT">IT</label>
                <input type="checkbox" name="branch" value="IT" />

                <input type="submit" value="Submit Form" />
            </form>
        </>
    );
}
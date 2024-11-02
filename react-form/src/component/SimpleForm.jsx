import { useState } from "react";

const SimpleForm = () => {
    // Step 1: Set up state for form inputs
    const [formData, setformData] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        password: '',
    })
    // Step 2: Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setformData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
    // Step 3: Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted:", formData);

        // Optional: Add form validation here
        if (formData.name && formData.email && formData.password) {
            alert(`Thank you, ${formData.name}! We'll contact you soon.`);
        } else {
            alert("Please fill in all fields.");
        }
    };
    return (
        <>
            <p>Simple Form</p>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="name">Phone NUmber:</label>
                    <input
                        type="number"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange} />
                </div>
                <button type="submit">
                    Submit
                </button>
            </form>
        </>
    );
};

export default SimpleForm;
import { useState } from "react";

const Sighup = () => {
    const [user, setUser] = useState({ firstName: "", lastName:"" , email: "", password: "",mobile:"" });
    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch("http://localhost:5000/api/auth/sighup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user),
            });

            const data = await res.json();
            console.log("data",data)
            if (res.ok) {
                setMessage("Signup successful! Redirecting...");
                localStorage.setItem("token", data.token);
                // Redirect to another page if needed
                window.location.href = "/";
            } else {
                setMessage(data.msg || "User Already exist");

            }
        } catch (error) {
            console.error("Signup error:", error);
            setMessage("Something went wrong!");
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg w-80">
                <h2 className="text-xl font-bold mb-4">Sign Up</h2>
                <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={user.firstName}
                    onChange={handleChange}
                    className="border p-2 w-full mb-3"
                    required
                />
                <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={user.lastName}
                    onChange={handleChange}
                    className="border p-2 w-full mb-3"
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={user.email}
                    onChange={handleChange}
                    className="border p-2 w-full mb-3"
                    required
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={user.password}
                    onChange={handleChange}
                    className="border p-2 w-full mb-3"
                    required
                />
                <input
                    type="number"
                    name="mobile"
                    placeholder="Mobile Number"
                    value={user.mobile}
                    onChange={handleChange}
                    className="border p-2 w-full mb-3"
                    required
                />
                <button type="submit" className="bg-blue-500 text-white py-2 px-4 w-full rounded">
                    Sign Up
                </button>
                {message && <p className="text-red-500 mt-2">{message}</p>}
            </form>
        </div>
    );
};

export default Sighup;
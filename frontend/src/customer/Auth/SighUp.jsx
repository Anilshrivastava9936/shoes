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








// import { useState } from "react";
// import { Grid2 } from "@mui/material";
// import TextField from "@mui/material/TextField";
// import { Link } from "react-router-dom";

// const RegisterForm = () => {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     flatNo: "",
//     street: "",
//     landmark: "",
//     city: "",
//     state: "",
//     pincode: "",
//     mobileNo: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Registration Data:", formData);
//   };

//   return (
//     <div className="relative w-full h-screen flex justify-center items-center bg-gradient-to-br from-[#A020B6] via-[#9822a8] to-[#24AEC3] overflow-hidden">
//       {/* Background Rectangles */}
//       <div className="absolute top-10 left-50 w-[20vw] h-[40vh] bg-white opacity-20 rounded-lg "></div>
//       <div className="absolute top-50 left-10 w-[20vw] h-[40vh] bg-white opacity-20 rounded-lg "></div>
//       <div className="absolute bottom-10 right-10 w-[20vw] h-[40vh] bg-black opacity-20 rounded-lg"></div>
//       <div className="absolute top-1/3 right-1/4 w-[20vw] h-[40vh] bg-gray-300 opacity-20 rounded-lg "></div>
//       <div className="absolute top-10 right-10 w-[20vw] h-[80vh] bg-blue-300 opacity-20 rounded-lg"></div>

//       {/* Register Form */}
//       <div className="w-[35vw] h-auto flex flex-col justify-center items-center border-2 p-6 shadow-lg rounded-lg bg-white relative z-10">
//         <h1 className="text-2xl font-bold mb-6">Register</h1>
//         <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
//           <Grid2 container spacing={2}>
//             <Grid2 xs={12} sm={6}>
//               <TextField
//                 label="First Name"
//                 name="firstName"
//                 value={formData.firstName}
//                 onChange={handleChange}
//                 fullWidth
//                 required
//               />
//             </Grid2>
//             <Grid2 xs={12} sm={6}>
//               <TextField
//                 label="Last Name"
//                 name="lastName"
//                 value={formData.lastName}
//                 onChange={handleChange}
//                 fullWidth
//                 required
//               />
//             </Grid2>
//           </Grid2>

//           <TextField
//             label="Flat No."
//             name="flatNo"
//             value={formData.flatNo}
//             onChange={handleChange}
//             fullWidth
//             required
//           />

//           <TextField
//             label="Street"
//             name="street"
//             value={formData.street}
//             onChange={handleChange}
//             fullWidth
//             required
//           />

//           <TextField
//             label="Landmark"
//             name="landmark"
//             value={formData.landmark}
//             onChange={handleChange}
//             fullWidth
//           />

//           <Grid2 container spacing={2}>
//             <Grid2 xs={12} sm={4}>
//               <TextField
//                 label="City"
//                 name="city"
//                 value={formData.city}
//                 onChange={handleChange}
//                 fullWidth
//                 required
//               />
//             </Grid2>
//             <Grid2 xs={12} sm={4}>
//               <TextField
//                 label="State"
//                 name="state"
//                 value={formData.state}
//                 onChange={handleChange}
//                 fullWidth
//                 required
//               />
//             </Grid2>
//             <Grid2 xs={12} sm={4}>
//               <TextField
//                 label="Pincode"
//                 name="pincode"
//                 value={formData.pincode}
//                 onChange={handleChange}
//                 fullWidth
//                 required
//               />
//             </Grid2>
//           </Grid2>

//           <TextField
//             label="Mobile No."
//             name="mobile no"
//             value={formData.mobileNo}
//             onChange={handleChange}
//             fullWidth
//             required
//           />

//           <div className="text-sm">
//             Already have an account?{" "}
//             <Link to="/login" className="text-blue-500 underline">
//               Login
//             </Link>
//           </div>

//           <button
//             type="submit"
//             className="font-bold bg-green-500 text-white w-full h-[4vh] rounded-md cursor-pointer hover:bg-green-600 transition"
//           >
//             Register
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default RegisterForm;

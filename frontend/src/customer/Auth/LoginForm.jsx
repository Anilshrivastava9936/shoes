import { useState } from "react";
import axios from "axios";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleLogin = async (e) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        try {
            const response = await axios.post("http://localhost:5000/api/auth/login", { email, password });
            const { token, user } = response.data;

            // Save the token and user data in localStorage
            localStorage.setItem("token", token);
            localStorage.setItem("user", JSON.stringify(user));

            alert("Login Successful!");
            window.location.href = "/"; // Redirect to dashboard
        } catch (err) {
            setError(err.response?.data?.message || "Login failed. Try again.");
        }
        setLoading(false);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
                {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
                <form onSubmit={handleLogin}>
                    <div className="mb-4">
                        <label className="block mb-1">Email</label>
                        <input
                            type="email"
                            className="w-full p-2 border rounded-lg"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-1">Password</label>
                        <input
                            type="password"
                            className="w-full p-2 border rounded-lg"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
                        disabled={loading}
                    >
                        {loading ? "Logging in..." : "Login"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;








// import { useState } from "react";
// import { Link } from "react-router-dom";

// const LoginForm = () => {
//   const [formData, setFormData] = useState({
//     username: "",
//     password: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form Data:", formData);
//   };

//   return (
//     <div className="relative w-full h-screen flex justify-center items-center bg-gradient-to-br from-[#A020B6] via-[#9822a8] to-[#24AEC3] overflow-hidden">
      
//       {/* Background Rectangles */}
//       <div className="absolute top-10 left-10 w-[20vw] h-[40vh] bg-white opacity-20 rounded-lg rotate-45"></div>
//       <div className="absolute top-80 left-30 w-[20vw] h-[40vh] bg-white opacity-20 rounded-lg rotate-60 "></div>
//       <div className="absolute bottom-10 right-10 w-[20vw] h-[40vh] bg-black opacity-20 rounded-lg"></div>
      
//       <div className="absolute top-1/2 right-1/4 w-[20vw] h-[40vh] bg-gray-300 opacity-20 rounded-lg rotate-85"></div>
//       <div className="absolute top-4/1 right-1/4 w-[20vw] h-[40vh] bg-gray-300 opacity-40 rounded-lg rotate-25"></div>
//       <div className="absolute top-1/3 right-1/4 w-[20vw] h-[40vh] bg-gray-300 opacity-20 rounded-lg rotate-45"></div>
//       <div className="absolute bottom-1/4 left-1/3 w-[20vw] h-[40vh] bg-blue-300 opacity-20 rounded-lg"></div>
// {/* <img className="w-[45vw] h-[80vh]" src="https://img.freepik.com/premium-vector/boy-is-sitting-desk-with-laptop-word-code-it_1177960-38395.jpg" alt="" /> */}
//       {/* Login Form */}
//       <div className="w-[30vw] h-[40vh] flex flex-col justify-center items-center border-2 p-6 shadow-lg rounded-lg bg-white relative z-10">
//         <h1 className="text-2xl font-bold mb-6">Login Form</h1>
//         <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
//           <label className="flex flex-col">
//             Username:
//             <input
//               type="text"
//               name="username"
//               value={formData.username}
//               onChange={handleChange}
//               className="border p-2 rounded-md"
//               required
//             />
//           </label>

//           <label className="flex flex-col">
//             Password:
//             <input
//               type="password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               className="border p-2 rounded-md"
//               required
//             />
//           </label>

//           <div className="text-sm">
//             Don't have an account?{" "}
//             <Link to="/sighup" className="text-blue-500 underline">
//               Create Account
//             </Link>
//           </div>

//           <button
//             type="submit"
//             className="font-bold bg-green-500 text-white w-full h-[4vh] rounded-md cursor-pointer hover:bg-green-600 transition"
//           >
//             Submit
//           </button>
//         </form>
//       </div>
// <img className="w-[45vw] h-[80vh]" src="https://img.freepik.com/premium-vector/boy-is-sitting-desk-with-laptop-word-code-it_1177960-38395.jpg" alt="" />
      
//     </div>
//   );
// };

// export default LoginForm;

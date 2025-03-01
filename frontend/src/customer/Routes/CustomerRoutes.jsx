import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SighUp from '../Auth/SighUp'
import LoginForm from '../Auth/LoginForm'
import CheckoutDeliveryAddress from '../components/Checkout/CheckoutDeliveryAddress';
import Cart from '../components/Cart/Cart';
// import HomeCarousel from '../components/HomeCarousel/HomeCarousel';
import ProductOverview from '../components/Product/ProductOverview';
import Product from '../components/Product/Product';
import Navigation from '../components/Navigation/Navigation';
import HomePages from '../Pages/HomePages';
import Order from '../Orders/Order';
import OrderConfirmation from '../Orders/OrderConfirmation';
import ProtectedRoute from '../Auth/ProtectedRoute'

export default function CustomerRoutes() {
  return (
    <div>
         <Router>
   <Navigation />
   <Routes>
      <Route path="/sighup" element={<SighUp />} />
      <Route path="/login" element={<LoginForm />} />
      <Route element={<ProtectedRoute />}/> 
      <Route path="/checkoutDeliveryAddress" element={<CheckoutDeliveryAddress />} />
      <Route path="/cart" element={<Cart />} />
      
      <Route path="/productOverview/:_id" element={<ProductOverview />} />

      <Route path="/product" element={<Product />} />
      <Route path="/" element={<HomePages />} />
      <Route path="/orderconfirmation" element={<OrderConfirmation />} />
      <Route path="/order" element={<Order/>} />

   </Routes>
</Router>
    </div>
  )
}













// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Memory Card Game</title>
//     <link rel="stylesheet" href="styles.css">
//     <style>
//         body {
//             font-family: Arial, sans-serif;
//             text-align: center;
//             background-color: #f4f4f4;
//         }
//         .game-container {
//             display: flex;
//             flex-direction: column;
//             align-items: center;
//             margin-top: 20px;
//         }
//         .game-board {
//             display: grid;
//             grid-template-columns: repeat(4, 100px);
//             grid-gap: 10px;
//             background-color: #fff;
//             padding: 20px;
//             border-radius: 10px;
//             box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
//         }
//         .card {
//             width: 100px;
//             height: 100px;
//             background-color: #3498db;
//             display: flex;
//             align-items: center;
//             justify-content: center;
//             font-size: 24px;
//             color: white;
//             cursor: pointer;
//             border-radius: 5px;
//             user-select: none;
//         }
//         .flipped {
//             background-color: #2ecc71;
//         }
//         .game-info {
//             margin-top: 20px;
//         }
//         button {
//             padding: 10px 20px;
//             font-size: 16px;
//             cursor: pointer;
//             background-color: #2ecc71;
//             border: none;
//             color: white;
//             border-radius: 5px;
//             margin: 5px;
//         }
//         #submit-btn {
//             display: none;
//         }
//     </style>
// </head>
// <body>
//     <h1>Memory Card Game</h1>
//     <div class="game-container">
//         <div id="game-board" class="game-board"></div>
//         <div class="game-info">
//             <p>Moves: <span id="moves">0</span></p>
//             <p>Time: <span id="timer">00:00</span></p>
//             <button id="new-game">New Game</button>
//             <button id="submit-btn" disabled>Submit</button>
//         </div>
//     </div>
//     <script>
//         document.addEventListener("DOMContentLoaded", () => {
//             const gameBoard = document.getElementById("game-board");
//             const movesDisplay = document.getElementById("moves");
//             const timerDisplay = document.getElementById("timer");
//             const newGameBtn = document.getElementById("new-game");
//             const submitBtn = document.getElementById("submit-btn");
//             let moves = 0;
//             let timer;
//             let time = 0;
//             let cards = [];
//             let flippedCards = [];
//             let matchedPairs = 0;
//             const totalPairs = 8;
//             const cardValues = ['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'E', 'E', 'F', 'F', 'G', 'G', 'H', 'H'];
            
//             function startTimer() {
//                 timer = setInterval(() => {
//                     time++;
//                     let minutes = Math.floor(time / 60);
//                     let seconds = time % 60;
//                     timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
//                 }, 1000);
//             }
            
//             function shuffle(array) {
//                 for (let i = array.length - 1; i > 0; i--) {
//                     let j = Math.floor(Math.random() * (i + 1));
//                     [array[i], array[j]] = [array[j], array[i]];
//                 }
//             }
            
//             function createBoard() {
//                 gameBoard.innerHTML = '';
//                 moves = 0;
//                 time = 0;
//                 matchedPairs = 0;
//                 clearInterval(timer);
//                 timerDisplay.textContent = "00:00";
//                 movesDisplay.textContent = moves;
//                 submitBtn.style.display = "none";
//                 submitBtn.disabled = true;
//                 startTimer();
                
//                 shuffle(cardValues);
//                 cards = cardValues.map(value => {
//                     let card = document.createElement("div");
//                     card.classList.add("card");
//                     card.dataset.value = value;
//                     card.addEventListener("click", flipCard);
//                     gameBoard.appendChild(card);
//                     return card;
//                 });
//             }
            
//             function flipCard() {
//                 if (flippedCards.length < 2 && !this.classList.contains("flipped")) {
//                     this.textContent = this.dataset.value;
//                     this.classList.add("flipped");
//                     flippedCards.push(this);
//                 }
                
//                 if (flippedCards.length === 2) {
//                     moves++;
//                     movesDisplay.textContent = moves;
                    
//                     setTimeout(checkMatch, 500);
//                 }
//             }
            
//             function checkMatch() {
//                 if (flippedCards[0].dataset.value === flippedCards[1].dataset.value) {
//                     flippedCards = [];
//                     matchedPairs++;
//                     if (matchedPairs === totalPairs) {
//                         submitBtn.style.display = "inline-block";
//                         submitBtn.disabled = false;
//                     }
//                 } else {
//                     flippedCards.forEach(card => {
//                         card.textContent = "";
//                         card.classList.remove("flipped");
//                     });
//                     flippedCards = [];
//                 }
//             }
            
//             submitBtn.addEventListener("click", () => {
//                 if (!submitBtn.disabled) {
//                     alert("Congratulations! You've matched all pairs!");
//                 }
//             });
            
//             newGameBtn.addEventListener("click", createBoard);
//             createBoard();
//         });
//     </script>
// </body>
// </html>
// Catering Reservation and Ordering System ,Electric Vehicle Recharge Bunk




// // <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Personal Portfolio</title>
//     <style>
//         /* Global Styles */
//         * {
//             margin: 0;
//             padding: 0;
//             box-sizing: border-box;
//             font-family: Arial, sans-serif;
//         }

//         body {
//             background-color: #f4f4f9;
//             color: #333;
//         }

//         /* Header Styles */
//         header {
//             background-color: #333;
//             color: #fff;
//             padding: 10px 0;
//             text-align: center;
//         }

//         nav ul {
//             list-style: none;
//             padding: 0;
//         }

//         nav ul li {
//             display: inline;
//             margin-right: 20px;
//         }

//         nav ul li a {
//             text-decoration: none;
//             color: #fff;
//             font-weight: bold;
//         }

//         nav ul li a:hover {
//             color: #f4f4f9;
//         }

//         /* Home Section */
//         #home {
//             text-align: center;
//             padding: 50px 20px;
//             background-color: #1e3a8a;
//             color: white;
//         }

//         #home h1 {
//             font-size: 3rem;
//             margin-bottom: 20px;
//         }

//         #home p {
//             font-size: 1.2rem;
//             margin-bottom: 30px;
//         }

//         #home img {
//             width: 150px;
//             height: 150px;
//             border-radius: 50%;
//             border: 3px solid #fff;
//         }

//         /* About Section */
//         #about {
//             padding: 40px 20px;
//             background-color: #fff;
//             text-align: center;
//         }

//         #about h2 {
//             font-size: 2rem;
//             margin-bottom: 20px;
//             color: #1e3a8a;
//         }

//         #about p {
//             font-size: 1.1rem;
//             margin-bottom: 10px;
//         }

//         /* Projects Section */
//         #projects {
//             padding: 50px 20px;
//             background-color: #f0f0f0;
//             text-align: center;
//         }

//         #projects h2 {
//             font-size: 2rem;
//             margin-bottom: 30px;
//             color: #1e3a8a;
//         }

//         .project-gallery {
//             display: flex;
//             justify-content: center;
//             gap: 30px;
//         }

//         .project {
//             background-color: #fff;
//             padding: 20px;
//             box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//             width: 250px;
//             text-align: center;
//         }

//         .project img {
//             width: 100%;
//             height: auto;
//             border-radius: 10px;
//             margin-bottom: 15px;
//         }

//         .project p {
//             font-size: 1rem;
//             color: #555;
//         }

//         /* Contact Section */
//         #contact {
//             padding: 40px 20px;
//             background-color: #fff;
//             text-align: center;
//         }

//         #contact h2 {
//             font-size: 2rem;
//             margin-bottom: 30px;
//             color: #1e3a8a;
//         }

//         #contact-form input, 
//         #contact-form textarea {
//             width: 100%;
//             padding: 12px;
//             margin-bottom: 20px;
//             border: 2px solid #ccc;
//             border-radius: 5px;
//             font-size: 1rem;
//         }

//         #contact-form button {
//             background-color: #1e3a8a;
//             color: white;
//             padding: 12px 25px;
//             border: none;
//             border-radius: 5px;
//             font-size: 1.1rem;
//             cursor: pointer;
//         }

//         #contact-form button:hover {
//             background-color: #2563eb;
//         }

//         /* Footer Styles */
//         footer {
//             background-color: #333;
//             color: white;
//             text-align: center;
//             padding: 10px;
//             margin-top: 30px;
//         }

//         footer p {
//             font-size: 1rem;
//         }
//     </style>
// </head>
// <body>
//     <header>
//         <nav>
//             <ul>
//                 <li><a href="#home">Home</a></li>
//                 <li><a href="#about">About</a></li>
//                 <li><a href="#projects">Projects</a></li>
//                 <li><a href="#contact">Contact</a></li>
//                 <li><a href="resume.pdf" target="_blank">Resume</a></li>
//             </ul>
//         </nav>
//     </header>
    
//     <section id="home">
//         <h1>Welcome to My Portfolio</h1>
//         <p>Hello! I'm [Your Name], a passionate web developer.</p>
//         <img src="profile.jpg" alt="Profile Picture">
//     </section>
    
//     <section id="about">
//         <h2>About Me</h2>
//         <p>Education: [Your Education Details]</p>
//         <p>Experience: [Your Work Experience]</p>
//         <p>Hobbies: [Your Hobbies]</p>
//     </section>
    
//     <section id="projects">
//         <h2>My Projects</h2>
//         <div class="project-gallery">
//             <div class="project">
//                 <img src="project1.jpg" alt="Project 1">
//                 <p>Project 1 Description</p>
//             </div>
//             <div class="project">
//                 <img src="project2.jpg" alt="Project 2">
//                 <p>Project 2 Description</p>
//             </div>
//         </div>
//     </section>
    
//     <section id="contact">
//         <h2>Contact Me</h2>
//         <form id="contact-form">
//             <input type="text" id="name" placeholder="Your Name" required>
//             <input type="email" id="email" placeholder="Your Email" required>
//             <textarea id="message" placeholder="Your Message" required></textarea>
//             <button type="submit">Send Message</button>
//         </form>
//     </section>

//     <footer>
//         <p>&copy; 2025 [Your Name]. All rights reserved.</p>
//     </footer>

//     <script>
//         document.getElementById("contact-form").addEventListener("submit", function(event) {
//             event.preventDefault(); // Prevent the form from submitting
//             const name = document.getElementById("name").value;
//             const email = document.getElementById("email").value;
//             const message = document.getElementById("message").value;
            
//             // Simple form validation
//             if (name && email && message) {
//                 alert("Thank you for reaching out! I'll get back to you soon.");
//             } else {
//                 alert("Please fill out all fields.");
//             }
//         });
//     </script>
// </body>
// </html>

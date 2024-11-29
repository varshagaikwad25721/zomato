
import './App.css';
import Hotel from './component/Hotel';

import Search from './component/Search';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
const Home = () => <h1> home page</h1>;
const AddResto = () => <h1> Add Restaurant page</h1>;
const Login = () => <h1> login page</h1>;
const Sign = () => <h1> sign page</h1>;

function App() {
  return (
    
    <div>
        <Router>
         <header>
     <div class="logo">
         <h1><i>Zomato</i></h1>
     </div>
     <nav>
         <ul>
             {/* <li><a href="#addResto">Add Restaurant</a></li>
             <li><a href="#products">Login</a></li>
             <li><a href="#about">Sign Up</a></li>
             <li><a href="#contact">Get the App</a></li> */}
              <li><Link to="/">Home</Link></li>
              <li><Link to="/AddResto">Add Restaurant</Link></li>
                <li><Link to="/Login">Login</Link></li>
                    <li><Link to="/Sign">Sign Up</Link></li>
         </ul>
     </nav>
 </header>
 <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/AddResto" element={<AddResto />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Sign" element={<Sign />} />
            </Routes>
 </Router>

 {/* <section id="home" class="hero">
    
     <h2>Welcome to Our Cloth Store</h2>
     <p>Find the best fashion for every season.</p>
     <a href="#products" class="btn">Shop Now</a>
 </section>


 <section id="products" class="products-section">
     <h2>Our Products</h2>
     <div class="products">
         <div class="product">
             <img src="https://img2.junaroad.com/uiproducts/19944562/std_300_1-1686112509.jpg" alt="Product 1"/>
             <h3>Casual Shirt</h3>
             
         </div>
         <div class="product">
             <img src="https://rukminim2.flixcart.com/image/850/1000/xif0q/dress/h/k/g/l-lw-9102-b-tilton-original-imagjup95gdv5cec.jpeg?q=90&crop=false" alt="Product 2"/>
             <h3>Elegant Dress</h3>
             
         </div>
         <div class="product">
             <img src="https://i5.walmartimages.com/seo/Florida-T-shirts-for-Men-FL-State-USA-Graphic-Novelty-Souvenir-Gift_667911ff-15a8-44ac-8ca4-bc5dc5b2a263.5dca57c90874f27da84d5400e2616d06.jpeg" alt="Product 3"/>
             <h3>Summer T-shirt</h3>
             
         </div>
         <div class="product">
             <img src="https://assets.ajio.com/medias/sys_master/root/20230214/Vbwh/63eb62c8f997dde6f4a423cf/-1117Wx1400H-469194569-midblue-MODEL.jpg" alt="Product 4"/>
             <h3>Jeans</h3>
             
         </div>
     </div>
 </section>

 <section id="about" class="about-section">
     <div class="container">
         <h2>About Our Store</h2>
         <p>Welcome to <strong>Fashion Store</strong>, your one-stop shop for the latest in fashion. We are committed to bringing you stylish, high-quality clothing that meets your every need, from casual to formal wear.</p>
         <p>Founded in 2010, Fashion Store has grown from a small boutique into a trusted brand known for our attention to detail, exceptional customer service, and a carefully curated selection of apparel. Our mission is to make fashion accessible to everyone while maintaining a focus on sustainability and ethical practices.</p>
         
         <h3>Our Values</h3>
         <ul>
             <li><strong>Quality:</strong> We believe in providing durable and high-quality fabrics that last.</li>
             <li><strong>Style:</strong> We stay ahead of the trends to offer you the latest in fashion.</li>
             <li><strong>Customer Satisfaction:</strong> Your happiness is our top priority, and we work hard to ensure you have a seamless shopping experience.</li>
             <li><strong>Sustainability:</strong> We are committed to sourcing eco-friendly materials and supporting ethical manufacturing processes.</li>
         </ul>
 
         <p>Thank you for choosing Cloth Store. We look forward to helping you look and feel your best!</p>
     </div>
 </section>

 <section id="contact" class="contact-section">
     <h2>Contact Us</h2>
     <form>
         <label for="name">Name:</label>
         <input type="text" id="name" name="name" required/>

         <label for="email">Email:</label>
         <input type="email" id="email" name="email" required/>

         <label for="message">Message:</label>
         <textarea id="message" name="message" required></textarea>

         <button type="submit">Send Message</button>
     </form>
 </section> */}
 <Search/>
  <Hotel/>
 <footer>
     <p>&copy; 2024 Zomato. All rights reserved.</p>
 </footer>

    </div>
  );
}

export default App;

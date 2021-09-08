import fastfood from './fast-food.jpg';
import chinesefood from './chinese-food.jpg';
import indianfood from './indian-food.jpg';
import Sushi from './Sushi.jpg';
import Dominos from './Dominos.jpg';
import highon from './HighOn.jpg';
import Momos from './Momos.jpg';
import wrap from './Wrap.jpg';
import './App.css';
import { waitForDomChange } from '@testing-library/react';

function App() {
  return (
    <div>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link rel="stylesheet" href="Foodie.css" />
          <link href="https://css.gg/facebook.css" rel="stylesheet" />
          <link href="https://css.gg/instagram.css" rel="stylesheet" />
          <link href="https://css.gg/google.css" rel="stylesheet" />
          <link href="https://css.gg/search.css" rel="stylesheet" />
          <link href="https://css.gg/add-r.css" rel="stylesheet" />
          <title>Foodie</title>
          <header>
            <nav>
              <div className="nav">
                {/*  <img src="images/logo.png" alt="logo" width="40px"> */}
                <a href="#">Home</a>
                <a href="#" className="nav-item">About</a>
                <a href="#" className="nav-item">Track Order</a>
              </div>
              <div className="search-area">
                <input type="text" className="search-bar" placeholder="Enter Your Delivery Location =" />
                <div>
                  <button><i className="gg-search" /></button>
                </div>
              </div>
              <div className="nav">
                <a href="#" className="nav-item">Log In</a>
                <a href="#" className="nav-item">Sign Up</a>
              </div>
            </nav>
          </header>
          <div className="starting-point">
            <div>
              Get Your Food On Foodie
              <br /><br />
            </div>
          </div>
          <div className="Food-area">
            <div className="Collection">
              <h2>Available Food At Your Near Location</h2>
            </div>
            <div className="food-menu">
              <div className="food">
              <img src={fastfood} />
                <p>Fast Food</p>
              </div>
              <div className="food">
                <img src={indianfood} />
                <p>Indian Food</p>
              </div>
              <div className="food">
              <img src={Sushi} />
                <p>Sushi</p>
              </div>
              <div className="food">
              <img src={chinesefood} />
                <p>Chinese Food</p>
              </div>
            </div>
          </div>
          <div className="Collection">
            <h2>Trending Food</h2>
          </div>
          <div className="Trending-food">
            <div className="Tfood">
              <img src={Dominos} alt="" />
              <div>
                <h3> Domionos' Pizza</h3>
                <button><i className="gg-add-r" /></button>
              </div>
            </div>
            <div className="Tfood">
              <img src={highon} alt="" />
              <div>
                <h3> High On Desserts</h3>
                <button><i className="gg-add-r" /></button>
              </div>
            </div>
            <div className="Tfood">
              <img src={Momos} alt="" />
              <div>
                <h3> Momo's</h3>
                <button><i className="gg-add-r" /></button>
              </div>
            </div>
            <div className="Tfood">
              <img src={wrap} alt="" />
              <div>
                <h3> Wrap &amp; Roll</h3>
                <button><i className="gg-add-r" /></button>
              </div>
            </div>
          </div>
          <h2 className="Collection">Cities We Deliver To</h2>
          <div className="Cities">
            <div className="City-name"><a href="#">Mumbai</a></div>
            <div className="City-name"><a href="#">Dehli</a></div>
            <div className="City-name"><a href="#">Kolkata</a></div>
            <div className="City-name"><a href="#">Jaipur</a></div>
            <div className="City-name"><a href="#">Agra</a></div>
            <div className="City-name"><a href="#">Bhopal</a></div>
            <div className="City-name"><a href="#">Patna</a></div>
            <div className="City-name"><a href="#">Patna</a></div>
            <div className="City-name"><a href="#">Indore</a></div>
            <div className="City-name"><a href="#">Pune</a></div>
          </div>
          <footer>
            <div className="footer">
              <div className="left-side">
                <div>
                  <a href="#">Privacy</a>
                </div>
                <div>
                  <a href="#">Policy</a>
                </div>
                <a href="#">Feedback</a>
              </div>
              <div>
                <div className="Social-media">
                  <div>
                    <h3>Follow Us</h3>
                  </div>
                  <div className="Social-btn">
                    <i className="gg-facebook" />
                  </div>
                  <div className="Social-btn">
                    <i className="gg-instagram" />
                  </div>
                  <div className="Social-btn">
                    <i className="gg-google" />
                  </div>
                </div>
              </div>
              <div>
                <h3>Copyright@2020 </h3>
              </div>
            </div>
          </footer>
        </div>
  );
}

export default App;

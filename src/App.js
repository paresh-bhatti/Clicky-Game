import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import SignImage from "./components/SignImage";
import Footer from "./components/Footer";
import Sign from "./Sign.json";

//sets state to 0 or empty
class App extends Component {
  state = {
    Sign,
    clickedSign: [],
    score: 0
  };

//when you click on a card ... the Sign is taken out of the array
  imageClick = event => {
    const currentSign = event.target.alt;
    const SignAlreadyClicked =
      this.state.clickedSign.indexOf(currentSign) > -1;

//if you click on a Sign that has already been selected, the game is reset and cards reordered
    if (SignAlreadyClicked) {
      this.setState({
        Sign: this.state.Sign.sort(function(a, b) {
          return 0.5 - Math.random();
        }),
        clickedSign: [],
        score: 0
      });
        alert("You lose. Play again?");

//if you click on an available Sign, your score is increased and cards reordered
    } else {
      this.setState(
        {
          Sign: this.state.Sign.sort(function(a, b) {
            return 0.5 - Math.random();
          }),
          clickedSign: this.state.clickedSign.concat(
            currentSign
          ),
          score: this.state.score + 1
        },
//if you get all 12 Sign corrent you get a congrats message and the game resets        
        () => {
          if (this.state.score === 12) {
            alert("Nice! You Win!");
            this.setState({
              Sign: this.state.Sign.sort(function(a, b) {
                return 0.5 - Math.random();
              }),
              clickedSign: [],
              score: 0
            });
          }
        }
      );
    }
  };

//the order of components to be rendered: navbar, jumbotron, signimage, footer 
  render() {
    return (
      <div>
        <Navbar 
          score={this.state.score}
        />
        <Jumbotron />
        <div className="wrapper">
          {this.state.Sign.map(Sign => (
            <SignImage
              imageClick={this.imageClick}
              id={Sign.id}
              key={Sign.id}
              image={Sign.image}
            />
          ))}
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;

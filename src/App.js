import React, { Component } from 'react';
import Card from './components/Card.js';
import './App.css';

var thoughts = [
    {
      text: "first thought.."
    },
    {
      text: "first thought.."
    },
    {
      text: "first thought.."
    },
    {
      text: "first thought.."
    },
    {
      text: "first thought.."
    }
];
class App extends Component {
  render() {
    var thoughts
    return (
      <div className="App">
        <div className="row header">
          <div className="row ">
            <div className="col-md-4"></div>
            <div className="col-md-4 cards-cont">
              <div className="row logo-header">
                <h2>MUSING</h2>
              </div>

              <div className="row">
                <form>
                  <div className="form-group new-thought row">
                    <label htmlFor="new-thought-inp">   Write your inner muse...</label>
                    <textarea className="form-control" id="new-thought-inp" rows="3"></textarea>
                  </div>
                </form>
              </div>
              <div className="row all-thoughts">
                <Card/>
                <Card/>
                <Card/>
                <Card/>
              </div>
            </div>
            <div className="col-md-4"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

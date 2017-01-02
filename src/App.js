import React, { Component } from 'react';
import Card from './components/Card.js';
import $ from 'jquery';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {thought : []};
    console.log("from constructor")
  }

  componentDidMount(){
    console.log("componentDidMount()");

  }

  componentWillMount(){
    console.log("componentWillMount");
    $.ajax({
      url: "https://luminous-inferno-7529.firebaseio.com/thoughts.json",
      type: "GET",             // Type of request to be send, called as method
      crossDomain: true,
      dataType: "json",
      data: "", // Data sent to server, a set of key/value pairs (i.e. form fields and values)
      success: function(data){   // A function to be called if request succeeds
        this.setState({thought: data});
        for (var i = 0; i < data.length; i++) {
          console.log(data[i].content.desc)
        }
      }.bind(this)
    });
  }

  render() {
    var thts = [];
    var thoughts = this.state.thought;
    for (var i = 0; i < thoughts.length; i++) {
      thts.push(thoughts[i].content.desc);
      console.log(thts[i] + " from for loop ");
    }
    console.log(thts.length);
    let allThoughts = (
      <div>
        {thts.map(function(thought, index){
          return (
            <Card thoughtDesc={thought}/>
          )
        })}
      </div>
    );
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
                {allThoughts}
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

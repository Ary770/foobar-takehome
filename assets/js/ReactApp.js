import React, { Component } from 'react';
import axios from "axios"

class ReactApp extends Component {
    constructor() {
      super();
      this.state = { message: '' };
    }

    fooBarHandler(fooBar) {
      let params = ''
      if (Array.isArray(fooBar)) {
        params = `${fooBar[0]}=true&${fooBar[1]}=true`
      } else {
        params = `${fooBar}=true`
      }

      axios.get(`http://localhost:4000/api/fizzbuzz/?${params}`)
        .then((response) => {
          this.setState({ message: response.data.message });
          console.log(this.state);
        })
        .catch((error) => {
          console.log(error)
        });
    }

    render() {
      return (
          <div className="App">
              <h1>Papa - Fullstack Engineer Takehome Assignment</h1>
              <p>Welcome to the takehome assignment for fullstack engineers at Papa. We hope you have fun doing this assignment!</p>
              <p><strong>Time Limit: 1 hour</strong></p>
              <p><strong>Skills tested: React knowledge, and backend knowledge (any language)</strong></p>

              <hr />

              <p>Here's what we <strong>do care</strong> about in this assignment:</p>
              <ul>
                  <li>Proper functionality - are you actually solving what the problem is?</li>
                  <li>Code cleanliness</li>
                  <li>Conventions</li>
                  <li>Logic</li>
                  <li>Source control using Git</li>
              </ul>

              <p>Here's what we <strong>don't care</strong> about in this assignment:</p>
              <ul>
                  <li>Design</li>
                  <li>Tests</li>
              </ul>

              <hr />

              <p><strong>Your task:</strong></p>

              <p>Add a new backend endpoint with the following signature GET /api/fizzbuzz, it will
              take two query parameters foo and bar. If foo is passed and true call
              fooFunction(), else if bar is passed and true call barFunction(). If both are passed and true call fooBarFunction()
              and render the output in the box below</p>

              <p>Add 3 buttons here in the UI. One for foo, one for bar, and one for foobar to the react client. Then hit
                  the appropriate endpoint on click with the correct parameters.
              </p>

              <p><strong>UI Buttons:</strong></p>

              <div className='row'>
                <button onClick={ (event) => this.fooBarHandler('foo') }>Foo</button>

                <button onClick={ (event) => this.fooBarHandler('bar') }>Bar</button>

                <button onClick={ (event) => this.fooBarHandler(['foo', 'bar']) }>FooBar</button>
              </div>

              <p><strong>API request result:</strong> <span>{ this.state.message }</span> </p>

          </div>
      );
    }

}

export default ReactApp;

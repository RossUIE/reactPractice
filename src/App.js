import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';



class App extends Component {

state = {
 persons: [
   { Name: 'Max', age: 28 },
   { name: 'Ross', age: 20 },
   { name: 'ross2', age: 30 }
 ]
}

switchNameHandler= () => {

   this.setState({ persons: [
    { Name: 'Maximillion!', age: 28 },
    { name: 'Ross', age: 20 },
    { name: 'ross2', age: 32 }
  ]
})
}

  render() {

    return (
<div className="App">

    <h1>This is a React app</h1>
    <h3>Sub heading</h3>
    <Person 
    name={ this.state.persons[0].Name} 
    age={ this.state.persons[0].age } 
    click={ this.switchNameHandler}>hi
    </Person>

    <button onClick={ this.switchNameHandler }>Switch name</button>

    <Person 
    name={ this.state.persons[1].name } 
    age={ this.state.persons[1].age }/>

    <Person name="Ross3" age="30"/>

</div>



    );





//return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'React App'));





   
    //return (
      
      // <div>


      

     

      // <div className="App">
      
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h1 className="App-title">Welcome to React</h1>
      //   </header>
      //   <p className="App-intro">
      //     To get started, edit <code>src/App.js</code> and save to reload.
      //   </p>
      //   <p>welcome to the react world</p>
        
      // </div>



      // </div>
    //);
  }
}

export default App;

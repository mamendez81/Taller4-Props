import React from "react";
import Table from "./Table";

class App extends React.Component {
    render(){
      const characters = [
        {
          name: 'John',
          job: 'Swithery'
        },
        {
          name: 'Clyde',
          job: 'Carpenter'
        },
        {
          name: 'Wanda',
          job: 'Enginer'
        },
        {
          name: 'Claudia',
          job: 'Manager'
        }
      ];
        
      return (
        <div className='container'>
          <Table characters={characters}/>
        </div>
      );
    }
  }

  export default App;
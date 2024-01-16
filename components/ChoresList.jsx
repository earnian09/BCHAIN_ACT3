import React from 'react';
import Classes from "./ChoresList.module.css";

class ChoresList extends React.Component {
    render() {
      return (
        <div className={Classes.div}>
            <h2>Todo List</h2>
            <ul>
                <li>Clean Porch</li>
                <li>Wash Car</li>
                <li>Attend BCHAIN Class</li>
            </ul>
        </div>
      );
    }
  }

  export default ChoresList

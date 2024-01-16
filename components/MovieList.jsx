import React from 'react';
import Classes from "./MovieList.module.css";


class MovieList extends React.Component {
    render() {
      return (
        <div className={Classes.div}>
            <h2>Movie List</h2>
            <ul>
                <li>CARS</li>
                <li>CARS 2</li>
                <li>CARS 3</li>
            </ul>
        </div>
      );
    }
  }

export default MovieList
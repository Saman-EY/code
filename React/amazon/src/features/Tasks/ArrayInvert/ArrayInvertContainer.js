import React, {Component} from 'react';
import ArrayInvert from "./ArrayInvert";

const ARRAY = [1,2,3,4,5,6,7,8,9];

class ArrayInvertContainer extends Component {

  /**
   * Methode, welche ein Array MIT Hilfe eines zweiten Array invertiert.
   * @param array
   */
  invertWithArray = (array) => {
    return array;
  }


  /**
   * Methode, welche ein Array OHNE Hilfe eines zweiten Array invertiert.
   * @param array
   */
  invertWithoutArray = (array) => {
    return array;
  }

  render() {
    return (
      <ArrayInvert
        array={ARRAY}
        arrayWithHelperArray={this.invertWithArray([...ARRAY])}
        arrayWithoutHelperArray={this.invertWithoutArray([...ARRAY])}
      />
    );
  }
}

export default ArrayInvertContainer;


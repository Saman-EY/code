import React from "react";
import PropTypes from "prop-types";

import Task from "../../../components/Task/Task";

import Styles from "../InvertString/InvertString.module.css";
import routes from "../../../routes";

const Strings = {
  TITLE: "8) Key Values",
  TASK: "Create a function that takes an object and returns the keys and values as separate arrays. Return the keys sorted alphabetically, and their corresponding values in the same order ",
  STRING: "Ausgangsstring",
  INVERT_LOOP: "Mit Schleife",
  INVERT_RECURSIV: "Mit Rekursion",
};

const KeyValues = () => {
  const [show, setShow] = React.useState(false);
  return (
    <Task
      route={routes.Tasks.keyValues}
      title={Strings.TITLE}
      task={Strings.TASK}
    >
      <div className={Styles.root}>
        <div className={Styles.solution}>
          <div className={Styles.container}>
            <div>
              <button onClick={() => setShow(!show)}>
                <div className={Styles.title}>{`Solution:`}</div>
              </button>
              {show ? (
                <p>
                  {`
                          function keysAndValues(obj) {
                            var keys = Object.keys(obj);
                            return [keys, keys.map( key => obj[key] )];
                          } 
                        `}
                </p>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </Task>
  );
};

// KeyValues.propTypes = {
//   string: PropTypes.string.isRequired,
//   loopInvertedString: PropTypes.string.isRequired,
//   recursivInvertedString: PropTypes.string.isRequired,
// };

export default KeyValues;

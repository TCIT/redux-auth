import React, { PropTypes } from "react";
import * as Colors from "material-ui/styles/colors";
import AlertError from "material-ui/svg-icons/alert/error";
import Immutable from "immutable";

class ErrorList extends React.Component {
  static propTypes = {
    errors: PropTypes.object
  };

  static defaultProps = {
    errors: Immutable.fromJS([])
  };

  renderErrorList () {
    let errorCount = (this.props.errors || Immutable.fromJS([])).size;

    if (errorCount > 0) {
      // pluralize message
      const errorWord = (errorCount === 1) ? "el siguiente error" : "los siguientes errores";

      return (
        <div className="has-error">
          <p>Por favor corrige {errorWord}:</p>
          {this.props.errors.map((err, i) => {
            return (
              <p
                key={i}
                className="control-label modal-error-item"
                style={{paddingLeft: "20px", position: "relative"}}>

                <AlertError
                  viewBox="0 0 50 50"
                  color={Colors.red500}
                  style={{
                    position: "absolute",
                    left: 0,
                    top: 3}} /> {err}
              </p>
            );
          })}
        </div>
      );
    } else {
      return (
        <p style={{paddingLeft: "20px", position: "relative"}}>
          <AlertError
            viewBox="0 0 50 50"
            style={{
              position: "absolute",
              left: 0,
              top: 3}}
            color={Colors.red500} /> Por favor revisa los valores de los campos e intenta de nuevo
        </p>
      );
    }
  }

  render () {
    return (
      <div className="auth-error-message">
        {this.renderErrorList()}
      </div>
    );
  }
}

export default ErrorList;

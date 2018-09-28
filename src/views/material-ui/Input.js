import React from "react";
import * as Colors from "@material-ui/core/colors";
import { TextField } from "@material-ui/core";
import Error from "@material-ui/icons/Error";
import Immutable from "immutable";
import {MuiThemeProvider} from '@material-ui/core/styles';

class AuthInput extends React.Component {

  static defaultProps = {
    label: "",
    value: null,
    errors: Immutable.fromJS([])
  };

  handleInput(ev) {
    ev.preventDefault();
    this.props.onChange(ev.target.value);
  }

  renderErrorList() {
    if (this.props.errors.size) {
      return (
        <div className='auth-error-message'>
          {this.props.errors.map((err, i) => {
            return (
              <p className="inline-error-item"
                style={{ paddingLeft: "20px", position: "relative", marginBottom: "28px" }}
                key={i}>
                <Error
                  viewBox="0 0 50 50"
                  color={Colors.red500}
                  style={{
                    position: "absolute",
                    left: 0,
                    top: 0
                  }} />
                {this.props.floatingLabelText} {err}
              </p>
            );
          })}
        </div>
      );
    } else {
      return null;
    }
  }

  render() {
    return (
      <MuiThemeProvider>
        <TextField
          fullWidth={true}
          id={this.props.className}
          {...this.props}
          errorText={this.renderErrorList()}
          onChange={this.handleInput.bind(this)} />
      </MuiThemeProvider>
    );
  }
}

export default AuthInput;

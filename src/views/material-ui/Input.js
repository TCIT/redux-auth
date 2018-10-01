import React from "react";
import * as Colors from "@material-ui/core/colors";
import {
  InputAdornment,
  FormHelperText,
  FormControl,
  InputLabel,
  Input
} from "@material-ui/core";
import { Error } from "@material-ui/icons";
import Immutable from "immutable";

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
    return Boolea(this.props.errors.size);
  }

  render() {
    const {
      disabled,
      onChange,
      errors,
      value,
      type
    } = this.props;

    console.log(this.props)
    return (
      <FormControl className={classes.formControl} error aria-describedby="component-error-text">
        <InputLabel htmlFor="email-sign">{floatingLabelText}</InputLabel>
        <Input
          id="email-sign"
          startAdornment={
            <InputAdornment>
              <Error />
            </InputAdornment>
          }
          onChange={onChange}
          disabled={disabled}
          value={value}
          type={type}
        />
        <FormHelperText id="email-sign-error">{errors}</FormHelperText>
      </FormControl>
    );
  }
}

export default AuthInput;

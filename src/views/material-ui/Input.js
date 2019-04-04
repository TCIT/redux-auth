import React from "react";
import Immutable from "immutable";
import InputAdornment from "@material-ui/core/InputAdornment"
import FormHelperText from "@material-ui/core/FormHelperText"
import FormControl from "@material-ui/core/FormControl"
import InputLabel from "@material-ui/core/InputLabel"
import Input from "@material-ui/core/Input"
import Error from "@material-ui/icons/Error";

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
    let errors = null;

    if (this.props.errors.size) {
      errors = this.props.errors.map(error => (
        <FormHelperText id="email-sign-error">{error}</FormHelperText>
      ));
    }

    return errors;
  }

  render() {
    const {
      floatingLabelText,
      disabled,
      onChange,
      value,
      type
    } = this.props;

    let errorConfig = {
      startAdornment: {},
      error: {}
    }

    if (this.props.errors.size) {
      errorConfig = {
        icon: {
          startAdornment: (
            <InputAdornment position="start">
              <Error />
            </InputAdornment>
          )
        },
        error: {
          error: true
        }
      };
    }

    console.log('props redux-auth', this.props)

    return (
      <FormControl fullWidth {...errorConfig.error}>
        <InputLabel htmlFor="email-sign">{floatingLabelText}</InputLabel>
        <Input
          id={`${floatingLabelText}-sign`}
          {...errorConfig.icon}
          onChange={this.handleInput.bind(this)}
          disabled={disabled}
          value={value || ''}
          type={type}
        />
        {this.renderErrorList()}
      </FormControl >
    );
  }
}

export default AuthInput;

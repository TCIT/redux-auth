import React from "react";
import Input from "./Input";
import ButtonLoader from "./ButtonLoader";
import Lock from "@material-ui/icons/Lock";
import { updatePassword, updatePasswordFormUpdate } from "../../actions/update-password";
import { connect } from "react-redux";

class UpdatePasswordForm extends React.Component {

  static defaultProps = {
    inputProps: {
      password: {},
      passwordConfirmation: {},
      submit: {}
    }
  };

  getEndpoint() {
    return (
      this.props.endpoint ||
      this.props.auth.getIn(["configure", "currentEndpointKey"]) ||
      this.props.auth.getIn(["configure", "defaultEndpointKey"])
    );
  }

  handleInput(key, val) {
    this.props.dispatch(updatePasswordFormUpdate(this.getEndpoint(), key, val));
  }

  handleSubmit(ev) {
    ev.preventDefault();
    let formData = this.props.auth.getIn(["updatePassword", this.getEndpoint(), "form"]).toJS();
    this.props.dispatch(updatePassword(formData, this.getEndpoint()));
  }

  getSignInButton(disabled) {
    const clonedElement = React.cloneElement(this.props.updatePasswordButton, {
      ...this.props.inputProps.submit,
      disabled,
      onClick: this.handleSubmit.bind(this)
    });

    return clonedElement ||
      <Button
        type="submit"
        style={{ float: "right" }}
        className='email-sign-in-submit'
        disabled={disabled}
        onClick={this.handleSubmit.bind(this)}
        {...this.props.inputProps.submit}
      >
        <ExitToApp />
        Sign In
      </Button>
  }

  render() {
    console.log('this.props', this.props)
    let endpoint = this.getEndpoint();
    let loading = this.props.auth.getIn(["updatePassword", endpoint, "loading"]);
    let disabled = (
      !this.props.auth.getIn(["user", "isSignedIn"]) || loading ||
      (this.props.auth.getIn(["user", "attributes", "provider"]) !== "email")
    );

    return (
      <form
        className="redux-auth update-password-form clearfix"
        onSubmit={this.handleSubmit.bind(this)}>
        <Input
          type="password"
          floatingLabelText="Contraseña"
          disabled={disabled}
          className="update-password-password"
          value={this.props.auth.getIn(["updatePassword", endpoint, "form", "password"])}
          errors={this.props.auth.getIn(["updatePassword", endpoint, "errors", "password"])}
          onChange={this.handleInput.bind(this, "password")}
          {...this.props.inputProps.password} />

        <Input
          type="password"
          floatingLabelText="Confirmar contraseña"
          className="update-password-password-confirmation"
          disabled={disabled}
          value={this.props.auth.getIn(["updatePassword", endpoint, "form", "password_confirmation"])}
          errors={this.props.auth.getIn(["updatePassword", endpoint, "errors", "password_confirmation"])}
          onChange={this.handleInput.bind(this, "password_confirmation")}
          {...this.props.inputProps.passwordConfirmation} />

        {this.getSignInButton(disabled)}
      </form>
    );
  }
}

export default connect((state) => ({ auth: state.get('auth') }))(UpdatePasswordForm);

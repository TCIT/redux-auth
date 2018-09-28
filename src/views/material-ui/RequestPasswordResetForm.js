import React from "react";
import Input from "./Input";
import ButtonLoader from "./ButtonLoader";
import { connect } from "react-redux";
import { Send } from "@material-ui/icons";
import {
  requestPasswordResetFormUpdate,
  requestPasswordReset
} from "../../actions/request-password-reset";

class RequestPasswordResetForm extends React.Component {

  static defaultProps = {
    inputProps: {
      email: {},
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
    this.props.dispatch(requestPasswordResetFormUpdate(this.getEndpoint(), key, val));
  }

  handleSubmit(event) {
    event.preventDefault();
    let formData = this.props.auth.getIn(["requestPasswordReset", this.getEndpoint(), "form"]).toJS();
    this.props.dispatch(requestPasswordReset(formData, this.getEndpoint()));
  }

  render() {
    let endpoint = this.getEndpoint();
    let loading = this.props.auth.getIn(["requestPasswordReset", endpoint, "loading"]);
    let inputDisabled = this.props.auth.getIn(["user", "isSignedIn"]);
    let submitDisabled = !this.props.auth.getIn(["requestPasswordReset", endpoint, "form", "email"]);

    return (
      <form
        className='redux-auth request-password-reset-form clearfix'
        style={{ clear: "both", overflow: "hidden" }}
        onSubmit={this.handleSubmit.bind(this)}>

        <Input
          type="text"
          floatingLabelText="Email Address"
          className="request-password-reset-email"
          disabled={loading || inputDisabled}
          value={this.props.auth.getIn(["requestPasswordReset", endpoint, "form", "email"])}
          errors={this.props.auth.getIn(["requestPasswordReset", endpoint, "errors", "email"])}
          onChange={this.handleInput.bind(this, "email")}
          {...this.props.inputProps.email} />

        <ButtonLoader
          loading={loading}
          type="submit"
          primary={true}
          icon={Send}
          style={{ float: "right" }}
          className="request-password-reset-submit"
          disabled={inputDisabled || submitDisabled}
          onClick={this.handleSubmit.bind(this)}
          {...this.props.inputProps.submit}>
          Request Password Reset
        </ButtonLoader>
      </form>
    );
  }
}

export default connect((state) => ({ auth: state.get('auth') }))(RequestPasswordResetForm);

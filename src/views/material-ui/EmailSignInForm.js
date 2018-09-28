import React from "react";
import Input from "./Input";
import { emailSignInFormUpdate, emailSignIn } from "../../actions/email-sign-in";
import { ExitToApp } from '@material-ui/icons';
import { connect } from "react-redux";
import { Button, CircularProgress } from "@material-ui/core";

class EmailSignInForm extends React.Component {


  static defaultProps = {
    next: () => { },
    inputProps: {
      email: {},
      password: {},
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
    this.props.dispatch(emailSignInFormUpdate(this.getEndpoint(), key, val));
  }

  handleSubmit(event) {
    event.preventDefault();
    let formData = this.props.auth.getIn(["emailSignIn", this.getEndpoint(), "form"]).toJS();
    this.props.dispatch(emailSignIn(formData, this.getEndpoint()))
      .then(this.props.next)
      .catch(() => { });
  }

  render() {
    let disabled = (
      this.props.auth.getIn(["user", "isSignedIn"]) ||
      this.props.auth.getIn(["emailSignIn", this.getEndpoint(), "loading"])
    );

    const loading = this.props.auth.getIn(["emailSignIn", "loading"]);
    return (
      <form className='redux-auth email-sign-in-form'
        style={{ clear: "both", overflow: "hidden" }}
        onSubmit={this.handleSubmit.bind(this)}>
        <Input type="text"
          className="email-sign-in-email"
          ref="emailSignInEmail"
          floatingLabelText="Email"
          disabled={disabled}
          value={this.props.auth.getIn(["emailSignIn", this.getEndpoint(), "form", "email"])}
          errors={this.props.auth.getIn(["emailSignIn", this.getEndpoint(), "errors", "email"])}
          onChange={this.handleInput.bind(this, "email")}
          {...this.props.inputProps.email} />

        <Input type="password"
          floatingLabelText="Password"
          className="email-sign-in-password"
          disabled={disabled}
          value={this.props.auth.getIn(["emailSignIn", this.getEndpoint(), "form", "password"])}
          errors={this.props.auth.getIn(["emailSignIn", this.getEndpoint(), "errors", "password"])}
          onChange={this.handleInput.bind(this, "password")}
          {...this.props.inputProps.password} />

        <div>
          <Button
            type="submit"
            style={{ float: "right" }}
            icon={ExitToApp}
            className='email-sign-in-submit'
            disabled={disabled}
            onClick={this.handleSubmit.bind(this)}
            primary={true}
            {...this.props.inputProps.submit}>
              Sign In
            </Button>
          {loading && <CircularProgress size={24} className={classes.buttonProgress} />}
        </div>
      </form>
    );
  }
}

export default connect((state) => ({ auth: state.get('auth') }))(EmailSignInForm);

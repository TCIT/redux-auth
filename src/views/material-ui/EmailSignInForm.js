import React from "react";
import { connect } from "react-redux";

import {
  CircularProgress,
  DialogContent,
  DialogTitle,
  Button,
  Dialog
} from "@material-ui/core";
import { ExitToApp } from '@material-ui/icons';

import Input from "./Input";
import { emailSignInFormUpdate, emailSignIn } from "../../actions/email-sign-in";

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
    const {
      endpoint,
      auth
    } = this.props;

    return (
      endpoint ||
      auth.getIn(["configure", "currentEndpointKey"]) ||
      auth.getIn(["configure", "defaultEndpointKey"])
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

  getSignInButton(disabled) {
    const clonedElement = React.cloneElement(this.props.signInButton, {
      onClick: this.handleSubmit.bind(this),
      ...this.props.inputProps.submit,
      disabled
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
    const {
      onClose,
      modal,
      title,
      open,
      auth
    } = this.props;

    const disabled = (
      auth.getIn(["user", "isSignedIn"]) ||
      auth.getIn(["emailSignIn", this.getEndpoint(), "loading"])
    );

    const loading = auth.getIn(["emailSignIn", "loading"]);

    let content = (
      <form className='redux-auth email-sign-in-form'
        style={{ clear: "both", overflow: "hidden" }}
        onSubmit={this.handleSubmit.bind(this)}>
        <Input
          type="text"
          className="email-sign-in-email"
          ref="emailSignInEmail"
          floatingLabelText="Email"
          disabled={disabled}
          value={auth.getIn(["emailSignIn", this.getEndpoint(), "form", "email"])}
          errors={auth.getIn(["emailSignIn", this.getEndpoint(), "errors", "email"])}
          onChange={this.handleInput.bind(this, "email")}
          {...this.props.inputProps.email}
        />

        <Input
          type="password"
          floatingLabelText="Password"
          className="email-sign-in-password"
          disabled={disabled}
          value={auth.getIn(["emailSignIn", this.getEndpoint(), "form", "password"])}
          errors={auth.getIn(["emailSignIn", this.getEndpoint(), "errors", "password"])}
          onChange={this.handleInput.bind(this, "password")}
          {...this.props.inputProps.password}
        />

        <div>
          {this.getSignInButton(disabled)}
          {loading && <CircularProgress size={24} className={classes.buttonProgress} />}
        </div>
      </form>
    )

    if (modal) {
      content = (
        <Dialog onClose={onClose} open={open}>
          <DialogTitle>{title}</DialogTitle>
          <DialogContent>
            {content}
          </DialogContent>
        </Dialog>
      );
    }

    return content;
  }
}

export default connect((state) => ({ auth: state.get('auth') }))(EmailSignInForm);

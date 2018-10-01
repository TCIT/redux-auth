import React from "react";
import { connect } from "react-redux";

import CircularProgress from "@material-ui/core/CircularProgress";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { ExitToApp } from '@material-ui/icons/ExitToApp';
import Button from "@material-ui/core/Button";
import Dialog from '@material-ui/core/Dialog';
import { MuiThemeProvider } from "@material-ui/core/styles";

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

  render() {
    const {
      customTheme,
      onClose,
      title,
      open,
      auth
    } = props;

    const disabled = (
      auth.getIn(["user", "isSignedIn"]) ||
      auth.getIn(["emailSignIn", this.getEndpoint(), "loading"])
    );

    const loading = auth.getIn(["emailSignIn", "loading"]);

    return (
      <MuiThemeProvider theme={customTheme}>
        <Dialog onClose={onClose} open={open}>
          <DialogTitle>{title}</DialogTitle>
          <DialogContent>
            <form className='redux-auth email-sign-in-form'
              style={{ clear: "both", overflow: "hidden" }}
              onSubmit={this.handleSubmit.bind(this)}>
              <Input type="text"
                className="email-sign-in-email"
                ref="emailSignInEmail"
                floatingLabelText="Email"
                disabled={disabled}
                value={auth.getIn(["emailSignIn", this.getEndpoint(), "form", "email"])}
                errors={auth.getIn(["emailSignIn", this.getEndpoint(), "errors", "email"])}
                onChange={this.handleInput.bind(this, "email")}
                {...this.props.inputProps.email} />

              <Input type="password"
                floatingLabelText="Password"
                className="email-sign-in-password"
                disabled={disabled}
                value={auth.getIn(["emailSignIn", this.getEndpoint(), "form", "password"])}
                errors={auth.getIn(["emailSignIn", this.getEndpoint(), "errors", "password"])}
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
                  {...this.props.inputProps.submit}
                >
                  Sign In
                </Button>
                {loading && <CircularProgress size={24} className={classes.buttonProgress} />}
              </div>

            </form>
          </DialogContent>
        </Dialog>
      </MuiThemeProvider>
    );
  }
}

export default connect((state) => ({ auth: state.get('auth') }))(EmailSignInForm);

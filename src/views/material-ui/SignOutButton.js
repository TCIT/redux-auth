import React from "react";
import ButtonLoader from "./ButtonLoader";
import { connect } from "react-redux";
import { signOut } from "../../actions/sign-out";

class SignOutButton extends React.Component {

  static defaultProps = {
    next: () => { }
  };

  getEndpoint() {
    return (
      this.props.endpoint ||
      this.props.auth.getIn(["configure", "currentEndpointKey"]) ||
      this.props.auth.getIn(["configure", "defaultEndpointKey"])
    );
  }

  handleClick() {
    this.props.dispatch(signOut(this.getEndpoint()))
      .then(this.props.next)
      .catch(() => { });
  }

  render() {
    let disabled = !this.props.auth.getIn(["user", "isSignedIn"]);

    return (
      <ButtonLoader
        loading={this.props.auth.getIn(["signOut", this.getEndpoint(), "loading"])}
        disabled={disabled}
        onClick={this.handleClick.bind(this)}
        {...this.props}
      />
    );
  }
}

export default connect((state) => ({ auth: state.get('auth') }))(SignOutButton);

import React from "react";
import ButtonLoader from "./ButtonLoader";
import { destroyAccount } from "../../actions/destroy-account";
import Delete from '@material-ui/icons/Delete';
import { connect } from "react-redux";

class DestroyAccountButton extends React.Component {

  static defaultProps = {
    children: <span>Destroy Account</span>,
    icon: Delete
  };

  getEndpoint() {
    return (
      this.props.endpoint ||
      this.props.auth.getIn(["configure", "currentEndpointKey"]) ||
      this.props.auth.getIn(["configure", "defaultEndpointKey"])
    );
  }

  handleClick() {
    this.props.dispatch(destroyAccount(this.getEndpoint()));
  }

  render() {
    let disabled = !this.props.auth.getIn(["user", "isSignedIn"]);
    return (
      <ButtonLoader
        loading={this.props.auth.getIn(["destroyAccount", this.getEndpoint(), "loading"])}
        icon={this.props.icon}
        disabled={disabled}
        primary={true}
        className="destroy-account-submit"
        onClick={this.handleClick.bind(this)}
        {...this.props} />
    );
  }
}

export default connect((state) => ({ auth: state.get('auth') }))(DestroyAccountButton);

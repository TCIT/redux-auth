import React from "react";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";
import ErrorList from "../ErrorList";
import { connect } from "react-redux";

class BaseModal extends React.Component {

  static defaultProps = {
    show: false,
    errorAddr: null,
    closeBtnLabel: "Ok",
    actions: []
  };

  close() {
    this.props.dispatch(this.props.closeAction());
  }

  getEndpoint() {
    return (
      this.props.endpoint ||
      this.props.auth.getIn(["configure", "currentEndpointKey"]) ||
      this.props.auth.getIn(["configure", "defaultEndpointKey"])
    );
  }

  getErrorList() {
    let [base, ...rest] = this.props.errorAddr;

    return (
      <ErrorList
        errors={this.props.auth.getIn([
          base, this.getEndpoint(), ...rest
        ])}
      />
    );
  }

  render() {
    let body = (this.props.errorAddr)
      ? this.getErrorList()
      : this.props.children;

    //   ...this.props.actions
    // ]}>
    // {body}

    return (
      <Dialog
        onClose={this.close.bind(this)}
        open={this.props.show}
      >
        <DialogTitle>{this.props.title}</DialogTitle>
        <DialogContent>{body}</DialogContent>
        <DialogActions>
          <Button
            key="close"
            className={`${this.props.containerClass}-close`}
            onClick={this.close.bind(this)}
          >
            {this.props.closeBtnLabel}
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default connect((state) => ({ auth: state.get('auth') }))(BaseModal);

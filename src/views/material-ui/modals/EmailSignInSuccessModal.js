import React from "react";
import Modal from "./Modal";
import { connect } from "react-redux";
import { hideEmailSignInSuccessModal } from "../../../actions/ui";

class EmailSignInSuccessModal extends React.Component {
  render () {
    return (
      <Modal
        {...this.props}
        title="Bienvenido"
        closeAction={hideEmailSignInSuccessModal}
        containerClass="email-sign-in-success-modal">
        <p>
          Has iniciado sesión
          como {this.props.auth.getIn(["user", "attributes", "email"])}.
        </p>
      </Modal>
    );
  }
}

export default connect((state) => ({ auth: state.get('auth') }))(EmailSignInSuccessModal);

import React from "react";
import { hideSignOutErrorModal } from "../../../actions/ui";
import Modal from "./Modal";

class SignOutErrorModal extends React.Component {
  render () {
    return (
      <Modal
        {...this.props}
        containerClass="sign-out-error-modal"
        title="Error de cierre de sesión"
        closeAction={hideSignOutErrorModal}>
        <p>
          Ocurrió un error en el servidor intentando cerrar la sesión.
          La información de tu cuenta ha sido borrada de este
          navegador, pero recomendamos iniciar sesión y cerrarla
          de nuevo para resolver cualquier problema.
        </p>
      </Modal>
    );
  }
}

export default SignOutErrorModal;

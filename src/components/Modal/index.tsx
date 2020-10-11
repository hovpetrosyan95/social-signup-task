import React from "react";
import Modal from "react-modal";
import GoogleLogin from "react-google-login";

import Close from "../../components/icons/Close";

import "./style.scss";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "30%",
    height: "50%",
    borderRadius: "12px",
    padding: "40px 20px",
  },
};

interface ModalProps {
  isModalOpen: boolean;
  changeModalStatus: any;
  registerUser: any;
}



const ModalComp = ({ isModalOpen, changeModalStatus, registerUser }: ModalProps) => {
  const responseGoogle = (response: any
    ) => {
      const name = response.profileObj.familyName + " " + response.profileObj.givenName; 
      registerUser({name, details: response })
      changeModalStatus();
    }
  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={() => changeModalStatus()}
      style={customStyles}
      contentLabel="Example Modal"
      ariaHideApp={false}
    >
      <div className="modal-content">
        <Close onClick={changeModalStatus} />
        <div className="title">Create an Account</div>
        <div className="description">
          By creating an account, you'll be able to go forward
        </div>
        <div className="sign-in-btns">
          <GoogleLogin
            clientId="985546593586-8t26h2r6v35ommijjc6t8bvm703catr8.apps.googleusercontent.com"
            buttonText="Sign up with Google"
            onSuccess={responseGoogle}
            cookiePolicy={"single_host_origin"}
          />
        </div>
      </div>
    </Modal>
  );
};

export default ModalComp;

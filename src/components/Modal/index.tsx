import React from "react";
import Modal from "react-modal";
import GoogleLogin from "react-google-login";
import FacebookLogin from "react-facebook-login";

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

const ModalComp = ({
  isModalOpen,
  changeModalStatus,
  registerUser,
}: ModalProps) => {
  const responseGoogle = (response: any) => {
    const name =
      response.profileObj.familyName + " " + response.profileObj.givenName;
    registerUser({ name, details: response });
    changeModalStatus();
  };

  const responseFacebook = (response: any) => {
    registerUser({ name: response.name, details: response });
    changeModalStatus();
  };

  const onGoogleFailure = (err: any) => {
    console.log(err);
  };

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
        {alert(process.env.REACT_APP_GID)}
        <div className="sign-in-btns">
          <GoogleLogin
            clientId={`${process.env.REACT_APP_GID}`}
            buttonText="Sign up with Google"
            onSuccess={responseGoogle}
            cookiePolicy={"single_host_origin"}
            onFailure={onGoogleFailure}
          />
          <br />
          <FacebookLogin
            appId={`${process.env.REACT_APP_FID}`}
            autoLoad={false}
            fields="name,email,picture"
            callback={responseFacebook}
            icon="fa-facebook"
            textButton="Sign up with Facebook"
            cssClass="facebook-button"
          />
        </div>
      </div>
    </Modal>
  );
};

export default ModalComp;

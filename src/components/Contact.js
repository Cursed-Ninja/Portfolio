import React from "react";
import { useState } from "react";
import { postMessage } from "../actions/postMessage";
import SendIcon from "@mui/icons-material/Send";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [hideSpan, setHideSpan] = useState({
    name: false,
    email: false,
    message: false,
  });

  const [messageState, setMessageState] = useState(0);
  const [errMsg, setErrMsg] = useState(null);

  const checkValidEmail = (email) => {
    const emailRegex =
      // eslint-disable-next-line no-useless-escape
      /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;

    if (!email) return false;

    if (email.length > 254) return false;

    const valid = emailRegex.test(email);
    if (!valid) return false;

    // Further checking of some things regex can't handle
    const parts = email.split("@");
    if (parts[0].length > 64) return false;

    const domainParts = parts[1].split(".");
    if (
      domainParts.some(function(part) {
        return part.length > 63;
      })
    )
      return false;

    return true;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setErrMsg(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      formData.name === "" ||
      formData.email === "" ||
      formData.message === ""
    ) {
      setErrMsg("All fields are required");
      return;
    }

    if (!checkValidEmail(formData.email)) {
      setErrMsg("Please enter a valid email");
      return;
    }
    setMessageState(1);
    const res = await postMessage(formData);
    if (res.status === 200) {
      setErrMsg("Message sent successfully!!!");
      setFormData({
        name: "",
        email: "",
        message: "",
      });

      setHideSpan({
        name: false,
        email: false,
        message: false,
      });
    } else {
      setErrMsg("Something went wrong");
    }

    setMessageState(0);
  };

  return (
    <>
      <h1>Contact</h1>
      <div className="contact-form">
        <form noValidate onSubmit={handleSubmit}>
          <div
            className={
              errMsg !== "Message sent successfully!!!"
                ? "error-msg"
                : "success-msg"
            }
          >
            {errMsg}
          </div>
          <label htmlFor="name">
            <input
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              placeholder=" "
              onBlur={() => {
                if (formData.name !== "")
                  setHideSpan({ ...hideSpan, name: true });
                else setHideSpan({ ...hideSpan, name: false });
              }}
            />
            <span className={!hideSpan.name ? "" : "hide"}>Name</span>
          </label>
          <label htmlFor="email">
            <input
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder=" "
              onBlur={() => {
                if (formData.email !== "")
                  setHideSpan({ ...hideSpan, email: true });
                else setHideSpan({ ...hideSpan, email: false });
              }}
            />
            <span className={!hideSpan.email ? "" : "hide"}>Email</span>
          </label>
          <label htmlFor="message">
            <textarea
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              placeholder=" "
              rows={15}
              onBlur={() => {
                if (formData.message !== "")
                  setHideSpan({ ...hideSpan, message: true });
                else setHideSpan({ ...hideSpan, message: false });
              }}
            />
            <span className={!hideSpan.message ? "" : "hide"}>Message</span>
          </label>
          <button type="submit" disabled={messageState}>
            {messageState ? (
              "Sending..."
            ) : (
              <>
                Send <SendIcon sx={{fontSize: "1rem"}}/>
              </>
            )}
          </button>
        </form>
      </div>
    </>
  );
};

export default Contact;

import {
  faEnvelope,
  faLock,
  faUser,
  faUserNinja,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import CustomerService from "../../api/customerService";
import Input from "../input/Input";
import "./LoginSignup.css";

const LoginSignup = ({ setUsername, setAuthorities }) => {
  let navigate = useNavigate();
  const initialValues = { email: "", password: "", userName: "", name: "" };
  const [action, setAction] = useState();
  const [formValues, setFormValues] = useState(initialValues);
  const [loginError, setloginError] = useState({});
  const [signupError, setSignupError] = useState({});
  const [formError, setformError] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const validateForm = (formValues) => {
    const errors = {};

    if (action === "Sign Up") {
      if (!formValues.email) errors.email = "Email is required";
      if (!formValues.password) errors.password = "Password is required";
      if (!formValues.password) errors.password = "Password is required";
      if (!formValues.password) errors.password = "Password is required";
    } else {
      if (!formValues.email) errors.email = "Email is required";
      if (!formValues.password) errors.password = "Password is required";
    }

    return errors;
  };

  function parseJwt(token) {
    if (!token) {
      return;
    }
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace("-", "+").replace("_", "/");
    return JSON.parse(window.atob(base64));
  }

  const loginuser = async (data) => {
    localStorage.setItem("email", data.email);
    await CustomerService.login(data)
      .then((response) => {
        let token = response.data;
        let userData = parseJwt(token);
        localStorage.setItem("token", token);
        localStorage.setItem("userName", userData.sub);
        localStorage.setItem("authroity", userData.role[0].authority);
        setUsername(userData.sub);
        setAuthorities(userData.role[0].authority);
        Swal.fire("SweetAlert2 is working!");
        navigate("/");
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const signupuser = (data) => {
    CustomerService.signup(data).then((response) => {
      console.log(response.status);
      if (response.status === 200) {
        setAction("Login");
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      }
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    if (action === "Sign Up") {
      const validateSignup = validateForm(formValues);
      setSignupError(validateSignup);
      if (Object.keys(signupError).length === 0) {
        try {
          console.log("Submitting signup form...");
          await signupuser(formValues);
          setFormValues(initialValues);
        } catch (error) {
          console.error(error);
        }
      }
    } else {
      console.log("Form Values:", formValues);
      const validateLogin = validateForm(formValues);
      setloginError(validateLogin);
      if (Object.keys(validateLogin).length === 0) {
        console.log("Submitting form...");
        loginuser(formValues);
      }
    }
  };

  return (
    <div className="login-container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action === "Login" ? (
          <div></div>
        ) : (
          <>
            <div className="input">
              <FontAwesomeIcon
                className="fa-icon"
                icon={faUser}
                style={{ color: "black" }}
              />
              <Input
                type={"text"}
                name="name"
                value={formValues.name}
                onChange={handleChange}
                placeholder={"Name"}
              />
              <b className="error-message">{signupError.name}</b>
            </div>

            <div className="input">
              <FontAwesomeIcon
                icon={faUserNinja}
                className="fa-icon"
                style={{ color: "black" }}
              />
              <Input
                type={"text"}
                name="userName"
                value={formValues.userName}
                onChange={handleChange}
                placeholder={"userName"}
              />
              <b className="error-message">{signupError.userName}</b>
            </div>
          </>
        )}

        <div className="input">
          <FontAwesomeIcon
            icon={faEnvelope}
            className="fa-icon"
            style={{ color: "black" }}
          />
          <Input
            type={"text"}
            name="email"
            value={formValues.email}
            onChange={handleChange}
            placeholder={"john@email.com"}
          />
          <b className="error-message">{loginError.email}</b>
        </div>

        <div className="input">
          <FontAwesomeIcon
            icon={faLock}
            className="fa-icon"
            style={{ color: "black" }}
          />
          <Input
            type={"password"}
            name="password"
            value={formValues.password}
            onChange={handleChange}
            placeholder={"password"}
          />
          <b className="error-message">{loginError.password}</b>
        </div>
      </div>
      {action === "Sign Up" ? (
        <div></div>
      ) : (
        <div className="forgot-password">
          {" "}
          <span> i forgot my password</span>
        </div>
      )}

      <div className="submit-container">
        {action === "Sign Up" ? (
          <div
            className={action === "Sign Up" ? "submit enter" : "submit"}
            onClick={handleSubmit}
          >
            Enter
          </div>
        ) : (
          <div
            className={action === "Login" ? "submit" : "submit"}
            onClick={() => {
              setAction("Sign Up");
              setloginError({});
            }}
          >
            Sign Up
          </div>
        )}

        {action === "Login" ? (
          <div
            className={action === "Login" ? "submit enter" : "submit"}
            onClick={handleSubmit}
          >
            Enter
          </div>
        ) : (
          <div
            className={action === "Sign Up" ? "submit" : "submit"}
            onClick={() => {
              setAction("Login");
              setloginError({});
            }}
          >
            Login
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginSignup;

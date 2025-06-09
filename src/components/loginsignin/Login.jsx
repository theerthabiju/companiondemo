import React, { useState } from "react";
import "../../assets/css/login/login.css";
import { useNavigate } from "react-router-dom";
import signinimg from "../../assets/images/signinimg.png";
import google from "../../assets/images/Google.png";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validate = () => {
    const newErrors = {};

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate();

    if (Object.keys(formErrors).length === 0) {
      console.log("Login Data:", formData);

      // ✅ Simulate login success and save user data
      const user = {
        id: "123", // Ideally this would come from your backend
        name: "Theertha",
        email: formData.email,
      };

      localStorage.setItem("user", JSON.stringify(user));

      // ✅ Navigate to profile page
      navigate("/profile");
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <section className="loginsection">
      <div className="login-page">
        <div className="container logincontainer">
          <div className="row g-3 loginpagerow">
            <div className="col-md-6 logincol1">
              <img
                src={signinimg}
                alt="login"
                className="img-fluid h-100 w-100 object-fit-cover"
              />
            </div>

            <div className="col-md-6 d-flex logincol2 align-items-center">
              <div className="login-content w-100 px-4">
                <h5 className="text-center mb-4 loginhead">Login</h5>

                <form onSubmit={handleSubmit} noValidate>
                  <div className="row logininputrow">
                    <div className="col-12 mb-3">
                      <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        className={`form-control ${
                          errors.email ? "is-invalid" : ""
                        }`}
                        value={formData.email}
                        onChange={handleChange}
                      />
                      {errors.email && (
                        <div className="invalid-feedback">{errors.email}</div>
                      )}
                    </div>
                    <div className="col-12 mb-4">
                      <input
                        type="password"
                        name="password"
                        placeholder="Enter your Password"
                        className={`form-control ${
                          errors.password ? "is-invalid" : ""
                        }`}
                        value={formData.password}
                        onChange={handleChange}
                      />
                      {errors.password && (
                        <div className="invalid-feedback">
                          {errors.password}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="mb-3 text-end">
                    <a href="#" className="termtext">
                      Forgot password?
                    </a>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-outline createaccountbtn w-100"
                  >
                    Login
                  </button>
                </form>

                <div className="text-center">
                  <button
                    className="text-primary createaccountbutton mt-2"
                    onClick={() => navigate("/signup")}
                  >
                    Create New account
                  </button>
                </div>

                <div className="row orregisterhead mt-2">
                  <div className="col-md-4">
                    <span className="loginline">
                      <hr />
                    </span>
                  </div>
                  <div className="col-md-4 text-center">
                    <span className="orregistertext text-center">
                      Or Register With
                    </span>
                  </div>
                  <div className="col-md-4">
                    <span className="loginline">
                      <hr />
                    </span>
                  </div>
                </div>

                <div className="row loginsourcerow">
                  <div className="col-md-12 text-center mt-3">
                    <button className="btn btn-outline w-100">
                      <img src={google} alt="googlelogo" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;

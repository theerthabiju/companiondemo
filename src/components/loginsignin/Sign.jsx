import React, { useState } from "react";
import "../../assets/css/login/login.css";
import loginimg from "../../assets/images/loginimg.png";
import google from "../../assets/images/Google.png";
import { useNavigate, Link } from "react-router-dom";

const Sign = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
  });

  const navigate = useNavigate()

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!formData.firstName.trim())
      newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.phone) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be 10 digits";
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
      console.log("Register Data:", formData);
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
    src={loginimg}
    alt="login"
    className="img-fluid h-100 w-100 object-fit-cover"
  />
</div>

          <div className="col-md-6 d-flex logincol2">
            <div className="login-content w-100 px-4">
              <h2>Create an account</h2>
              <p>
                Already have an account? <Link to={'/signin'}>Login</Link>
              </p>

              <form onSubmit={handleSubmit} noValidate>
                <div className="row logininputrow">
                  <div className="col-md-6 mb-3">
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      className={`form-control ${
                        errors.firstName ? "is-invalid" : ""
                      }`}
                      value={formData.firstName}
                      onChange={handleChange}
                    />
                    {errors.firstName && (
                      <div className="invalid-feedback">{errors.firstName}</div>
                    )}
                  </div>

                  <div className="col-md-6 mb-3">
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      className={`form-control ${
                        errors.lastName ? "is-invalid" : ""
                      }`}
                      value={formData.lastName}
                      onChange={handleChange}
                    />
                    {errors.lastName && (
                      <div className="invalid-feedback">{errors.lastName}</div>
                    )}
                  </div>

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

                  <div className="col-12 mb-3">
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      className={`form-control ${
                        errors.phone ? "is-invalid" : ""
                      }`}
                      value={formData.phone}
                      onChange={handleChange}
                    />
                    {errors.phone && (
                      <div className="invalid-feedback">{errors.phone}</div>
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
                      <div className="invalid-feedback">{errors.password}</div>
                    )}
                  </div>
                </div>

                <div className="form-check mb-3 text-start">
                  <input
                    className="form-check-input checkboxlogin"
                    type="checkbox"
                    id="terms"
                    required
                  />
                  <label className="form-check-label" htmlFor="terms">
                    I agree with the{" "}
                    <a href="#" className="termtext">
                      Terms and Conditions
                    </a>
                  </label>
                </div>

                <button
                  type="submit"
                  className="btn btn-outline createaccountbtn w-100"
                >
                  Create account
                </button>
              </form>

              <div className="row orregisterhead mt-2">
                <div className="col-md-4">
                  <span className="loginline">
                    {" "}
                    <hr />
                  </span>
                </div>
                <div className="col-md-4 text-center">
                  <span className="orregistertext">Or Register With</span>
                </div>
                <div className="col-md-4">
                  <span className="loginline">
                    {" "}
                    <hr />
                  </span>
                </div>
              </div>

              <div className="row loginsourcerow">
                <div className="col-md-12 text-center mt-3">
                    <button className="btn btn-outline w-100"><img src={google} alt="googlelogo" /></button>
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

export default Sign

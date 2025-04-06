import React from "react";
import FormInput from "../components/FormInput";
import { Link } from "react-router-dom";
import { useRegister } from "../hooks/useRegister";
import { useGoogleProvider } from "../hooks/useGoogleProvider";

function Register() {
  // const {
  //   data: _data,
  //   googleProvider,
  //   isPending: _isPending,
  // } = useGoogleProvider();
  const { data, isPending, register } = useRegister();
  const {
    isPending: _isPending,
    data: _data,
    googleProvider,
  } = useGoogleProvider();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get("email");
    const displayName = formData.get("displayName");
    const password = formData.get("password");
    register(email, displayName, password);
  };

  return (
    <section>
      <div className="login-register-wrapper">
        <div className="login-register-left-section hidden md:flex"></div>
        <div className="grid place-items-center login-register-left-section md:bg-none">
          <div className="overlay"></div>
          <form onSubmit={handleSubmit} className="w-96 relative z-20">
            <h2 className="login-register-title">Register</h2>
            <FormInput label="Email" name="email" type="email" />
            {/* second input */}
            <FormInput label="Diplay name:" name="displayName" type="text" />
            {/* password */}

            <FormInput label="Password" name="password" type="password" />
            <div className="flex items-center gap-5 mt-8 mb-8">
              {!isPending && (
                <button type="submit" className="btn btn-primary grow">
                  Register
                </button>
              )}
              {isPending && (
                <button
                  type="submit"
                  className="btn btn-primary grow btn-disabled"
                  disabled
                >
                  Loading...
                </button>
              )}
              {/* Google button */}
              {!_isPending && (
                <button
                  onClick={register}
                  type="button"
                  className="btn btn-secondary grow"
                >
                  Google
                </button>
              )}
              {_isPending && (
                <button
                  type="button"
                  className="btn btn-secondary grow"
                  disabled
                >
                  Loading...{" "}
                </button>
              )}
            </div>
            <p className="text-center opacity-75 text-white md:text-black">
              If you have account
              <Link className="link md:link-primary" to="/login">
                {""} Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Register;

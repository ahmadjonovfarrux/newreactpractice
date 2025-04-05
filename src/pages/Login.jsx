import React from "react";
import FormInput from "../components/FormInput";
import { Link } from "react-router-dom";
import { useLogin } from "../hooks/useLogin";
import { useGoogleProvider } from "../hooks/useGoogleProvider";

function Login() {
  const {
    data: _data,
    googleProvider,
    isPending: _isPending,
  } = useGoogleProvider();
  const { data, isPending, login } = useLogin();
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const email = formData.get("email");
    const password = formData.get("password");
    login(email, password);
  };
  return (
    <section>
      <div className="login-register-wrapper">
        <div className="login-register-left-section hidden md:flex"></div>
        <div className="grid place-items-center login-register-left-section md:bg-none">
          <div className="overlay"></div>
          <form className="w-96 relative z-20" onSubmit={handleSubmit}>
            <h2 className="login-register-title">Login</h2>
            <FormInput label="Email" name="email" type="email" />
            <FormInput label="Password" name="password" type="password" />
            {/* buttons */}
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
                  onClick={googleProvider}
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
              If you don't have account
              <Link className="link link-primary" to="/register">
                {""} Register
              </Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Login;

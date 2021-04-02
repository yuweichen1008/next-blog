import React, { useRef } from "react";
import { useRouter } from "next/router";
import Layout from "../components/Layout/Layout";

const SignInPage = () => {
  const router = useRouter();
  const emailInput = useRef();
  const passwordInput = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = emailInput.current.value;
    const password = passwordInput.current.value;

    const response = await fetch("/sessions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });

    if (response.ok) {
      return router.push("/private");
    }
  };

  return (
    <Layout>
        <form className="flex flex-1 flex-col max-w-full mx-auto ml-60" onSubmit={handleSubmit}>
            <div>
                <label>
                Email: <input type="text" ref={emailInput} />
                </label>
            </div>
            <div>
                <label>
                Password: <input type="password" ref={passwordInput} />
                </label>
            </div>
            <div>
                <button type="submit">Sign in</button>
            </div>
        </form>
    </Layout>
  );
};

export default SignInPage;
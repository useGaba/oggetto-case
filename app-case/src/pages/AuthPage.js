import React, { useState } from "react";
import { authService } from "../api/services/authService";
import { storageService } from "../api/services/storageService";

function AuthPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const changeEmail = (e) => {
    setEmail(e.target.value);
  };

  const changePassword = (e) => {
    setPassword(e.target.value);
  };

  const login = async () => {
    try {
      const response = await authService.login(email, password);
      storageService.login();
    } catch (err) {
      console.log(err);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    login();
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <div>Login</div>
        <input type="text" value={email} onChange={changeEmail} />
      </div>
      <div>
        <div>Password</div>
        <input type="text" value={password} onChange={changePassword} />
      </div>
      <button>Войти</button>
    </form>
  );
}

export default AuthPage;

import { useContext, useEffect } from "react";
import { UserContext } from "../../UserContext";
import NavBar from "../NavBar/NavBar";

export default function ProfilePage() {
  const { getCurrentUserInfo, currentUser } = useContext(UserContext);
  const { firstName, lastName, phoneNumber, email } = currentUser;

  useEffect(() => {
    if (!currentUser) {
      getCurrentUserInfo();
    }
  }, []);

  if (!currentUser) return;

  return (
    <>
      <h1>Profile Settings</h1>
      <NavBar />
      <form onSubmit={null}>
        <label htmlFor="firstName">First name</label>
        <input
          type="name"
          id="firstName"
          name="firstName"
          defaultValue={firstName}
          onChange={null}
          required
        />
        <label htmlFor="lastName">Last name</label>
        <input
          type="name"
          id="lastName"
          name="lastName"
          defaultValue={lastName}
          onChange={null}
          required
        />
        <label htmlFor="phone">Phone number</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          defaultValue={phoneNumber}
          onChange={null}
          required
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          defaultValue={email}
          onChange={null}
          required
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          onChange={null}
          required
        />
        <label htmlFor="password2">Confirm password</label>
        <input
          type="password"
          id="password2"
          name="password2"
          onChange={null}
          required
        />
        <div
          className="alert"
          style={{ visibility: null ? "visible" : "hidden" }}>
          Passwords don't match
        </div>
        <button type="submit">Sign me up</button>
      </form>
    </>
  );
}

import { useContext, useEffect } from "react";
import { AuthenticationContext } from "../../AuthenticationContext";
import NavBar from "../NavBar/NavBar";

export default function ProfileSettings() {
  document.title = "Profile Settings";

  const {
    getCurrentUserInfo,
    currentUser,
    firstName,
    handleFirstNameChange,
    lastName,
    handleLastNameChange,
    phoneNumber,
    handlePhoneNumberChange,
    email,
    handleEmailChange,
    handlePasswordChange,
    handleConfirmPasswordChange,
    bio,
    handleBioChange,
    updateUserInfo,
  } = useContext(AuthenticationContext);

  useEffect(() => {
    if (!currentUser) {
      getCurrentUserInfo();
    }
  }, []);

  if (!currentUser) return;

  return (
    <>
      <NavBar />
      <h1>Profile Settings</h1>
      <form onSubmit={updateUserInfo}>
        <label htmlFor="firstName">First name</label>
        <input
          type="name"
          id="firstName"
          name="firstName"
          defaultValue={currentUser.firstName}
          onChange={handleFirstNameChange}
        />
        <label htmlFor="lastName">Last name</label>
        <input
          type="name"
          id="lastName"
          name="lastName"
          defaultValue={currentUser.lastName}
          onChange={handleLastNameChange}
        />
        <label htmlFor="phone">Phone number</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          defaultValue={currentUser.phoneNumber}
          onChange={handlePhoneNumberChange}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          defaultValue={currentUser.email}
          onChange={handleEmailChange}
        />
        <label htmlFor="bio">Bio</label>
        <textarea
          id="bio"
          defaultValue={currentUser.bio}
          onChange={handleBioChange}></textarea>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          onChange={handlePasswordChange}
        />
        <label htmlFor="password2">Confirm password</label>
        <input
          type="password"
          id="password2"
          name="password2"
          onChange={handleConfirmPasswordChange}
        />
        <div
          className="alert"
          style={{ visibility: null ? "visible" : "hidden" }}>
          Passwords don't match
        </div>
        <button type="submit">Update my information</button>
      </form>
    </>
  );
}

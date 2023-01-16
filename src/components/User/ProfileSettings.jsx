import { useContext, useEffect } from "react";
import { AuthenticationContext } from "../../AuthenticationContext";
import NavBar from "../NavBar/NavBar";

export default function ProfileSettings() {
  document.title = "Profile Settings";

  const {
    getCurrentUserInfo,
    currentUser,
    handleFirstNameChange,
    handleLastNameChange,
    handlePhoneNumberChange,
    handleEmailChange,
    handlePasswordChange,
    handleConfirmPasswordChange,
    handleBioChange,
    updateUserInfo,
    arePasswordsDifferent,
  } = useContext(AuthenticationContext);

  useEffect(() => {
    getCurrentUserInfo();
  }, []);

  if (!currentUser) return <NavBar />;

  return (
    <>
      <NavBar />
      <h1>Profile Settings</h1>
      <form id="profileForm" onSubmit={updateUserInfo}>
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
          style={{ visibility: arePasswordsDifferent ? "visible" : "hidden" }}>
          Passwords don't match
        </div>
        <button type="submit">Update my information</button>
      </form>
    </>
  );
}

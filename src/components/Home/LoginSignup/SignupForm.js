export default function SignupForm() {
    return (
      <form>
        <label htmlFor="name">Name:</label><br />
        <input type="name" id="name" name="name"/><br />
        <label htmlFor="email">Email:</label><br />
        <input type="email" id="email" name="email"/><br />
        <label htmlFor="password">Password:</label><br />
        <input type="password" id="password" name="password"/><br />
        <label htmlFor="password2">Retype password:</label><br />
        <input type="password" id="password2" name="password2"/>
      </form>
    );
  }
  
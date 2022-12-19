export default function LoginForm() {
  return (
    <form>
      <label htmlFor="email">Email:</label><br />
      <input type="email" id="email" name="email"/><br />
      <label htmlFor="email">Password:</label><br />
      <input type="password" id="password" name="password"/>
    </form>
  );
}

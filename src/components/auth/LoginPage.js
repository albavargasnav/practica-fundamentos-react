import Button from '../shared/Button';
import { login } from './service';

function LoginPage({ onLogin }) {
  const handleSubmit = async event => {
    event.preventDefault();

    await login({
      username: event.target.username.value,
      password: event.target.password.value,
    });

    // Estoy logueado
    onLogin();
  };

  return (
    <div>
      <h1>Log in to Adverts</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" />
        <input type="password" name="password" />
        <Button type="submit" variant="primary">
          Log in
        </Button>
      </form>
    </div>
  );
}

export default LoginPage;
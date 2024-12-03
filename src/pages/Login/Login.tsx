import { FormEvent, useEffect, useState } from 'react';
import styles from './Login.module.scss';
import NavPanel from '../../components/NavPanel/NavPanel';
import { useAuth } from '../../context/auth/AuthProvider';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/ui/Button';

function Login() {
  // PRE-FILL FOR DEV PURPOSES
  const [email, setEmail] = useState('jack@example.com');
  const [password, setPassword] = useState('qwerty');
  const { isAuthenticated, login } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/app', { replace: true });
    }

    return () => {};
  }, [isAuthenticated, navigate]);

  function handleSubmit(ev: FormEvent) {
    ev.preventDefault();

    if (email && password) {
      login(email.trim(), password.trim());
    }

  }

  return (
    <main className={styles.login}>
      <NavPanel />
      <form
        className={styles.form}
        onSubmit={handleSubmit}
      >
        <div className={styles.row}>
          <label htmlFor='email'>Email address</label>
          <input
            type='email'
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className={styles.row}>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            id='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div>
          <Button type='primary'>Login</Button>
        </div>
      </form>
    </main>
  );
}

export default Login;

import { useState } from 'react';
import styles from './Login.module.scss';
import NavPanel from '../../components/NavPanel/NavPanel';

function Login() {
  // PRE-FILL FOR DEV PURPOSES
  const [email, setEmail] = useState('jack@example.com');
  const [password, setPassword] = useState('qwerty');

  return (
    <main className={styles.login}>
      <NavPanel />
      <form className={styles.form}>
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
          <button>Login</button>
        </div>
      </form>
    </main>
  );
}

export default Login;

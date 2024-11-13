import styles from './Message.module.scss';

interface IProps {
  message: string
}

function Message({ message }: IProps) {
  return (
    <p className={styles.message}>
      <span role='img'>👋</span> {message}
    </p>
  );
}

export default Message;

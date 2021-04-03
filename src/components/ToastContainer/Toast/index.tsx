import { useEffect } from 'react';
import {
  FiAlertCircle,
  FiCheckCircle,
  FiInfo,
  FiXCircle,
} from 'react-icons/fi';

import { useStores } from '../../../stores';
import { ToastMessage } from '../../../stores/ToastStore';

import { Container } from './styles';

interface ToastProps {
  message: ToastMessage;
  style: Record<string, unknown>;
}

const icons = {
  info: <FiInfo size={24} />,
  error: <FiAlertCircle size={24} />,
  success: <FiCheckCircle size={24} />,
};

function Toast({ message, style }: ToastProps) {
  const { toastStore } = useStores();

  useEffect(() => {
    const timer = setTimeout(() => {
      toastStore.removeToast(message.id);
    }, 6 * 1000);

    return () => clearTimeout(timer);
  }, [toastStore.removeToast, message.id, toastStore]);

  return (
    <Container
      type={message.type}
      hasdescription={Number(!!message.description)}
      style={style}
    >
      {icons[message.type || 'info']}
      <div>
        <strong>{message.title}</strong>
        {message.description && <p>{message.description}</p>}
      </div>

      <button onClick={() => toastStore.removeToast(message.id)} type="button">
        <FiXCircle size={18} />
      </button>
    </Container>
  );
}

export default Toast;

// src/components/Notification.tsx

import './Notification.css';

interface NotificationProps {
  show: boolean;
  message: string;
  type?: 'success' | 'error';
}

const Notification = ({ show, message, type = 'success' }: NotificationProps) => {
  if (!show) return null;

  return (
    <div className={`notification ${type}`}>
      {message}
    </div>
  );
};

export default Notification;

import { ReactNode, useEffect } from 'react';
import { useAuth } from '../../context/auth/AuthProvider';
import { useNavigate } from 'react-router-dom';

interface IProps {
  children: ReactNode
}

function ProtectedRoute({ children }: IProps) {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

  return isAuthenticated ? children : null;
}

export default ProtectedRoute;

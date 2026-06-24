import { useContext } from 'react';
import { useMutation } from '@tanstack/react-query';
import { AuthContext } from '../contexts/AuthContext';

export function useAuth() {
  const { login, register, logout, user, token, isLoading } = useContext(AuthContext);

  const registerMutation = useMutation({
    mutationFn: async (data: { name: string; email: string; password: string }) => {
      await register(data.name, data.email, data.password);
    },
  });

  const loginMutation = useMutation({
    mutationFn: async (data: { email: string; password: string }) => {
      await login(data.email, data.password);
    },
  });

  return {
    user,
    token,
    isLoading,
    login: loginMutation,
    register: registerMutation,
    logout,
  };
}
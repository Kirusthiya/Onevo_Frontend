import toast from 'react-hot-toast';

export const toastService = {
  success: (message: string) => toast.success(message),
  error: (message: string | string[]) => {
    if (Array.isArray(message)) {
      message.forEach((msg) => toast.error(msg));
    } else {
      toast.error(message);
    }
  },
  info: (message: string) => toast(message),
};

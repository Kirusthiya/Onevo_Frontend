import { AxiosError } from 'axios';
import { toastService } from '../../../shared/services/toast.service';

export const errorInterceptor = (error: AxiosError) => {
  if (error.response) {
    const { status, data }: { status: number; data: any } = error.response;

    switch (status) {
      case 400:
        if (data.errors) {
          const modalStateErrors = [];
          for (const key in data.errors) {
            if (data.errors[key]) {
              modalStateErrors.push(data.errors[key]);
            }
          }
          const flatErrors = modalStateErrors.flat();
          const errorMessage = flatErrors.join(', ');
          toastService.error(errorMessage);
          return Promise.reject(flatErrors);
        } else {
          const errorMessage = data.message || 'Bad Request';
          toastService.error(errorMessage);
        }
        break;

      case 401:
        toastService.error('Unauthorized');
       
        break;

      case 404:
        window.location.href = '/not-found';
        break;

      case 500:
        // In a real app, we might want to use a stateful navigation
        // For now, we'll use window.location or a search param
        window.location.href = '/server-error';
        break;

      default:
        toastService.error('Something unexpected went wrong');
        console.error(error);
        break;
    }
  } else {
    // Network error or timeout
    toastService.error('Network error. Please check your connection.');
  }

  return Promise.reject(error);
};

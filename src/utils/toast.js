import { toast } from 'react-toastify';


const toastConfig = {
    position: 'top-center',
    autoClose: 2000,
    pauseOnHover: true,
    draggable: false,
    theme: 'light',
};

export const toastNotify = (message) => {
    toast.success(message, toastConfig);
};

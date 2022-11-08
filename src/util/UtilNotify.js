import { toast } from 'react-toastify';


export const showAlertSuccess = (msg) => {
    toast.success(msg, {
        position: "bottom-left",
        autoClose: 4000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: "colored",
    });
}
export const showAlertError = (msg) => {
    toast.error(msg, {
        position: "bottom-left",
        autoClose: 4000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: "colored",
    });
}
import {createRoot} from 'react-dom/client'
import {App} from "./app";
import {ToastContainer} from "react-toastify";

createRoot(document.getElementById('root')!).render(
    <>
        <App/>
        <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
        />
    </>
)

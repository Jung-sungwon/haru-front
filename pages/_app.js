import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import Nav from "@/components/Nav";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import store from "@/store";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Nav />
      <Component {...pageProps} />
      <ToastContainer />
    </Provider>
  );
}

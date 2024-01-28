import { type AppType } from "next/app";

import { api } from "@/utils/api";

import "@/styles/globals.css";
import { UserProvider } from "context/user-context";


const MyApp: AppType = ({ Component, pageProps }) => {
  return <UserProvider>
    <Component {...pageProps} />
  </UserProvider>;
};

export default api.withTRPC(MyApp);

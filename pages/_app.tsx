import { ThemeProvider } from "@mui/material/styles";
import type { AppProps } from "next/app";
import "../styles/index.css";
import Theme from "../styles/muiStyles";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={Theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

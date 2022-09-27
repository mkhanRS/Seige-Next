import MainLayout from "@components/layouts/MainLayout";
import { BreadcrumbProvider } from "@contexts/BreadcrumbContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <BreadcrumbProvider>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </BreadcrumbProvider>
  );
}

export default MyApp;

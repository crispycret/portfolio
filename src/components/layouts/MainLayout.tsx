import { Footer } from "../common/Footer";
import { Header } from "../common/Header";






export const MainLayout = ({ children }: any) => {
  return (
    <div className="main-layout mb-3">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};


// Path: src/components/layouts/MainLayout.tsx

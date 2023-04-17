
import 'assets/css/mainlayout.css'


import { Header } from 'components/common/Header';
import { Footer } from 'components/common/Footer';


export const MainLayout = ({ children }: any) => {
  return (
    <div className="main-layout background-dark min-vh-100">
      <Header />
      <main className='min-vh-100'>{children}</main>
      <Footer />
    </div>
  );
};


// Path: src/components/layouts/MainLayout.tsx

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CustomerPortal as Portal } from '@/components/advanced/CustomerPortal';

const CustomerPortal = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="section-padding">
        <div className="container-custom">
          <Portal />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CustomerPortal;
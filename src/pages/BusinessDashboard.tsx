import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { BusinessDashboard as Dashboard } from '@/components/advanced/BusinessDashboard';

const BusinessDashboard = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="section-padding">
        <div className="container-custom">
          <Dashboard />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BusinessDashboard;
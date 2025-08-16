import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { InteractiveServiceGuide } from '@/components/advanced/InteractiveServiceGuide';

const ServiceGuides = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="section-padding">
        <div className="container-custom">
          <InteractiveServiceGuide />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ServiceGuides;
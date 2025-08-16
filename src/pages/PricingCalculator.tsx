import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { PricingCalculator as Calculator } from '@/components/advanced/PricingCalculator';

const PricingCalculator = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="section-padding">
        <div className="container-custom">
          <Calculator />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PricingCalculator;
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { MaintenanceScheduler as Scheduler } from '@/components/advanced/MaintenanceScheduler';

const MaintenanceScheduler = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="section-padding">
        <div className="container-custom">
          <Scheduler />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MaintenanceScheduler;
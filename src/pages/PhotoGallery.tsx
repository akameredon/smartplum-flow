import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { PhotoGallery as Gallery } from '@/components/advanced/PhotoGallery';

const PhotoGallery = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="section-padding">
        <div className="container-custom">
          <Gallery />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PhotoGallery;
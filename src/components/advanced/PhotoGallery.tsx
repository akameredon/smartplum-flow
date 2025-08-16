import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { X, ZoomIn, Calendar, MapPin, Star } from 'lucide-react';

interface ProjectImage {
  id: number;
  src: string;
  title: string;
  category: string;
  location: string;
  date: string;
  description: string;
  beforeAfter?: 'before' | 'after';
  pairedWith?: number;
}

const galleryImages: ProjectImage[] = [
  {
    id: 1,
    src: '/api/placeholder/600/400',
    title: 'Emergency Pipe Burst Repair',
    category: 'Emergency Repair',
    location: 'Downtown Office Building',
    date: '2024-03-15',
    description: 'Complete pipe replacement and water damage restoration',
    beforeAfter: 'before'
  },
  {
    id: 2,
    src: '/api/placeholder/600/400',
    title: 'Emergency Pipe Repair Complete',
    category: 'Emergency Repair',
    location: 'Downtown Office Building',
    date: '2024-03-15',
    description: 'Professional pipe installation with minimal disruption',
    beforeAfter: 'after',
    pairedWith: 1
  },
  {
    id: 3,
    src: '/api/placeholder/600/400',
    title: 'Luxury Bathroom Renovation',
    category: 'Bathroom Remodel',
    location: 'Residential Home',
    date: '2024-03-10',
    description: 'Complete bathroom plumbing for modern renovation'
  },
  {
    id: 4,
    src: '/api/placeholder/600/400',
    title: 'Water Heater Installation',
    category: 'Water Heater',
    location: 'Family Home',
    date: '2024-03-08',
    description: 'High-efficiency tankless water heater installation'
  },
  {
    id: 5,
    src: '/api/placeholder/600/400',
    title: 'Kitchen Sink Installation',
    category: 'Kitchen Plumbing',
    location: 'Restaurant',
    date: '2024-03-05',
    description: 'Commercial-grade sink and disposal system'
  },
  {
    id: 6,
    src: '/api/placeholder/600/400',
    title: 'Drain Cleaning Results',
    category: 'Drain Service',
    location: 'Apartment Complex',
    date: '2024-03-01',
    description: 'Professional hydro-jetting cleared severe blockage'
  }
];

const categories = ['All', 'Emergency Repair', 'Bathroom Remodel', 'Water Heater', 'Kitchen Plumbing', 'Drain Service'];

export const PhotoGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<ProjectImage | null>(null);

  const filteredImages = selectedCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold">Project Gallery</h1>
        <p className="text-muted-foreground">
          See our professional plumbing work and successful project completions
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-3">
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? "default" : "outline"}
            onClick={() => setSelectedCategory(category)}
            className="mb-2"
          >
            {category}
          </Button>
        ))}
      </div>

      {/* Image Grid */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        layout
      >
        <AnimatePresence>
          {filteredImages.map((image) => (
            <motion.div
              key={image.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <Card 
                className="overflow-hidden cursor-pointer hover:shadow-large transition-all group"
                onClick={() => setSelectedImage(image)}
              >
                <div className="relative">
                  <img 
                    src={image.src} 
                    alt={image.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <ZoomIn className="w-8 h-8 text-white" />
                  </div>
                  {image.beforeAfter && (
                    <Badge 
                      className={`absolute top-3 left-3 ${
                        image.beforeAfter === 'before' ? 'bg-red-500' : 'bg-green-500'
                      }`}
                    >
                      {image.beforeAfter === 'before' ? 'Before' : 'After'}
                    </Badge>
                  )}
                  <Badge variant="secondary" className="absolute top-3 right-3">
                    {image.category}
                  </Badge>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2">{image.title}</h3>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {image.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {image.date}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img 
                  src={selectedImage.src} 
                  alt={selectedImage.title}
                  className="w-full h-96 object-cover"
                />
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute top-4 right-4"
                  onClick={() => setSelectedImage(null)}
                >
                  <X className="w-4 h-4" />
                </Button>
                {selectedImage.beforeAfter && (
                  <Badge 
                    className={`absolute top-4 left-4 ${
                      selectedImage.beforeAfter === 'before' ? 'bg-red-500' : 'bg-green-500'
                    }`}
                  >
                    {selectedImage.beforeAfter === 'before' ? 'Before' : 'After'}
                  </Badge>
                )}
              </div>
              
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold">{selectedImage.title}</h2>
                  <Badge variant="outline">{selectedImage.category}</Badge>
                </div>
                
                <p className="text-muted-foreground">{selectedImage.description}</p>
                
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span>{selectedImage.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span>{selectedImage.date}</span>
                  </div>
                </div>

                {selectedImage.pairedWith && (
                  <div className="pt-4 border-t">
                    <p className="text-sm text-muted-foreground mb-3">
                      View the complete transformation:
                    </p>
                    <div className="flex gap-3">
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => {
                          const pairedImage = galleryImages.find(img => img.id === selectedImage.pairedWith);
                          if (pairedImage) setSelectedImage(pairedImage);
                        }}
                      >
                        See {selectedImage.beforeAfter === 'before' ? 'After' : 'Before'}
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Call to Action */}
      <Card className="text-center p-8 bg-gradient-to-r from-primary/5 to-accent/5">
        <CardContent className="space-y-4">
          <h2 className="text-2xl font-bold">Ready for Your Project?</h2>
          <p className="text-muted-foreground">
            Join hundreds of satisfied customers who trust SmartPlum for their plumbing needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-hero">
              Get Free Estimate
            </Button>
            <Button variant="outline">
              View All Services
            </Button>
          </div>
          <div className="flex items-center justify-center gap-1 text-sm text-muted-foreground">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span>4.9/5 rating from 500+ customers</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
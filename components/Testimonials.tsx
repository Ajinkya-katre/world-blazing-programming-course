'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';
import { useEffect, useState } from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Software Developer at Google',
    content: 'World Blazing transformed my programming skills. The C++ course was incredibly detailed and practical. I landed my dream job within 3 months of completing the course!',
    rating: 5,
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150'
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Python Developer at Microsoft',
    content: 'The Python course exceeded my expectations. The hands-on projects and mentorship helped me transition from a complete beginner to a confident developer.',
    rating: 5,
    avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150'
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Java Developer at Amazon',
    content: 'Amazing instructors and comprehensive curriculum. The Java Enterprise course prepared me for real-world development challenges. Highly recommended!',
    rating: 5,
    avatar: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=150'
  },
  {
    id: 4,
    name: 'David Kim',
    role: 'C Developer at Tesla',
    content: 'The C programming course was exactly what I needed to advance my career in embedded systems. The practical approach made complex concepts easy to understand.',
    rating: 5,
    avatar: 'https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=150'
  },
  {
    id: 5,
    name: 'Lisa Thompson',
    role: 'Full Stack Developer',
    content: 'World Blazing courses are top-notch. The quality of education and support throughout the learning journey is exceptional. Best investment I made for my career!',
    rating: 5,
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150'
  },
  {
    id: 6,
    name: 'Alex Wilson',
    role: 'Software Engineer at Facebook',
    content: 'The instructors are industry experts who provide real-world insights. The coding challenges and projects helped me build a strong portfolio.',
    rating: 5,
    avatar: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=150'
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      visible.push(testimonials[(currentIndex + i) % testimonials.length]);
    }
    return visible;
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Student <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Success Stories</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from our graduates who are now working at top tech companies worldwide
          </p>
        </div>

        <div className="relative">
          <div className="flex gap-8 transition-transform duration-1000 ease-in-out">
            {getVisibleTestimonials().map((testimonial, index) => (
              <Card key={`${testimonial.id}-${currentIndex}`} className="flex-1 min-w-0 hover:shadow-xl transition-all duration-300 border-0 bg-white">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <Quote className="h-8 w-8 text-purple-600 mr-3" />
                    <div className="flex space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-gray-700 text-lg leading-relaxed mb-6 italic">
                    "{testimonial.content}"
                  </p>
                  
                  <div className="flex items-center">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                      <p className="text-purple-600 font-medium">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Pagination dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-purple-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
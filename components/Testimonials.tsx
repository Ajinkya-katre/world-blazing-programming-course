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
      <script src="https://static.elfsight.com/platform/platform.js" async></script>
      <div className="elfsight-app-5a27fec7-8cc2-4336-b757-805f1be1fa2d" data-elfsight-app-lazy></div>
    </section>
  );
}
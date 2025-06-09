import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Clock, Users, Star, Code } from 'lucide-react';

const courses = [
  {
    id: 1,
    title: 'Complete C Programming',
    description: 'Master C programming from basics to advanced concepts with hands-on projects.',
    price: 2400,
    originalPrice: 8000,
    duration: '8 weeks',
    students: '2.5K',
    rating: 4.8,
    level: 'Beginner',
    icon: '🔥',
    color: 'from-blue-600 to-blue-800'
  },
  {
    id: 2,
    title: 'Advanced C++ Development',
    description: 'Build robust applications with modern C++ features and object-oriented programming.',
    price: 2400,
    originalPrice: 8000,
    duration: '10 weeks',
    students: '1.8K',
    rating: 4.9,
    level: 'Intermediate',
    icon: '⚡',
    color: 'from-green-600 to-green-800'
  },
  {
    id: 3,
    title: 'Python for Everyone',
    description: 'Learn Python programming with real-world projects in web development and data science.',
    price: 2400,
    originalPrice: 8000,
    duration: '6 weeks',
    students: '4.2K',
    rating: 4.7,
    level: 'Beginner',
    icon: '🐍',
    color: 'from-yellow-600 to-yellow-800'
  },
  {
    id: 4,
    title: 'Java Enterprise Edition',
    description: 'Master Java development for enterprise applications with Spring framework.',
    price: 2400,
    originalPrice: 8000,
    duration: '12 weeks',
    students: '3.1K',
    rating: 4.9,
    level: 'Advanced',
    icon: '☕',
    color: 'from-red-600 to-red-800'
  }
];

export default function FeaturedCourses() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Courses</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our carefully crafted programming courses designed to take you from beginner to expert
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map((course) => (
            <Card key={course.id} className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 overflow-hidden">
              <CardHeader className={`bg-gradient-to-br ${course.color} text-white relative overflow-hidden`}>
                <div className="absolute top-0 right-0 text-4xl opacity-20">
                  {course.icon}
                </div>
                <Badge variant="secondary" className="w-fit mb-2 bg-white/20 text-white border-white/30">
                  {course.level}
                </Badge>
                <CardTitle className="text-xl font-bold">{course.title}</CardTitle>
                <CardDescription className="text-white/90">
                  {course.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-gray-500" />
                    <span className="text-sm text-gray-600">{course.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="h-4 w-4 text-gray-500" />
                    <span className="text-sm text-gray-600">{course.students}</span>
                  </div>
                </div>
                
                <div className="flex items-center mb-4">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="text-sm text-gray-600 ml-1">{course.rating} (500+ reviews)</span>
                </div>

                <div className="flex items-center space-x-2 mb-4">
                  <span className="text-3xl font-bold text-gray-900">₹{course.price.toLocaleString()}</span>
                  <span className="text-lg text-gray-500 line-through">₹{course.originalPrice.toLocaleString()}</span>
                  <Badge variant="destructive" className="bg-red-100 text-red-800 border-red-200">
                    70% OFF
                  </Badge>
                </div>
              </CardContent>

              <CardFooter className="p-6 pt-0">
                <Button className={`w-full bg-gradient-to-r ${course.color} hover:opacity-90 text-white font-semibold py-3 transition-all duration-300`}>
                  Enroll Now
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
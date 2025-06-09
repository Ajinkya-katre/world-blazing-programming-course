import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Code, Zap, Users, Trophy } from 'lucide-react';

export default function Hero() {
  return (
    <section 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: 'radial-gradient(circle farthest-corner at 10% 20%, rgba(151,41,247,1) 0%, rgba(24,22,39,1) 90%)'
      }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-10 -left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-10 -right-4 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Brand name */}
          <div className="flex items-center justify-center mb-6">
            <Zap className="h-12 w-12 text-yellow-400 mr-3" />
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              World Blazing
            </h1>
          </div>
          <h2 className="text-2xl md:text-4xl font-semibold text-purple-200 mb-4">
            Computer Solution
          </h2>
          
          {/* Main headline */}
          <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Master Programming with
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400"> Exclusive Discounts</span>
          </h3>
          
          <p className="text-xl md:text-2xl text-purple-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Join thousands of students learning C, C++, Python, and Java with our expert-led courses. 
            Get up to 70% off on all programming courses!
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-6">
              <Users className="h-8 w-8 text-purple-300 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">10K+</div>
              <div className="text-sm text-purple-200">Students</div>
            </Card>
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-6">
              <Code className="h-8 w-8 text-purple-300 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">4</div>
              <div className="text-sm text-purple-200">Languages</div>
            </Card>
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-6">
              <Trophy className="h-8 w-8 text-purple-300 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">95%</div>
              <div className="text-sm text-purple-200">Success Rate</div>
            </Card>
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-6">
              <Zap className="h-8 w-8 text-purple-300 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">70%</div>
              <div className="text-sm text-purple-200">Max Discount</div>
            </Card>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 text-lg font-semibold shadow-2xl transition-all duration-300 transform hover:scale-105">
              Explore Courses
            </Button>
            <Button variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-purple-900 px-8 py-4 text-lg font-semibold transition-all duration-300">
              Watch Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
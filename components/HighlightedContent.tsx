import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Award, BookOpen, Laptop, Users, Clock } from 'lucide-react';

const features = [
  {
    icon: <BookOpen className="h-8 w-8 text-purple-600" />,
    title: 'Comprehensive Curriculum',
    description: 'Learn from basics to advanced concepts with structured, industry-relevant content.'
  },
  {
    icon: <Laptop className="h-8 w-8 text-purple-600" />,
    title: 'Hands-on Projects',
    description: 'Build real-world applications and create a portfolio that showcases your skills.'
  },
  {
    icon: <Users className="h-8 w-8 text-purple-600" />,
    title: 'Expert Mentorship',
    description: 'Get guidance from industry professionals with years of programming experience.'
  },
  {
    icon: <Clock className="h-8 w-8 text-purple-600" />,
    title: 'Flexible Learning',
    description: 'Study at your own pace with lifetime access to course materials and updates.'
  },
  {
    icon: <Award className="h-8 w-8 text-purple-600" />,
    title: 'Industry Certification',
    description: 'Earn certificates recognized by top tech companies worldwide.'
  },
  {
    icon: <CheckCircle className="h-8 w-8 text-purple-600" />,
    title: '100% Job Support',
    description: 'Get career assistance, resume review, and interview preparation support.'
  }
];

const benefits = [
  'Learn from industry experts with 10+ years experience',
  'Access to exclusive programming challenges and contests',
  'Join our active community of 10,000+ developers',
  'Get personalized feedback on your coding projects',
  'Lifetime access to course updates and new content',
  'Money-back guarantee if not satisfied'
];

export default function HighlightedContent() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Why Choose Us */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">World Blazing?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide the most comprehensive and practical programming education to help you succeed in your career
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-white to-purple-50 hover:from-purple-50 hover:to-purple-100">
              <CardContent className="p-8 text-center">
                <div className="bg-white rounded-full p-4 w-20 h-20 mx-auto mb-6 shadow-md group-hover:shadow-lg transition-all duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl p-8 md:p-12 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                Unlock Your Programming Potential
              </h3>
              <p className="text-xl text-purple-100 mb-8 leading-relaxed">
                Join thousands of successful developers who started their journey with us. Our proven methodology and expert guidance ensure your success.
              </p>
              <div className="flex flex-col space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-yellow-300 flex-shrink-0" />
                    <span className="text-purple-100">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="text-center">
                  <div className="text-5xl font-bold text-yellow-300 mb-2">70%</div>
                  <div className="text-lg text-purple-100 mb-4">Maximum Discount</div>
                  <div className="text-3xl font-bold text-white mb-2">Limited Time</div>
                  <div className="text-purple-200">Offer ends soon!</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
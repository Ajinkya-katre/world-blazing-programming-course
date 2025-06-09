'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Phone, MapPin, Clock, CheckCircle, AlertCircle } from 'lucide-react';
import { useState } from 'react';
import { sendContactEmail, sendEmailFallback, type ContactFormData } from '@/lib/emailService';

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    course: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Try to send email using EmailJS
      const emailSent = await sendContactEmail(formData);
      
      if (emailSent) {
        setSubmitStatus('success');
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          course: '',
          message: ''
        });
      } else {
        // Fallback to mailto
        sendEmailFallback(formData);
        setSubmitStatus('success');
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          course: '',
          message: ''
        });
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      
      // Clear status after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    }
  };

  return (
    <section 
      className="py-20 relative overflow-hidden"
      style={{
        backgroundImage: 'radial-gradient(circle farthest-corner at 10% 20%, rgba(151,41,247,1) 0%, rgba(24,22,39,1) 90%)'
      }}
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-400">Touch</span>
          </h2>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            Ready to start your programming journey? Contact us today and let's discuss how we can help you achieve your goals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-yellow-400 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Email Us</h3>
                    <p className="text-purple-100">worldblazinginstitute@gmail.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-yellow-400 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Call Us</h3>
                    <p className="text-purple-100">+91 98765 43210</p>
                    <p className="text-purple-100">+91 87654 32109</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-yellow-400 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Visit Us</h3>
                    <p className="text-purple-100">Aru Palace Building, 162/A1</p>
                    <p className="text-purple-100">Malwadi Rd, near Laxmi mata Mandir</p>
                    <p className="text-purple-100">Hadapsar Gaon, Hadapsar</p>
                    <p className="text-purple-100">Pune, Maharashtra 411028</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-yellow-400 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Office Hours</h3>
                    <p className="text-purple-100">Mon - Sun: 9:00 AM - 9:00 PM</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white">Send us a Message</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-white">Full Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your full name"
                        className="bg-white/20 border-white/30 text-white placeholder:text-purple-200"
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-white">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter your email"
                        className="bg-white/20 border-white/30 text-white placeholder:text-purple-200"
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-white">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Enter your phone number"
                        className="bg-white/20 border-white/30 text-white placeholder:text-purple-200"
                        disabled={isSubmitting}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="course" className="text-white">Course Interest</Label>
                      <select
                        id="course"
                        name="course"
                        value={formData.course}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 bg-white/20 border border-white/30 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        disabled={isSubmitting}
                      >
                        <option value="" className="text-gray-900">Select a course</option>
                        <option value="c" className="text-gray-900">C Programming</option>
                        <option value="cpp" className="text-gray-900">C++ Development</option>
                        <option value="python" className="text-gray-900">Python Programming</option>
                        <option value="java" className="text-gray-900">Java Development</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-white">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your programming goals and any questions you have..."
                      className="bg-white/20 border-white/30 text-white placeholder:text-purple-200 min-h-[120px]"
                      required
                      disabled={isSubmitting}
                    />
                  </div>

                  {/* Status Messages */}
                  {submitStatus === 'success' && (
                    <div className="flex items-center space-x-2 text-green-300 bg-green-500/20 p-3 rounded-md">
                      <CheckCircle className="h-5 w-5" />
                      <span>Message sent successfully! We'll get back to you soon.</span>
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="flex items-center space-x-2 text-red-300 bg-red-500/20 p-3 rounded-md">
                      <AlertCircle className="h-5 w-5" />
                      <span>Failed to send message. Please try again or contact us directly.</span>
                    </div>
                  )}

                  <Button 
                    type="submit" 
                    size="lg" 
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-semibold py-3 text-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
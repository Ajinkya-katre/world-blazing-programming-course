import { Code, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Code className="h-8 w-8 text-purple-400" />
              <h3 className="text-2xl font-bold">World Blazing</h3>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Empowering students worldwide with comprehensive programming education. 
              Join thousands of successful developers who started their journey with us.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-6 w-6 text-gray-400 hover:text-purple-400 cursor-pointer transition-colors duration-200" />
              <Twitter className="h-6 w-6 text-gray-400 hover:text-purple-400 cursor-pointer transition-colors duration-200" />
              <Linkedin className="h-6 w-6 text-gray-400 hover:text-purple-400 cursor-pointer transition-colors duration-200" />
              <Instagram className="h-6 w-6 text-gray-400 hover:text-purple-400 cursor-pointer transition-colors duration-200" />
            </div>
          </div>

          {/* Courses */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold">Courses</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">C Programming</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">C++ Development</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">Python for Everyone</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">Java Enterprise</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">Success Stories</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">Career Support</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">FAQ</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">Blog</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-purple-400" />
                <span className="text-gray-400">worldblazingscomputer@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-purple-400" />
                <span className="text-gray-400">+91 98765 43210</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-purple-400 mt-1" />
                <div className="text-gray-400">
                  <p>Aru Palace Building, 162/A1</p>
                  <p>Malwadi Rd, near Laxmi mata Mandir</p>
                  <p>Hadapsar, Pune, Maharashtra 411028</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-center md:text-left">
              © 2024 World Blazing Computer Solution. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
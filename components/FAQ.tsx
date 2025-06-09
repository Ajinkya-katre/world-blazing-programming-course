'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What programming languages do you offer courses for?",
    answer: "We offer comprehensive courses for C, C++, Python, and Java. Each course is designed to take you from beginner to advanced level with hands-on projects and real-world applications."
  },
  {
    question: "How much discount can I get on the courses?",
    answer: "We currently offer up to 70% discount on all our programming courses. This is a limited-time offer for students who want to kickstart their programming career at an affordable price."
  },
  {
    question: "Do I get lifetime access to the course materials?",
    answer: "Yes! Once you enroll in any course, you get lifetime access to all course materials, including future updates and additional content. You can learn at your own pace without any time restrictions."
  },
  {
    question: "What kind of support do you provide during the course?",
    answer: "We provide comprehensive support including expert mentorship, code reviews, doubt clearing sessions, career guidance, and access to our active community of developers. Our instructors are available to help you throughout your learning journey."
  },
  {
    question: "Will I receive a certificate after completing the course?",
    answer: "Yes, you will receive an industry-recognized certificate upon successful completion of the course. Our certificates are valued by top tech companies and can boost your career prospects significantly."
  },
  {
    question: "Do you provide job placement assistance?",
    answer: "Absolutely! We offer 100% job support including resume building, interview preparation, mock interviews, and connections with our hiring partners. Our career team works closely with you to land your dream job."
  },
  {
    question: "Can I take multiple courses at the same time?",
    answer: "Yes, you can enroll in multiple courses simultaneously. We recommend starting with one language and then progressing to others based on your learning pace and career goals."
  },
  {
    question: "What is your refund policy?",
    answer: "We offer a 30-day money-back guarantee. If you're not satisfied with the course content or teaching quality within the first 30 days, you can request a full refund, no questions asked."
  }
];

export default function FAQ() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Questions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Got questions? We've got answers. Find everything you need to know about our courses and programs.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-100 px-6"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 hover:text-purple-700 transition-colors duration-200">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 text-base leading-relaxed pt-2 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
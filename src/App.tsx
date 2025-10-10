import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import emailjs from '@emailjs/browser';

function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState({
    isSubmitting: false,
    isSuccess: false,
    isError: false,
    message: ''
  });

  // EmailJS configuration - replace with your actual values
  const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_oek5h8g';
  const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_8nmyo8g';
  const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'qek1xidpKLDofXa4z';

  // Initialize EmailJS
  React.useEffect(() => {
    if (EMAILJS_PUBLIC_KEY !== 'qek1xidpKLDofXa4z') {
      emailjs.init(EMAILJS_PUBLIC_KEY);
    }
  }, [EMAILJS_PUBLIC_KEY]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    setIsMobileMenuOpen(false); // Close mobile menu when tab changes
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setFormStatus({
        isSubmitting: false,
        isSuccess: false,
        isError: true,
        message: 'Please fill in all fields.'
      });
      return;
    }

    if (!EMAILJS_PUBLIC_KEY || EMAILJS_PUBLIC_KEY === 'qrpDqd4BYagZAeDXk') {
      setFormStatus({
        isSubmitting: false,
        isSuccess: false,
        isError: true,
        message: 'EmailJS is not configured. Please contact the administrator.'
      });
      return;
    }

    setFormStatus({
      isSubmitting: true,
      isSuccess: false,
      isError: false,
      message: ''
    });

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: 'start@oasissummerschool.com' // Your email address
      };

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      setFormStatus({
        isSubmitting: false,
        isSuccess: true,
        isError: false,
        message: 'Message sent successfully! We\'ll get back to you soon, God willing.'
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        message: ''
      });

    } catch (error) {
      console.error('EmailJS error:', error);
      setFormStatus({
        isSubmitting: false,
        isSuccess: false,
        isError: true,
        message: 'Failed to send message. Please try again or contact us directly.'
      });
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'privacy':
        return (
          <div className="min-h-screen bg-white">
            {/* Privacy Policy Section */}
            <section className="px-6 md:px-12 py-24">
              <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-8">
                  Privacy Policy
                </h1>
                <p className="text-lg text-gray-600 mb-12">
                  Last updated: September 2025
                </p>
                
                <div className="space-y-8 text-gray-700 leading-relaxed">
                  <div>
                    <h2 className="text-2xl font-bold text-black mb-4">Introduction</h2>
                    <p>
                      OASIS ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you apply to or participate in our AI summer school program at Oxford University.
                    </p>
                  </div>
                  
                  <div>
                    <h2 className="text-2xl font-bold text-black mb-4">Information We Collect</h2>
                    <h3 className="text-lg font-semibold text-black mb-2">Personal Information</h3>
                    <p className="mb-4">
                      We may collect personal information that you provide directly to us, including:
                    </p>
                    <ul className="list-disc list-inside space-y-1 mb-4 ml-4">
                      <li>Name, email address, and contact information</li>
                      <li>Date of birth and age verification</li>
                      <li>Educational background and academic records</li>
                      <li>Emergency contact information</li>
                      <li>Dietary requirements and medical information (if relevant)</li>
                      <li>Payment information for program fees</li>
                    </ul>
                    
                    <h3 className="text-lg font-semibold text-black mb-2">Automatically Collected Information</h3>
                    <p>
                      When you visit our website, we may automatically collect certain information about your device and usage patterns through cookies and similar technologies.
                    </p>
                  </div>
                  
                  <div>
                    <h2 className="text-2xl font-bold text-black mb-4">How We Use Your Information</h2>
                    <p className="mb-4">We use the information we collect to:</p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Process and evaluate your application</li>
                      <li>Communicate with you about the program</li>
                      <li>Provide educational services and support</li>
                      <li>Ensure student safety and well-being</li>
                      <li>Process payments and manage financial records</li>
                      <li>Improve our programs and services</li>
                      <li>Comply with legal obligations</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h2 className="text-2xl font-bold text-black mb-4">Information Sharing</h2>
                    <p className="mb-4">
                      We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
                    </p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>With Oxford University for accommodation and facility access</li>
                      <li>With educational partners and instructors involved in the program</li>
                      <li>With parents/guardians (for participants under 18)</li>
                      <li>When required by law or to protect safety</li>
                      <li>With service providers who assist in program operations</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h2 className="text-2xl font-bold text-black mb-4">Data Security</h2>
                    <p>
                      We are committed to protecting your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
                    </p>
                  </div>
                  
                  <div>
                    <h2 className="text-2xl font-bold text-black mb-4">Student Rights</h2>
                    <p className="mb-4">You have the right to:</p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Access and review your personal information</li>
                      <li>Request corrections to inaccurate information</li>
                      <li>Request deletion of your information (subject to legal requirements)</li>
                      <li>Withdraw consent where applicable</li>
                      <li>File a complaint with relevant data protection authorities</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h2 className="text-2xl font-bold text-black mb-4">Cookies and Tracking</h2>
                    <p>
                      Our website may use cookies to enhance your browsing experience and analyze website traffic. You can control cookie settings through your browser preferences.
                    </p>
                  </div>
                  
                  <div>
                    <h2 className="text-2xl font-bold text-black mb-4">Changes to This Policy</h2>
                    <p>
                      We may update this Privacy Policy from time to time and notify you of any material changes by posting the new policy on our website and updating the "Last updated" date.
                    </p>
                  </div>
                  
                  <div>
                    <h2 className="text-2xl font-bold text-black mb-4">Contact Us</h2>
                    <p className="mb-4">
                      If you have any questions about this Privacy Policy or our data practices, please contact us:
                    </p>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <p><strong>Email:</strong> start@oasissummerschool.com</p>
                      <p><strong>Address:</strong> OASIS Privacy Officer<br />
                      Wolfson Building<br />
                      7 Parks Road<br />
                      Oxford</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        );
      
      case 'curriculum':
        return (
          <div className="min-h-screen bg-white">
            {/* Curriculum Section */}
            <section className="px-6 md:px-12 py-24">
              <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-8">
                  Curriculum
                </h1>
                <p className="text-xl text-gray-600 mb-16 max-w-2xl">
                  Explore our comprehensive curriculum designed to provide students with exceptional educational experiences.
                </p>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[
                    { id: 1, title: "Neural Networks Fundamentals", description: "Introduction to artificial neurons, perceptrons, and basic neural network architectures." },
                    { id: 2, title: "Intro to NNs in PyTorch", description: "Hands-on implementation of neural networks using PyTorch framework and practical coding exercises." },
                    { id: 3, title: "Advanced Architectures", description: "Explore sophisticated neural network designs including CNNs, Diffusion Models, and transformer architectures." },
                    { id: 4, title: "Advanced Architectures in Practice", description: "Apply complex neural network architectures to real-world problems and datasets." },
                    { id: 5, title: "Project Work", description: "Independent and collaborative projects to build comprehensive AI applications from concept to completion." },
                    { id: 6, title: "Careers", description: "Explore AI career paths, industry insights, and prepare for university applications and future opportunities." }
                  ].map((module) => (
                    <div key={module.id} className="group cursor-pointer">
                      <div className="aspect-video rounded-lg mb-4 overflow-hidden group-hover:shadow-lg transition-all duration-300">
                        <img 
                          src={`/images/mod${module.id === 2 ? '2a' : module.id === 6 ? '6a' : module.id}.${module.id === 1 ? 'png' : module.id === 2 ? 'png' : module.id === 3 ? 'png' : module.id === 4 ? 'jpg' : module.id === 5 ? 'jpg' : 'webp'}`}
                          alt={module.title}
                          className={`w-full h-full ${module.id === 1 || module.id === 4 ? 'object-contain' : 'object-cover'}`}
                        />
                      </div>
                      <h3 className="text-xl font-bold text-black mb-2">Vertical {module.id}: {module.title}</h3>
                      <p className="text-gray-600">{module.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        );
      
      case 'accommodation':
        return (
          <div className="min-h-screen bg-white">
            {/* Accommodation Section */}
            <section className="px-6 md:px-12 py-24">
              <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-8">
                  Accommodation
                </h1>
                <div className="space-y-8 text-lg text-gray-600 leading-relaxed">
                  <p>
                    Our accommodation facilities provide students with comfortable, modern living spaces 
                    that foster both academic success and personal growth in a supportive community environment.
                  </p>
                  <p>
                    We provide comfortable college rooms within easy reach of academic facilities 
                    and the vibrant college community.
                  </p>
                  <p>
                    Our dedicated accommodation team ensures that every student feels at home, 
                    with comprehensive support services and facilities designed to enhance the residential experience.
                  </p>
                </div>
                
                <div className="mt-16">
                  <h2 className="text-2xl font-bold text-black mb-8">Accommodation Features</h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-bold text-black mb-3">Modern Facilities</h3>
                      <p className="text-gray-600">Contemporary rooms with comfortable furnishings and modern amenities.</p>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-black mb-3">Community Spaces</h3>
                      <p className="text-gray-600">Common areas designed for socializing, studying, and relaxation.</p>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-black mb-3">24/7 Support</h3>
                      <p className="text-gray-600">Round-the-clock assistance and security for peace of mind.</p>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-black mb-3">Prime Location</h3>
                      <p className="text-gray-600">Convenient access to academic buildings, dining, and city center.</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-16">
                  <h2 className="text-2xl font-bold text-black mb-4">Balliol College Exterior</h2>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    The beautiful exterior of Balliol College showcases centuries of Oxford architectural heritage. This historic setting provides an inspiring backdrop for your academic journey, where tradition meets innovation in one of the world's most prestigious educational environments.
                  </p>
                  <div className="aspect-video rounded-lg overflow-hidden mb-16">
                    <img 
                      src="/images/balliolnice.jpg" 
                      alt="Balliol College Exterior" 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  <h2 className="text-2xl font-bold text-black mb-4">Student Rooms</h2>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    Our comfortable student rooms within Balliol College provide a peaceful environment for rest and study. These are the same rooms that University of Oxford students stay in during term time, thoughtfully designed with modern furnishings, ample storage, and natural light to create a welcoming home away from home in this historic Oxford setting.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6 mb-16">
                    <div className="aspect-video rounded-lg overflow-hidden">
                      <img 
                        src="/images/room1.jpg" 
                        alt="Student Room 1" 
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="aspect-video rounded-lg overflow-hidden">
                      <img 
                        src="/images/room2.jpg" 
                        alt="Student Room 2" 
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>
                  
                  <h2 className="text-2xl font-bold text-black mb-4">Dining Hall</h2>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    Our historic dining hall brings students together for nutritious meals and meaningful conversations. The elegant atmosphere combines traditional Oxford charm with modern catering services, offering diverse menu options to accommodate all dietary preferences.
                  </p>
                  <div className="aspect-video rounded-lg overflow-hidden mb-16">
                    <img 
                      src="/images/dinnerhall.jpg" 
                      alt="Dining Hall" 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  <h2 className="text-2xl font-bold text-black mb-4">Common Room & Amenities</h2>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    The common room serves as the social heart of our accommodation, featuring comfortable seating areas, entertainment facilities, and spaces for both relaxation and collaborative study. It's where lasting friendships are formed and ideas are shared.
                  </p>
                  <div className="aspect-video rounded-lg overflow-hidden">
                    <img 
                      src="/images/common.jpg" 
                      alt="Common Room" 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
              </div>
            </section>
          </div>
        );
      
      case 'vision':
        return (
          <div className="min-h-screen bg-white">
            {/* Vision Section */}
            <section className="px-6 md:px-12 py-24">
              <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-16">
                  Our Vision
                </h1>
                
                <div className="space-y-12 text-lg leading-relaxed">
                  <div>
                    <p className="text-2xl md:text-3xl font-bold text-black leading-tight mb-8">
                      A Different Summer School.
                    </p>
                    <p className="text-gray-700 mb-6">
                    The typical Oxford summer school offers a broad, surface-level introduction to STEM—fine 
                    for those merely exploring options. But students with ambitions of becoming industry 
                    leaders need more than a generic overview. By focusing exclusively on Artificial Intelligence,
                    this programs intends to deliver the depth, discipline, and intellectual 
                    rigor required to excel.
                    </p>
                    <p className="text-gray-700">           
                    This summer school is not a casual introduction, nor a light exploration of possibilities. 
                    It is an intensive, structured journey through AI—beginning with the fundamental principles
                    and advancing to state-of-the-art research in Machine Learning. For students who
                    aspire to shape the future of technology, this course is designed to equip participants 
                    with the knowledge and skills essential for a thriving career in AI.
                    </p>
                  </div>
                                    
                  <div>
                    <h2 className="text-2xl font-bold text-black mb-6">Vertical Learning</h2>
                    <p className="text-gray-700 mb-6">
                    Our program adopts a depth-first teaching approach. This means we spend
                      little time on beginner concepts and move very quickly to advanced topics by
                      teaching only what is absolutely necessary before moving on. Don't worry, we
                      know what we're doing; we return to the basics later. 
                    </p>
                    <p className="text-gray-700">
                    This approach allows students to reach the top of the mountain and look down
                      at the terrain below, giving them a comprehensive view of the entire subject. 
                      They gain an early appreciation for the bigger picture and understand how all
                      the different parts connect, which makes returning to foundational concepts later
                      much more meaningful and productive. You won't just learn the "what" and 
                      "how"—you'll understand the "why" right from the start.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-black mb-6">Preparation for Self Learning</h2>
                    <p className="text-gray-700 mb-6">
                      It is not possible to teach the entirity of AI in two weeks. To truly succeed in 
                      the field of Machine Learning, students will need to continue their learning 
                      beyond the summer school. That is why we focus not only
                      teaching a AI theory and application, but also how to learn AI. We want to give students 
                      a roadmap for the skills they need to continue their development. 
                    </p>
                    <p className="text-gray-700">
                    This includes learning how to read and understand academic papers, how to build 
                    projects or find existing open-source projects to contribute to, and finding collaborators
                    and communnities to aid them on their journey.
                    </p>
                  </div>
              
                  <div>
                    <h2 className="text-2xl font-bold text-black mb-6">Staying Ahead of the Curve</h2>
                    <p className="text-gray-700 mb-6">
                      Traditional education moves too slowly for the pace of AI advancement. Every year
                      the state-of-the-art in AI is rendering concepts taught in traditional education obsolete.
                      It is important to us that we keep our curriculum up to date with the fast advancement
                      of the field. 
                    </p>
                    <p className="text-gray-700">
                      We may not accept all students as we realize the course content requires a certain caliber, 
                      which is why we adopt an application approach. That given, we do not expect prior
                      knowledge in AI. We are seeking students with a strong ability to learn and an intention
                      to do good in the world with AI.  
                    </p>
                  </div>
                  
                  <div>
                    <h2 className="text-2xl font-bold text-black mb-6">All Encompassing</h2>
                    <p className="text-gray-700 mb-6">
                      Success in AI requires more than just theoretical knowledge. It demands a complete ecosystem of learning: 
                      deep understanding of AI theory, hands-on practical application, real-world project experience, 
                      portfolio development, and career preparation skills. At OASIS, we recognize that each component 
                      is essential for career success.
                    </p>
                    <p className="text-gray-700 mb-6">
                      Our program aims to integrate all of these elements, from neural network fundamentals to cutting-edge 
                      research applications, from individual and collaborative coding exercises to building 
                      impressive portfolios. 
                      We're not looking to simply teach AI; we seek to prepare students for the complete journey from curious learners
                      to confident trainee AI engineers. 
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-blue-600 pl-8">
                    <p className="text-2xl md:text-3xl font-bold text-black leading-tight mb-4">
                      "The best time to plant a tree was 20 years ago. The second best time is now."
                    </p>
                    <p className="text-gray-700 mb-6">
                      The AI revolution began years ago. But for the next generation of leaders, their moment starts now.
                    </p>
                    <p className="text-xl font-bold text-black">
                      At OASIS, we don't want to prepare students for the future. We want to equip them to be part of it.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        );
      
      case 'pricing':
        return (
          <div className="min-h-screen bg-white">
            {/* Pricing Section */}
            <section className="px-6 md:px-12 py-24">
              <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-8 text-center">
                  Choose Your Program
                </h1>
                <p className="text-xl text-gray-600 mb-16 text-center max-w-3xl mx-auto">
                  Select the program that best fits your learning goals, schedule, and budget. All programs offer intensive AI education with hands-on experience.
                </p>
                
                {/* Pricing Cards Design */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-6">
                  {/* One Week Stream */}
                  <div className="bg-white rounded-2xl p-6 lg:p-8 border-2 border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-xl relative">
                    <div className="text-center mb-6">
                      <h2 className="text-2xl md:text-3xl font-bold text-black mb-2">
                        One Week
                      </h2>
                      <div className="mb-4">
                        <span className="text-4xl md:text-5xl font-bold text-black">£5,495</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-4">
                        Fast-paced, focused learning for students ready to dive deep into AI fundamentals
                      </p>
                    </div>
                    
                    <div className="space-y-4 mb-6">
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <h3 className="font-bold text-black mb-1 text-sm">Neural Networks Fundamentals</h3>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <h3 className="font-bold text-black mb-1 text-sm">PyTorch Implementation</h3>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <h3 className="font-bold text-black mb-1 text-sm">Advanced Architectures</h3>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <h3 className="font-bold text-black mb-1 text-sm">Project Portfolio</h3>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 rounded-lg p-4 mb-6">
                      <div className="space-y-2 text-sm text-gray-600">
                        <div className="flex justify-between">
                          <span>Duration:</span>
                          <span className="font-medium">7 days</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Hours per day:</span>
                          <span className="font-medium">8-10 hours</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Accommodation:</span>
                          <span className="font-medium">Not included</span>
                        </div>
                      </div>
                    </div>
                    
                    <button className="w-full bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                      Apply Now
                    </button>
                  </div>
                  
                  {/* Two Weeks Out of College */}
                  <div className="bg-white rounded-2xl p-6 lg:p-8 border-2 border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-xl relative">
                    <div className="text-center mb-6">
                      <h2 className="text-2xl md:text-3xl font-bold text-black mb-2">
                        Two Weeks
                      </h2>
                      <div className="mb-4">
                        <span className="text-4xl md:text-5xl font-bold text-black">£5,995</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-4">
                        Complete AI education with deeper exploration and extended project work
                      </p>
                    </div>
                    
                    <div className="space-y-4 mb-6">
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <h3 className="font-bold text-black mb-1 text-sm">Complete AI Foundation</h3>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <h3 className="font-bold text-black mb-1 text-sm">Research Applications</h3>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <h3 className="font-bold text-black mb-1 text-sm">Collaborative Projects</h3>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <h3 className="font-bold text-black mb-1 text-sm">Career Preparation</h3>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <h3 className="font-bold text-black mb-1 text-sm">Mentorship Program</h3>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 rounded-lg p-4 mb-6">
                      <div className="space-y-2 text-sm text-gray-600">
                        <div className="flex justify-between">
                          <span>Duration:</span>
                          <span className="font-medium">14 days</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Hours per day:</span>
                          <span className="font-medium">6-8 hours</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Accommodation:</span>
                          <span className="font-medium">Not included</span>
                        </div>
                      </div>
                    </div>
                    
                    <button className="w-full bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                      Apply Now
                    </button>
                  </div>
                  
                  {/* Two Weeks In College */}
                  <div className="bg-white rounded-2xl p-6 lg:p-8 border-2 border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-xl relative">
                    <div className="text-center mb-6">
                      <h2 className="text-2xl md:text-3xl font-bold text-black mb-2">
                        Two Weeks In College
                      </h2>
                      <div className="mb-4">
                        <span className="text-4xl md:text-5xl font-bold text-black">£6,995</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-4">
                        Full residential experience with accommodation at Balliol College, Oxford
                      </p>
                    </div>
                    
                    <div className="space-y-4 mb-6">
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <h3 className="font-bold text-black mb-1 text-sm">Complete AI Foundation</h3>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <h3 className="font-bold text-black mb-1 text-sm">Research Applications</h3>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <h3 className="font-bold text-black mb-1 text-sm">Balliol College Accommodation</h3>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <h3 className="font-bold text-black mb-1 text-sm">All Meals Included</h3>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <h3 className="font-bold text-black mb-1 text-sm">24/7 Support</h3>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 rounded-lg p-4 mb-6">
                      <div className="space-y-2 text-sm text-gray-600">
                        <div className="flex justify-between">
                          <span>Duration:</span>
                          <span className="font-medium">14 days</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Hours per day:</span>
                          <span className="font-medium">6-8 hours</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Accommodation:</span>
                          <span className="font-medium">Included</span>
                        </div>
                      </div>
                    </div>
                    
                    <button className="w-full bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                      Apply Now
                    </button>
                  </div>
                </div>
                
                {/* Comparison Section */}
                <div className="mt-20">
                  <h2 className="text-3xl md:text-4xl font-bold text-black mb-12 text-center">
                    Program Comparison
                  </h2>
                  
                  <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
                    <div className="grid md:grid-cols-3 gap-8">
                      <div className="text-center">
                        <h3 className="text-xl font-bold text-black mb-4">Best For</h3>
                        <div className="space-y-3">
                          <div className="bg-white rounded-lg p-4">
                            <h4 className="font-bold text-gray-800 mb-2">One Week</h4>
                            <p className="text-sm text-gray-600">Students with programming experience seeking intensive AI training</p>
                          </div>
                          <div className="bg-white rounded-lg p-4">
                            <h4 className="font-bold text-gray-800 mb-2">Two Weeks Out</h4>
                            <p className="text-sm text-gray-600">Complete beginners wanting comprehensive AI education</p>
                          </div>
                          <div className="bg-white rounded-lg p-4">
                            <h4 className="font-bold text-gray-800 mb-2">Two Weeks In</h4>
                            <p className="text-sm text-gray-600">Students wanting full Oxford residential experience</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="text-center">
                        <h3 className="text-xl font-bold text-black mb-4">Accommodation</h3>
                        <div className="space-y-3">
                          <div className="bg-white rounded-lg p-4">
                            <h4 className="font-bold text-gray-800 mb-2">One Week</h4>
                            <p className="text-sm text-gray-600">Not included - arrange your own</p>
                          </div>
                          <div className="bg-white rounded-lg p-4">
                            <h4 className="font-bold text-gray-800 mb-2">Two Weeks Out</h4>
                            <p className="text-sm text-gray-600">Not included - arrange your own</p>
                          </div>
                          <div className="bg-white rounded-lg p-4">
                            <h4 className="font-bold text-gray-800 mb-2">Two Weeks In</h4>
                            <p className="text-sm text-gray-600">Balliol College accommodation included</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="text-center">
                        <h3 className="text-xl font-bold text-black mb-4">Value</h3>
                        <div className="space-y-3">
                          <div className="bg-white rounded-lg p-4">
                            <h4 className="font-bold text-gray-800 mb-2">One Week</h4>
                            <p className="text-sm text-gray-600">£5,495 - Intensive foundation</p>
                          </div>
                          <div className="bg-white rounded-lg p-4">
                            <h4 className="font-bold text-gray-800 mb-2">Two Weeks Out</h4>
                            <p className="text-sm text-gray-600">£5,995 - Comprehensive learning</p>
                          </div>
                          <div className="bg-white rounded-lg p-4">
                            <h4 className="font-bold text-gray-800 mb-2">Two Weeks In</h4>
                            <p className="text-sm text-gray-600">£6,995 - Full Oxford experience</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        );
      
      case 'contact':
        return (
          <div className="min-h-screen bg-white">
            {/* Contact Section */}
            <section className="px-6 md:px-12 py-24">
              <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-8">
                  Get in Touch
                </h1>
                <p className="text-xl text-gray-600 mb-16">
                  Want to build real skills this summer? Let’s get started.
                </p>
                
                <div className="grid md:grid-cols-2 gap-16">
                  <div>
                    <h2 className="text-2xl font-bold text-black mb-6">Contact Information</h2>
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-bold text-black">Email</h3>
                        <p className="text-gray-600">start@oasissummerschool.com</p>
                      </div>
                      
                      <div>
                        <h3 className="font-bold text-black">Phone</h3>
                        <p className="text-gray-600">+44 (0) 7443 494 601</p>
                      </div>
                      <div>
                        <h3 className="font-bold text-black">Learning Hub</h3>
                        <p className="text-gray-600">
                          Wolfson Building<br />
                          7 Parks Rd<br />
                          OX1 3QD<br />
                          Oxford, UK
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h2 className="text-2xl font-bold text-black mb-6">Send us a Message</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <input 
                          type="text" 
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your Name" 
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                          disabled={formStatus.isSubmitting}
                        />
                      </div>
                      <div>
                        <input 
                          type="email" 
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Your Email" 
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                          disabled={formStatus.isSubmitting}
                        />
                      </div>
                      <div>
                        <textarea 
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="Your Message" 
                          rows={5}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                          disabled={formStatus.isSubmitting}
                        ></textarea>
                      </div>
                      
                      {/* Status Message */}
                      {formStatus.message && (
                        <div className={`p-4 rounded-lg ${
                          formStatus.isSuccess 
                            ? 'bg-green-100 text-green-800 border border-green-200' 
                            : formStatus.isError 
                            ? 'bg-red-100 text-red-800 border border-red-200'
                            : 'bg-blue-100 text-blue-800 border border-blue-200'
                        }`}>
                          {formStatus.message}
                        </div>
                      )}
                      
                      <button 
                        type="submit"
                        disabled={formStatus.isSubmitting}
                        className={`px-8 py-3 rounded-full flex items-center space-x-2 transition-all duration-300 transform hover:scale-105 ${
                          formStatus.isSubmitting
                            ? 'bg-gray-400 cursor-not-allowed'
                            : 'bg-blue-600 hover:bg-blue-700'
                        } text-white`}
                      >
                        <span>
                          {formStatus.isSubmitting ? 'Sending...' : 'Send Message'}
                        </span>
                        {!formStatus.isSubmitting && <ArrowRight className="w-4 h-4" />}
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </section>
          </div>
        );
      
      case 'references':
        return (
          <div className="min-h-screen bg-white">
            {/* References Section */}
            <section className="px-6 md:px-12 py-24">
              <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-8">
                  References & Resources
                </h1>
                <p className="text-xl text-gray-600 mb-16">
                  Essential academic papers, textbooks, and resources that form the foundation of AI.
                </p>
                
                <div className="space-y-12">
                  {/* Foundational Papers */}
                  <div>
                    <h2 className="text-2xl font-bold text-black mb-6">Foundational Papers</h2>
                    <div className="space-y-4">
                      <div className="bg-gray-50 p-6 rounded-lg">
                        <h3 className="font-bold text-black mb-2">Attention Is All You Need</h3>
                        <p className="text-gray-600 mb-2">Vaswani, A., et al. (2017). Attention is all you need. Advances in neural information processing systems, 30.</p>
                        <a href="https://arxiv.org/abs/1706.03762" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">
                          View Paper →
                        </a>
                      </div>
                      
                      <div className="bg-gray-50 p-6 rounded-lg">
                        <h3 className="font-bold text-black mb-2">Deep Residual Learning for Image Recognition</h3>
                        <p className="text-gray-600 mb-2">He, K., et al. (2016). Deep residual learning for image recognition. Proceedings of the IEEE conference on computer vision and pattern recognition.</p>
                        <a href="https://arxiv.org/abs/1512.03385" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">
                          View Paper →
                        </a>
                      </div>
                      
                      <div className="bg-gray-50 p-6 rounded-lg">
                        <h3 className="font-bold text-black mb-2">Generative Adversarial Networks</h3>
                        <p className="text-gray-600 mb-2">Goodfellow, I., et al. (2014). Generative adversarial nets. Advances in neural information processing systems, 27.</p>
                        <a href="https://arxiv.org/abs/1406.2661" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">
                          View Paper →
                        </a>
                      </div>
                      
                      <div className="bg-gray-50 p-6 rounded-lg">
                        <h3 className="font-bold text-black mb-2">ImageNet Classification with Deep Convolutional Neural Networks</h3>
                        <p className="text-gray-600 mb-2">Krizhevsky, A., Sutskever, I., & Hinton, G. E. (2012). Imagenet classification with deep convolutional neural networks. Communications of the ACM, 60(6), 84-90.</p>
                        <a href="https://papers.nips.cc/paper/2012/hash/c399862d3b9d6b76c8436e924a68c45b-Abstract.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">
                          View Paper →
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  {/* Modern AI Papers */}
                  <div>
                    <h2 className="text-2xl font-bold text-black mb-6">Modern AI Research</h2>
                    <div className="space-y-4">
                      <div className="bg-gray-50 p-6 rounded-lg">
                        <h3 className="font-bold text-black mb-2">Language Models are Few-Shot Learners</h3>
                        <p className="text-gray-600 mb-2">Brown, T., et al. (2020). Language models are few-shot learners. Advances in neural information processing systems, 33, 1877-1901.</p>
                        <a href="https://arxiv.org/abs/2005.14165" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">
                          View Paper →
                        </a>
                      </div>
                      
                      <div className="bg-gray-50 p-6 rounded-lg">
                        <h3 className="font-bold text-black mb-2">Denoising Diffusion Probabilistic Models</h3>
                        <p className="text-gray-600 mb-2">Ho, J., Jain, A., & Abbeel, P. (2020). Denoising diffusion probabilistic models. Advances in Neural Information Processing Systems, 33, 6840-6851.</p>
                        <a href="https://arxiv.org/abs/2006.11239" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">
                          View Paper →
                        </a>
                      </div>
                      
                      <div className="bg-gray-50 p-6 rounded-lg">
                        <h3 className="font-bold text-black mb-2">BERT: Pre-training of Deep Bidirectional Transformers</h3>
                        <p className="text-gray-600 mb-2">Devlin, J., et al. (2018). Bert: Pre-training of deep bidirectional transformers for language understanding. arXiv preprint arXiv:1810.04805.</p>
                        <a href="https://arxiv.org/abs/1810.04805" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">
                          View Paper →
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  {/* Textbooks */}
                  <div>
                    <h2 className="text-2xl font-bold text-black mb-6">Essential Textbooks</h2>
                    <div className="space-y-4">
                      <div className="bg-gray-50 p-6 rounded-lg">
                        <h3 className="font-bold text-black mb-2">Deep Learning</h3>
                        <p className="text-gray-600 mb-2">Goodfellow, I., Bengio, Y., & Courville, A. (2016). Deep learning. MIT press.</p>
                        <a href="https://www.deeplearningbook.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">
                          Free Online Version →
                        </a>
                      </div>
                      
                      <div className="bg-gray-50 p-6 rounded-lg">
                        <h3 className="font-bold text-black mb-2">Pattern Recognition and Machine Learning</h3>
                        <p className="text-gray-600 mb-2">Bishop, C. M. (2006). Pattern recognition and machine learning. Springer.</p>
                        <a href="https://www.microsoft.com/en-us/research/uploads/prod/2006/01/Bishop-Pattern-Recognition-and-Machine-Learning-2006.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">
                          Free PDF →
                        </a>
                      </div>
                      
                      <div className="bg-gray-50 p-6 rounded-lg">
                        <h3 className="font-bold text-black mb-2">The Elements of Statistical Learning</h3>
                        <p className="text-gray-600 mb-2">Hastie, T., Tibshirani, R., & Friedman, J. (2009). The elements of statistical learning: data mining, inference, and prediction. Springer Science & Business Media.</p>
                        <a href="https://web.stanford.edu/~hastie/ElemStatLearn/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">
                          Free Online Version →
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  {/* Online Resources */}
                  <div>
                    <h2 className="text-2xl font-bold text-black mb-6">Online Learning Resources</h2>
                    <div className="space-y-4">
                      <div className="bg-gray-50 p-6 rounded-lg">
                        <h3 className="font-bold text-black mb-2">Fast.ai</h3>
                        <p className="text-gray-600 mb-2">Practical deep learning for coders. Free online course with hands-on projects.</p>
                        <a href="https://www.fast.ai/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">
                          Visit Fast.ai →
                        </a>
                      </div>
                      
                      <div className="bg-gray-50 p-6 rounded-lg">
                        <h3 className="font-bold text-black mb-2">CS231n: Convolutional Neural Networks for Visual Recognition</h3>
                        <p className="text-gray-600 mb-2">Stanford University course on deep learning for computer vision.</p>
                        <a href="http://cs231n.stanford.edu/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">
                          Course Website →
                        </a>
                      </div>
                      
                      <div className="bg-gray-50 p-6 rounded-lg">
                        <h3 className="font-bold text-black mb-2">Papers With Code</h3>
                        <p className="text-gray-600 mb-2">The latest in machine learning research with code implementations.</p>
                        <a href="https://paperswithcode.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">
                          Browse Papers →
                        </a>
                      </div>
                      
                      <div className="bg-gray-50 p-6 rounded-lg">
                        <h3 className="font-bold text-black mb-2">Hugging Face</h3>
                        <p className="text-gray-600 mb-2">Open-source platform for machine learning models and datasets.</p>
                        <a href="https://huggingface.co/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">
                          Explore Models →
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  {/* Programming Resources */}
                  <div>
                    <h2 className="text-2xl font-bold text-black mb-6">Programming & Implementation</h2>
                    <div className="space-y-4">
                      <div className="bg-gray-50 p-6 rounded-lg">
                        <h3 className="font-bold text-black mb-2">PyTorch Documentation</h3>
                        <p className="text-gray-600 mb-2">Official PyTorch documentation and tutorials for deep learning implementation.</p>
                        <a href="https://pytorch.org/docs/stable/index.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">
                          PyTorch Docs →
                        </a>
                      </div>
                      
                      <div className="bg-gray-50 p-6 rounded-lg">
                        <h3 className="font-bold text-black mb-2">TensorFlow Documentation</h3>
                        <p className="text-gray-600 mb-2">Google's machine learning platform documentation and guides.</p>
                        <a href="https://www.tensorflow.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">
                          TensorFlow Docs →
                        </a>
                      </div>
                      
                      <div className="bg-gray-50 p-6 rounded-lg">
                        <h3 className="font-bold text-black mb-2">Jupyter Notebooks</h3>
                        <p className="text-gray-600 mb-2">Interactive computing environment for data science and machine learning.</p>
                        <a href="https://jupyter.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">
                          Jupyter Project →
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  {/* Research Communities */}
                  <div>
                    <h2 className="text-2xl font-bold text-black mb-6">Research Communities</h2>
                    <div className="space-y-4">
                      <div className="bg-gray-50 p-6 rounded-lg">
                        <h3 className="font-bold text-black mb-2">arXiv</h3>
                        <p className="text-gray-600 mb-2">Open access repository of electronic preprints in computer science, mathematics, and physics.</p>
                        <a href="https://arxiv.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">
                          Browse arXiv →
                        </a>
                      </div>
                      
                      <div className="bg-gray-50 p-6 rounded-lg">
                        <h3 className="font-bold text-black mb-2">Google Scholar</h3>
                        <p className="text-gray-600 mb-2">Academic search engine for scholarly literature across disciplines.</p>
                        <a href="https://scholar.google.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">
                          Search Scholar →
                        </a>
                      </div>
                      
                      <div className="bg-gray-50 p-6 rounded-lg">
                        <h3 className="font-bold text-black mb-2">GitHub</h3>
                        <p className="text-gray-600 mb-2">Platform for hosting and collaborating on machine learning projects and research code.</p>
                        <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">
                          Explore GitHub →
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  {/* Site Assets & Resources */}
                  <div>
                    <h2 className="text-2xl font-bold text-black mb-6">Site Assets & Resources</h2>
                    <p className="text-gray-600 mb-6">Images and graphics used in the development of this website.</p>
                    
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="font-bold text-black mb-4">Images & Graphics</h3>
                      <div className="space-y-2">
                        <a href="https://victorzhou.com/series/neural-networks-from-scratch/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline block">Neural Networks from Scratch</a>
                        <a href="https://opensource.legal/projects/Pytorch" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline block">PyTorch Legal</a>
                        <a href="https://heidloff.net/article/foundation-models-transformers-bert-and-gpt/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline block">Foundation Models Transformers</a>
                        <a href="https://ankittaxak5713.medium.com/vision-transformers-part-4-918311521bbb" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline block">Vision Transformers</a>
                        <a href="https://docs.flutter.dev/get-started" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline block">Flutter Documentation</a>
                        <a href="https://www.phaedrasolutions.com/blog/top-generative-ai-companies" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline block">Top Generative AI Companies</a>
                        <a href="https://www.ox.ac.uk/admissions/graduate/colleges/balliol-college" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline block">Balliol College - Oxford</a>
                        <a href="https://www.balliol.ox.ac.uk/current-members/accommodation-undergraduates" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline block">Balliol Accommodation</a>
                        <a href="https://en.wikipedia.org/wiki/File:Balliol_College_Dining_Hall,_Oxford_-_Diliff.jpg" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline block">Balliol Dining Hall Image</a>
                        <a href="https://www.balliol.ox.ac.uk/news/2019/may/balliols-jcr-is-refurbished" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline block">Balliol JCR Refurbishment</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        );
      
      default:
        return (
          <>
            {/* Hero Section */}
            <main className="px-4 sm:px-6 md:px-12 pt-8 sm:pt-16 pb-16 sm:pb-24">
              <div className="max-w-4xl">
                <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6 sm:mb-8">
                  <span className="text-black">Let's </span>
                  <span className="text-gray-400">kickstart</span>
                  <br />
                  <span className="text-gray-400">your AI </span>
                  <span className="text-black">Career</span>
                  <br />
                  <span className="text-black">with OASIS.</span>
                </h1>

                <div className="mb-8 sm:mb-12">
                  <p className="text-gray-600 text-lg sm:text-xl md:text-2xl leading-relaxed mb-2">
                    <span>Two week AI intensive for 14 - 18 year olds at the University of Oxford.</span>
                  </p>
                  <p className="text-gray-600 text-lg sm:text-xl md:text-2xl leading-relaxed">
                    Taught by University of Oxford Researchers.
                  </p>
                </div>

                <button className="group bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full flex items-center space-x-2 sm:space-x-3 transition-all duration-300 transform hover:scale-105 hover:shadow-lg w-fit">
                  <span className="font-medium text-base sm:text-lg">Apply Now</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </main>

            {/* Side by Side Section */}
            <section className="px-4 sm:px-6 md:px-12 py-12 sm:py-16">
              <div className="max-w-6xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
                  <div className="space-y-6">
                    <div>
                      <p className="text-gray-400 text-base font-medium mb-6 tracking-wider uppercase">What We Do</p>
                      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight mb-6 sm:mb-8">
                        Preparing the Next Generation of AI Engineers
                      </h2>
                    </div>
                    
                    <div className="space-y-4 sm:space-y-6 text-base sm:text-lg text-gray-600 leading-relaxed">
                      <p>
                        In 2017, Google released The Transformer (shown right). This model sparked the AI revolution 
                        we are witnessing. At OASIS, we aim to 
                        bring 14 - 18 year olds interested in AI careers, up to speed on the past 8 years of research,
                        putting them in a position to impress.
                      </p>
                      <p>
                        God willing, over the course of just two weeks, students will gain a
                        strong foundation in modern AI, exploring everything from neural networks
                        to cutting-edge large language models like ChatGPT. </p>
                      <p>
                        We haven't designed OASIS to be an easy summer school. Our priority is
                        to maximize students' career potential, and that takes effort. We're 
                        looking for motivated, hard working students ready to rise to the challenge. You can 
                        learn more about what this program offers by <button 
                          onClick={() => setActiveTab('vision')}
                          className="text-blue-600 hover:text-blue-700 underline font-medium"
                        >
                         reading our vision
                        </button>. 
                      </p>
                    </div>
                    
                    <div className="flex flex-wrap gap-4 pt-6">
                      <span className="px-6 py-3 bg-gray-100 text-gray-700 rounded-full text-base font-medium">Theory</span>
                      <span className="px-6 py-3 bg-gray-100 text-gray-700 rounded-full text-base font-medium">Application</span>
                      <span className="px-6 py-3 bg-gray-100 text-gray-700 rounded-full text-base font-medium">Vision</span>
                    </div>
                  </div>
                  
                  <div className="overflow-hidden">
                    <img 
                      src="/images/transformer.png" 
                      alt="Transformer" 
                      className="w-full h-auto object-contain hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Image Section */}
            <section className="px-6 md:px-12 py-16">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
                    Where You Will Stay
                  </h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    Balliol College, founded in 1263, is one of Oxford's oldest and most prestigious colleges. 
                    Known for its academic excellence and vibrant community, Balliol offers students a unique 
                    blend of historical tradition and modern innovation in the heart of Oxford. Notable alumni 
                    include former British Prime Ministers Boris Johnson, Harold Macmillan and Edward Heath,
                    13 Nobel Prize winners, and literary giants like Gerard Manley Hopkins and Aldous Huxley. <button 
                      onClick={() => setActiveTab('accommodation')}
                      className="text-blue-600 hover:text-blue-700 underline font-medium"
                    >
                      Learn more about the accommodation
                    </button>.
                  </p>
                </div>
                
                <div className="flex justify-center">
                  <div className="aspect-video bg-gray-100 overflow-hidden rounded-lg max-w-4xl w-full">
                    <img 
                      src="/images/balliol.png" 
                      alt="Balliol College" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* About Section */}
            <section className="px-6 md:px-12 py-24 bg-white">
              <div className="grid md:grid-cols-2 gap-16 items-center">
                <div>
                  <p className="text-gray-400 text-sm font-medium mb-6 tracking-wider uppercase">Let's meet OASIS</p>
                  <h2 className="text-2xl md:text-3xl font-bold text-black leading-relaxed">
                    We create transformative AI education experiences that prepare students for the future.
                  </h2>
                </div>
                
                <div>
                  <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                    <span className="text-black">Through hands-on</span>
                    <br />
                    <span className="text-black">learning, mentorship,</span>
                    <br />
                    <span className="text-black">and collaboration, we turn</span>
                    <br />
                    <span className="text-gray-400">curious minds into</span>
                    <br />
                    <span className="text-gray-400">AI innovators.</span>
                  </h3>
                </div>
              </div>
            </section>

            {/* MT Organization Section */}
            <section className="px-6 md:px-12 py-24 bg-gray-50">
              <div className="max-w-6xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                  <div className="space-y-6">
                    <div>
                      <p className="text-gray-400 text-base font-medium mb-6 tracking-wider uppercase">Talent Reach</p>
                      <h2 className="text-4xl md:text-5xl font-bold text-black leading-tight mb-8">
                        Expert Network
                      </h2>
                    </div>
                    
                    <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                      <p>
                        Our network reaches far beyond Oxford, with a experts from the likes of Google 
                        DeepMind, Meta and McKinsey QuantumBlack, who students can reach out to for advice in their
                        long term AI journey.
                      </p>
                      <p>
                        Through Meaningful Technologies, we provide free remote AI support from leading experts 
                        in the field, to those beginning their journey, with one condition: they must be working 
                        to make the world a better place.
                      </p>
                      <p>
                        This commitment to AI for good reflects one Meaningful Technologies' core beliefs: advanced AI knowledge should 
                        be accessible to those working to make the world better. <a href="https://meaningfultechnologies.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline font-medium">Learn more about Meaningful Technologies</a>.
                      </p>
                    </div>
                    
                    <div className="flex flex-wrap gap-4 pt-6">
                      <span className="px-6 py-3 bg-white text-gray-700 rounded-full text-base font-medium shadow-sm">Free Support</span>
                      <span className="px-6 py-3 bg-white text-gray-700 rounded-full text-base font-medium shadow-sm">Expert Network</span>
                      <span className="px-6 py-3 bg-white text-gray-700 rounded-full text-base font-medium shadow-sm">Real Opportunities</span>
                    </div>
                  </div>
                  
                  <div className="overflow-hidden rounded-lg">
                    <a href="https://meaningfultechnologies.com/" target="_blank" rel="noopener noreferrer">
                      <img 
                        src="/images/mt.png" 
                        alt="Meaningful Technologies Organization" 
                        className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </section>

            {/* Information Section */}
            <section className="px-6 md:px-12 py-24 bg-white">
              <div className="max-w-6xl mx-auto">
                <div className="mb-16">
                  <p className="text-gray-400 text-sm font-medium mb-6 tracking-wider uppercase">Our Approach</p>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight mb-8">
                    Information that matters
                  </h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-black">Foundational Learning</h3>
                    <p className="text-gray-600 leading-relaxed">
                      We start with core AI concepts and mathematical foundations to ensure 
                      students build a solid understanding before advancing to complex topics.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-black">Hands-On Projects</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Students learn best by building real AI applications from neural networks to language models, 
                      gaining practical experience that goes beyond theoretical knowledge.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-black">Expert Mentorship</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Learn directly from AI researchers who providing 
                      personalized guidance and share cutting-edge insights into state-of-the-art AI research.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-black">Collaborative Learning</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Students work in teams on challenging projects, developing both technical 
                      skills and the collaboration abilities essential for AI research and development.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-black">Portfolio Development</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Helping students demonstrate their skills to universities and future employers.
                      Having an impressive project portfolio proves practical ability improving prospects.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-black">Future-Ready Skills</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Beyond technical knowledge, students must develop critical thinking, problem-solving, 
                      and AI practices to prepare them for leadership in the AI revolution.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Industry Leaders Section */}
            <section className="px-6 md:px-12 py-24 bg-gray-50">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                  <p className="text-gray-400 text-sm font-medium mb-6 tracking-wider uppercase">Industry Perspective</p>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight mb-8">
                    What leaders are saying about AI
                  </h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    The world's most influential tech leaders recognize AI as the defining technology of our time. 
                    Their insights highlight why preparing the next generation for this revolution is more critical than ever.
                  </p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-8 items-start">
                  <div>
                    <img 
                      src="/images/markpost2.png" 
                      alt="Mark Zuckerberg on AI" 
                      className="w-full h-auto border border-gray-300 transform scale-90 origin-top"
                    />
                  </div>
                  <div>
                    <img 
                      src="/images/sampost.png" 
                      alt="Sam Altman on AI" 
                      className="w-full h-auto border border-gray-300 transform scale-110 origin-top"
                    />
                  </div>
                  <div>
                    <img 
                      src="/images/elonpost.png" 
                      alt="Elon Musk on AI" 
                      className="w-full h-auto border border-gray-300 transform scale-90 origin-top"
                    />
                  </div>
                </div>
                
                <div className="text-center mt-12">
                  <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
                    These visionary leaders understand that AI isn't just changing technology—it's reshaping entire industries, 
                    economies, and the way we live and work. At OASIS, we're ensuring the next generation is ready to lead 
                    this transformation, not just witness it.
                  </p>
                </div>
              </div>
            </section>

            {/* Call to Action Section */}
            <section className="px-6 md:px-12 py-24 bg-gray-50">
              <div className="max-w-4xl">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-16">
                  <span className="text-black">Ready to shape the future?</span>
                  <br />
                  <span className="text-black">We'd love to help.</span>
                </h2>

                <button 
                  onClick={() => setActiveTab('contact')}
                  className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full flex items-center space-x-3 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                >
                  <span className="font-medium text-lg">Get in touch</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </section>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-4 sm:px-6 md:px-12 py-4 sm:py-6">
        <div className="flex items-center space-x-2">
          <img 
            src="/images/wave1.png" 
            // src="/images/logo8.png" 
            alt="Resize Logo" 
            className="w-6 h-6 sm:w-8 sm:h-8 object-contain rounded-lg"
          />
          <button 
            onClick={() => handleTabChange('home')}
            className="text-lg sm:text-xl font-bold text-black hover:text-gray-700 transition-colors"
          >
            OASIS
          </button>
        </div>
        
        <div className="hidden sm:flex items-center space-x-4 lg:space-x-8">
          <button 
            onClick={() => handleTabChange('vision')}
            className={`text-base font-medium transition-colors ${
              activeTab === 'vision' ? 'text-blue-600' : 'text-gray-600 hover:text-black'
            }`}
          >
            Vision
          </button>
          <button 
            onClick={() => handleTabChange('curriculum')}
            className={`text-base font-medium transition-colors ${
              activeTab === 'curriculum' ? 'text-blue-600' : 'text-gray-600 hover:text-black'
            }`}
          >
            Curriculum
          </button>
          <button 
            onClick={() => handleTabChange('accommodation')}
            className={`text-base font-medium transition-colors ${
              activeTab === 'accommodation' ? 'text-blue-600' : 'text-gray-600 hover:text-black'
            }`}
          >
            Accommodation
          </button>
          <button 
            onClick={() => handleTabChange('references')}
            className={`text-base font-medium transition-colors ${
              activeTab === 'references' ? 'text-blue-600' : 'text-gray-600 hover:text-black'
            }`}
          >
            References
          </button>
          <button 
            onClick={() => handleTabChange('contact')}
            className={`text-base font-medium transition-colors ${
              activeTab === 'contact' ? 'text-blue-600' : 'text-gray-600 hover:text-black'
            }`}
          >
            Contact
          </button>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="sm:hidden text-gray-600 hover:text-black"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="sm:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="px-4 py-2 space-y-1">
            <button 
              onClick={() => handleTabChange('vision')}
              className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors ${
                activeTab === 'vision' ? 'text-blue-600 bg-blue-50' : 'text-gray-600 hover:text-black hover:bg-gray-50'
              }`}
            >
              Vision
            </button>
            <button 
              onClick={() => handleTabChange('curriculum')}
              className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors ${
                activeTab === 'curriculum' ? 'text-blue-600 bg-blue-50' : 'text-gray-600 hover:text-black hover:bg-gray-50'
              }`}
            >
              Curriculum
            </button>
            <button 
              onClick={() => handleTabChange('accommodation')}
              className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors ${
                activeTab === 'accommodation' ? 'text-blue-600 bg-blue-50' : 'text-gray-600 hover:text-black hover:bg-gray-50'
              }`}
            >
              Accommodation
            </button>
            <button 
              onClick={() => handleTabChange('references')}
              className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors ${
                activeTab === 'references' ? 'text-blue-600 bg-blue-50' : 'text-gray-600 hover:text-black hover:bg-gray-50'
              }`}
            >
              References
            </button>
            <button 
              onClick={() => handleTabChange('contact')}
              className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors ${
                activeTab === 'contact' ? 'text-blue-600 bg-blue-50' : 'text-gray-600 hover:text-black hover:bg-gray-50'
              }`}
            >
              Contact
            </button>
          </div>
        </div>
      )}

      {renderContent()}
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white px-4 sm:px-6 md:px-12 py-8 sm:py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <img 
                  src="/images/wave1.png" 
                  alt="OASIS Logo" 
                  className="w-8 h-8 object-contain rounded-lg filter invert"
                />
                <span className="text-xl font-bold">OASIS</span>
              </div>
              <p className="text-gray-400 leading-relaxed max-w-md text-sm sm:text-base">
                Preparing the next generation of AI engineers through intensive, hands-on learning experiences at Oxford University.
              </p>
            </div>
            
            <div>
              <h3 className="font-bold text-white mb-3 sm:mb-4 text-sm sm:text-base">Program</h3>
              <ul className="space-y-1 sm:space-y-2 text-gray-400 text-sm sm:text-base">
                <li>
                  <button 
                    onClick={() => handleTabChange('vision')}
                    className="hover:text-white transition-colors"
                  >
                    Vision
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleTabChange('curriculum')}
                    className="hover:text-white transition-colors"
                  >
                    Curriculum
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleTabChange('accommodation')}
                    className="hover:text-white transition-colors"
                  >
                    Accommodation
                  </button>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">Apply Now</a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-white mb-3 sm:mb-4 text-sm sm:text-base">Support</h3>
              <ul className="space-y-1 sm:space-y-2 text-gray-400 text-sm sm:text-base">
                <li>
                  <button 
                    onClick={() => handleTabChange('references')}
                    className="hover:text-white transition-colors"
                  >
                    References
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleTabChange('contact')}
                    className="hover:text-white transition-colors"
                  >
                    Contact Us
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleTabChange('privacy')}
                    className="hover:text-white transition-colors"
                  >
                    Privacy Policy
                  </button>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-gray-400 text-sm sm:text-base">
            <p>&copy; 2025 OASIS. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
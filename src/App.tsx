import React, { useState } from 'react';
import { ArrowRight, Zap } from 'lucide-react';

function App() {
  const [activeTab, setActiveTab] = useState('home');

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
                  Last updated: January 2024
                </p>
                
                <div className="space-y-8 text-gray-700 leading-relaxed">
                  <div>
                    <h2 className="text-2xl font-bold text-black mb-4">Introduction</h2>
                    <p>
                      OAISIS ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you apply to or participate in our AI summer school program at Oxford University.
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
                      We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
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
                      Our website uses cookies to enhance your browsing experience and analyze website traffic. You can control cookie settings through your browser preferences.
                    </p>
                  </div>
                  
                  <div>
                    <h2 className="text-2xl font-bold text-black mb-4">Changes to This Policy</h2>
                    <p>
                      We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on our website and updating the "Last updated" date.
                    </p>
                  </div>
                  
                  <div>
                    <h2 className="text-2xl font-bold text-black mb-4">Contact Us</h2>
                    <p className="mb-4">
                      If you have any questions about this Privacy Policy or our data practices, please contact us:
                    </p>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <p><strong>Email:</strong> privacy@oaisis.agency</p>
                      <p><strong>Address:</strong> OAISIS Privacy Officer<br />
                      123 Design Street<br />
                      Creative District<br />
                      New York, NY 10001</p>
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
                    { id: 3, title: "Advanced Architectures", description: "Explore sophisticated neural network designs including CNNs, RNNs, and transformer architectures." },
                    { id: 4, title: "Advanced Architectures in Practice", description: "Apply complex neural network architectures to real-world problems and datasets." },
                    { id: 5, title: "Project Work", description: "Independent and collaborative projects to build comprehensive AI applications from concept to completion." },
                    { id: 6, title: "Careers", description: "Explore AI career paths, industry insights, and prepare for university applications and future opportunities." }
                  ].map((module) => (
                    <div key={module.id} className="group cursor-pointer">
                      <div className="aspect-video rounded-lg mb-4 overflow-hidden group-hover:shadow-lg transition-all duration-300">
                        <img 
                          src={`/images/mod${module.id === 2 ? '2a' : module.id === 6 ? '6a' : module.id}.${module.id === 1 ? 'png' : module.id === 2 ? 'png' : module.id === 3 ? 'png' : module.id === 4 ? 'jpeg' : module.id === 5 ? 'jpg' : 'webp'}`}
                          alt={module.title}
                          className={`w-full h-full ${module.id === 1 ? 'object-contain' : 'object-cover'}`}
                        />
                      </div>
                      <h3 className="text-xl font-bold text-black mb-2">Module {module.id}: {module.title}</h3>
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
                      <p className="text-gray-600">Contemporary rooms with high-speed internet and modern amenities.</p>
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
                      What we have seen from other summer schools around Oxford is a generic introduction to further
                      education in STEM fields. This suffices for students look to explore options. For students 
                      looking to become industry leaders, it does not suffice. This summer school is not designed 
                      to be an introduction, nor an exploration of potential, but an rigorous study of AI beginning
                      from fundamental concepts all the way to state-of-the-art research in Machine Learning to
                      prepare students of the course for 
                    </p>
                    <p className="text-gray-700">
                      Notice we do not accept all students as a financially motivated orgnaization. We realize 
                      the course content requires caliber, which is why we adopt an application approach.
                    </p>
                  </div>
                  
                  <div>
                    <h2 className="text-2xl font-bold text-black mb-6">The Revolution is Now</h2>
                    <p className="text-gray-700 mb-6">
                      Every day, AI reshapes industries, redefines possibilities, and rewrites the rules of what's possible. 
                      The students who understand this transformation won't just witness history—they'll write it.
                    </p>
                    <p className="text-gray-700 mb-6">
                      We see 14-17 year olds not as students waiting to learn, but as future leaders ready to lead. 
                      They possess the curiosity, creativity, and fearlessness that this moment demands.
                    </p>
                    <p className="text-gray-700">
                      Our mission is simple: accelerate their journey from curious minds to confident creators.
                    </p>
                  </div>
                  
                  <div>
                    <h2 className="text-2xl font-bold text-black mb-6">Beyond Traditional Education</h2>
                    <p className="text-gray-700 mb-6">
                      Traditional education moves too slowly for the pace of AI advancement. While others teach yesterday's 
                      concepts, we immerse students in tomorrow's possibilities.
                    </p>
                    <p className="text-gray-700 mb-6">
                      We don't just teach neural networks—we show students how to architect intelligence. 
                      We don't just explain transformers—we guide them to build the next breakthrough.
                    </p>
                    <p className="text-gray-700">
                      Every lesson, every project, every moment is designed to bridge the gap between learning and leading.
                    </p>
                  </div>
                  
                  <div>
                    <h2 className="text-2xl font-bold text-black mb-6">The Oxford Advantage</h2>
                    <p className="text-gray-700 mb-6">
                      Oxford University isn't just our location—it's our inspiration. For centuries, these halls have 
                      nurtured minds that changed the world. Today, they nurture the minds that will define AI's future.
                    </p>
                    <p className="text-gray-700 mb-6">
                      Our students don't just visit Oxford—they become part of its legacy. They walk the same paths as 
                      Nobel laureates, think in the same spaces as prime ministers, and dream with the same ambition 
                      as history's greatest innovators.
                    </p>
                    <p className="text-gray-700">
                      When they leave, they carry not just knowledge, but the confidence that comes from learning 
                      in one of the world's most prestigious institutions.
                    </p>
                  </div>
                  
                  <div>
                    <h2 className="text-2xl font-bold text-black mb-6">Our Promise</h2>
                    <p className="text-gray-700 mb-6">
                      We promise to challenge every assumption, question every limitation, and push every boundary. 
                      We promise to treat our students not as children, but as the brilliant minds they are.
                    </p>
                    <p className="text-gray-700 mb-6">
                      We promise to provide not just education, but transformation. Not just knowledge, but wisdom. 
                      Not just skills, but the confidence to use them.
                    </p>
                    <p className="text-gray-700">
                      Most importantly, we promise to prepare them not for the world as it is, but for the world 
                      they will create.
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
                      At OAISIS, we're not just preparing students for the future—we're empowering them to create it.
                    </p>
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
                  Ready to start your project? Let's discuss how we can help bring your vision to life.
                </p>
                
                <div className="grid md:grid-cols-2 gap-16">
                  <div>
                    <h2 className="text-2xl font-bold text-black mb-6">Contact Information</h2>
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-bold text-black">Email</h3>
                        <p className="text-gray-600">hello@oaisis.agency</p>
                      </div>
                      <div>
                        <h3 className="font-bold text-black">Phone</h3>
                        <p className="text-gray-600">+1 (555) 123-4567</p>
                      </div>
                      <div>
                        <h3 className="font-bold text-black">Office</h3>
                        <p className="text-gray-600">
                          123 Design Street<br />
                          Creative District<br />
                          New York, NY 10001
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h2 className="text-2xl font-bold text-black mb-6">Send us a Message</h2>
                    <form className="space-y-4">
                      <div>
                        <input 
                          type="text" 
                          placeholder="Your Name" 
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                        />
                      </div>
                      <div>
                        <input 
                          type="email" 
                          placeholder="Your Email" 
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                        />
                      </div>
                      <div>
                        <textarea 
                          placeholder="Your Message" 
                          rows={5}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                        ></textarea>
                      </div>
                      <button 
                        type="submit"
                        className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full flex items-center space-x-2 transition-all duration-300 transform hover:scale-105"
                      >
                        <span>Send Message</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </form>
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
            <main className="px-6 md:px-12 pt-16 pb-24">
              <div className="max-w-4xl">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-8">
                  <span className="text-black">Let's </span>
                  <span className="text-gray-400">kickstart</span>
                  <br />
                  <span className="text-gray-400">your AI </span>
                  <span className="text-black">Career</span>
                  <br />
                  <span className="text-black">with OAISIS.</span>
                </h1>

                <div className="mb-12">
                  <p className="text-gray-600 text-2xl leading-relaxed mb-2 flex flex-wrap items-baseline">
                    <span>Two week AI intensive for 14 - 17 year olds at the University of Oxford.&nbsp;&nbsp;</span>
                  </p>
                  <p className="text-gray-600 text-2xl leading-relaxed">
                    Taught by University of Oxford Researchers.
                  </p>
                </div>

                <button className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full flex items-center space-x-3 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                  <span className="font-medium text-lg">Apply Now</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </main>

            {/* Side by Side Section */}
            <section className="px-6 md:px-12 py-16">
              <div className="max-w-6xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6">
                    <div>
                      <p className="text-gray-400 text-base font-medium mb-6 tracking-wider uppercase">What We Do</p>
                      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight mb-8">
                        Preparing the Next Generation of AI Engineers
                      </h2>
                    </div>
                    
                    <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                      <p>
                        In 2017, Google released The Transformer. This model shown on the
                        right, sparked the AI revolution we are witnessing. At OAISIS, we aim to 
                        bring 14 - 17 year olds interested in AI careers, up to speed on the past 8 years of research,
                        putting them in a position to impress.
                      </p>
                      <p>
                        God willing, Over the course of just two weeks, students will gain a
                        strong foundation in modern AI, exploring everything from neural networks
                        to cutting-edge large language models like ChatGPT. </p>
                      <p>OASIS is an academically focused summer school. While there are enjoyable 
                        activities, the emphasis will be on study, as our priority is students
                        career potential as a pose to brief enjoyment. We’re looking for motivated, 
                        hard working students ready to rise to the challenge. You can 
                        learn more about what this program offers by reading our vision. 
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
                    Where you will stay
                  </h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    Balliol College, founded in 1263, is one of Oxford's oldest and most prestigious colleges. 
                    Known for its academic excellence and vibrant community, Balliol offers students a unique 
                    blend of historical tradition and modern innovation in the heart of Oxford. Notable alumni 
                    include former Prime Ministers Harold Macmillan, Edward Heath, and Boris Johnson, Nobel Prize winners, 
                    and literary giants like Gerard Manley Hopkins and Aldous Huxley. <button 
                      onClick={() => setActiveTab('accommodation')}
                      className="text-blue-600 hover:text-blue-700 underline font-medium"
                    >
                      Learn more about accommodation
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
                  <p className="text-gray-400 text-sm font-medium mb-6 tracking-wider uppercase">Let's meet OAISIS</p>
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
                      <p className="text-gray-400 text-base font-medium mb-6 tracking-wider uppercase">Our Impact Beyond</p>
                      <h2 className="text-4xl md:text-5xl font-bold text-black leading-tight mb-8">
                        Supporting AI for Good
                      </h2>
                    </div>
                    
                    <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                      <p>
                        The same organizers behind OAISIS are behind Meaningful Technologies, an organization dedicated to 
                        democratizing access to AI expertise for those working on projects that benefit humanity.
                      </p>
                      <p>
                        Through Meaningful Technologies, we provide free remote AI support to researchers, nonprofits, and innovators 
                        tackling global challenges. Whether you need guidance on specific AI techniques, help 
                        with implementation, or answers to niche technical questions, our network of experts 
                        is here to help accelerate your impact.
                      </p>
                      <p>
                        This commitment to AI for good reflects our core belief: advanced AI knowledge should 
                        be accessible to those working to make the world better. <a href="https://meaningfultechnologies.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline font-medium">Learn more about Meaningful Technologies</a>.
                      </p>
                    </div>
                    
                    <div className="flex flex-wrap gap-4 pt-6">
                      <span className="px-6 py-3 bg-white text-gray-700 rounded-full text-base font-medium shadow-sm">Free Support</span>
                      <span className="px-6 py-3 bg-white text-gray-700 rounded-full text-base font-medium shadow-sm">Expert Network</span>
                      <span className="px-6 py-3 bg-white text-gray-700 rounded-full text-base font-medium shadow-sm">Global Impact</span>
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
                      Students build real AI applications from neural networks to language models, 
                      gaining practical experience that goes beyond theoretical knowledge.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-black">Expert Mentorship</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Learn directly from AI researchers and industry professionals who provide 
                      personalized guidance and share cutting-edge insights from the field.
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
                      Students create impressive AI projects that showcase their skills to universities 
                      and future employers, building a strong foundation for their careers.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-black">Future-Ready Skills</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Beyond technical knowledge, students develop critical thinking, problem-solving, 
                      and ethical AI practices that prepare them for leadership in the AI revolution.
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
                
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <img 
                      src="/images/markpost.png" 
                      alt="Mark Zuckerberg on AI" 
                      className="w-full h-auto object-contain"
                    />
                  </div>
                  <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <img 
                      src="/images/sampost.png" 
                      alt="Sam Altman on AI" 
                      className="w-full h-auto object-contain"
                    />
                  </div>
                  <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <img 
                      src="/images/elonpost.png" 
                      alt="Elon Musk on AI" 
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </div>
                
                <div className="text-center mt-12">
                  <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
                    These visionary leaders understand that AI isn't just changing technology—it's reshaping entire industries, 
                    economies, and the way we live and work. At OAISIS, we're ensuring the next generation is ready to lead 
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
      <nav className="flex items-center justify-between px-6 md:px-12 py-6">
        <div className="flex items-center space-x-2">
          <img 
            src="/images/logo8.png" 
            alt="Resize Logo" 
            className="w-8 h-8 object-contain rounded-lg"
          />
          <button 
            onClick={() => setActiveTab('home')}
            className="text-xl font-bold text-black hover:text-gray-700 transition-colors"
          >
            OAISIS
          </button>
        </div>
        
        <div className="flex items-center space-x-8">
          <button 
            onClick={() => setActiveTab('vision')}
            className={`text-base font-medium transition-colors ${
              activeTab === 'vision' ? 'text-blue-600' : 'text-gray-600 hover:text-black'
            }`}
          >
            Vision
          </button>
          <button 
            onClick={() => setActiveTab('curriculum')}
            className={`text-base font-medium transition-colors ${
              activeTab === 'curriculum' ? 'text-blue-600' : 'text-gray-600 hover:text-black'
            }`}
          >
            Curriculum
          </button>
          <button 
            onClick={() => setActiveTab('accommodation')}
            className={`text-base font-medium transition-colors ${
              activeTab === 'accommodation' ? 'text-blue-600' : 'text-gray-600 hover:text-black'
            }`}
          >
            Accommodation
          </button>
          <button 
            onClick={() => setActiveTab('contact')}
            className={`text-base font-medium transition-colors ${
              activeTab === 'contact' ? 'text-blue-600' : 'text-gray-600 hover:text-black'
            }`}
          >
            Contact
          </button>
        </div>
      </nav>

      {renderContent()}
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white px-6 md:px-12 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <img 
                  src="/images/logo8.png" 
                  alt="OAISIS Logo" 
                  className="w-8 h-8 object-contain rounded-lg filter invert"
                />
                <span className="text-xl font-bold">OAISIS</span>
              </div>
              <p className="text-gray-400 leading-relaxed max-w-md">
                Preparing the next generation of AI engineers through intensive, hands-on learning experiences at Oxford University.
              </p>
            </div>
            
            <div>
              <h3 className="font-bold text-white mb-4">Program</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <button 
                    onClick={() => setActiveTab('vision')}
                    className="hover:text-white transition-colors"
                  >
                    Vision
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => setActiveTab('curriculum')}
                    className="hover:text-white transition-colors"
                  >
                    Curriculum
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => setActiveTab('accommodation')}
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
              <h3 className="font-bold text-white mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <button 
                    onClick={() => setActiveTab('contact')}
                    className="hover:text-white transition-colors"
                  >
                    Contact Us
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => setActiveTab('privacy')}
                    className="hover:text-white transition-colors"
                  >
                    Privacy Policy
                  </button>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 OAISIS. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
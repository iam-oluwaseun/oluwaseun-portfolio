import React, { useState, useEffect, useRef } from 'react';

const About = () => {
  const [hoveredTech, setHoveredTech] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const techStack = [
    { 
      name: 'Terraform', 
      category: 'Infrastructure',
      icon: '🏗️',
      description: 'Infrastructure as Code for scalable cloud deployments',
      color: 'from-purple-500 to-indigo-600'
    },
    { 
      name: 'Kubernetes', 
      category: 'Orchestration',
      icon: '⚓',
      description: 'Container orchestration and microservices management',
      color: 'from-blue-500 to-cyan-600'
    },
    { 
      name: 'GitHub Actions', 
      category: 'CI/CD',
      icon: '🔄',
      description: 'Automated workflows and deployment pipelines',
      color: 'from-gray-600 to-gray-800'
    },
    { 
      name: 'Prometheus', 
      category: 'Monitoring',
      icon: '📊',
      description: 'Real-time metrics collection and alerting',
      color: 'from-orange-500 to-red-600'
    },
    { 
      name: 'Grafana', 
      category: 'Visualization',
      icon: '📈',
      description: 'Beautiful dashboards and data visualization',
      color: 'from-orange-400 to-yellow-500'
    },
    { 
      name: 'Azure', 
      category: 'Cloud',
      icon: '☁️',
      description: 'Microsoft cloud platform and services',
      color: 'from-blue-400 to-blue-600'
    },
    { 
      name: 'Linux', 
      category: 'Systems',
      icon: '🐧',
      description: 'System administration and server management',
      color: 'from-yellow-500 to-orange-500'
    },
    { 
      name: 'Python', 
      category: 'Scripting',
      icon: '🐍',
      description: 'Automation scripts and infrastructure tools',
      color: 'from-green-500 to-blue-500'
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="section-padding relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900/10 via-transparent to-accent-900/10" />
      
      <div className="container relative z-10">
        {/* Main About Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-20">
          {/* Profile Image */}
          <div className={`order-2 lg:order-1 flex justify-center lg:justify-start transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <div className="relative group">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan/20 to-purple/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
              
              {/* Image Container */}
              <div className="relative">
                <img 
                  src="/profile-picture.jpg" 
                  alt="Oluwaseun O. Opebiyi" 
                  className="w-80 h-80 object-cover rounded-2xl border-2 border-cyan/30 group-hover:border-cyan/60 transition-all duration-300 shadow-lg hover:shadow-cyan/25"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/20 to-transparent rounded-2xl"></div>
                
                {/* Floating Badge */}
                <div className="absolute -bottom-6 -right-6 card p-3 rounded-xl border-cyan/30">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-xs font-medium text-white">Available for Work</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Text Content */}
          <div className={`order-1 lg:order-2 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <div className="mb-8">
              <h2 className="section-title mb-4">
                About <span className="gradient-text">Me</span>
              </h2>
              <h3 className="text-3xl font-bold text-primary-400 mb-6">Oluwaseun O. Opebiyi</h3>
              
              {/* Animated Underline */}
              <div className="relative w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full mb-8">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-accent-400 rounded-full blur-sm animate-pulse" />
              </div>
            </div>
            
            <div className="space-y-8 text-lg text-white/80 leading-relaxed">
              <div className="glass-card p-6 rounded-2xl border-primary-500/20 hover:border-primary-400/30 transition-all duration-500">
                <p className="mb-4">
                  I am a <span className="text-primary-400 font-semibold">results-driven Certified Microsoft Azure Cloud Practitioner</span> with a rich blend of 
                  experience in banking, entrepreneurship, and technical field services. I bring a unique 
                  perspective to cloud computing, grounded in customer-centric thinking and real-world problem solving.
                </p>
                <div className="flex items-center gap-2 text-accent-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span className="text-sm font-medium">Currently transitioning into cloud engineering</span>
                </div>
              </div>
              
              <div className="glass-card p-6 rounded-2xl border-accent-500/20 hover:border-accent-400/30 transition-all duration-500">
                <p className="mb-4">
                  I have developed hands-on experience through <span className="text-accent-400 font-semibold">14 weeks intensive Azure Cloud Engineering 
                  Generation bootcamp</span>, traineeship and self-driven learning in areas like Linux, Networking, 
                  deploying and managing Azure infrastructure, building CI/CD pipelines, Database, and scripting 
                  in Bash, PowerShell, and Python.
                </p>
                <div className="flex items-center gap-2 text-primary-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-sm font-medium">Certified & Hands-on Experienced</span>
                </div>
              </div>
              
              <div className="glass-card p-6 rounded-2xl border-primary-500/20 hover:border-primary-400/30 transition-all duration-500">
                <p className="mb-4">
                  I'm passionate about <span className="text-primary-400 font-semibold">cloud networking, security, and scalable infrastructure</span> and continuously 
                  learning to stay ahead of evolving tech trends. I value collaboration, reliability, and finding 
                  creative solutions to technical challenges.
                </p>
                <div className="flex items-center gap-2 text-accent-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  <span className="text-sm font-medium">Passionate about innovation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Tech Stack Section */}
        <div className={`mb-20 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="text-center mb-12">
              <h3 className="text-4xl font-bold mb-4 gradient-text">Core Technologies</h3>
              <p className="text-white/60 text-lg max-w-2xl mx-auto">
                Cutting-edge tools and technologies I use to build scalable cloud solutions
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {techStack.map((tech, index) => (
                <div 
                  key={tech.name}
                  className="group relative"
                  onMouseEnter={() => setHoveredTech(tech.name)}
                  onMouseLeave={() => setHoveredTech(null)}
                  style={{animationDelay: `${index * 100}ms`}}
                >
                  {/* Glow Effect */}
                  <div className={`absolute -inset-2 bg-gradient-to-r ${tech.color} rounded-2xl opacity-0 group-hover:opacity-20 transition-all duration-500 blur-xl`} />
                  
                  {/* Card */}
                  <div className="glass-card group-hover:scale-105 transition-all duration-500 text-center relative overflow-hidden">
                    {/* Icon */}
                    <div className="text-4xl mb-4 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12">
                      {tech.icon}
                    </div>
                    
                    {/* Category */}
                    <div className="mb-3">
                      <span className="text-xs text-primary-400/70 uppercase tracking-wider font-medium px-2 py-1 bg-primary-500/10 rounded-full border border-primary-500/20">
                        {tech.category}
                      </span>
                    </div>
                    
                    {/* Name */}
                    <h4 className="text-white font-bold text-lg mb-3 group-hover:text-primary-300 transition-colors duration-300">
                      {tech.name}
                    </h4>
                    
                    {/* Description - Shows on Hover */}
                    <div className={`transition-all duration-500 overflow-hidden ${hoveredTech === tech.name ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'}`}>
                      <p className="text-sm text-white/60 leading-relaxed">
                        {tech.description}
                      </p>
                    </div>
                    
                    {/* Animated Border */}
                    <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary-500/30 transition-all duration-500" />
                  </div>
                </div>
              ))}
            </div>
        </div>
        
        {/* Experience & Certifications Section */}
        <div className={`transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Experience */}
              <div className="glass-card p-8 rounded-3xl border-primary-500/20">
                <h4 className="text-2xl font-bold text-primary-400 mb-8 flex items-center gap-3">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                  </svg>
                  Experience
                </h4>
                <div className="space-y-6">
                  {[
                    { role: "Cloud Computing Trainee", company: "Generation UK & Ireland", period: "Jul 2025 - Present", color: "primary" },
                    { role: "Graduate Azure Cloud/DevOps Bootcamp", company: "Generation", period: "Mar 2025 - Jul 2025", color: "accent" },
                    { role: "Network Cabling Installer/IT Support", company: "Various Clients", period: "Apr 2024 - Feb 2025", color: "primary" },
                    { role: "Banking Officer", company: "Apex Trust Micro-finance Bank", period: "Jun 2018 - Dec 2021", color: "accent" },
                  ].map((exp, index) => (
                    <div key={index} className="flex items-start gap-4 group">
                      <div className={`w-3 h-3 bg-${exp.color}-500 rounded-full mt-2 group-hover:scale-125 transition-transform duration-300`} />
                      <div className="flex-1">
                        <h5 className="font-semibold text-white group-hover:text-primary-300 transition-colors duration-300">{exp.role}</h5>
                        <p className="text-white/60 text-sm">{exp.company}</p>
                        <p className="text-white/40 text-xs">{exp.period}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certifications */}
              <div className="glass-card p-8 rounded-3xl border-accent-500/20">
                <h4 className="text-2xl font-bold text-accent-400 mb-8 flex items-center gap-3">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                  Certifications
                </h4>
                <div className="space-y-6">
                  {[
                    { cert: "Microsoft Certified: Azure Fundamentals (AZ-900)", date: "Jun 2025", color: "accent" },
                    { cert: "Certified Network Cable Installer (CNCI®)", date: "Oct 2024", color: "primary" },
                    { cert: "Bachelor's degree, Economics", institution: "Benue State University", date: "2011-2014", color: "accent" },
                    { cert: "Microsoft Azure Cloud Bootcamp", institution: "Generation UK & Ireland", date: "2025", color: "primary" },
                  ].map((cert, index) => (
                    <div key={index} className="flex items-start gap-4 group">
                      <div className={`w-3 h-3 bg-${cert.color}-500 rounded-full mt-2 group-hover:scale-125 transition-transform duration-300`} />
                      <div className="flex-1">
                        <h5 className="font-semibold text-white group-hover:text-accent-300 transition-colors duration-300">{cert.cert}</h5>
                        {cert.institution && <p className="text-white/60 text-sm">{cert.institution}</p>}
                        <p className="text-white/40 text-xs">{cert.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;

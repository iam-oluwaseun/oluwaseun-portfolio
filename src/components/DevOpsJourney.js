import React from 'react';

const DevOpsJourney = () => {
  const journeySteps = [
    {
      title: "Azure Cloud Engineering Bootcamp",
      description: "14-week intensive training program at Generation UK & Ireland",
      skills: ["Azure Infrastructure", "CI/CD Pipelines", "Linux Administration", "PowerShell & Python"],
      icon: "🎓",
      period: "Mar 2025 - Jul 2025"
    },
    {
      title: "End-to-End DevOps Project",
      description: "Built complete automated CI/CD pipeline on Azure with monitoring and security",
      skills: ["Terraform", "Kubernetes", "GitHub Actions", "Prometheus", "Grafana"],
      icon: "🚀",
      period: "Recent Project"
    },
    {
      title: "Azure Fundamentals Certification",
      description: "Microsoft Certified: Azure Fundamentals (AZ-900)",
      skills: ["Cloud Computing", "Azure Services", "Security", "Compliance"],
      icon: "🏆",
      period: "Jun 2025"
    },
    {
      title: "Network Infrastructure Experience",
      description: "Hands-on experience with structured cabling and network infrastructure",
      skills: ["Network Cabling", "Testing & Diagnostics", "LAN Design", "Infrastructure"],
      icon: "🔧",
      period: "Apr 2024 - Feb 2025"
    }
  ];

  return (
    <section id="journey" className="section-padding relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent-900/10 via-transparent to-primary-900/10" />
      
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-title mb-6">
            My DevOps <span className="gradient-text">Journey</span>
          </h2>
          <div className="relative w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full mx-auto mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-accent-400 rounded-full blur-sm animate-pulse" />
          </div>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            From banking and entrepreneurship to cloud engineering - a unique path that brings 
            customer-centric thinking to technical solutions.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-accent-500 to-primary-500 opacity-30"></div>
            
            {journeySteps.map((step, index) => (
              <div 
                key={step.title}
                className="relative flex items-start mb-12 group"
                style={{animationDelay: `${index * 200}ms`}}
              >
                {/* Timeline Dot */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-16 h-16 glass-card border-primary-500/30 flex items-center justify-center group-hover:border-primary-400/60 transition-all duration-300">
                    <span className="text-2xl filter grayscale group-hover:grayscale-0 transition-all duration-300">
                      {step.icon}
                    </span>
                  </div>
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
                </div>

                {/* Content */}
                <div className="ml-8 flex-grow">
                  <div className="glass-card group-hover:scale-[1.02] transition-all duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <h3 className="card-title text-white mb-2 sm:mb-0 group-hover:text-primary-300 transition-colors duration-300">
                        {step.title}
                      </h3>
                      <span className="text-sm text-accent-400 font-medium px-3 py-1 bg-accent-500/10 rounded-full border border-accent-500/20">
                        {step.period}
                      </span>
                    </div>
                    
                    <p className="text-white/70 mb-4 leading-relaxed">
                      {step.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {step.skills.map((skill) => (
                        <span key={skill} className="badge text-xs">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="glass-card max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready for the Next Challenge
              </h3>
              <p className="text-white/70 mb-6">
                This journey has taught me that DevOps isn't just about tools and automation - 
                it's about understanding the "why" behind every decision and building systems 
                that can scale, recover, and evolve.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="btn-primary group">
                  <span className="relative z-10 flex items-center gap-3">
                    View My Projects
                    <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </button>
                <button className="btn-secondary group">
                  <span className="relative z-10 flex items-center gap-3">
                    Let's Connect
                    <svg className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DevOpsJourney;

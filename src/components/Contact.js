import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-gradient-to-t from-navy/80 to-transparent">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-title mb-6">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan to-purple mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            I'm excited to contribute to a dynamic IT team as a Junior Cloud Engineer or DevOps Support professional. 
            Let's connect for opportunities, mentorship, and knowledge-sharing in the cloud space.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Email Card */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan/20 to-blue-600/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
              
              <div className="relative card group-hover:scale-105 transition-all duration-300 text-center">
                <div className="text-5xl mb-4 filter grayscale group-hover:grayscale-0 transition-all duration-300">
                  📧
                </div>
                <h3 className="card-title text-white mb-3 group-hover:text-cyan transition-colors duration-300">
                  Email
                </h3>
                <p className="text-gray-300 mb-6">
                  Get in touch for project discussions, collaboration opportunities, or questions about cloud engineering and DevOps.
                </p>
                <a 
                  href="mailto:oluwaseun.opebiyi@example.com" 
                  className="inline-flex items-center space-x-2 text-cyan hover:text-purple transition-colors duration-300 font-medium group"
                >
                  <span>oluwaseun.opebiyi@example.com</span>
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>

            {/* LinkedIn Card */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-cyan/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
              
              <div className="relative card group-hover:scale-105 transition-all duration-300 text-center">
                <div className="text-5xl mb-4 filter grayscale group-hover:grayscale-0 transition-all duration-300">
                  💼
                </div>
                <h3 className="card-title text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                  LinkedIn
                </h3>
                <p className="text-gray-300 mb-6">
                  Connect with me professionally and follow my cloud engineering journey and career updates.
                </p>
                <a 
                  href="https://www.linkedin.com/in/oluwaseun-opebiyi/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-blue-400 hover:text-cyan transition-colors duration-300 font-medium group"
                >
                  <span>linkedin.com/in/oluwaseun-opebiyi</span>
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>

            {/* GitHub Card */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple/20 to-pink-600/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
              
              <div className="relative card group-hover:scale-105 transition-all duration-300 text-center">
                <div className="text-5xl mb-4 filter grayscale group-hover:grayscale-0 transition-all duration-300">
                  🐙
                </div>
                <h3 className="card-title text-white mb-3 group-hover:text-purple transition-colors duration-300">
                  GitHub
                </h3>
                <p className="text-gray-300 mb-6">
                  Explore my DevOps projects, cloud infrastructure templates, and automation scripts.
                </p>
                <a 
                  href="https://lnkd.in/eakVXU3m" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-purple hover:text-cyan transition-colors duration-300 font-medium group"
                >
                  <span>View DevOps Project</span>
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Availability Status */}
          <div className="card text-center max-w-2xl mx-auto">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-green-400 font-semibold">Currently Available</span>
            </div>
            <p className="text-gray-300 mb-6">
              I'm actively seeking opportunities as a Junior Cloud Engineer or DevOps Support professional. 
              Open to mentorship and knowledge-sharing in the cloud space while contributing to meaningful projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">
                Schedule a Call
              </button>
              <button className="btn-secondary">
                Download Resume
              </button>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center mt-16 pt-8 border-t border-cyan/20">
            <p className="text-gray-400 text-sm">
              Built with React + Tailwind CSS • Deployed on cloud infrastructure
            </p>
            <p className="text-gray-500 text-xs mt-2">
              © 2024 Oluwaseun O. Opebiyi. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

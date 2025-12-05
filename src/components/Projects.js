import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'End-to-End DevOps Project on Azure',
      description: 'Developed a fully automated CI/CD pipeline on Azure that deploys a containerized application into Azure Kubernetes Service (AKS) using Terraform and GitHub Actions. Complete DevOps implementation with monitoring, security scanning, and alerting.',
      stack: ['Terraform', 'GitHub Actions', 'Azure Kubernetes Service', 'Azure Container Registry', 'Helm', 'SonarCloud', 'Trivy', 'Prometheus', 'Grafana'],
      outcomes: [
        'Builds and pushes Docker images to Azure Container Registry (ACR)',
        'Scans code with SonarCloud and container images with Trivy',
        'Deploys applications to AKS using Helm charts',
        'Sets up monitoring with Prometheus, Grafana, and Alertmanager',
        'Implements Terraform remote backend with Azure Storage for state management'
      ],
      link: 'https://lnkd.in/eakVXU3m',
      github: 'https://lnkd.in/eakVXU3m',
      gradient: 'from-cyan/20 to-blue-600/20'
    },
    {
      title: 'Azure Infrastructure as Code with Terraform',
      description: 'Hands-on project setting up, automating, and deploying Azure cloud resources using Terraform following Infrastructure as Code (IaC) best practices. Strengthened skills in cloud automation and scalable infrastructure management.',
      stack: ['Terraform', 'Azure CLI', 'Azure Provider', 'VS Code', 'Git', 'SSH', 'Infrastructure as Code'],
      outcomes: [
        'Defined infrastructure as code in .tf files with proper structure',
        'Managed Azure resources using azurerm provider and Terraform lifecycle',
        'Set up SSH access and VM configurations for secure deployment',
        'Resolved multi-factor authentication issues with Azure CLI',
        'Implemented Git-based version control for infrastructure code'
      ],
      gradient: 'from-purple/20 to-pink-600/20'
    },
    {
      title: 'Secure Azure Network Architecture',
      description: 'Designed and deployed a secure cloud architecture on Microsoft Azure with isolated Virtual Networks, private IP communication, and comprehensive security controls for enterprise-grade networking.',
      stack: ['Azure VNets', 'Network Security Groups', 'VNet Peering', 'Azure Storage', 'Private Networking', 'Security Architecture'],
      outcomes: [
        'Created two isolated Virtual Networks with dedicated subnets',
        'Deployed VMs with private IPs only for enhanced security',
        'Configured NSGs to control inbound/outbound traffic',
        'Established VNet peering for secure inter-network communication',
        'Integrated Azure Storage within private network architecture'
      ],
      gradient: 'from-cyan/20 to-purple/20'
    },
    {
      title: 'DevOps Fundamentals & Linux Administration',
      description: 'Built solid foundation in terminal commands essential for automation, CI/CD, and infrastructure management through hands-on practice with Git Bash and Linux systems.',
      stack: ['Git Bash', 'Linux Commands', 'File Permissions', 'Shell Scripting', 'System Administration', 'DevOps Tools'],
      outcomes: [
        'Mastered directory navigation and file management operations',
        'Implemented file permissions and security using chmod',
        'Created and managed symbolic & hard links with ln command',
        'Performed file archiving and restoration using tar',
        'Developed search and filtering skills with find and grep'
      ],
      gradient: 'from-purple/20 to-cyan/20'
    }
  ];

  return (
    <section id="projects" className="section-padding bg-gradient-to-b from-navy/50 to-transparent">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-title mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan to-purple mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore my cloud engineering journey through hands-on Azure projects, 
            DevOps implementations, and infrastructure automation solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className="group relative"
              style={{animationDelay: `${index * 150}ms`}}
            >
              {/* Background Glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl`}></div>
              
              {/* Card */}
              <div className="relative card group-hover:scale-[1.02] transition-all duration-300 h-full">
                <div className="flex flex-col h-full">
                  {/* Header */}
                  <div className="mb-6">
                    <h3 className="card-title text-white mb-3 group-hover:text-cyan transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-6">
                    <h4 className="text-cyan text-sm font-semibold mb-3 uppercase tracking-wide">
                      Technology Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <span key={tech} className="badge">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Outcomes */}
                  <div className="flex-grow">
                    <h4 className="text-purple text-sm font-semibold mb-3 uppercase tracking-wide">
                      Key Outcomes
                    </h4>
                    <ul className="space-y-2">
                      {project.outcomes.map((outcome, idx) => (
                        <li key={idx} className="flex items-start space-x-2 text-gray-300 text-sm">
                          <div className="w-1.5 h-1.5 bg-gradient-to-r from-cyan to-purple rounded-full mt-2 flex-shrink-0"></div>
                          <span>{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div className="mt-6 pt-4 border-t border-cyan/20">
                    <div className="flex gap-4">
                      {project.link && (
                        <a 
                          href={project.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-cyan hover:text-purple transition-colors duration-300 font-medium flex items-center space-x-2 group"
                        >
                          <span>Live Demo</span>
                          <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      )}
                      {project.github && (
                        <a 
                          href={project.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-purple hover:text-cyan transition-colors duration-300 font-medium flex items-center space-x-2 group"
                        >
                          <span>GitHub</span>
                          <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      )}
                      {!project.link && !project.github && (
                        <button className="text-cyan hover:text-purple transition-colors duration-300 font-medium flex items-center space-x-2 group">
                          <span>View Details</span>
                          <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-gray-300 mb-6">
            Want to see more of my work or discuss a project?
          </p>
          <button className="btn-primary">
            Let's Talk
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;

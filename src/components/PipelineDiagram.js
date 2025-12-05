import React from 'react';

const PipelineDiagram = () => {
  const pipelineSteps = [
    {
      id: 'cicd',
      title: 'CI/CD Pipeline',
      description: 'Automated GitHub Actions workflows with security scanning',
      icon: '🔄',
      details: ['GitHub Actions', 'SonarCloud Scanning', 'Trivy Security Scans', 'Docker Image Build'],
      position: 'top-left'
    },
    {
      id: 'iac',
      title: 'Infrastructure as Code',
      description: 'Terraform-managed Azure infrastructure with remote state',
      icon: '🏗️',
      details: ['Terraform', 'Azure Storage Backend', 'Role Assignments', 'State Management'],
      position: 'top-right'
    },
    {
      id: 'kubernetes',
      title: 'Azure Kubernetes Service',
      description: 'Containerized application deployment using Helm charts',
      icon: '⚓',
      details: ['AKS Deployment', 'Helm Charts', 'Azure Container Registry', 'Auto-scaling'],
      position: 'bottom-left'
    },
    {
      id: 'monitoring',
      title: 'Monitoring & Alerting',
      description: 'Comprehensive observability with Prometheus and Grafana',
      icon: '📊',
      details: ['Prometheus Metrics', 'Grafana Dashboards', 'Alertmanager', 'SMTP Notifications'],
      position: 'bottom-right'
    }
  ];

  const connections = [
    { from: 'cicd', to: 'iac', type: 'horizontal' },
    { from: 'cicd', to: 'kubernetes', type: 'vertical' },
    { from: 'iac', to: 'monitoring', type: 'vertical' },
    { from: 'kubernetes', to: 'monitoring', type: 'horizontal' }
  ];

  return (
    <section id="pipeline" className="section-padding bg-gradient-to-b from-transparent via-navy/30 to-transparent">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-title mb-6">
            Delivery <span className="gradient-text">Pipeline</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan to-purple mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            My end-to-end DevOps project showcasing automated CI/CD pipeline deployment 
            to Azure Kubernetes Service with comprehensive monitoring and security.
          </p>
        </div>

        {/* Pipeline Diagram */}
        <div className="relative max-w-6xl mx-auto">
          {/* Connection Lines */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Horizontal connections */}
            <div className="absolute top-1/2 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-cyan to-purple transform -translate-y-1/2 hidden lg:block">
              <div className="absolute right-0 top-1/2 transform translate-x-1 -translate-y-1/2">
                <div className="w-0 h-0 border-l-4 border-l-purple border-t-2 border-b-2 border-t-transparent border-b-transparent"></div>
              </div>
            </div>
            
            <div className="absolute bottom-1/4 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-cyan to-purple hidden lg:block">
              <div className="absolute right-0 top-1/2 transform translate-x-1 -translate-y-1/2">
                <div className="w-0 h-0 border-l-4 border-l-purple border-t-2 border-b-2 border-t-transparent border-b-transparent"></div>
              </div>
            </div>

            {/* Vertical connections */}
            <div className="absolute left-1/4 top-1/4 bottom-1/4 w-0.5 bg-gradient-to-b from-cyan to-purple transform -translate-x-1/2 hidden lg:block">
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1">
                <div className="w-0 h-0 border-t-4 border-t-purple border-l-2 border-r-2 border-l-transparent border-r-transparent"></div>
              </div>
            </div>
            
            <div className="absolute right-1/4 top-1/4 bottom-1/4 w-0.5 bg-gradient-to-b from-cyan to-purple transform translate-x-1/2 hidden lg:block">
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1">
                <div className="w-0 h-0 border-t-4 border-t-purple border-l-2 border-r-2 border-l-transparent border-r-transparent"></div>
              </div>
            </div>
          </div>

          {/* Pipeline Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
            {pipelineSteps.map((step, index) => (
              <div 
                key={step.id}
                className="group relative"
                style={{animationDelay: `${index * 200}ms`}}
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan/20 to-purple/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                
                {/* Card */}
                <div className="relative card group-hover:scale-105 transition-all duration-300 text-center">
                  {/* Icon */}
                  <div className="text-6xl mb-4 filter grayscale group-hover:grayscale-0 transition-all duration-300">
                    {step.icon}
                  </div>
                  
                  {/* Title */}
                  <h3 className="card-title text-white mb-3 group-hover:text-cyan transition-colors duration-300">
                    {step.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {step.description}
                  </p>
                  
                  {/* Details */}
                  <div className="space-y-2">
                    {step.details.map((detail, idx) => (
                      <div key={idx} className="flex items-center justify-center space-x-2 text-sm text-gray-400">
                        <div className="w-1.5 h-1.5 bg-gradient-to-r from-cyan to-purple rounded-full"></div>
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Step Number */}
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-r from-cyan to-purple rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {index + 1}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Flow Description */}
          <div className="mt-16 text-center">
            <div className="card max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold gradient-text mb-4">Azure DevOps Excellence</h3>
              <p className="text-gray-300 leading-relaxed">
                This project demonstrates my understanding of production-ready DevOps practices: 
                from secure code scanning and automated testing to infrastructure provisioning, 
                container orchestration, and real-time monitoring with email alerting. 
                Every component is designed for scalability, security, and operational excellence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PipelineDiagram;

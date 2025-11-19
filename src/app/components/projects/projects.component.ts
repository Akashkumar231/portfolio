import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

declare var AOS: any;

interface Project {
  title: string;
  description: string[];  // <-- Updated to array
  techStack: string[];
  liveDemo?: string;
  githubRepo?: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="projects" class="py-20 px-4 bg-light-gray text-charcoal">
      <div class="container mx-auto max-w-6xl">
        <h2 class="text-4xl font-bold text-center mb-12" data-aos="fade-up">Projects</h2>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div *ngFor="let project of projects; let i = index" 
               class="project-card bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300"
               [attr.data-aos]="'fade-up'"
               [attr.data-aos-delay]="i * 100">
            <div class="p-6">
              
              <h3 class="text-2xl font-semibold mb-3 text-electric-blue">
                {{ project.title }}
              </h3>

              <!-- Description converted into bullet points -->
              <ul class="list-disc list-inside text-charcoal/80 mb-4 leading-relaxed">
                <li *ngFor="let point of project.description">
                  {{ point }}
                </li>
              </ul>
              
              <div class="mb-4">
                <h4 class="font-semibold mb-2 text-sm text-charcoal/70">Tech Stack:</h4>
                <div class="flex flex-wrap gap-2">
                  <span *ngFor="let tech of project.techStack"
                        class="bg-charcoal/10 text-charcoal px-3 py-1 rounded-full text-sm hover:bg-electric-blue hover:text-white transition-colors duration-300 cursor-pointer">
                    {{ tech }}
                  </span>
                </div>
              </div>
              
              <div class="flex gap-3 mt-4">
                <a *ngIf="project.liveDemo" 
                   [href]="project.liveDemo" 
                   target="_blank"
                   class="flex-1 bg-electric-blue hover:bg-blue-600 text-white text-center px-4 py-2 rounded-lg font-medium transition-colors">
                  Live Demo
                </a>

                <a *ngIf="project.githubRepo" 
                   [href]="project.githubRepo" 
                   target="_blank"
                   class="flex-1 bg-charcoal hover:bg-charcoal/80 text-white text-center px-4 py-2 rounded-lg font-medium transition-colors">
                  GitHub Repo
                </a>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  `,
  styles: [`
    .project-card {
      transition: all 0.4s ease;
      transform: translateY(0px) scale(1);
      border: 2px solid transparent;
    }

    .project-card:hover {
      transform: translateY(-10px) scale(1.05);
      box-shadow: 0 20px 30px rgba(0, 0, 0, 0.15);
      border-color: #3b82f6;
    }
  `]
})
export class ProjectsComponent implements AfterViewInit {

  projects: Project[] = [
    {
      title: 'Microservices-Based Application Development',
      description: [
        'Developed microservices using Spring Boot with API Gateway and Config Server.',
        'Integrated Eureka Server for service discovery and OpenFeign for communication.',
        'Enabled distributed tracing with Zipkin for better observability.',
        'Used Docker for containerization and improved deployment consistency.'
      ],
      techStack: ['Spring Boot', 'Java', 'Zipkin', 'PostgreSQL', 'Docker'],
      liveDemo: '#',
      githubRepo: '#'
    },
    {
      title: 'Ecommerce Platform Development',
      description: [
        'Built RESTful backend for products and authentication using Spring Boot.',
        'Developed a responsive ReactJS frontend with catalog and checkout features.',
        'Improved API performance through optimized MySQL database design.',
        'Implemented CORS and secure API communication.'
      ],
      techStack: ['Spring Boot', 'ReactJS', 'MySQL'],
      liveDemo: '#',
      githubRepo: '#'
    },
    {
      title: 'Book Social Network',
      description: [
        'Developed a full-stack social platform using Angular and Spring Boot 3.',
        'Implemented JWT-based authentication with Spring Security 6.',
        'Used Spring Data JPA for efficient database operations.',
        'Containerized the application using Docker for flexible deployments.',
        'Used Swagger/OpenAPI for documentation and Postman for API testing.'
      ],
      techStack: ['Angular', 'Spring Boot 3', 'Spring Security 6', 'Docker', 'Postman', 'Git'],
      liveDemo: '#',
      githubRepo: '#'
    }
  ];

  ngAfterViewInit(): void {
    if (typeof AOS !== 'undefined') {
      AOS.refresh();
    }
  }
}

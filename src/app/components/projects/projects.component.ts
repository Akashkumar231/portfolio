import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

declare var AOS: any;

interface Project {
  title: string;
  subtitle: string;
  description: string[];
  techStack: string[];
  liveDemo?: string;
  githubRepo?: string;
  featured?: boolean;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="projects" class="py-24 px-4 bg-void-light relative overflow-hidden">
      <!-- Background -->
      <div class="absolute inset-0 bg-grid-pattern opacity-50"></div>
      <div class="absolute -left-64 bottom-1/4 w-96 h-96 bg-neon-cyan/5 rounded-full blur-3xl"></div>
      <div class="absolute -right-64 top-1/4 w-96 h-96 bg-neon-purple/5 rounded-full blur-3xl"></div>
      
      <div class="container mx-auto max-w-6xl relative z-10">
        <!-- Section header -->
        <div class="text-center mb-16" data-aos="fade-up">
          <span class="text-neon-cyan text-sm font-mono tracking-wider uppercase">My Work</span>
          <h2 class="text-4xl md:text-5xl font-bold text-pearl mt-3">
            Featured <span class="gradient-text-cyan">Projects</span>
          </h2>
          <p class="text-ghost mt-4 max-w-2xl mx-auto">
            A showcase of applications I've built, from microservices to full-stack solutions.
          </p>
        </div>
        
        <!-- Projects grid -->
        <div class="grid md:grid-cols-2 gap-6">
          <div *ngFor="let project of projects; let i = index"
               class="group relative"
               [class.md:col-span-2]="project.featured"
               [attr.data-aos]="'fade-up'"
               [attr.data-aos-delay]="i * 100">
            
            <div class="glass-card h-full overflow-hidden transition-all duration-500 group-hover:border-neon-purple/30 group-hover:shadow-2xl group-hover:shadow-neon-purple/10">
              <!-- Featured badge -->
              <div *ngIf="project.featured" class="absolute top-4 right-4 z-10">
                <span class="px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r from-neon-purple to-neon-blue text-white">
                  ✨ Featured
                </span>
              </div>
              
              <div class="p-6 md:p-8" [class.md:flex]="project.featured" [class.md:gap-8]="project.featured">
                <!-- Content -->
                <div [class.md:flex-1]="project.featured">
                  <!-- Title -->
                  <h3 class="text-2xl font-bold text-pearl mb-1 group-hover:text-neon-purple transition-colors">
                    {{ project.title }}
                  </h3>
                  <p class="text-neon-cyan text-sm font-medium mb-4">{{ project.subtitle }}</p>
                  
                  <!-- Description -->
                  <ul class="space-y-2 mb-6">
                    <li *ngFor="let point of project.description" class="flex items-start gap-2 text-silver text-sm">
                      <svg class="w-4 h-4 text-neon-purple flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"/>
                      </svg>
                      <span>{{ point }}</span>
                    </li>
                  </ul>
                </div>
                
                <!-- Tech & Links -->
                <div [class.md:w-72]="project.featured" [class.md:flex-shrink-0]="project.featured">
                  <!-- Tech stack -->
                  <div class="mb-6">
                    <p class="text-ghost text-xs uppercase tracking-wider mb-3">Tech Stack</p>
                    <div class="flex flex-wrap gap-2">
                      <span *ngFor="let tech of project.techStack"
                            class="px-3 py-1 text-xs font-medium rounded-lg bg-white/5 text-silver border border-white/10 hover:border-neon-cyan/30 hover:text-neon-cyan transition-all">
                        {{ tech }}
                      </span>
                    </div>
                  </div>
                  
                  <!-- Links -->
                  <div class="flex gap-3">
                    <a *ngIf="project.liveDemo && project.liveDemo !== '#'" 
                       [href]="project.liveDemo" 
                       target="_blank"
                       class="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-gradient-to-r from-neon-purple to-neon-blue text-white text-sm font-semibold hover:shadow-lg hover:shadow-neon-purple/25 transition-all">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                      </svg>
                      Live Demo
                    </a>
                    <a *ngIf="project.githubRepo && project.githubRepo !== '#'" 
                       [href]="project.githubRepo" 
                       target="_blank"
                       class="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 text-silver text-sm font-medium hover:border-neon-purple/30 hover:text-pearl transition-all">
                      <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"/>
                      </svg>
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- GitHub CTA -->
        <div class="mt-12 text-center" data-aos="fade-up" data-aos-delay="400">
          <a href="https://github.com/Akashkumar231" 
             target="_blank" 
             class="inline-flex items-center gap-2 text-ghost hover:text-neon-purple transition-colors group">
            <span>View more projects on GitHub</span>
            <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class ProjectsComponent implements AfterViewInit {

  projects: Project[] = [
    {
      title: 'TaskFlow',
      subtitle: 'Modern Angular To-Do Application',
      description: [
        'Built a beautiful and functional To-Do List application with Angular 17+ and Tailwind CSS',
        'Implemented reactive state management using BehaviorSubject and RxJS observables',
        'Features LocalStorage persistence for automatic data saving across sessions',
        'Modern dark theme UI with smooth animations and inline editing capabilities'
      ],
      techStack: ['Angular 17', 'TypeScript', 'Tailwind CSS', 'RxJS', 'LocalStorage'],
      liveDemo: 'https://task-flow-nvix.onrender.com/',
      githubRepo: 'https://github.com/Akashkumar231/task-flow',
      featured: true
    },
    {
      title: 'Microservices Application',
      subtitle: 'Distributed Systems Architecture',
      description: [
        'Developed microservices using Spring Boot with API Gateway and Config Server',
        'Integrated Eureka Server for service discovery and OpenFeign for communication',
        'Enabled distributed tracing with Zipkin for better observability',
        'Used Docker for containerization and improved deployment consistency'
      ],
      techStack: ['Spring Boot', 'Java', 'Zipkin', 'PostgreSQL', 'Docker', 'Eureka'],
      featured: false
    },
    {
      title: 'E-commerce Platform',
      subtitle: 'Full-Stack Shopping Solution',
      description: [
        'Built RESTful backend for products and authentication using Spring Boot',
        'Developed a responsive ReactJS frontend with catalog and checkout features',
        'Improved API performance through optimized MySQL database design',
        'Implemented CORS and secure API communication'
      ],
      techStack: ['Spring Boot', 'ReactJS', 'MySQL', 'REST API', 'Spring Security'],
      featured: false
    },
    {
      title: 'Book Social Network',
      subtitle: 'Full-Stack Social Platform',
      description: [
        'Developed a full-stack social platform using Angular and Spring Boot 3',
        'Implemented JWT-based authentication with Spring Security 6',
        'Used Spring Data JPA for efficient database operations',
        'Containerized the application using Docker for flexible deployments'
      ],
      techStack: ['Angular', 'Spring Boot 3', 'Spring Security 6', 'Docker', 'JWT', 'Postman'],
      featured: false
    }
  ];

  ngAfterViewInit(): void {
    if (typeof AOS !== 'undefined') {
      AOS.refresh();
    }
  }
}

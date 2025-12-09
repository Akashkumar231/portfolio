import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

declare var AOS: any;

interface Experience {
  role: string;
  company: string;
  location: string;
  duration: string;
  type: string;
  achievements: string[];
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="experience" class="py-24 px-4 bg-void relative overflow-hidden">
      <!-- Background -->
      <div class="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-purple/20 to-transparent"></div>
      <div class="absolute -right-64 top-1/3 w-96 h-96 bg-neon-purple/5 rounded-full blur-3xl"></div>
      
      <div class="container mx-auto max-w-4xl relative z-10">
        <!-- Section header -->
        <div class="text-center mb-16" data-aos="fade-up">
          <span class="text-neon-purple text-sm font-mono tracking-wider uppercase">Career Path</span>
          <h2 class="text-4xl md:text-5xl font-bold text-pearl mt-3">
            Work <span class="gradient-text">Experience</span>
          </h2>
        </div>
        
        <!-- Timeline -->
        <div class="relative">
          <!-- Timeline line -->
          <div class="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-neon-purple via-neon-blue to-neon-cyan md:-translate-x-1/2"></div>
          
          <div class="space-y-12">
            <div *ngFor="let exp of experiences; let i = index; let odd = odd"
                 class="relative"
                 [attr.data-aos]="odd ? 'fade-left' : 'fade-right'"
                 [attr.data-aos-delay]="i * 150">
              
              <!-- Timeline dot -->
              <div class="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-neon-purple border-4 border-void -translate-x-1/2 md:-translate-x-1/2 z-10 animate-pulse-glow"></div>
              
              <!-- Card -->
              <div class="ml-8 md:ml-0 md:w-[calc(50%-2rem)]" [class.md:ml-auto]="odd">
                <div class="glass-card glass-card-hover p-6">
                  <!-- Header -->
                  <div class="flex flex-wrap items-start justify-between gap-2 mb-4">
                    <div>
                      <h3 class="text-xl font-bold text-pearl">{{ exp.role }}</h3>
                      <p class="text-neon-purple font-medium">{{ exp.company }}</p>
                    </div>
                    <span class="px-3 py-1 text-xs font-medium rounded-full bg-neon-purple/10 text-neon-purple border border-neon-purple/20">
                      {{ exp.type }}
                    </span>
                  </div>
                  
                  <!-- Meta -->
                  <div class="flex flex-wrap gap-4 text-ghost text-sm mb-4">
                    <span class="flex items-center gap-1">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                      </svg>
                      {{ exp.location }}
                    </span>
                    <span class="flex items-center gap-1">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                      </svg>
                      {{ exp.duration }}
                    </span>
                  </div>
                  
                  <!-- Achievements -->
                  <ul class="space-y-2">
                    <li *ngFor="let achievement of exp.achievements" class="flex items-start gap-3 text-silver text-sm">
                      <svg class="w-5 h-5 text-neon-cyan flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                      <span>{{ achievement }}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class ExperienceComponent implements AfterViewInit {
  experiences: Experience[] = [
    {
      role: 'Backend Engineer',
      company: 'TATA Consultancy Services',
      location: 'Pune, Maharashtra',
      duration: 'Feb 2025 - Present',
      type: 'Full-time',
      achievements: [
        'Develop and maintain backend services using Java and Spring Boot, ensuring high performance, scalability, and reliability',
        'Write clean, modular, and maintainable code following industry best practices and design patterns',
        'Participate in code reviews, debugging, and testing to ensure software quality and security compliance'
      ]
    },
    {
      role: 'Software Developer',
      company: 'Intellosoft Technologies Pvt Ltd',
      location: 'Chandrapur, Maharashtra',
      duration: 'June 2024 – Jan. 2025',
      type: 'Full-time',
      achievements: [
        'Developed scalable backend applications using Java, Spring Boot, and MySQL, ensuring efficient performance and reliability',
        'Implemented MVC architecture to improve code reusability and streamline development workflows',
        'Utilized Docker and Docker Compose for containerization, enhancing deployment speed and scalability'
      ]
    }
  ];

  ngAfterViewInit(): void {
    if (typeof AOS !== 'undefined') {
      AOS.refresh();
    }
  }
}

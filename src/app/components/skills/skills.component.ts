import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

declare var AOS: any;

interface SkillCategory {
  title: string;
  icon: string;
  skills: string[];
  gradient: string;
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="skills" class="py-24 px-4 bg-void-light relative overflow-hidden">
      <!-- Background -->
      <div class="absolute inset-0 bg-grid-pattern opacity-50"></div>
      <div class="absolute top-1/2 right-0 w-96 h-96 bg-neon-purple/5 rounded-full blur-3xl"></div>
      
      <div class="container mx-auto max-w-6xl relative z-10">
        <!-- Section header -->
        <div class="text-center mb-16" data-aos="fade-up">
          <span class="text-neon-cyan text-sm font-mono tracking-wider uppercase">What I work with</span>
          <h2 class="text-4xl md:text-5xl font-bold text-pearl mt-3">
            Technical <span class="gradient-text-cyan">Skills</span>
          </h2>
        </div>

        <!-- Skills grid -->
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div *ngFor="let category of skillCategories; let i = index"
               class="glass-card glass-card-hover p-6 group"
               [attr.data-aos]="'fade-up'"
               [attr.data-aos-delay]="i * 100">
            
            <!-- Category header -->
            <div class="flex items-center gap-4 mb-6">
              <div class="w-12 h-12 rounded-xl flex items-center justify-center" [ngClass]="category.gradient">
                <span class="text-2xl" [innerHTML]="category.icon"></span>
              </div>
              <h3 class="text-xl font-semibold text-pearl">{{ category.title }}</h3>
            </div>
            
            <!-- Skills list -->
            <div class="flex flex-wrap gap-2">
              <span *ngFor="let skill of category.skills"
                    class="px-3 py-1.5 text-sm font-medium rounded-lg bg-white/5 text-silver border border-white/5 hover:border-neon-purple/30 hover:text-pearl hover:bg-neon-purple/10 transition-all cursor-default">
                {{ skill }}
              </span>
            </div>
          </div>
        </div>

        <!-- Additional info -->
        <div class="mt-16 text-center" data-aos="fade-up" data-aos-delay="400">
          <p class="text-ghost text-lg max-w-2xl mx-auto">
            Constantly learning and exploring new technologies to stay at the forefront of backend development.
          </p>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class SkillsComponent implements AfterViewInit {

  skillCategories: SkillCategory[] = [
    {
      title: 'Languages',
      icon: '⚡',
      skills: ['Java', 'Python', 'TypeScript', 'SQL'],
      gradient: 'bg-gradient-to-br from-neon-purple/20 to-neon-blue/20'
    },
    {
      title: 'Frameworks',
      icon: '🚀',
      skills: ['Spring Boot', 'Spring Security', 'Angular', 'Kafka'],
      gradient: 'bg-gradient-to-br from-neon-cyan/20 to-neon-green/20'
    },
    {
      title: 'Databases',
      icon: '🗄️',
      skills: ['PostgreSQL', 'MySQL', 'Redis', 'MongoDB'],
      gradient: 'bg-gradient-to-br from-neon-pink/20 to-neon-purple/20'
    },
    {
      title: 'DevOps & Cloud',
      icon: '☁️',
      skills: ['Docker', 'Kubernetes', 'AWS', 'CI/CD'],
      gradient: 'bg-gradient-to-br from-neon-blue/20 to-neon-cyan/20'
    },
    {
      title: 'Tools',
      icon: '🛠️',
      skills: ['Git', 'GitHub', 'Bamboo', 'Splunk', 'Postman'],
      gradient: 'bg-gradient-to-br from-neon-green/20 to-neon-cyan/20'
    },
    {
      title: 'Concepts',
      icon: '🧠',
      skills: ['Microservices', 'System Design', 'REST APIs', 'AI/ML Basics'],
      gradient: 'bg-gradient-to-br from-neon-purple/20 to-neon-pink/20'
    }
  ];

  ngAfterViewInit(): void {
    if (typeof AOS !== 'undefined') {
      AOS.refresh();
    }
  }
}

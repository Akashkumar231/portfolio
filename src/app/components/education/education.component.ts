import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

declare var AOS: any;

interface Education {
  degree: string;
  institution: string;
  duration: string;
  grade: string;
  icon: string;
}

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="education" class="py-24 px-4 bg-void-light relative overflow-hidden">
      <!-- Background -->
      <div class="absolute inset-0 bg-grid-pattern opacity-50"></div>
      <div class="absolute -right-64 top-1/2 w-96 h-96 bg-neon-cyan/5 rounded-full blur-3xl"></div>
      
      <div class="container mx-auto max-w-4xl relative z-10">
        <!-- Section header -->
        <div class="text-center mb-16" data-aos="fade-up">
          <span class="text-neon-cyan text-sm font-mono tracking-wider uppercase">Academic Background</span>
          <h2 class="text-4xl md:text-5xl font-bold text-pearl mt-3">
            <span class="gradient-text-cyan">Education</span>
          </h2>
        </div>

        <!-- Education cards -->
        <div class="space-y-6">
          <div *ngFor="let edu of education; let i = index"
               class="glass-card glass-card-hover p-6 md:p-8 group"
               [attr.data-aos]="'fade-up'"
               [attr.data-aos-delay]="i * 100">
            
            <div class="flex flex-col md:flex-row md:items-center gap-6">
              <!-- Icon -->
              <div class="w-20 h-20 rounded-2xl bg-gradient-to-br from-neon-cyan/20 to-neon-blue/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <span class="text-4xl">{{ edu.icon }}</span>
              </div>
              
              <!-- Content -->
              <div class="flex-1">
                <h3 class="text-xl md:text-2xl font-bold text-pearl mb-2 group-hover:text-neon-cyan transition-colors">
                  {{ edu.degree }}
                </h3>
                <p class="text-silver text-lg mb-2">{{ edu.institution }}</p>
                <div class="flex flex-wrap gap-4 text-ghost text-sm">
                  <span class="flex items-center gap-1">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                    </svg>
                    {{ edu.duration }}
                  </span>
                </div>
              </div>
              
              <!-- Grade badge -->
              <div class="md:text-right">
                <div class="inline-block px-4 py-2 rounded-xl bg-gradient-to-r from-neon-cyan/10 to-neon-blue/10 border border-neon-cyan/20">
                  <p class="text-xs text-ghost uppercase tracking-wider mb-1">Grade</p>
                  <p class="text-xl font-bold text-neon-cyan">{{ edu.grade }}</p>
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
export class EducationComponent implements AfterViewInit {
  education: Education[] = [
    {
      degree: 'Bachelor of Technology in Computer Science',
      institution: 'Rajiv Gandhi College Of Engineering Research & Technology',
      duration: 'June 2020 - June 2024',
      grade: 'CGPA: 8.77',
      icon: '🎓'
    },
    {
      degree: 'HSC Education in Computer Science',
      institution: 'Gurunanak College Of Science',
      duration: 'May 2018 - May 2020',
      grade: '84.77%',
      icon: '📚'
    }
  ];

  ngAfterViewInit(): void {
    if (typeof AOS !== 'undefined') {
      AOS.refresh();
    }
  }
}

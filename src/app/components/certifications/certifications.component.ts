import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

declare var AOS: any;

interface Certification {
  title: string;
  issuer: string;
  date?: string;
  icon: string;
}

@Component({
  selector: 'app-certifications',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="certifications" class="py-24 px-4 bg-void relative overflow-hidden">
      <!-- Background -->
      <div class="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-purple/20 to-transparent"></div>
      <div class="absolute -left-64 top-1/2 w-96 h-96 bg-neon-purple/5 rounded-full blur-3xl"></div>
      
      <div class="container mx-auto max-w-4xl relative z-10">
        <!-- Section header -->
        <div class="text-center mb-16" data-aos="fade-up">
          <span class="text-neon-purple text-sm font-mono tracking-wider uppercase">Achievements</span>
          <h2 class="text-4xl md:text-5xl font-bold text-pearl mt-3">
            <span class="gradient-text">Certifications</span>
          </h2>
        </div>
        
        <!-- Certifications grid -->
        <div class="grid md:grid-cols-2 gap-6">
          <div *ngFor="let cert of certifications; let i = index"
               class="glass-card glass-card-hover p-6 group"
               [attr.data-aos]="'fade-up'"
               [attr.data-aos-delay]="i * 100">
            
            <div class="flex items-start gap-4">
              <!-- Icon -->
              <div class="w-16 h-16 rounded-xl bg-gradient-to-br from-neon-purple/20 to-neon-blue/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <span class="text-3xl">{{ cert.icon }}</span>
              </div>
              
              <!-- Content -->
              <div class="flex-1">
                <h3 class="text-lg font-semibold text-pearl mb-1 group-hover:text-neon-purple transition-colors">
                  {{ cert.title }}
                </h3>
                <p class="text-neon-cyan text-sm font-medium mb-2">{{ cert.issuer }}</p>
                <div *ngIf="cert.date" class="flex items-center gap-1 text-ghost text-sm">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                  </svg>
                  <span>{{ cert.date }}</span>
                </div>
              </div>
              
              <!-- Badge -->
              <div class="flex-shrink-0">
                <svg class="w-8 h-8 text-neon-purple opacity-50 group-hover:opacity-100 transition-opacity" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class CertificationsComponent implements AfterViewInit {
  certifications: Certification[] = [
    {
      title: 'Oracle Cloud Infrastructure 2025 Certified Foundations Associate',
      issuer: 'Oracle Cloud',
      date: '2025',
      icon: '☁️'
    },
    {
      title: 'Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate',
      issuer: 'Oracle Cloud',
      date: '2025',
      icon: '🤖'
    }
  ];

  ngAfterViewInit(): void {
    if (typeof AOS !== 'undefined') {
      AOS.refresh();
    }
  }
}

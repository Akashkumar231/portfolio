import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

declare var AOS: any;

interface Certification {
  title: string;
  issuer: string;
  date?: string;
}

@Component({
  selector: 'app-certifications',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="certifications" class="py-20 px-4 bg-charcoal text-light-gray">
      <div class="container mx-auto max-w-4xl">
        <h2 class="text-4xl font-bold text-center mb-12 text-white" data-aos="fade-up">Certifications</h2>
        
        <div class="space-y-6">
          <div *ngFor="let cert of certifications; let i = index"
               class="bg-charcoal/80 rounded-lg p-6 shadow-lg border-l-4 border-electric-blue hover:shadow-xl hover:scale-105 transform transition-all duration-300"
               [attr.data-aos]="'fade-up'"
               [attr.data-aos-delay]="i * 100">
            <div class="flex items-center gap-4">
              <div class="flex-shrink-0">
                <svg class="w-12 h-12 text-electric-blue" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
              </div>
              <div class="flex-grow">
                <h3 class="text-xl font-semibold text-white mb-1">{{ cert.title }}</h3>
                <p class="text-electric-blue mb-1">{{ cert.issuer }}</p>
                <p *ngIf="cert.date" class="text-light-gray/70 text-sm">{{ cert.date }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class CertificationsComponent {
  certifications: Certification[] = [
    {
      title: 'Oracle Cloud Infrastructure 2025 Certified Foundations Associate',
      issuer: 'Oracle Cloud',
      date: '2025'
    },
    {
      title: 'Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate',
      issuer: 'Oracle Cloud',
      date: '2025'
    }
  ];

  ngAfterViewInit(): void {
    if (typeof AOS !== 'undefined') {
      AOS.refresh();
    }
  }
}


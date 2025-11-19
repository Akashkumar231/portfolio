import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

declare var AOS: any;

interface Education {
  degree: string;
  institution: string;
  duration: string;
  grade: string;
}

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="education" class="py-20 px-4 bg-light-gray text-charcoal">
      <div class="container mx-auto max-w-4xl">
        <h2 class="text-4xl font-bold text-center mb-12" data-aos="fade-up">Education</h2>

        <div class="space-y-8">
          <div *ngFor="let edu of education; let i = index"
               class="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl hover:scale-105 transform transition-all duration-300"
               [attr.data-aos]="'fade-up'"
               [attr.data-aos-delay]="i * 100">
            <h3 class="text-2xl font-semibold mb-2 text-electric-blue">{{ edu.degree }}</h3>
            <p class="text-lg text-charcoal/80 mb-1">{{ edu.institution }}</p>
            <p class="text-charcoal/70 mb-2">{{ edu.duration }}</p>
            <p class="text-charcoal/90 font-medium">{{ edu.grade }}</p>
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
      grade: 'CGPA: 8.77'
    },
    {
      degree: 'HSC Education in Computer Science',
      institution: 'Gurunanak College Of Science',
      duration: 'May 2018 - May 2020',
      grade: 'Percentage: 84.77%'
    }
  ];

  ngAfterViewInit(): void {
    if (typeof AOS !== 'undefined') {
      AOS.refresh();
    }
  }
}
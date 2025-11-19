import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

declare var AOS: any;

interface Experience {
  role: string;
  company: string;
  location: string;
  duration: string;
  achievements: string[];
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="experience" class="py-20 px-4 bg-charcoal text-light-gray">
      <div class="container mx-auto max-w-4xl">
        <h2 class="text-4xl font-bold text-center mb-12 text-white" data-aos="fade-up">Experience</h2>
        
        <div class="space-y-8">
          <div *ngFor="let exp of experiences; let i = index" 
               class="relative pl-8 border-l-4 border-electric-blue pb-8 last:pb-0"
               [attr.data-aos]="'fade-up'"
               [attr.data-aos-delay]="i * 100">
            <div class="absolute -left-2 top-0 w-4 h-4 bg-electric-blue rounded-full"></div>
            <div class="bg-charcoal/80 rounded-lg p-6 shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300">
              <h3 class="text-2xl font-semibold text-white mb-1">{{ exp.role }}</h3>
              <p class="text-electric-blue text-lg mb-1">{{ exp.company }}</p>
              <p class="text-light-gray/70 mb-2 text-sm">{{ exp.location }}</p>
              <p class="text-light-gray/70 mb-4 text-sm">{{ exp.duration }}</p>
              <ul class="space-y-2">
                <li *ngFor="let achievement of exp.achievements" class="flex items-start gap-3 hover:bg-electric-blue/10 px-2 py-1 rounded-lg transition-colors duration-300 cursor-pointer">
                  <span class="text-electric-blue mt-1 hover:text-blue-600 transition-colors duration-300">▸</span>
                  <span class="hover:text-electric-blue transition-colors duration-300">{{ achievement }}</span>
                </li>
              </ul>
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
      achievements: [
        'Develop and maintain backend services using Java and Spring Boot, ensuring high performance, scalability, and reliability',
        'Write clean, modular, and maintainable code following industry best practices and design patterns',
        'Participate in code reviews, debugging, and testing to ensure software quality and security compliance'
      ]
    },
    {
      role: 'Software Developer',
      company: 'Intellosoft Technologies Private Limited',
      location: 'Chandrapur, Maharashtra',
      duration: 'June 2024 – Jan. 2025',
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


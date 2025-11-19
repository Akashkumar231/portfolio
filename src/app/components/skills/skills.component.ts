import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

declare var AOS: any;

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="skills" class="py-20 px-4 bg-light-gray text-charcoal">
      <div class="container mx-auto max-w-6xl">
        <h2 class="text-4xl font-bold text-center mb-12" data-aos="fade-up">
          Skills
        </h2>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">

          <!-- Languages -->
          <div 
            class="skill-card bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-100"
            data-aos="fade-up" data-aos-delay="100"
          >
            <div class="p-6">
              <h3 class="text-2xl font-semibold mb-4 text-electric-blue">Languages</h3>
              <ul class="space-y-3">
                <li *ngFor="let skill of languages" 
                    class="flex items-center gap-3 hover:bg-electric-blue/10 px-2 py-1 rounded-lg cursor-pointer transition-colors duration-300">
                  <span class="text-electric-blue text-xl">●</span>
                  <span class="text-lg">{{ skill }}</span>
                </li>
              </ul>
            </div>
          </div>

          <!-- Frameworks & Technologies -->
          <div 
            class="skill-card bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300"
            data-aos="fade-up" data-aos-delay="200"
          >
            <div class="p-6">
              <h3 class="text-2xl font-semibold mb-4 text-electric-blue">Frameworks & Technologies</h3>
              <ul class="space-y-3">
                <li *ngFor="let skill of frameworksTechnologies" 
                    class="flex items-center gap-3 hover:bg-electric-blue/10 px-2 py-1 rounded-lg cursor-pointer transition-colors duration-300">
                  <span class="text-electric-blue text-xl">●</span>
                  <span class="text-lg">{{ skill }}</span>
                </li>
              </ul>
            </div>
          </div>

          <!-- Tools & Platforms -->
          <div 
            class="skill-card bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300"
            data-aos="fade-up" data-aos-delay="300"
          >
            <div class="p-6">
              <h3 class="text-2xl font-semibold mb-4 text-electric-blue">Tools & Platforms</h3>
              <ul class="space-y-3">
                <li *ngFor="let skill of toolsPlatforms" 
                    class="flex items-center gap-3 hover:bg-electric-blue/10 px-2 py-1 rounded-lg cursor-pointer transition-colors duration-300">
                  <span class="text-electric-blue text-xl">●</span>
                  <span class="text-lg">{{ skill }}</span>
                </li>
              </ul>
            </div>
          </div>

          <!-- Databases -->
          <div 
            class="skill-card bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300"
            data-aos="fade-up" data-aos-delay="400"
          >
            <div class="p-6">
              <h3 class="text-2xl font-semibold mb-4 text-electric-blue">Databases</h3>
              <ul class="space-y-3">
                <li *ngFor="let skill of databases" 
                    class="flex items-center gap-3 hover:bg-electric-blue/10 px-2 py-1 rounded-lg cursor-pointer transition-colors duration-300">
                  <span class="text-electric-blue text-xl">●</span>
                  <span class="text-lg">{{ skill }}</span>
                </li>
              </ul>
            </div>
          </div>

          <!-- Cloud & DevOps -->
          <div 
            class="skill-card bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300"
            data-aos="fade-up" data-aos-delay="500"
          >
            <div class="p-6">
              <h3 class="text-2xl font-semibold mb-4 text-electric-blue">Cloud & DevOps</h3>
              <ul class="space-y-3">
                <li *ngFor="let skill of cloudDevops" 
                    class="flex items-center gap-3 hover:bg-electric-blue/10 px-2 py-1 rounded-lg cursor-pointer transition-colors duration-300">
                  <span class="text-electric-blue text-xl">●</span>
                  <span class="text-lg">{{ skill }}</span>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  `,
  styles: [`
    .skill-card {
      transition: all 0.4s ease;
      transform: translateY(0px) scale(1);
      border: 2px solid transparent;
    }

    .skill-card:hover {
      transform: translateY(-10px) scale(1.05);
      box-shadow: 0 20px 30px rgba(0, 0, 0, 0.15);
      border-color: #3b82f6;
    }
  `]
})
export class SkillsComponent implements AfterViewInit {

  languages = ['Java', 'Python', 'TypeScript'];

  frameworksTechnologies = ['Spring Boot', 'Kafka', 'Angular', 'Artificial Intelligence'];

  toolsPlatforms = ['Docker', 'Bamboo', 'Splunk', 'Git', 'GitHub'];

  databases = ['MySQL', 'PostgreSQL'];

  cloudDevops = ['Cloud', 'Microservices', 'System Design'];

  ngAfterViewInit(): void {
    if (typeof AOS !== 'undefined') {
      AOS.refresh();
    }
  }
}

import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

declare var AOS: any;

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="about" class="py-20 px-4 bg-charcoal text-light-gray">
      <div class="container mx-auto max-w-4xl">
        <h2 class="text-4xl font-bold text-center mb-12 text-white" data-aos="fade-up">About Me</h2>

        <div
          class="bg-white text-charcoal rounded-lg p-8 shadow-lg 
                 transform transition-all duration-150 
                 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <p class="text-lg leading-relaxed mb-6">
            I am a Backend Engineer with about one year of hands-on experience and a strong foundation in computer science. I specialize in Java and Spring Boot, where I enjoy building scalable microservices and contributing to backend development that improves overall application performance.
          </p>
          <p class="text-lg leading-relaxed mb-6">
            I have experience working with Docker for smoother deployment workflows and follow core system design principles to develop efficient backend solutions. I focus on writing clean, maintainable code and follow best practices to build reliable and efficient web services and APIs.
          </p>
          <p class="text-lg leading-relaxed">
            Along with backend development, I also have exposure to frontend technologies like Angular, enabling me to understand and support full-stack development when needed. I believe strongly in continuous learning and constantly explore new tools, technologies, and best practices to grow as a developer.
          </p>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class AboutComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    if (typeof AOS !== 'undefined') {
      AOS.refresh();
    }
  }
}

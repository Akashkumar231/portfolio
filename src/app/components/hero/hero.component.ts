import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="home" class="min-h-screen flex items-center justify-center px-4 pt-20 pb-16 bg-gradient-to-b from-charcoal to-charcoal/95">
      <div class="container mx-auto max-w-4xl text-center">
        <h1 class="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
          Akashkumar Yadav
        </h1>
        <p class="text-2xl md:text-3xl text-light-gray mb-4 font-light">
          Backend Engineer
        </p>
        <p class="text-lg md:text-xl text-light-gray/90 mb-12 max-w-2xl mx-auto min-h-[3rem]">
          <span>{{ displayedText }}</span><span class="typewriter-cursor">|</span>
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#projects"
            class="bg-electric-blue hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            View My Projects
          </a>
          <a
            href="/assets/Akashkumar_Resume.pdf"
            download="Akashkumar_Resume.pdf"
            class="bg-transparent border-2 border-electric-blue text-electric-blue hover:bg-electric-blue hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
            Download Resume
          </a>
        </div>
       
      </div>
    </section>
  `,
  styles: [`
    @keyframes fade-in {
      from {
        opacity: 0;
        transform: translateY(-20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    .animate-fade-in {
      animation: fade-in 1s ease-out;
    }
  `]
})
export class HeroComponent implements OnInit, OnDestroy {
  fullText = 'Passionate Backend Engineer specializing in Java, Spring Boot, and microservices architecture. Committed to building scalable, secure, and high-performance applications.';
  displayedText = '';
  private typewriterInterval: any;

  ngOnInit(): void {
    this.startTypewriter();
  }

  ngOnDestroy(): void {
    if (this.typewriterInterval) {
      clearTimeout(this.typewriterInterval);
    }
  }

  private startTypewriter(): void {
    let index = 0;
    const typeSpeed = 100; // milliseconds per character

    const type = () => {
      if (index < this.fullText.length) {
        this.displayedText += this.fullText.charAt(index);
        index++;
        this.typewriterInterval = setTimeout(type, typeSpeed);
      }
    };

    // Start typing after a short delay
    setTimeout(() => {
      type();
    }, 1500);
  }
}


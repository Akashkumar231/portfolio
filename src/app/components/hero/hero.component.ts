import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="home" class="min-h-screen flex items-center justify-center px-4 pt-20 pb-16 relative overflow-hidden">
      <!-- Background effects -->
      <div class="absolute inset-0 bg-void"></div>
      <div class="absolute inset-0 bg-grid-pattern"></div>
      
      <!-- Gradient orbs -->
      <div class="absolute top-1/4 -left-32 w-96 h-96 bg-neon-purple/20 rounded-full blur-3xl animate-float"></div>
      <div class="absolute bottom-1/4 -right-32 w-96 h-96 bg-neon-blue/20 rounded-full blur-3xl animate-float" style="animation-delay: -3s;"></div>
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-cyan/5 rounded-full blur-3xl"></div>
      
      <div class="container mx-auto max-w-5xl text-center relative z-10">
        <!-- Greeting badge -->
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8" data-aos="fade-down" data-aos-delay="100">
          <span class="w-2 h-2 bg-neon-green rounded-full animate-pulse"></span>
          <span class="text-silver text-sm font-medium">Available for opportunities</span>
        </div>
        
        <!-- Name -->
        <h1 class="text-5xl md:text-7xl lg:text-8xl font-bold mb-6" data-aos="fade-up" data-aos-delay="200">
          <span class="text-pearl">Hi, I'm </span>
          <span class="gradient-text">Akashkumar</span>
        </h1>
        
        <!-- Role -->
        <div class="flex items-center justify-center gap-3 mb-6" data-aos="fade-up" data-aos-delay="300">
          <div class="h-px w-12 bg-gradient-to-r from-transparent to-neon-purple"></div>
          <p class="text-2xl md:text-3xl text-silver font-light tracking-wide">
            Backend Engineer
          </p>
          <div class="h-px w-12 bg-gradient-to-l from-transparent to-neon-purple"></div>
        </div>
        
        <!-- Typewriter text -->
        <p class="text-lg md:text-xl text-ghost mb-12 max-w-2xl mx-auto min-h-[4rem] leading-relaxed" data-aos="fade-up" data-aos-delay="400">
          <span>{{ displayedText }}</span><span class="typewriter-cursor"></span>
        </p>
        
        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center" data-aos="fade-up" data-aos-delay="500">
          <a
            href="#projects"
            class="btn-primary flex items-center gap-2 group">
            <span>View My Projects</span>
            <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </a>
          <a
            href="/assets/Akashkumar_Resume.pdf"
            download="Akashkumar_Resume.pdf"
            class="btn-outline flex items-center gap-2 group">
            <svg class="w-5 h-5 group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
            </svg>
            <span>Download Resume</span>
          </a>
        </div>
        
        <!-- Tech stack badges -->
        <div class="mt-16 flex flex-wrap justify-center gap-3" data-aos="fade-up" data-aos-delay="600">
          <span *ngFor="let tech of techStack" class="skill-tag text-silver">
            {{ tech }}
          </span>
        </div>
        
        <!-- Scroll indicator -->
        <div class="absolute bottom-8 left-1/2 -translate-x-1/2" data-aos="fade-up" data-aos-delay="700">
          <a href="#about" class="flex flex-col items-center gap-2 text-ghost hover:text-neon-purple transition-colors">
            <span class="text-xs uppercase tracking-widest">Scroll</span>
            <svg class="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class HeroComponent implements OnInit, OnDestroy {
  fullText = 'Passionate about building scalable microservices and high-performance backend systems with Java & Spring Boot.';
  displayedText = '';
  techStack = ['Java', 'Spring Boot', 'Microservices', 'Docker', 'Kafka', 'PostgreSQL'];
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
    const typeSpeed = 40;

    const type = () => {
      if (index < this.fullText.length) {
        this.displayedText += this.fullText.charAt(index);
        index++;
        this.typewriterInterval = setTimeout(type, typeSpeed);
      }
    };

    setTimeout(() => {
      type();
    }, 1000);
  }
}

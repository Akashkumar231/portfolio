import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

declare var AOS: any;

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="about" class="py-24 px-4 bg-void relative overflow-hidden">
      <!-- Background elements -->
      <div class="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-purple/20 to-transparent"></div>
      <div class="absolute -left-64 top-1/2 w-96 h-96 bg-neon-blue/5 rounded-full blur-3xl"></div>
      
      <div class="container mx-auto max-w-5xl relative z-10">
        <!-- Section header -->
        <div class="text-center mb-16" data-aos="fade-up">
          <span class="text-neon-purple text-sm font-mono tracking-wider uppercase">Get to know me</span>
          <h2 class="text-4xl md:text-5xl font-bold text-pearl mt-3">
            About <span class="gradient-text">Me</span>
          </h2>
        </div>

        <div class="grid lg:grid-cols-5 gap-12 items-center">
          <!-- Left: Stats/Info cards -->
          <div class="lg:col-span-2 space-y-4" data-aos="fade-right" data-aos-delay="100">
            <div class="glass-card glass-card-hover p-6">
              <div class="flex items-center gap-4">
                <div class="w-14 h-14 rounded-xl bg-gradient-to-br from-neon-purple/20 to-neon-blue/20 flex items-center justify-center">
                  <svg class="w-7 h-7 text-neon-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </div>
                <div>
                  <p class="text-3xl font-bold text-pearl">1+</p>
                  <p class="text-ghost text-sm">Years Experience</p>
                </div>
              </div>
            </div>
            
            <div class="glass-card glass-card-hover p-6">
              <div class="flex items-center gap-4">
                <div class="w-14 h-14 rounded-xl bg-gradient-to-br from-neon-cyan/20 to-neon-green/20 flex items-center justify-center">
                  <svg class="w-7 h-7 text-neon-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
                  </svg>
                </div>
                <div>
                  <p class="text-3xl font-bold text-pearl">2</p>
                  <p class="text-ghost text-sm">Certifications</p>
                </div>
              </div>
            </div>
            
            <div class="glass-card glass-card-hover p-6">
              <div class="flex items-center gap-4">
                <div class="w-14 h-14 rounded-xl bg-gradient-to-br from-neon-pink/20 to-neon-purple/20 flex items-center justify-center">
                  <svg class="w-7 h-7 text-neon-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
                  </svg>
                </div>
                <div>
                  <p class="text-3xl font-bold text-pearl">5+</p>
                  <p class="text-ghost text-sm">Projects Built</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Right: About text -->
          <div class="lg:col-span-3" data-aos="fade-left" data-aos-delay="200">
            <div class="glass-card p-8">
              <p class="text-silver text-lg leading-relaxed mb-6">
                I am a <span class="text-pearl font-medium">Backend Engineer</span> with about one year of hands-on experience and a strong foundation in computer science. I specialize in <span class="text-neon-purple font-medium">Java</span> and <span class="text-neon-purple font-medium">Spring Boot</span>, where I enjoy building scalable microservices and contributing to backend development that improves overall application performance.
              </p>
              <p class="text-silver text-lg leading-relaxed mb-6">
                I have experience working with <span class="text-neon-cyan font-medium">Docker</span> for smoother deployment workflows and follow core system design principles to develop efficient backend solutions. I focus on writing clean, maintainable code and follow best practices to build reliable and efficient web services and APIs.
              </p>
              <p class="text-silver text-lg leading-relaxed">
                Along with backend development, I also have exposure to frontend technologies like <span class="text-neon-cyan font-medium">Angular</span>, enabling me to understand and support full-stack development when needed. I believe strongly in continuous learning and constantly explore new tools, technologies, and best practices to grow as a developer.
              </p>
              
              <!-- Quick links -->
              <div class="mt-8 pt-6 border-t border-white/5 flex flex-wrap gap-4">
                <a href="https://linkedin.com/in/akashkumaryadav1" target="_blank" class="flex items-center gap-2 text-ghost hover:text-neon-purple transition-colors">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  <span>LinkedIn</span>
                </a>
                <a href="https://github.com/Akashkumar231" target="_blank" class="flex items-center gap-2 text-ghost hover:text-neon-purple transition-colors">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"/>
                  </svg>
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>
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

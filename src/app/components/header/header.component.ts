import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header 
      class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      [class.header-scrolled]="isScrolled"
      [class.header-transparent]="!isScrolled">
      <nav class="container mx-auto px-6 py-4">
        <div class="flex items-center justify-between">
          <!-- Logo -->
          <a href="#home" class="group flex items-center gap-2" (click)="scrollToSection($event, '#home')">
            <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-neon-purple to-neon-blue flex items-center justify-center font-bold text-white text-lg">
              A
            </div>
            <span class="hidden sm:block text-pearl font-semibold group-hover:text-neon-purple transition-colors">
              Akashkumar<span class="text-neon-purple">.</span>
            </span>
          </a>

          <!-- Desktop Navigation -->
          <ul class="hidden md:flex items-center gap-1">
            <li *ngFor="let link of navLinks">
              <a 
                [href]="link.href" 
                class="px-4 py-2 text-silver hover:text-pearl rounded-lg hover:bg-white/5 transition-all duration-300 text-sm font-medium"
                (click)="scrollToSection($event, link.href)">
                {{ link.label }}
              </a>
            </li>
            <li class="ml-4">
              <a 
                href="#contact"
                (click)="scrollToSection($event, '#contact')"
                class="px-5 py-2.5 bg-gradient-to-r from-neon-purple to-neon-blue text-white rounded-lg text-sm font-semibold hover:shadow-lg hover:shadow-neon-purple/25 transition-all duration-300">
                Let's Talk
              </a>
            </li>
          </ul>

          <!-- Mobile Menu Button -->
          <button 
            class="md:hidden relative w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-silver hover:text-pearl hover:bg-white/10 transition-all"
            (click)="toggleMobileMenu()"
            aria-label="Toggle menu">
            <svg class="w-5 h-5 transition-transform duration-300" [class.rotate-90]="isMobileMenuOpen" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path *ngIf="!isMobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
              <path *ngIf="isMobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>

        <!-- Mobile Navigation -->
        <div 
          class="md:hidden overflow-hidden transition-all duration-300 ease-out"
          [style.max-height]="isMobileMenuOpen ? '400px' : '0px'"
          [style.opacity]="isMobileMenuOpen ? '1' : '0'">
          <ul class="pt-4 pb-2 space-y-1">
            <li *ngFor="let link of navLinks">
              <a 
                [href]="link.href" 
                class="block px-4 py-3 text-silver hover:text-pearl hover:bg-white/5 rounded-lg transition-all"
                (click)="scrollToSection($event, link.href)">
                {{ link.label }}
              </a>
            </li>
            <li class="pt-2">
              <a 
                href="#contact"
                (click)="scrollToSection($event, '#contact')"
                class="block mx-4 py-3 bg-gradient-to-r from-neon-purple to-neon-blue text-white rounded-lg text-center font-semibold">
                Let's Talk
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  `,
  styles: [`
    .header-scrolled {
      background: rgba(10, 10, 15, 0.8);
      backdrop-filter: blur(20px);
      border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    }
    
    .header-transparent {
      background: transparent;
    }
  `]
})
export class HeaderComponent implements OnInit {
  isMobileMenuOpen = false;
  isScrolled = false;
  
  navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Education', href: '#education' }
  ];

  ngOnInit(): void {
    this.checkScroll();
  }

  @HostListener('window:scroll')
  checkScroll(): void {
    this.isScrolled = window.scrollY > 50;
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  scrollToSection(event: Event, href: string): void {
    event.preventDefault();
    this.isMobileMenuOpen = false;
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }
}

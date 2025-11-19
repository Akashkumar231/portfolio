import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header class="fixed top-0 left-0 right-0 bg-charcoal/95 backdrop-blur-sm z-50 shadow-lg">
      <nav class="container mx-auto px-4 py-4">
        <div class="flex items-center justify-between">
          <!-- Logo/Name -->
          <div class="text-xl font-bold text-white">
            <a href="#home" class="hover:text-electric-blue transition-colors">
              Akashkumar Yadav | Backend Engineer
            </a>
          </div>

          <!-- Desktop Navigation -->
          <ul class="hidden md:flex space-x-6">
            <li *ngFor="let link of navLinks">
              <a 
                [href]="link.href" 
                class="text-light-gray hover:text-electric-blue transition-colors font-medium"
                (click)="scrollToSection($event, link.href)">
                {{ link.label }}
              </a>
            </li>
          </ul>

          <!-- Mobile Menu Button -->
          <button 
            class="md:hidden text-light-gray hover:text-electric-blue transition-colors"
            (click)="toggleMobileMenu()"
            aria-label="Toggle menu">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path *ngIf="!isMobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
              <path *ngIf="isMobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>

        <!-- Mobile Navigation -->
        <ul 
          class="md:hidden mt-4 space-y-3 pb-4"
          [class.hidden]="!isMobileMenuOpen">
          <li *ngFor="let link of navLinks">
            <a 
              [href]="link.href" 
              class="block text-light-gray hover:text-electric-blue transition-colors py-2"
              (click)="scrollToSection($event, link.href)">
              {{ link.label }}
            </a>
          </li>
        </ul>
      </nav>
    </header>
  `,
  styles: []
})
export class HeaderComponent implements OnInit {
  isMobileMenuOpen = false;
  
  navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' }
  ];

  ngOnInit(): void {}

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


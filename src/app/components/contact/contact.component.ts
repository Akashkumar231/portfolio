import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section id="contact" class="py-20 px-4 bg-light-gray text-charcoal">
      <div class="container mx-auto max-w-4xl">
        <h2 class="text-4xl font-bold text-center mb-12">Get In Touch</h2>
        
        <div class="grid md:grid-cols-2 gap-8">
          <!-- Contact Form -->
          <div class="bg-white rounded-lg shadow-lg p-6">
            <form (ngSubmit)="onSubmit()" #contactForm="ngForm" class="space-y-4">
              <div>
                <label for="name" class="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  [(ngModel)]="formData.name"
                  required
                  minlength="2"
                  #name="ngModel"
                  class="w-full px-4 py-2 border border-charcoal/20 rounded-lg focus:outline-none focus:border-electric-blue focus:ring-2 focus:ring-electric-blue/20 text-charcoal">
                <div *ngIf="name.invalid && name.touched" class="text-red-500 text-sm mt-1">
                  <div *ngIf="name.errors?.['required']">Name is required.</div>
                  <div *ngIf="name.errors?.['minlength']">Name must be at least 2 characters long.</div>
                </div>
              </div>
              
              <div>
                <label for="email" class="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  [(ngModel)]="formData.email"
                  required
                  email
                  #email="ngModel"
                  class="w-full px-4 py-2 border border-charcoal/20 rounded-lg focus:outline-none focus:border-electric-blue focus:ring-2 focus:ring-electric-blue/20 text-charcoal">
                <div *ngIf="email.invalid && email.touched" class="text-red-500 text-sm mt-1">
                  <div *ngIf="email.errors?.['required']">Email is required.</div>
                  <div *ngIf="email.errors?.['email']">Please enter a valid email address.</div>
                </div>
              </div>
              
              <div>
                <label for="message" class="block text-sm font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  [(ngModel)]="formData.message"
                  required
                  minlength="10"
                  #message="ngModel"
                  rows="5"
                  class="w-full px-4 py-2 border border-charcoal/20 rounded-lg focus:outline-none focus:border-electric-blue focus:ring-2 focus:ring-electric-blue/20 text-charcoal resize-none"></textarea>
                <div *ngIf="message.invalid && message.touched" class="text-red-500 text-sm mt-1">
                  <div *ngIf="message.errors?.['required']">Message is required.</div>
                  <div *ngIf="message.errors?.['minlength']">Message must be at least 10 characters long.</div>
                </div>
              </div>
              
              <button 
                type="submit"
                [disabled]="!contactForm.valid"
                class="w-full bg-electric-blue hover:bg-blue-600 disabled:bg-charcoal/30 disabled:cursor-not-allowed text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                Send Message
              </button>
            </form>
          </div>
          
          <!-- Contact Information -->
          <div class="space-y-6">
            <div class="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl hover:scale-105 transform transition-all duration-300">
              <h3 class="text-2xl font-semibold mb-4 text-electric-blue">Contact Information</h3>
              <div class="space-y-4">
                <div class="flex items-center gap-3">
                  <svg class="w-6 h-6 text-electric-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                  <a [href]="getTelHref()" class="text-charcoal hover:text-electric-blue transition-colors">
                    {{ phoneNumber }}
                  </a>
                </div>
                
                <div class="flex items-center gap-3">
                  <svg class="w-6 h-6 text-electric-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                  <a [href]="'mailto:' + emailAddress" class="text-charcoal hover:text-electric-blue transition-colors">
                    {{ emailAddress }}
                  </a>
                </div>
              </div>
            </div>
            
            <div class="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl hover:scale-105 transform transition-all duration-300">
              <h3 class="text-2xl font-semibold mb-4 text-electric-blue">Social Links</h3>
              <div class="flex gap-4">
                <a 
                  href="https://linkedin.com/in/akashkumaryadav1" 
                  target="_blank"
                  class="bg-charcoal hover:bg-electric-blue text-white p-3 rounded-lg transition-colors">
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a 
                  href="https://github.com/Akashkumar231" 
                  target="_blank"
                  class="bg-charcoal hover:bg-electric-blue text-white p-3 rounded-lg transition-colors">
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Footer -->
      <footer class="mt-16 pt-8 border-t border-charcoal/20 text-center text-charcoal/70">
        <p>&copy; 2024 Akashkumar Yadav. All rights reserved.</p>
      </footer>
    </section>
  `,
  styles: []
})
export class ContactComponent {
  @ViewChild('contactForm') contactForm!: NgForm;

  emailAddress = 'akashkumar355231@gmail.com';
  phoneNumber = '+91-7970949652';

  // EmailJS configuration - Replace these with your actual EmailJS credentials
  private serviceId = 'service_77ag49u'; // Get from EmailJS dashboard
  private templateId = 'template_j05n7ku'; // Create a template in EmailJS
  private publicKey = 'vtduBS7GkMwRZ43yJ'; // Get from EmailJS dashboard

  formData = {
    name: '',
    email: '',
    message: ''
  };

  getTelHref(): string {
    return 'tel:' + this.phoneNumber.replace(/-/g, '');
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      const templateParams = {
        from_name: this.formData.name,
        from_email: this.formData.email,
        message: this.formData.message,
        to_email: this.emailAddress,
      };

      emailjs.send(this.serviceId, this.templateId, templateParams, this.publicKey)
        .then((response) => {
          console.log('SUCCESS!', response.status, response.text);
          alert('Thank you for your message! I will get back to you soon.');
          this.contactForm.resetForm();
        }, (error) => {
          console.log('FAILED...', error);
          alert('Failed to send message. Please try again.');
        });
    }
  }
}


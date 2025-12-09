import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section id="contact" class="py-24 px-4 bg-void relative overflow-hidden">
      <!-- Background -->
      <div class="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-purple/20 to-transparent"></div>
      <div class="absolute -left-64 top-1/3 w-96 h-96 bg-neon-purple/5 rounded-full blur-3xl"></div>
      <div class="absolute -right-64 bottom-1/3 w-96 h-96 bg-neon-cyan/5 rounded-full blur-3xl"></div>
      
      <div class="container mx-auto max-w-5xl relative z-10">
        <!-- Section header -->
        <div class="text-center mb-16" data-aos="fade-up">
          <span class="text-neon-purple text-sm font-mono tracking-wider uppercase">Get in Touch</span>
          <h2 class="text-4xl md:text-5xl font-bold text-pearl mt-3">
            Let's <span class="gradient-text">Connect</span>
          </h2>
          <p class="text-ghost mt-4 max-w-xl mx-auto">
            Have a project in mind or want to discuss opportunities? I'd love to hear from you.
          </p>
        </div>
        
        <div class="grid lg:grid-cols-5 gap-8">
          <!-- Contact Form -->
          <div class="lg:col-span-3" data-aos="fade-right" data-aos-delay="100">
            <div class="glass-card p-6 md:p-8">
              <form (ngSubmit)="onSubmit()" #contactForm="ngForm" class="space-y-6">
                <div class="grid md:grid-cols-2 gap-6">
                  <div>
                    <label for="name" class="block text-sm font-medium text-silver mb-2">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      [(ngModel)]="formData.name"
                      required
                      minlength="2"
                      #name="ngModel"
                      class="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-pearl placeholder-ghost focus:outline-none focus:border-neon-purple/50 focus:ring-2 focus:ring-neon-purple/20 transition-all"
                      placeholder="John Doe">
                    <div *ngIf="name.invalid && name.touched" class="text-neon-pink text-sm mt-2">
                      <div *ngIf="name.errors?.['required']">Name is required.</div>
                      <div *ngIf="name.errors?.['minlength']">Name must be at least 2 characters.</div>
                    </div>
                  </div>
                  
                  <div>
                    <label for="email" class="block text-sm font-medium text-silver mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      [(ngModel)]="formData.email"
                      required
                      email
                      #email="ngModel"
                      class="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-pearl placeholder-ghost focus:outline-none focus:border-neon-purple/50 focus:ring-2 focus:ring-neon-purple/20 transition-all"
                      placeholder="john@example.com">
                    <div *ngIf="email.invalid && email.touched" class="text-neon-pink text-sm mt-2">
                      <div *ngIf="email.errors?.['required']">Email is required.</div>
                      <div *ngIf="email.errors?.['email']">Please enter a valid email.</div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <label for="message" class="block text-sm font-medium text-silver mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    [(ngModel)]="formData.message"
                    required
                    minlength="10"
                    #message="ngModel"
                    rows="5"
                    class="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-pearl placeholder-ghost focus:outline-none focus:border-neon-purple/50 focus:ring-2 focus:ring-neon-purple/20 transition-all resize-none"
                    placeholder="Tell me about your project..."></textarea>
                  <div *ngIf="message.invalid && message.touched" class="text-neon-pink text-sm mt-2">
                    <div *ngIf="message.errors?.['required']">Message is required.</div>
                    <div *ngIf="message.errors?.['minlength']">Message must be at least 10 characters.</div>
                  </div>
                </div>
                
                <button 
                  type="submit"
                  [disabled]="!contactForm.valid || isSubmitting"
                  class="w-full py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-neon-purple to-neon-blue hover:shadow-lg hover:shadow-neon-purple/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-none transition-all flex items-center justify-center gap-2">
                  <span *ngIf="!isSubmitting">Send Message</span>
                  <span *ngIf="isSubmitting">Sending...</span>
                  <svg *ngIf="!isSubmitting" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                  </svg>
                </button>
              </form>
            </div>
          </div>
          
          <!-- Contact Information -->
          <div class="lg:col-span-2 space-y-6" data-aos="fade-left" data-aos-delay="200">
            <!-- Contact details -->
            <div class="glass-card glass-card-hover p-6">
              <h3 class="text-xl font-semibold text-pearl mb-6">Contact Details</h3>
              <div class="space-y-4">
                <a [href]="'mailto:' + emailAddress" class="flex items-center gap-4 text-silver hover:text-neon-purple transition-colors group">
                  <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-neon-purple/20 to-neon-blue/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg class="w-5 h-5 text-neon-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                  </div>
                  <div>
                    <p class="text-ghost text-sm">Email</p>
                    <p class="font-medium">{{ emailAddress }}</p>
                  </div>
                </a>
                
                <a [href]="getTelHref()" class="flex items-center gap-4 text-silver hover:text-neon-cyan transition-colors group">
                  <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-neon-cyan/20 to-neon-green/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg class="w-5 h-5 text-neon-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                    </svg>
                  </div>
                  <div>
                    <p class="text-ghost text-sm">Phone</p>
                    <p class="font-medium">{{ phoneNumber }}</p>
                  </div>
                </a>
              </div>
            </div>
            
            <!-- Social links -->
            <div class="glass-card glass-card-hover p-6">
              <h3 class="text-xl font-semibold text-pearl mb-6">Follow Me</h3>
              <div class="flex gap-4">
                <a 
                  href="https://linkedin.com/in/akashkumaryadav1" 
                  target="_blank"
                  class="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-silver hover:text-white hover:bg-[#0077b5] hover:border-[#0077b5] transition-all">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a 
                  href="https://github.com/Akashkumar231" 
                  target="_blank"
                  class="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-silver hover:text-white hover:bg-[#333] hover:border-[#333] transition-all">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"/>
                  </svg>
                </a>
              </div>
            </div>
            
            <!-- Availability status -->
            <div class="glass-card p-6">
              <div class="flex items-center gap-3">
                <div class="w-3 h-3 bg-neon-green rounded-full animate-pulse"></div>
                <p class="text-silver">
                  <span class="text-pearl font-medium">Available</span> for freelance projects and full-time opportunities
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Footer -->
      <footer class="mt-24 pt-8 border-t border-white/5">
        <div class="container mx-auto max-w-5xl text-center">
          <p class="text-ghost text-sm">
            &copy; {{ currentYear }} Akashkumar Yadav. Built with 
            <span class="text-neon-pink">♥</span> using Angular & Tailwind CSS
          </p>
        </div>
      </footer>
    </section>
  `,
  styles: []
})
export class ContactComponent {
  @ViewChild('contactForm') contactForm!: NgForm;

  emailAddress = 'akashkumar355231@gmail.com';
  phoneNumber = '+91-7970949652';
  currentYear = new Date().getFullYear();
  isSubmitting = false;

  // EmailJS configuration
  private serviceId = 'service_77ag49u';
  private templateId = 'template_j05n7ku';
  private publicKey = 'vtduBS7GkMwRZ43yJ';

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
      this.isSubmitting = true;
      
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
          this.isSubmitting = false;
        }, (error) => {
          console.log('FAILED...', error);
          alert('Failed to send message. Please try again.');
          this.isSubmitting = false;
        });
    }
  }
}

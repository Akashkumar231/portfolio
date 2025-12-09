import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { CertificationsComponent } from './components/certifications/certifications.component';
import { EducationComponent } from './components/education/education.component';
import { ContactComponent } from './components/contact/contact.component';

declare var AOS: any;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    ExperienceComponent,
    ProjectsComponent,
    CertificationsComponent,
    EducationComponent,
    ContactComponent
  ],
  template: `
    <app-header></app-header>
    <main class="bg-void">
      <app-hero></app-hero>
      <app-about></app-about>
      <app-skills></app-skills>
      <app-experience></app-experience>
      <app-projects></app-projects>
      <app-certifications></app-certifications>
      <app-education></app-education>
      <app-contact></app-contact>
    </main>
  `,
  styles: []
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'Akashkumar Yadav | Backend Engineer';

  ngOnInit(): void {
    if (typeof AOS !== 'undefined') {
      AOS.init({
        duration: 800,
        easing: 'ease-out-cubic',
        once: true,
        offset: 50,
        delay: 0
      });
    }
  }

  ngAfterViewInit(): void {
    if (typeof AOS !== 'undefined') {
      setTimeout(() => {
        AOS.refresh();
      }, 500);
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { ViewChildren, ElementRef } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  @ViewChildren('audio') audioElms!: ElementRef;
  src: string = '../../../assets/namePronunciation.mp3';
  isPaused = false;

  constructor() {}

  ngOnInit(): void {}

  experiences: Experience[] = [
    {
      title: 'AEM Developer',
      company: 'Infobase IT',
      location: 'Rio de Janeiro, Rio de Janeiro',
      startDate: new Date(2022, 10), // May 2022 (Note: Months are zero-indexed)
      endDate: null, // Ongoing
      companyLink: ''
    },
    {
      title: 'AEM Developer',
      company: 'Valtech_',
      location: 'Floripa, Santa Catarina',
      startDate: new Date(2022, 4), // May 2022 (Note: Months are zero-indexed)
      endDate: new Date(2023, 5 ), // Ongoing
      companyLink: ''
    },
    {
      title: 'Junior Backend Developer',
      company: 'Indra',
      location: 'Joao Pessoa, Paraiba',
      startDate: new Date(2021, 11), // December 2021
      endDate: new Date(2022, 4), // May 2022
      companyLink: ''
    },
    {
      title: 'FullStack Developer',
      company: 'Facilitat',
      location: 'Recife, Pernambuco',
      startDate: new Date(2021, 9), // October 2021
      endDate: new Date(2021, 11), // December 2021
      companyLink: ''
    },
  ];
  formatDate(date: Date): string {
    return date.toLocaleString('en-US', { month: 'long', year: 'numeric' });
  }

  onPlayClick(audio: HTMLAudioElement) {
    if (!this.isPaused) {
      audio.play();
      this.isPaused = true;
    } else {
      audio.pause();
      this.isPaused = false;
    }
  }

  onPause() {
    this.isPaused = false;
  }
  calculateExperienceLength(experience: any): number {
    const startDate = new Date(experience.startDate);
    const endDate = experience.endDate ? new Date(experience.endDate) : new Date();
    const diffInMonths = (endDate.getFullYear() - startDate.getFullYear()) * 12 +
      (endDate.getMonth() - startDate.getMonth());
    return diffInMonths;
  }
}




interface Experience {
  title: string;
  company: string;
  location: string;
  startDate: Date;
  endDate: Date | null;
  length?: string; // Length of experience
  companyLink: string;
}

import { Component, OnInit } from '@angular/core';
import { ViewChildren, ElementRef } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  @ViewChildren('audio') audioElms!: ElementRef;
  src: string = '../../../assets/namePronunciation.mp3';
  isPaused = false;

  constructor() { }

  ngOnInit(): void {
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

}

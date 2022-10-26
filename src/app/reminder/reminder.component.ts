import { Component, OnInit } from '@angular/core';
import { ViewChildren, ElementRef } from '@angular/core';

@Component({
  selector: 'app-reminder',
  templateUrl: './reminder.component.html',
  styleUrls: ['./reminder.component.css'],
})
export class ReminderComponent implements OnInit {
  @ViewChildren('audio') audioElms!: ElementRef;
  src: string = '../../../assets/astoryaboutime.mp3';
  isPaused = false;

  constructor() {}

  ngOnInit(): void {}

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

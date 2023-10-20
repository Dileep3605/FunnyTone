import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { Audio } from '../../interfaces/audio.interface';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dialer',
  standalone: true,
  imports: [CommonModule, MatButtonModule, RouterModule],
  templateUrl: './dialer.component.html',
  styleUrls: ['./dialer.component.scss'],
})
export class DialerComponent implements OnInit {
  @ViewChild('audioPlayer') audioPlayer!: ElementRef<HTMLAudioElement>;
  ngOnInit(): void {}
  audios: Audio[] = [
    {
      sound: 'assets/audio/Ab bol na Madrchodh.mp3',
      displayValue: 1,
    },
    {
      sound: 'assets/audio/akshay.mp3',
      displayValue: 2,
    },
    {
      sound: 'assets/audio/gormint-part-2.mp3',
      displayValue: 3,
    },
    {
      sound: 'assets/audio/Jaldi-Waha-Se-Hato-Funny.mp3',
      displayValue: 4,
    },
    {
      sound: 'assets/audio/shetty-song.mp3',
      displayValue: 5,
    },
    {
      sound: 'assets/audio/johny-lever.mp3',
      displayValue: 6,
    },
    {
      sound: 'assets/audio/Roadies Gaali - Funny.mp3',
      displayValue: 7,
    },
    {
      sound: 'assets/audio/maaro-mujhe-maaro.mp3',
      displayValue: 8,
    },
    {
      sound: 'assets/audio/Lappu Sa Sachin Hai - Notification.mp3',
      displayValue: 9,
    },

    {
      sound: 'assets/audio/bavashir.mp3',
      displayValue: '*',
    },
    {
      sound: 'assets/audio/abhi-tik-karke-deta-hu.mp3',
      displayValue: 0,
    },
    {
      sound: 'assets/audio/hindi kajal in hathon.mp3',
      displayValue: '#',
    },
  ];
  selectedValue!: Audio;

  playSound(audio: Audio): void {
    this.selectedValue = audio;
    setTimeout(() => {
      this.audioPlayer.nativeElement.pause();
      this.audioPlayer.nativeElement.src = this.selectedValue.sound;
      this.audioPlayer.nativeElement.play();
    }, 100);
  }

  stopAudio() {
    setTimeout(() => {
      this.audioPlayer.nativeElement.pause();
    }, 100);
  }
}

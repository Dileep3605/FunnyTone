import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { AUDIOS } from './data';
import { Audio } from '../../interfaces/audio.interface';
@Component({
  selector: 'app-story-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './story-slider.component.html',
  styleUrls: ['./story-slider.component.scss'],
})
export class StorySliderComponent implements OnInit, AfterViewInit {
  @ViewChild('audioPlayer') audioPlayer!: ElementRef<HTMLAudioElement>;

  slide!: HTMLElement;
  active = 0;
  items!: NodeListOf<HTMLElement>;
  thumb!: HTMLElement;
  thumbItems!: HTMLElement[];
  timeout: any;
  audios = AUDIOS;
  selectedValue!: Audio;
  audioDuration = 5000;

  constructor() {}

  ngAfterViewInit(): void {
    this.slide = document.querySelector('[data-slide="slide"]')!;
    this.items = this.slide.querySelectorAll('.slide-items > *');
    this.thumb = this.slide.querySelector('.slide-thumb')!;
    this.addThumbItems();
    this.activeSlide(0);
    this.addNavigation();
  }

  ngOnInit() {}

  activeSlide(index: number) {
    this.active = index;
    this.items.forEach((item) => {
      item.classList.remove('active');
    });
    this.items[index].classList.add('active');
    this.thumbItems.forEach((item) => {
      item.classList.remove('active');
    });
    this.thumbItems[index].classList.add('active');
    this.autoSlide();
  }

  prev() {
    if (this.active > 0) {
      this.activeSlide(this.active - 1);
    } else {
      this.activeSlide(this.items.length - 1);
    }
  }

  next() {
    if (this.active < this.items.length - 1) {
      this.activeSlide(this.active + 1);
    } else {
      this.activeSlide(0);
    }
  }

  addNavigation() {
    const nextBtn = this.slide.querySelector('.slide-next')!;
    const prevBtn = this.slide.querySelector('.slide-prev')!;
    nextBtn.addEventListener('click', () => this.next());
    prevBtn.addEventListener('click', () => this.prev());
  }

  addThumbItems() {
    this.items.forEach(() => {
      this.thumb.innerHTML += '<span></span>';
    });
    this.thumbItems = Array.from(this.thumb.children) as any;
  }

  autoSlide() {
    clearTimeout(this.timeout);
    const audio = new Audio(this.audios[this.active].sound);
    audio.addEventListener('loadedmetadata', () => {
      const duration = audio.duration; // The duration of the audio in seconds
      this.audioDuration = (duration + 2) * 1000;
    });
    this.timeout = setTimeout(() => {
      this.next();
      // this.audioPlayer.nativeElement.pause();
      this.playSound(this.audios[this.active]);
    }, this.audioDuration);
  }

  playSound(audio: Audio): void {
    this.selectedValue = audio;
    setTimeout(() => {
      this.audioPlayer.nativeElement.pause();
      this.audioPlayer.nativeElement.src = this.selectedValue.sound;
      this.audioPlayer?.nativeElement?.play();
    }, 100);
  }

  stopAudio() {
    setTimeout(() => {
      this.audioPlayer.nativeElement.pause();
    }, 100);
  }
}

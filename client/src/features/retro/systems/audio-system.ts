import { AudioRefs } from "../types";

export class AudioSystem {
  private audioRefs: AudioRefs = {};

  async initialize(musicSrc: string, bubbleSrc: string, deadSrc: string): Promise<void> {
    const music = new Audio(musicSrc);
    music.loop = true;
    music.volume = 0.3; // le volume est fort bordel

    const bubble = new Audio(bubbleSrc); // BLOUBLOU
    bubble.volume = 0.5;

    const dead = new Audio(deadSrc);
    dead.volume = 0.6;

    this.audioRefs = { music, bubble, dead };
  }

  playMusic(): void {
    if (this.audioRefs.music) {
      this.audioRefs.music.currentTime = 0;
      this.audioRefs.music.play().catch(() => {});
    }
  }

  pauseMusic(): void {
    if (this.audioRefs.music) {
      this.audioRefs.music.pause();
    }
  }

  playBubble(): void {
    if (this.audioRefs.bubble) {
      this.audioRefs.bubble.currentTime = 0;
      this.audioRefs.bubble.play().catch(() => {});
    }
  }

  playDead(): void {
    if (this.audioRefs.dead) {
      this.audioRefs.dead.currentTime = 0;
      this.audioRefs.dead.play().catch(() => {});
    }
  }

  getAudioRefs(): AudioRefs {
    return this.audioRefs;
  }
}

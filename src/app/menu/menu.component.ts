import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  isModalOpen: boolean = false;
  pressedKeys: string[] = [];

  constructor() {}


  ngOnInit(): void {
    const modalElement = document.getElementById('exampleModal');
    if (modalElement) {
      modalElement.addEventListener('shown.bs.modal', () => {
        this.isModalOpen = true;
      });

      modalElement.addEventListener('hidden.bs.modal', () => {
        this.isModalOpen = false;
        this.clearPressedKeys();
      });
    }
  }

  toggleModal() {
    const modalElement = document.getElementById('exampleModal');
    if (modalElement) {
      if (this.isModalOpen) {
        (window as any).$(modalElement).modal('hide');
      } else {
        (window as any).$(modalElement).modal('show');
      }
    }
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.ctrlKey && event.key === 'k') {
      event.preventDefault();
      const button = document.getElementById('b1') as HTMLButtonElement | null;
      if (button) {
        button.click();
      }
    }
    if (this.isModalOpen) {
      this.pressedKeys.push(event.key.toLowerCase());
      const keyRoutes: { [key: string]: string } = {
        gh: '/#/dev',
        ga: '/#/about',
        gp: '/#/projects',
        gu: '/#/setup',
        fi: 'https://www.instagram.com/marcustrummer/',
        fg: 'https://github.com/marcustrummer',
        fl: 'https://www.linkedin.com/in/marcus-trummer-880196145/',
        fy: 'https://www.youtube.com/channel/UCGqK0hD2FQKy-rTUKKTtvTA',
        ftw: 'https://www.twitter.com/trumminho',
        u: '',
        e: 'mailto: marcusstrummer1@hotmail.com',
      };

      const pressedCombination = this.pressedKeys.join('');
      if (keyRoutes.hasOwnProperty(pressedCombination)) {
        const route = keyRoutes[pressedCombination];
        if (route.startsWith('/#/')) {
          window.location.href = route;
        } else if (pressedCombination === 'u') {
          this.copyUrl();
        } else {
          window.open(route, '_blank');
        }
        this.toggleModal();
      } else {
        setTimeout(() => {
          this.clearPressedKeys();
        }, 2000);
      }
    }
  }

  copyUrl() {
    window.location.pathname;
    var dummy = document.createElement('input'),
      text = window.location.href;
    document.body.appendChild(dummy);
    dummy.value = text;
    dummy.select();
    document.execCommand('copy');
    document.body.removeChild(dummy);
  }

  clearPressedKeys() {
    this.pressedKeys = [];
  }
}

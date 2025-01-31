import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertService, AlertData } from '../services/alert.service';

@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="fixed top-4 right-4 z-50 flex flex-col gap-2 min-w-[320px] max-w-[420px]">
      @for (alert of alertService.getAlerts(); track alert.id) {
        <div 
          class="alert-container"
          [class]="getAlertClasses(alert)"
          (click)="alertService.dismiss(alert.id!)">
          <div class="flex items-center gap-3">
            @switch (alert.type) {
              @case ('success') {
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
              }
              @case ('error') {
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              }
              @case ('warning') {
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                </svg>
              }
              @case ('info') {
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              }
            }
            <div class="flex-1">
              <h3 class="font-medium">{{ alert.title }}</h3>
              <p class="text-sm opacity-90">{{ alert.message }}</p>
            </div>
          </div>
        </div>
      }
    </div>
  `,
  styles: [`
    .alert-container {
      @apply p-4 rounded-lg shadow-lg cursor-pointer transform transition-all duration-300 ease-out;
      animation: slideIn 0.2s ease-out;
    }

    .alert-container:hover {
      @apply translate-x-[-4px];
    }

    @keyframes slideIn {
      from {
        opacity: 0;
        transform: translateX(100%);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }

    .alert-success {
      @apply bg-green-500 text-white;
    }

    .alert-error {
      @apply bg-red-500 text-white;
    }

    .alert-warning {
      @apply bg-yellow-500 text-white;
    }

    .alert-info {
      @apply bg-blue-500 text-white;
    }
  `]
})
export class AlertComponent {
  constructor(public alertService: AlertService) {}

  getAlertClasses(alert: AlertData): string {
    return `alert-${alert.type}`;
  }
}
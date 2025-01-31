import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmationDialogService } from '../services/confirmation-dialog.service';

@Component({
  selector: 'app-confirmation-dialog',
  standalone: true,
  imports: [CommonModule],
  template: `
    @if (dialogService.dialog$ | async; as dialog) {
      <div class="dialog-backdrop" (click)="onBackdropClick($event)">
        <div class="dialog-content">
          <h2 class="text-xl font-bold mb-4">{{ dialog.title }}</h2>
          <p class="text-gray-600 mb-6">{{ dialog.message }}</p>
          <div class="flex justify-end space-x-4">
            <button 
              class="btn btn-secondary" 
              (click)="dialogService.cancel()">
              {{ dialog.cancelText }}
            </button>
            <button 
              class="btn btn-primary" 
              (click)="dialogService.confirm()">
              {{ dialog.confirmText }}
            </button>
          </div>
        </div>
      </div>
    }
  `
})
export class ConfirmationDialogComponent {
  constructor(public dialogService: ConfirmationDialogService) {}

  onBackdropClick(event: MouseEvent) {
    if ((event.target as HTMLElement).classList.contains('dialog-backdrop')) {
      this.dialogService.cancel();
    }
  }
}
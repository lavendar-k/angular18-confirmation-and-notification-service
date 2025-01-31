import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { ConfirmationDialogComponent } from './app/components/confirmation-dialog.component';
import { ConfirmationDialogService } from './app/services/confirmation-dialog.service';
import { AlertComponent } from './app/components/alert.component';
import { AlertService } from './app/services/alert.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ConfirmationDialogComponent, AlertComponent],
  template: `
    <div class="min-h-screen bg-gray-100 p-8">
      <h1 class="text-3xl font-bold mb-8">Dialog & Alert Demo</h1>
      
      <div class="space-y-4">
        <div>
          <h2 class="text-xl font-semibold mb-4">Confirmation Dialog</h2>
          <button 
            class="btn btn-primary"
            (click)="showConfirmation()">
            Show Confirmation Dialog
          </button>
        </div>

        <div class="space-y-2">
          <h2 class="text-xl font-semibold mb-4">Alerts</h2>
          <div class="flex flex-wrap gap-2">
            <button 
              class="btn bg-green-500 hover:bg-green-600 text-white"
              (click)="showSuccessAlert()">
              Success Alert
            </button>
            <button 
              class="btn bg-red-500 hover:bg-red-600 text-white"
              (click)="showErrorAlert()">
              Error Alert
            </button>
            <button 
              class="btn bg-yellow-500 hover:bg-yellow-600 text-white"
              (click)="showWarningAlert()">
              Warning Alert
            </button>
            <button 
              class="btn bg-blue-500 hover:bg-blue-600 text-white"
              (click)="showInfoAlert()">
              Info Alert
            </button>
          </div>
        </div>
      </div>

      <app-confirmation-dialog />
      <app-alert />
    </div>
  `
})
export class App {
  constructor(
    private dialogService: ConfirmationDialogService,
    private alertService: AlertService
  ) {}

  async showConfirmation() {
    const result = await this.dialogService.show({
      title: 'Confirm Action',
      message: 'Are you sure you want to perform this action?',
      confirmText: 'Yes, Continue',
      cancelText: 'No, Cancel'
    });

    if (result) {
      this.alertService.success('Success', 'Action confirmed successfully!');
    } else {
      this.alertService.info('Cancelled', 'Action was cancelled');
    }
  }

  showSuccessAlert() {
    this.alertService.success(
      'Success!',
      'Operation completed successfully.'
    );
  }

  showErrorAlert() {
    this.alertService.error(
      'Error!',
      'Something went wrong. Please try again.'
    );
  }

  showWarningAlert() {
    this.alertService.warning(
      'Warning!',
      'Please review your input before continuing.'
    );
  }

  showInfoAlert() {
    this.alertService.info(
      'Info',
      'Your session will expire in 5 minutes.'
    );
  }
}

bootstrapApplication(App, {
  providers: [ConfirmationDialogService, AlertService]
});
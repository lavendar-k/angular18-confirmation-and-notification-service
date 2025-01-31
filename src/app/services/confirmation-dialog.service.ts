import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export interface ConfirmationDialogData {
  title: string;
  message: string;
  confirmText?: string;
  cancelText?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ConfirmationDialogService {
  private dialogSubject = new Subject<ConfirmationDialogData | null>();
  private confirmSubject = new Subject<boolean>();

  dialog$ = this.dialogSubject.asObservable();
  confirm$ = this.confirmSubject.asObservable();

  show(data: ConfirmationDialogData): Promise<boolean> {
    this.dialogSubject.next({
      confirmText: 'Confirm',
      cancelText: 'Cancel',
      ...data
    });

    return new Promise((resolve) => {
      const subscription = this.confirm$.subscribe((result) => {
        resolve(result);
        subscription.unsubscribe();
      });
    });
  }

  confirm() {
    this.confirmSubject.next(true);
    this.dialogSubject.next(null);
  }

  cancel() {
    this.confirmSubject.next(false);
    this.dialogSubject.next(null);
  }
}
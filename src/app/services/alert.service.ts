import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export type AlertType = 'success' | 'error' | 'warning' | 'info';

export interface AlertData {
  type: AlertType;
  title: string;
  message: string;
  duration?: number;
  id?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  private alertSubject = new Subject<AlertData | null>();
  private alerts: AlertData[] = [];
  private counter = 0;

  alerts$ = this.alertSubject.asObservable();

  show(data: Omit<AlertData, 'id'>) {
    const id = `alert-${this.counter++}`;
    const alert: AlertData = {
      ...data,
      id,
      duration: data.duration || 4000
    };

    this.alerts.push(alert);
    this.alertSubject.next(alert);

    setTimeout(() => {
      this.dismiss(id);
    }, alert.duration);
  }

  success(title: string, message: string, duration?: number) {
    this.show({ type: 'success', title, message, duration });
  }

  error(title: string, message: string, duration?: number) {
    this.show({ type: 'error', title, message, duration });
  }

  warning(title: string, message: string, duration?: number) {
    this.show({ type: 'warning', title, message, duration });
  }

  info(title: string, message: string, duration?: number) {
    this.show({ type: 'info', title, message, duration });
  }

  dismiss(id: string) {
    const index = this.alerts.findIndex(alert => alert.id === id);
    if (index > -1) {
      this.alerts.splice(index, 1);
      this.alertSubject.next(null);
    }
  }

  getAlerts() {
    return this.alerts;
  }
}
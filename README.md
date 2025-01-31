# Angular Dialog & Alert System

A modern, responsive dialog and alert notification system built with Angular 17 and Tailwind CSS. This project provides reusable components for confirmation dialogs and toast-style notifications.

## Screenshots

![image](https://github.com/user-attachments/assets/96a980e2-359c-4a29-9a75-46cd000e7b25)

![image](https://github.com/user-attachments/assets/8d9cb9f5-9e86-4a5a-91cb-72f60fe2759b)


## Features

### Confirmation Dialog

- Modern, centered modal design
- Customizable title, message, and button text
- Promise-based API for handling user responses
- Backdrop click handling
- Smooth animations
- Fully responsive

### Alert Notifications

- Four notification types:
  - Success (green)
  - Error (red)
  - Warning (yellow)
  - Info (blue)
- Auto-dismissal after 4 seconds (customizable)
- Click to dismiss
- Slide-in animation
- Hover effect with subtle transform
- Stacked notifications
- Icons for each alert type
- Responsive design

## Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run start
```

## Usage

### Confirmation Dialog

Import and inject the `ConfirmationDialogService`:

```typescript
import { ConfirmationDialogService } from './services/confirmation-dialog.service';

constructor(private dialogService: ConfirmationDialogService) {}
```

Show a confirmation dialog:

```typescript
async showConfirmation() {
  const result = await this.dialogService.show({
    title: 'Confirm Action',
    message: 'Are you sure you want to perform this action?',
    confirmText: 'Yes, Continue',
    cancelText: 'No, Cancel'
  });

  if (result) {
    // User confirmed
  } else {
    // User cancelled
  }
}
```

### Alert Notifications

Import and inject the `AlertService`:

```typescript
import { AlertService } from './services/alert.service';

constructor(private alertService: AlertService) {}
```

Show different types of alerts:

```typescript
// Success notification
alertService.success("Success!", "Operation completed successfully.");

// Error notification
alertService.error("Error!", "Something went wrong. Please try again.");

// Warning notification
alertService.warning("Warning!", "Please review your input before continuing.");

// Info notification
alertService.info("Info", "Your session will expire in 5 minutes.");
```

Customize alert duration:

```typescript
// Show alert for 6 seconds (6000ms)
alertService.success("Success!", "Operation completed successfully.", 6000);
```

## Components

### ConfirmationDialogComponent

Add to your template:

```html
<app-confirmation-dialog />
```

### AlertComponent

Add to your template:

```html
<app-alert />
```

## Styling

The project uses Tailwind CSS for styling. The components are fully customizable through:

- Tailwind classes in the component templates
- CSS custom properties
- Component-specific styles

## Technical Details

- Built with Angular 17
- Uses Angular's new control flow syntax (@if, @for)
- Standalone components
- Reactive state management with RxJS
- TypeScript for type safety
- Tailwind CSS for styling
- Modern ES6+ JavaScript features

## Browser Support

Supports all modern browsers:

- Chrome
- Firefox
- Safari
- Edge

## License

MIT License

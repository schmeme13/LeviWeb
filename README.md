# Physical Therapy Practice Website

A modern, responsive website for a physical therapy practice built with React, TypeScript, and Tailwind CSS.

## Features

- Homepage with practice introduction and call-to-action
- About page with therapist credentials and philosophy
- Services page with treatment options and pricing
- Online booking system with calendar integration
- Contact page with form and location map
- Responsive design for all devices
- Modern UI with smooth animations

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd <project-directory>
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Building for Production

To create a production build:

```bash
npm run build
```

The build files will be created in the `dist` directory.

## Project Structure

```
src/
  ├── components/     # Reusable UI components
  ├── pages/         # Page components
  ├── assets/        # Images, fonts, and other static files
  ├── utils/         # Utility functions and helpers
  ├── App.tsx        # Main application component
  ├── main.tsx       # Application entry point
  └── index.css      # Global styles and Tailwind imports
```

## Customization

### Styling

The project uses Tailwind CSS for styling. You can customize the theme in `tailwind.config.js`.

### Content

Update the content in the respective page components:
- `src/pages/Home.tsx`
- `src/pages/About.tsx`
- `src/pages/Services.tsx`
- `src/pages/Contact.tsx`

### Booking System

The booking system is currently using mock data. To integrate with a real booking system:

1. Update the time slots in `src/pages/Booking.tsx`
2. Implement the form submission logic
3. Add your calendar integration (e.g., Google Calendar)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- React
- TypeScript
- Tailwind CSS
- React Router
- React Calendar

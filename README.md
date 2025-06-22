# VAMSI ENT Hospital Website

A professional, modern website for VAMSI ENT Hospital built with React and Tailwind CSS. This single-page application provides comprehensive information about the hospital, its services, doctors, and includes a secure admin panel for staff management.

## Features

### Public Website
- **Professional Design**: Clean, modern interface with healthcare-appropriate color scheme
- **Responsive Layout**: Fully responsive design that works on all devices
- **Hospital Information**: Comprehensive details about services, doctors, and facilities
- **Doctor Profiles**: Detailed profiles with specializations, experience, and contact information
- **Patient Testimonials**: Fake reviews to build trust and credibility
- **Contact Form**: Interactive contact form for patient inquiries
- **Smooth Navigation**: Smooth scrolling between sections

### Admin Panel
- **Secure Login**: Protected admin access with username/password authentication
- **Dashboard Overview**: Key metrics and statistics
- **Patient Management**: View, search, and manage patient records
- **Appointment Management**: Schedule and track appointments
- **Medical Records**: Manage patient medical history
- **System Settings**: Hospital configuration options

## Technology Stack

- **Frontend**: React 18
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **Build Tool**: Create React App

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd vamsi-ent-hospital
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the website.

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## Project Structure

```
src/
├── components/          # React components
│   ├── Navbar.js       # Navigation bar
│   ├── Hero.js         # Hero section
│   ├── Services.js     # Services showcase
│   ├── Doctors.js      # Doctor profiles
│   ├── About.js        # About section
│   ├── Testimonials.js # Patient reviews
│   ├── Contact.js      # Contact form
│   ├── Footer.js       # Footer
│   ├── AdminLogin.js   # Admin login
│   └── AdminDashboard.js # Admin panel
├── App.js              # Main app component
├── index.js            # App entry point
└── index.css           # Global styles
```

## Admin Access

### Demo Credentials
- **Username**: `admin`
- **Password**: `admin123`

### Access Admin Panel
Navigate to `/admin` in your browser to access the admin login page.

## Customization

### Colors
The color scheme can be customized in `tailwind.config.js`:
- Primary colors: Blue shades for main branding
- Secondary colors: Gray shades for text and backgrounds
- Accent colors: Green shades for success states

### Content
- **Doctor Information**: Update doctor profiles in `src/components/Doctors.js`
- **Services**: Modify services in `src/components/Services.js`
- **Testimonials**: Edit patient reviews in `src/components/Testimonials.js`
- **Contact Information**: Update contact details in multiple components

### Hospital Information
- **Name**: Currently set to "VAMSI ENT Hospital"
- **Location**: Hyderabad, Telangana
- **Phone**: +91 98765 43210
- **Email**: info@vamsient.com

## Features to Implement

### Future Enhancements
- **Real Authentication**: Replace demo login with proper authentication system
- **Database Integration**: Connect to a backend database for real data
- **Appointment Booking**: Implement actual appointment scheduling
- **Payment Integration**: Add payment processing for consultations
- **Email Notifications**: Send confirmation emails for appointments
- **Image Upload**: Allow admin to upload doctor photos and hospital images
- **Multi-language Support**: Add support for multiple languages
- **SEO Optimization**: Improve search engine optimization

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is created for VAMSI ENT Hospital. All rights reserved.

## Support

For support or questions, please contact the development team or the hospital administration.

---

**Note**: This is a demo website with fake data. For production use, replace all placeholder content with real hospital information and implement proper security measures. 
 
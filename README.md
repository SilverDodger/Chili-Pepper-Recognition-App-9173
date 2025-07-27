# 🌶️ Pepper Vision - AI Chili Pepper Identifier

A sophisticated React application that uses computer vision to identify chili pepper varieties from uploaded photos, powered exclusively by PepperScale.com.

## Features

- **Real Image Analysis**: Extracts color, shape, and size features from uploaded images
- **PepperScale.com Integration**: Comprehensive pepper information and images sourced from PepperScale.com
- **Confidence Scoring**: AI-powered similarity matching with confidence percentages
- **Responsive Design**: Beautiful, mobile-friendly interface built with Tailwind CSS

## Setup Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Application
```bash
npm run dev
```

## How It Works

1. **Image Upload**: Users drag & drop or select pepper images
2. **Feature Extraction**: Canvas API analyzes colors, shapes, and dimensions  
3. **Database Matching**: Compares features against PepperScale's comprehensive hot pepper database
4. **Results Display**: Shows top 3 matches with confidence scores and detailed info

## Technologies Used

- **React 18** with React Router for navigation
- **Tailwind CSS** for responsive styling
- **Canvas API** for image feature extraction
- **PepperScale.com** for all pepper information and images

## Pepper Database

Includes comprehensive data for all varieties featured on PepperScale.com's hot pepper list:
- Bell Pepper, Banana Pepper, Pepperoncini, Cubanelle, Anaheim
- Poblano, Coronado, Jalapeño, Chipotle, Fresno
- Hungarian Wax, Serrano, Peter Pepper, Manzano, Cayenne
- Tabasco, Chiltepin, Thai Chili, Malagueta, Piri Piri
- Scotch Bonnet, Habanero, Red Savina, Chocolate Habanero
- Fatalii, Devil's Tongue, Ghost Pepper, Naga Viper
- Trinidad Scorpion, 7 Pot Douglah, Trinidad Moruga Scorpion
- Carolina Reaper, Dragon's Breath, Pepper X
- Aji Amarillo, Cascabel, Guajillo
- Heat levels (Scoville units), origins, uses, descriptions

## Privacy & Security

- Images processed locally in browser
- No server-side image storage
- Automatic cleanup of temporary image URLs

## Contributing

1. Fork the repository
2. Create a feature branch
3. Add new pepper varieties to `src/services/pepperIdentification.js`
4. Submit a pull request

## License

MIT License - Feel free to use for personal or commercial projects.

---

**Powered by [PepperScale.com](https://pepperscale.com/hot-pepper-list/)**
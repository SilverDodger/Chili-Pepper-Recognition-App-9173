# 🌶️ Pepper Vision - AI Chili Pepper Identifier

A sophisticated React application that uses computer vision and Google's Custom Search API to identify chili pepper varieties from uploaded photos.

## Features

- **Real Image Analysis**: Extracts color, shape, and size features from uploaded images
- **Google Images Integration**: Searches for similar pepper images using Google Custom Search API
- **PepperScale.com Database**: Comprehensive pepper information sourced from PepperScale.com
- **Confidence Scoring**: AI-powered similarity matching with confidence percentages
- **Responsive Design**: Beautiful, mobile-friendly interface built with Tailwind CSS

## Setup Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Google Custom Search API

1. **Get a Google API Key**:
   - Go to [Google Cloud Console](https://console.cloud.google.com/)
   - Create a new project or select existing
   - Enable the "Custom Search API"
   - Create credentials (API Key)

2. **Create a Custom Search Engine**:
   - Go to [Google Custom Search](https://cse.google.com/cse/)
   - Create a new search engine
   - Add sites to search (or use `*` for entire web)
   - Enable "Image Search" in setup
   - Note your Search Engine ID

3. **Set Environment Variables**:
   ```bash
   cp .env.example .env
   ```
   Edit `.env` and add your credentials:
   ```
   VITE_GOOGLE_API_KEY=your_actual_api_key
   VITE_SEARCH_ENGINE_ID=your_search_engine_id
   ```

### 3. Run the Application
```bash
npm run dev
```

## How It Works

1. **Image Upload**: Users drag & drop or select pepper images
2. **Feature Extraction**: Canvas API analyzes colors, shapes, and dimensions  
3. **Database Matching**: Compares features against comprehensive pepper database
4. **Google Search**: Finds similar images using Custom Search API
5. **Results Display**: Shows top 3 matches with confidence scores and detailed info

## Technologies Used

- **React 18** with React Router for navigation
- **Tailwind CSS** for responsive styling
- **Google Custom Search API** for image matching
- **Canvas API** for image feature extraction
- **PepperScale.com** database for pepper information

## Pepper Database

Includes comprehensive data for popular varieties:
- Jalapeño, Serrano, Fresno, Habanero
- Cayenne, Thai Chili, Poblano, Chipotle
- Heat levels (Scoville units), origins, uses, descriptions

## Fallback Mode

If Google API is unavailable, the app uses:
- Local feature analysis
- Color-based matching
- Placeholder images
- Estimated confidence scores

## Privacy & Security

- Images processed locally in browser
- No server-side image storage
- Automatic cleanup of temporary image URLs
- Secure API key handling through environment variables

## Contributing

1. Fork the repository
2. Create a feature branch
3. Add new pepper varieties to `src/services/pepperIdentification.js`
4. Submit a pull request

## License

MIT License - Feel free to use for personal or commercial projects.

---

**Powered by PepperScale.com and Google Images**
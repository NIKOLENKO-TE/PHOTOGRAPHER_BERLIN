//index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import i18n from 'i18next'; // Import i18n from i18next library
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector) // add browser language detection
  .init({
    lng: localStorage.getItem('selectedLanguage') || 'ua', // set initial language
    resources: {
      en: require('./locales/en.json'), // Use require to import JSON files
      de: require('./locales/de.json'),
      ua: require('./locales/ua.json'),
    },
    fallbackLng: 'ua', // set fallback language in case a translation is missing
    detection: {
      order: ['localStorage', 'navigator'], // order in which to detect language
    },
    interpolation: {
      escapeValue: false, // not needed for React as it escapes by default
    },
  });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
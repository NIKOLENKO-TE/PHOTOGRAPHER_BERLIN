//i18n.ts
import * as i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { isDevelopmentMode } from './utils';
/**
 * Использует i18next-browser-languagedetector для обнаружения языка пользователя.
 * @see {@link https://github.com/i18next/i18next-browser-languageDetector}
 *
 */
import deTranslations from './locales/de.json';
import uaTranslations from './locales/ua.json';
import enTranslations from './locales/en.json';


i18n

	.use(LanguageDetector)
	/**
	 * Передает экземпляр i18n в react-i18next для интеграции с React.
	 * @see {@link https://react.i18next.com/}
	 */
	.use(initReactI18next)
	/**
	 * Инициализирует экземпляр i18next с предоставленными параметрами конфигурации.
	 * @param {Object} options - Параметры конфигурации для i18next.
	 * @param {boolean} options.debug - Включает режим отладки, если включен режим разработки.
	 * @param {string} options.fallbackLng - Язык по умолчанию, если язык пользователя недоступен.
	 * @param {Object} options.interpolation - Параметры интерполяции для i18next.
	 * @param {boolean} options.interpolation.escapeValue - Отключает экранирование для React, так как оно выполняется по умолчанию.
	 * @param {string} options.defaultNS - Пространство имен по умолчанию для переводов.
	 * @param {Object} options.resources - Ресурсы перевода для различных языков.
	 * @param {Object} options.resources.en - Ресурсы перевода для английского языка.
	 * @param {Object} options.resources.ua - Ресурсы перевода для украинского языка.
	 * @param {Object} options.resources.de - Ресурсы перевода для немецкого языка.
	 */
	.init({
		debug: isDevelopmentMode(),
		fallbackLng: 'ua',
		interpolation: {
			escapeValue: false, // не нужно для react, так как экранирование выполняется по умолчанию
		},
		defaultNS: '',
		resources: {
			en: enTranslations, // Использовать переводы для английского языка
			ua: uaTranslations, // Использовать переводы для украинского языка
			de: deTranslations, // Использовать переводы для немецкого языка
		},
	});
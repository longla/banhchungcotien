"use client";

import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex justify-center sm:absolute sm:top-4 sm:right-4 sm:justify-end z-50 language-fade my-2">
      <button
        onClick={() => setLanguage(language === 'vi' ? 'en' : 'vi')}
        className="px-3 py-1.5 bg-white/90 hover:bg-white shadow-md rounded-full text-sm font-medium transition-all hover:scale-105 active:scale-95 flex items-center"
      >
        <span className="mr-1">{language === 'vi' ? '🇺🇸' : '🇻🇳'}</span>
        {language === 'vi' ? 'English' : 'Tiếng Việt'}
      </button>
    </div>
  );
};

export default LanguageSwitcher;
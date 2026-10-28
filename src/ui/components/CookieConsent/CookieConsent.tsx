import { useState } from 'react';
import { useCookieConsent } from './CookieContext';
import type { OptionalCategory } from './types';
import './CookieConsent.css';

interface CategoryMeta {
  key: OptionalCategory;
  title: string;
  description: string;
}

const OPTIONAL_CATEGORIES: CategoryMeta[] = [
  {
    key: 'analytics',
    title: 'Аналитические',
    description: 'Помогают понять, как вы используете сайт (Google Analytics и др.).',
  },
//   {
//     key: 'marketing',
//     title: 'Маркетинговые',
//     description: 'Используются для показа релевантной рекламы.',
//   },
  {
    key: 'preferences',
    title: 'Функциональные',
    description: 'Запоминают ваши предпочтения (язык, тема и т.д.).',
  },
];

const EMPTY_CUSTOM: Record<OptionalCategory, boolean> = {
  analytics: false,
  marketing: false,
  preferences: false,
};

export default function CookieConsent() {
  const { consent, isLoaded, acceptAll, rejectAll, saveCustom } = useCookieConsent();
  const [showSettings, setShowSettings] = useState(false);
  const [custom, setCustom] = useState<Record<OptionalCategory, boolean>>(EMPTY_CUSTOM);

  if (!isLoaded || consent !== null) return null;

  const toggle = (key: OptionalCategory, value: boolean) => {
    setCustom((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div
      className="cookie-overlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cookie-title"
    >
      <div className="cookie-banner">
        {!showSettings ? (
          <>
            <h2 id="cookie-title" className="cookie-title">
              Мы используем файлы cookie
            </h2>
            <p className="cookie-text">
              Мы используем cookie, чтобы сайт работал стабильно и для аналитики. Вы можете принять все,
              отклонить все или настроить параметры.{' '}
              <a href="/cookie-policy" className="cookie-link">
                Политика cookie
              </a>
            </p>
            <div className="cookie-actions">
              <button className="cookie-btn cookie-btn--primary" onClick={acceptAll}>
                Принять все
              </button>
              <button className="cookie-btn cookie-btn--primary" onClick={rejectAll}>
                Отклонить все
              </button>
              <button
                className="cookie-btn cookie-btn--secondary"
                onClick={() => setShowSettings(true)}
              >
                Настроить
              </button>
            </div>
          </>
        ) : (
          <>
            <h2 id="cookie-title" className="cookie-title">
              Настройки cookie
            </h2>

            <div className="cookie-category">
              <label className="cookie-category__label">
                <input type="checkbox" checked disabled />
                <div>
                  <strong>Технически необходимые</strong>
                  <p>Без них сайт не работает. Отключить нельзя.</p>
                </div>
              </label>
            </div>

            {OPTIONAL_CATEGORIES.map(({ key, title, description }) => (
              <div className="cookie-category" key={key}>
                <label className="cookie-category__label">
                  <input
                    type="checkbox"
                    checked={custom[key]}
                    onChange={(e) => toggle(key, e.target.checked)}
                  />
                  <div>
                    <strong>{title}</strong>
                    <p>{description}</p>
                  </div>
                </label>
              </div>
            ))}

            <div className="cookie-actions">
              <button
                className="cookie-btn cookie-btn--primary"
                onClick={() => saveCustom(custom)}
              >
                Сохранить выбор
              </button>
              <button className="cookie-btn cookie-btn--primary" onClick={acceptAll}>
                Принять все
              </button>
              <button
                className="cookie-btn cookie-btn--secondary"
                onClick={() => setShowSettings(false)}
              >
                Назад
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
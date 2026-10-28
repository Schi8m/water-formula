import { useEffect } from 'react';
import { useCookieConsent } from './CookieContext';
import type { OptionalCategory } from './types';

/**
 * Загружает внешний скрипт только после получения согласия по нужной категории.
 * @param src — URL скрипта
 * @param category — категория согласия
 * @param options — доп. атрибуты (id, nonce и т.д.)
 */
export function useConsentScript(
  src: string,
  category: OptionalCategory,
  options?: { id?: string; nonce?: string }
): void {
  const { consent } = useCookieConsent();

  useEffect(() => {
    if (!consent?.[category]) return;

    const selector = options?.id
      ? `script[data-consent-id="${options.id}"]`
      : `script[src="${src}"]`;

    if (document.querySelector(selector)) return;

    const script = document.createElement('script');
    script.src = src;
    script.async = true;
    if (options?.id) script.dataset.consentId = options.id;
    if (options?.nonce) script.nonce = options.nonce;

    document.head.appendChild(script);
  }, [consent, src, category, options?.id, options?.nonce]);
}
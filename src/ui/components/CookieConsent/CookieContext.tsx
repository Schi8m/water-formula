import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import {
  ALL_ACCEPTED,
  ALL_REJECTED,
  CONSENT_VERSION,
  type Consent,
  type OptionalCategory,
  type StoredConsent,
} from './types';

const STORAGE_KEY = 'cookie-consent';

interface CookieContextValue {
  consent: Consent | null;
  isLoaded: boolean;
  hasDecision: boolean;
  acceptAll: () => void;
  rejectAll: () => void;
  saveConsent: (consent: Consent) => void;
  saveCustom: (custom: Record<OptionalCategory, boolean>) => void;
  resetConsent: () => void;
}

const CookieContext = createContext<CookieContextValue | null>(null);

interface CookieProviderProps {
  children: ReactNode;
}

export function CookieProvider({ children }: CookieProviderProps) {
  const [consent, setConsent] = useState<Consent | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as StoredConsent;
        if (parsed.version === CONSENT_VERSION && parsed.consent) {
          setConsent(parsed.consent);
        }
      }
    } catch (e) {
      console.warn('Не удалось прочитать cookie-согласие', e);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  const saveConsent = useCallback((newConsent: Consent) => {
    setConsent(newConsent);
    try {
      const payload: StoredConsent = {
        consent: newConsent,
        version: CONSENT_VERSION,
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
    } catch (e) {
      console.warn('Не удалось сохранить cookie-согласие', e);
    }
  }, []);

  const acceptAll = useCallback(() => saveConsent(ALL_ACCEPTED), [saveConsent]);

  const rejectAll = useCallback(() => saveConsent(ALL_REJECTED), [saveConsent]);

  const saveCustom = useCallback(
    (custom: Record<OptionalCategory, boolean>) => {
      saveConsent({
        necessary: true,
        analytics: custom.analytics,
        marketing: custom.marketing,
        preferences: custom.preferences,
      });
    },
    [saveConsent]
  );

  const resetConsent = useCallback(() => {
    localStorage.removeItem(STORAGE_KEY);
    setConsent(null);
  }, []);

  const value = useMemo<CookieContextValue>(
    () => ({
      consent,
      isLoaded,
      hasDecision: consent !== null,
      acceptAll,
      rejectAll,
      saveConsent,
      saveCustom,
      resetConsent,
    }),
    [consent, isLoaded, acceptAll, rejectAll, saveConsent, saveCustom, resetConsent]
  );

  return <CookieContext.Provider value={value}>{children}</CookieContext.Provider>;
}

export function useCookieConsent(): CookieContextValue {
  const ctx = useContext(CookieContext);
  if (!ctx) {
    throw new Error('useCookieConsent must be used within CookieProvider');
  }
  return ctx;
}
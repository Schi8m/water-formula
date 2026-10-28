export type ConsentCategory = 'necessary' | 'analytics' | 'marketing' | 'preferences';

export type Consent = Record<ConsentCategory, boolean>;

export type OptionalCategory = Exclude<ConsentCategory, 'necessary'>;

export interface StoredConsent {
  consent: Consent;
  version: string;
}

export const CONSENT_VERSION = '1'; // Меняйте при изменении политики

export const DEFAULT_CONSENT: Consent = {
  necessary: true,
  analytics: false,
  marketing: false,
  preferences: false,
};

export const ALL_ACCEPTED: Consent = {
  necessary: true,
  analytics: true,
  marketing: true,
  preferences: true,
};

export const ALL_REJECTED: Consent = {
  necessary: true,
  analytics: false,
  marketing: false,
  preferences: false,
};
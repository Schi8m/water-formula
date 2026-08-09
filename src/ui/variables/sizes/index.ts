const INDENTS = {
    SMALL: 4,
    MEDIUM: 8,
    MEDIUM_LARGE: 12,
    LARGE: 16,
    EXTRA_LARGE: 32,
    DESKTOP_PADDINGS: 64
} as const;

const SIZES = {
    SMALL: 8,
    MEDIUM: 16,
    LARGE: 32,
    EXTRA_LARGE: 48,
    X_LARGE: 56,
    XX_LARGE: 64,
} as const;

const FONTS = {
    EXTRA_SMALL: 12,
    SMALL: 14,
    USUAL: 16,
    LARGE: 20,
    EXTRA_LARGE: 24,
    TITLE: 64
} as const;

export default {
    INDENTS,
    SIZES,
    FONTS
}
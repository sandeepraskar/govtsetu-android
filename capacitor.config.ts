import type { CapacitorConfig } from '@capacitor/cli';

// ─────────────────────────────────────────────────────────────────────────
// GovtSetu Android wrapper
//
// This app does NOT bundle a local copy of the website. Instead, the
// WebView is pointed straight at the live site (server.url below), the
// same way a browser would load it. That means:
//   - Every student always sees the exact same site you maintain on the
//     server — no separate "app version" of the content to keep in sync,
//     and no need to publish a new APK every time you change the website.
//   - All existing API calls (api/auth, api/practice, etc.) are same-origin
//     from the WebView's point of view, so none of your CORS/auth code
//     needs to change.
//   - The app needs an internet connection to do anything useful, same as
//     the website today — www/index.html (bundled locally) is only a
//     "couldn't connect, try again" fallback screen shown if the site is
//     briefly unreachable.
//
// If you ever rename the domain or move off deltacoresystems.in, update
// the two URLs below (server.url and the matching entry in
// allowNavigation) and rebuild.
// ─────────────────────────────────────────────────────────────────────────

const LIVE_SITE = 'https://deltacoresystems.in/govtexam/';

const config: CapacitorConfig = {
  appId: 'in.deltacoresystems.govtsetu',
  appName: 'GovtSetu',
  webDir: 'www',
  server: {
    url: LIVE_SITE,
    androidScheme: 'https',
    // Any link the app navigates to that stays on your own domain loads
    // inside the app's WebView; anything else (e.g. a payment-proof
    // screenshot link, a "share on WhatsApp" link) is handed off to the
    // phone's normal browser/app instead, which is the behavior students
    // expect.
    allowNavigation: ['deltacoresystems.in', '*.deltacoresystems.in'],
  },
  android: {
    allowMixedContent: false,
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 1200,
      backgroundColor: '#0f172a',
      androidSplashResourceName: 'splash',
      showSpinner: false,
    },
    PushNotifications: {
      presentationOptions: ['badge', 'sound', 'alert'],
    },
  },
};

export default config;

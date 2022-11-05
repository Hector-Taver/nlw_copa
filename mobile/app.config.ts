import 'dotenv/config';

export interface AppConfig {
  API_TOKEN: string,
}

export default {
  name: 'nlwcopa',
  slug: "nlwcopa",
  scheme: "nlwcopa",
  version: '1.0.0',
  orientation: "portrait",
  icon: "./assets/icon.png",
  userInterfaceStyle: "light",
  splash: {
    "image": "./assets/splash.png",
    "resizeMode": "cover",
    "backgroundColor": "#000000"
  },
  updates: {
    "fallbackToCacheTimeout": 0
  },
  assetBundlePatterns: [
    "**/*"
  ],
  ios: {
    "supportsTablet": true
  },
  android: {
    "adaptiveIcon": {
      "foregroundImage": "./assets/adaptive-icon.png",
      "backgroundColor": "#FFFFFF"
    }
  },
  web: {
    "favicon": "./assets/favicon.png"
  },
  extra: {
    API_TOKEN: process.env.API_TOKEN,
  },
};

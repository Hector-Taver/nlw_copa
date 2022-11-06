import Constants from 'expo-constants';
import { AppConfig } from './app.config';

export const { GOOGLE_OAUTH_CLIENT_ID } = Constants.manifest?.extra as AppConfig;

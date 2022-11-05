import Constants from 'expo-constants';
import { AppConfig } from './app.config';

export const { API_TOKEN } = Constants.manifest?.extra as AppConfig;

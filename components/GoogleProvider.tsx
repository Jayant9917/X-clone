"use client";

import { GoogleOAuthProvider } from '@react-oauth/google';

interface GoogleProviderProps {
  children: React.ReactNode;
}

export default function GoogleProvider({ children }: GoogleProviderProps) {
  return (
    <GoogleOAuthProvider clientId="854793475944-7vp7nk9gm13ubmcrlcrp07ggn0gglo84.apps.googleusercontent.com">
      {children}
    </GoogleOAuthProvider>
  );
}


'use client'
// components/CanvasContext.tsx
import React, { createContext, useContext, ReactNode } from 'react';

// Define the type for the context value
interface CanvasContextValue {
  children: ReactNode;
}

const CanvasContext = createContext<CanvasContextValue | undefined>(undefined);

export function useCanvas(): CanvasContextValue {
  const context = useContext(CanvasContext);
  if (context === undefined) {
    throw new Error('useCanvas must be used within a CanvasProvider');
  }
  return context;
}

interface CanvasProviderProps {
  children: ReactNode;
}

export function CanvasProvider({ children }: CanvasProviderProps): JSX.Element {
  return (
    <CanvasContext.Provider value={{ children }}>{children}</CanvasContext.Provider>
  );
}

'use client';

import React from 'react';
import { links } from '@/lib/data';

export type SectionName = (typeof links)[number]['name'];

type ActiveSectionContextProviderProps = {
   children: React.ReactNode;
};

type ActiveSectionContextType = {
   activeSection: SectionName;
   setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
   timeOfLastClick: number;
   setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};

export const ActiveSectionContext = React.createContext<ActiveSectionContextType | null>(null);

export default function ActiveSectionContextProvider({
   children,
}: ActiveSectionContextProviderProps) {
   const [activeSection, setActiveSection] = React.useState<SectionName>('Home');
   const [timeOfLastClick, setTimeOfLastClick] = React.useState(0);

   return (
      <ActiveSectionContext.Provider
         value={{
            activeSection,
            setActiveSection,
            timeOfLastClick,
            setTimeOfLastClick,
         }}>
         {children}
      </ActiveSectionContext.Provider>
   );
}

export function useActiveSectionContext() {
   const context = React.useContext(ActiveSectionContext);

   if (context === null) {
      throw new Error('Active Section Context used outside the right context provider.');
   }

   return context;
}

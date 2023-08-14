import React, { FC, ReactNode } from 'react';

interface DarkLayoutProps {
  children: ReactNode;
}

export const DarkLayout: FC<DarkLayoutProps> = ({ children }) => {
  return (
    <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}>
      {children}
    </div>
  );
};
'use client';

import { CustomCursor } from './CustomCursor';
import ScrollManager from './ScrollManager';
import ScrollToTop from './ScrollToTop';
import { Suspense } from 'react';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <Suspense fallback={null}>
      <ScrollToTop />
      <ScrollManager>
        <CustomCursor />
        {children}
      </ScrollManager>
    </Suspense>
  );
}

'use client';
import { useEffect, useState, type PropsWithChildren } from 'react';

const isMockingMode = process.env.NEXT_PUBLIC_API_MOCKING === 'enabled';

export const MSWComponent = ({ children }: PropsWithChildren) => {
  const [mswReady, setMswReady] = useState(() => !isMockingMode);

  useEffect(() => {
    const init = async () => {
      if (isMockingMode) {
        const initMocks = await import('../../mocks/index').then((res) => res.initMocks);
        await initMocks();
        setMswReady(true);
      }
    };
    if (!mswReady) {
      init();
    }
  }, [mswReady]);

  if (!mswReady) {
    return null;
  }

  return <>{children}</>;
};

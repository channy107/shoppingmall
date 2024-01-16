'use client';

import { ReactNode, useState } from 'react';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

interface IProps {
  children: ReactNode;
}

function RQProvider({ children }: IProps) {
  const [client] = useState(
    new QueryClient({
      defaultOptions: {
        queries: {
          retry: false,
        },
      },
    }),
  );

  return (
    <QueryClientProvider client={client}>
      {children}
      <ReactQueryDevtools initialIsOpen={process.env.NEXT_PUBLIC_MODE === 'local'} />
    </QueryClientProvider>
  );
}

export default RQProvider;

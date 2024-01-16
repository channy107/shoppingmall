'use client';

import { ReactNode } from 'react';
import { RecoilRoot } from 'recoil';

interface IProps {
  children: ReactNode;
}

function RecoilProvider({ children }: IProps) {
  return <RecoilRoot>{children}</RecoilRoot>;
}

export default RecoilProvider;

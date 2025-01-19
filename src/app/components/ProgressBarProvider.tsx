'use client';

import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';
import { ReactNode } from 'react';

const ProgressBarProvider = ({ children }: { children: ReactNode }) => {
  return (
    <>
      {children}
      <ProgressBar
        height="4px"
        color="#5b65e8"
        options={{ showSpinner: false }}
        shallowRouting
      />
    </>
  );
};

export default ProgressBarProvider;

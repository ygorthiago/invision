import type { PropsWithChildren, ReactNode } from 'react';
import React, { createContext, useContext } from 'react';

import { ToastStore } from './ToastStore';

interface Stores {
  toastStore: ReturnType<typeof ToastStore>;
}

const storesCtx = createContext<Stores | null>(null);

export function useStores() {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  return useContext(storesCtx)!;
}

export function StoresProvider(props: PropsWithChildren<ReactNode>) {
  const toastStore = ToastStore();

  return (
    <storesCtx.Provider value={{ toastStore }}>
      {props.children}
    </storesCtx.Provider>
  );
}

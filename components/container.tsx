import { ReactNode } from 'react';

interface IContainer {
  children: ReactNode;
}

export default function Container({ children }: IContainer) {
  return <div className="container mx-auto px-5">{children}</div>
}

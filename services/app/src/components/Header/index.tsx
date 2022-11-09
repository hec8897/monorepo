import React, { ReactNode } from 'react';
import { BsChevronCompactLeft, BsList } from 'react-icons/bs';

const Header = ({ children }: { children: ReactNode }) => (
  <header className="border-b p-2 py-3 flex justify-between items-center">
    <BsChevronCompactLeft size={24} />
    <h1 className="text-2xl font-bold">{children}</h1>
    <BsList size={32} />
  </header>
);

export default Header;

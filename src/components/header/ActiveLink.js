// components/ActiveLink.js
import { useNavigation } from 'next/navigation';
import Link from 'next/link';
import React from 'react';

const ActiveLink = ({ href, children }) => {
  const navigation = useNavigation();
  const isActive = navigation.asPath === href;

  return (
    <Link href={href}>
      <a className={`text-red font-semibold ${isActive ? 'active' : ''}`}>{children}</a>
    </Link>
  );
};

export default ActiveLink;

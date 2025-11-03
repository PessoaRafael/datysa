'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import styles from './Navbar.module.css';

const links = [
  { name: 'Início', href: '/' },
  { name: 'Soluções', href: '/services' },
  { name: 'Sobre', href: '/about' },
  { name: 'Contato', href: '/contact' },
  { name: 'Projetos', href: '/projetos' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <div className={styles.navContent}>
          {/* Logo */}
          <Link href="/" className={styles.logo}> 
            <Image
              src="/images/Screenshot_127.png"
              alt="Datysa"
              width={180}
              height={60}
              className={styles.logoImage}
              priority
            />
          </Link>

          {/* Menu Desktop */}
          <nav className={styles.desktopNav}>
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`${styles.navLink} ${
                  pathname === link.href ? styles.active : ''
                }`}
              >
                {link.name}
                {pathname === link.href && (
                  <motion.span
                    layoutId="underline"
                    className={styles.underline}
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Botão Desktop */}
          <a
            href="https://wa.me/+5584994604608"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaButton}
          >
            Agende sua reunião
          </a>

          {/* Botão Mobile */}
          <button
            className={styles.mobileButton}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      <motion.div
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
        variants={{
          open: { opacity: 1, height: 'auto' },
          closed: { opacity: 0, height: 0 }
        }}
        transition={{ duration: 0.3 }}
        className={styles.mobileNav}
      >
        <div className={styles.mobileNavContent}>
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${styles.mobileNavLink} ${
                pathname === link.href ? styles.mobileActive : ''
              }`}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          
          {/* Botão Mobile CTA */}
          <div className={styles.mobileCtaContainer}>
            <a
              href="https://calendly.com/datysa/30min"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.mobileCtaButton}
              onClick={() => setIsOpen(false)}
            >
              Agende sua reunião
            </a>
          </div>
        </div>
      </motion.div>
    </header>
  );
}
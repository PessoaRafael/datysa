'use client';

import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from './ClientsSection.module.css';

const clients = [
    { name: 'NUMBER', logo: '/logos/number.svg' },
    { name: 'FORMAMY', logo: '/logos/formamy.svg' },
    { name: 'MIDDLEHOLDER', logo: '/logos/middleholder.svg' },
    { name: 'NUMBER', logo: '/logos/cog.svg' },
];
export default function ClientsSection() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const transitionDelay = 5000; // 5 segundos entre transições (aumentado)

  const scrollToIndex = (index: number) => {
    if (!carouselRef.current) return;
    
    const container = carouselRef.current;
    const item = container.children[index] as HTMLElement;
    const containerWidth = container.offsetWidth;
    const itemWidth = item.offsetWidth;
    const scrollPosition = item.offsetLeft - (containerWidth - itemWidth) / 2;

    container.scrollTo({
      left: scrollPosition,
      behavior: 'smooth'
    });
    setActiveIndex(index);
  };

  const startAutoPlay = () => {
    intervalRef.current = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % clients.length);
    }, transitionDelay);
  };

  const stopAutoPlay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const handleDotClick = (index: number) => {
    stopAutoPlay();
    scrollToIndex(index);
    // Reinicia o autoplay após 10 segundos de inatividade
    setTimeout(() => {
      setAutoPlay(true);
    }, 10000);
  };

  useEffect(() => {
    if (autoPlay) {
      startAutoPlay();
    }
    return () => stopAutoPlay();
  }, [autoPlay]);

  useEffect(() => {
    if (autoPlay) {
      scrollToIndex(activeIndex);
    }
  }, [activeIndex, autoPlay]);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const handleScroll = () => {
      if (!autoPlay) {
        const scrollPos = carousel.scrollLeft;
        const items = Array.from(carousel.children) as HTMLElement[];
        const itemPositions = items.map(item => item.offsetLeft);
        
        let closestIndex = 0;
        let smallestDistance = Infinity;
        
        itemPositions.forEach((pos, index) => {
          const distance = Math.abs(pos - scrollPos);
          if (distance < smallestDistance) {
            smallestDistance = distance;
            closestIndex = index;
          }
        });
        
        setActiveIndex(closestIndex);
      }
    };

    carousel.addEventListener('scroll', handleScroll);
    return () => carousel.removeEventListener('scroll', handleScroll);
  }, [autoPlay]);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <motion.h2 
          className={styles.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Nossos Clientes
        </motion.h2>

        <div className={styles.carouselWrapper}>
          <div 
            ref={carouselRef}
            className={styles.carousel}
            onMouseEnter={stopAutoPlay}
            onMouseLeave={() => setAutoPlay(true)}
            onTouchStart={stopAutoPlay}
            onTouchEnd={() => setAutoPlay(true)}
          >
            {clients.map((client, index) => (
              <motion.div
                key={index}
                className={styles.clientCard}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.15,
                  ease: [0.16, 1, 0.3, 1] // Curva de easing suave
                }}
              >
                <div className={styles.logoContainer}>
                  <img
                    src={client.logo}
                    alt={client.name}
                    className={styles.clientLogo}
                    loading="lazy"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className={styles.carouselNav}>
          {clients.map((_, index) => (
            <button
              key={index}
              className={`${styles.carouselDot} ${
                activeIndex === index ? styles.active : ''
              }`}
              onClick={() => handleDotClick(index)}
              aria-label={`Ir para cliente ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
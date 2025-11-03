
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import styles from './TestimonialsSection.module.css';

export default function Depoimentos() {
  const testimonials = [
    {
      name: "Mariana Silva",
      message:
        "A Datysa transformou totalmente a forma como tomamos decisões. Os dashboards são incríveis e super intuitivos.",
    },
    {
      name: "Carlos Henrique",
      message:
        "Antes, era impossível consolidar os dados da empresa. Agora, com a Datysa, temos tudo em um só lugar com insights valiosos.",
    },
    {
      name: "Ana Costa",
      message:
        "O suporte da equipe e a facilidade da plataforma superaram minhas expectativas. Recomendo muito para PMEs!",
    },
  ];

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Depoimentos</h2>
      <div className={styles.container}>
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{
            delay: 6000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          loop={true}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className={styles.card}>
                <p className={styles.message}>“{item.message}”</p>
                <p className={styles.author}>— {item.name}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

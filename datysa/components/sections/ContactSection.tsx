'use client';

import { useState } from 'react';
import styles from './ContactSection.module.css';

type FormState = {
  name: string;
  email: string;
  company: string;
  subject: string;
  message: string;
};

export default function ContactSection() {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [formError, setFormError] = useState<string | null>(null); // erro de validação local

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));
    setFormError(null); // limpa erro ao digitar
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validação local
    if (!form.name.trim() || !form.email.trim() || !form.company.trim() || !form.subject.trim() || !form.message.trim()) {
      setFormError('Por favor, preencha todos os campos obrigatórios.');
      return; // não muda o status de envio
    }

    setStatus('sending');
    setFormError(null); // Limpa erros de validação antigos antes de enviar

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', company: '', subject: '', message: '' });
        setTimeout(() => setStatus('idle'), 4000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 4000);
      }
    } catch (err) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  return (
    <section className={styles.section} aria-labelledby="contact-title">
      <div className={styles.container}>
        <h2 id="contact-title" className={styles.title}>Fale com a Datysa</h2>
        <p className={styles.lead}>
          Tem um projeto, dúvida ou quer entender como dados podem impulsionar seu negócio? Conte-nos sobre
          os objetivos e desafios que te retornamos em breve com uma proposta prática.
        </p>

        <div className={styles.grid}>
          <form className={styles.form} onSubmit={handleSubmit} noValidate>
            <div className={styles.row}>
              <label className={styles.label}>
                Nome *
                <input
                  name="name"
                  type="text"
                  className={styles.input}
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </label>

              <label className={styles.label}>
                E-mail *
                <input
                  name="email"
                  type="email"
                  className={styles.input}
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>

            <div className={styles.row}>
              <label className={styles.label}>
                Empresa *
                <input
                  name="company"
                  type="text"
                  className={styles.input}
                  value={form.company}
                  onChange={handleChange}
                  required
                />
              </label>

              <label className={styles.label}>
                Assunto *
                <input
                  name="subject"
                  type="text"
                  className={styles.input}
                  value={form.subject}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>

            <label className={styles.label}>
              Mensagem *
              <textarea
                name="message"
                className={styles.textarea}
                rows={6}
                value={form.message}
                onChange={handleChange}
                required
              />
            </label>

            <div className={styles.actions}>
              <button
                type="submit"
                className={styles.submit}
                disabled={status === 'sending'}
              >
                {status === 'sending' ? 'Enviando…' : 'Enviar mensagem'}
              </button>

              <a
                className={styles.alt}
                href="mailto:contato@datysa.com.br"
                onClick={() => setStatus('idle')} // Também reseta o status se clicar no link de email
              >
                Ou envie por e-mail
              </a>
            </div>
          </form>

          <aside className={styles.info}>
            <h3 className={styles.infoTitle}>Como trabalhamos</h3>
            <p>
              Começamos entendendo seu modelo de negócio e as decisões críticas que precisam de suporte. Em seguida
              mapeamos as fontes de dados, modelamos pipelines e entregamos visualizações com hierarquia clara,
              filtros relevantes e documentação para governança.
            </p>

            <h4 className={styles.infoSub}>Por que organizar dados importa</h4>
            <ul className={styles.benefits}>
              <li>Confiabilidade: decisões baseadas em dados corretos reduzem custos e riscos;</li>
              <li>Velocidade: automações e dashboards bem desenhados aceleram a tomada de decisão;</li>
              <li>Escalabilidade: pipelines repetíveis permitem expansão sem perda de qualidade;</li>
              <li>Transparência: métricas catalogadas facilitam comunicação entre áreas.</li>
            </ul>
          </aside>
        </div>

        {/* Popup de status - LINHA CORRIGIDA ABAIXO */}
        {((status === 'success' || status === 'error') || formError) && (
          <div
            className={`${styles.popup} ${
              status === 'success' ? styles.popupSuccess : styles.popupError
            } ${styles.show}`}
            onClick={() => {
              setStatus('idle');
              setFormError(null);
            }}
          >
            <span>{status === 'success' ? '✅' : '❌'}</span>
            {formError ? formError : status === 'success'
              ? 'Mensagem enviada com sucesso! Obrigado! Responderemos em breve.'
              : 'Ocorreu um erro. Verifique os campos e tente novamente.'}
          </div>
        )}
      </div>
    </section>
  );
}
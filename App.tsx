/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { supabase } from './lib/supabase';

const Navbar = () => (
  <motion.nav 
    initial={{ y: -100 }}
    animate={{ y: 0 }}
    transition={{ duration: 0.5 }}
    className="fixed top-0 w-full z-50 bg-white shadow-sm"
  >
    <div className="flex justify-between items-center w-full px-8 py-4 max-w-7xl mx-auto">
      <a className="flex items-center" href="#">
        <img
          alt="UMEPA Logo"
          className="h-10 w-auto"
          src="https://lh3.googleusercontent.com/aida/ADBb0uipj7-kBEaPrgPxDybqStT50mGFprZBn48zS0mhXJya153pcdPMAcaSFuV93M-9yWidT0tCarinMXsLEnOaWYDc8bxFf-LKtwr8uZJKWwBjKrIYA1exgM3t2eC5PDSuEek6-97cemj8aa3gm-tBnz7ZogFdTRugajWHtS-cYgA0yf3wA9MSNKzjATSwURLhbTHyJ1VBg4z9xP-XaqUzEaxUkgMD9enj5SwImx8w1KafluaGnvfRfPxTkWRxF-yG6jcsIZU0xa_FMsg"
        />
      </a>
      <div className="hidden md:flex items-center gap-8 font-sans text-sm font-medium tracking-tight">
        <a className="text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 pb-1" href="#">Inicio</a>
        <a className="text-slate-600 dark:text-slate-400 hover:text-blue-500 transition-colors" href="#services">Servicios</a>
        <a className="text-slate-600 dark:text-slate-400 hover:text-blue-500 transition-colors" href="#doctors">Médicos</a>
        <a className="text-slate-600 dark:text-slate-400 hover:text-blue-500 transition-colors" href="#about">Nosotros</a>
        <a className="text-slate-600 dark:text-slate-400 hover:text-blue-500 transition-colors" href="#contact">Contacto</a>
      </div>
      <button className="bg-primary text-on-primary px-6 py-2.5 rounded-full font-medium text-sm hover:scale-95 transition-all duration-150 shadow-lg shadow-primary/20">
        Reservar Cita
      </button>
    </div>
  </motion.nav>
);

const Hero = () => (
  <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-surface">
    <div className="absolute inset-0 z-0">
      <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-primary-container/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-[-5%] left-[-5%] w-[400px] h-[400px] bg-tertiary-fixed/30 rounded-full blur-3xl"></div>
    </div>
    <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-12 items-center relative z-10">
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="space-y-8"
      >
        <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-container text-on-secondary-container text-xs font-bold tracking-widest uppercase">Atención Médica Premium</span>
        <h1 className="text-6xl md:text-7xl font-bold tracking-tighter leading-[1.1] text-on-surface">
          Tu Salud,<br /><span className="text-primary">Nuestra Prioridad</span>
        </h1>
        <p className="text-lg text-on-surface-variant max-w-lg leading-relaxed">
          Experimenta la excelencia clínica en un santuario de calma. Nuestros especialistas de clase mundial brindan una atención integral utilizando la tecnología médica más avanzada.
        </p>
        <div className="flex flex-wrap gap-4 pt-4">
          <button className="bg-primary text-on-primary px-8 py-4 rounded-lg font-semibold hover:shadow-xl hover:shadow-primary/30 transition-all flex items-center gap-2">
            <span>Comenzar</span>
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
          <button className="border-2 border-tertiary-fixed-dim text-tertiary bg-white/50 px-8 py-4 rounded-lg font-semibold hover:bg-tertiary-fixed transition-all">
            Ver Servicios
          </button>
        </div>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="relative"
      >
        <div className="aspect-square rounded-xl overflow-hidden shadow-2xl shadow-primary/10 relative border-[12px] border-white/50 backdrop-blur-sm">
          <img
            alt="Equipo médico profesional"
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBSO__MTjrgVQhQyzMfw3-wpvhAhPFaddVvd2Ppe8mhpG597H0GqXXV6kkCsgniLYEy2PNq5eZ0CWUh9gAXpXm6OLLKQGglHz3_0sgbzLxYZXuLhbZcfHboid6IT2c7wQX7kxVzdcetxSGKoe_RG5c7OZ6H9fuK1Uar4GpgtsU_PmMRlK6v6rNrEaZk7PsoQjsuHMDmbtbes1VUnLtXZN1y7QaOA6IiPa27Q-6TrenzYZfUO99fCX0QUTt_LMXUP3--RYWPvW3xz9kz"
          />
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur-md p-6 rounded-lg shadow-xl border border-outline-variant/10 max-w-[200px]"
        >
          <div className="flex items-center gap-3 mb-2">
            <span className="material-symbols-outlined text-tertiary text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>verified_user</span>
            <span className="text-2xl font-bold text-on-surface">99%</span>
          </div>
          <p className="text-xs text-on-surface-variant font-medium">Tasa de satisfacción de más de 20,000 reseñas</p>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

const Stats = () => (
  <section className="py-20 bg-surface-container-low">
    <div className="max-w-7xl mx-auto px-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {[
          { value: '500+', label: 'Médicos Expertos', bg: 'bg-tertiary-fixed', text: 'text-on-tertiary-fixed', variant: 'text-on-tertiary-fixed-variant' },
          { value: '20k+', label: 'Pacientes Felices', bg: 'bg-primary-fixed', text: 'text-on-primary-fixed', variant: 'text-on-primary-fixed-variant' },
          { value: '15+', label: 'Especialidades', bg: 'bg-tertiary-fixed', text: 'text-on-tertiary-fixed', variant: 'text-on-tertiary-fixed-variant' },
          { value: '12+', label: 'Premios Globales', bg: 'bg-primary-fixed', text: 'text-on-primary-fixed', variant: 'text-on-primary-fixed-variant' },
        ].map((stat, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className={`${stat.bg} p-8 rounded-lg shadow-sm hover:translate-y-[-4px] transition-transform`}
          >
            <h3 className={`text-4xl font-extrabold ${stat.text} mb-1 tracking-tight`}>{stat.value}</h3>
            <p className={`${stat.variant} font-medium uppercase text-[10px] tracking-widest`}>{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Services = () => (
  <section className="py-32 bg-surface" id="services">
    <div className="max-w-7xl mx-auto px-8">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-20 text-center max-w-2xl mx-auto"
      >
        <h2 className="text-4xl font-bold text-on-surface mb-6 tracking-tight">Atención Especializada para Todos</h2>
        <p className="text-on-surface-variant leading-relaxed">Nuestro santuario clínico ofrece trayectorias de salud personalizadas gestionadas por especialistas líderes en múltiples disciplinas.</p>
      </motion.div>
      <div className="grid md:grid-cols-3 gap-8">
        {[
          { icon: 'cardiology', title: 'Cardiología', desc: 'Monitoreo integral de la salud del corazón utilizando herramientas de diagnóstico y terapias de última generación.' },
          { icon: 'child_care', title: 'Pediatría', desc: 'Atención médica afectuosa para los más pequeños en un entorno cálido, amable y seguro.' },
          { icon: 'dentistry', title: 'Odontología', desc: 'Tratamientos avanzados de estética e higiene dental para una sonrisa saludable y segura.' },
          { icon: 'neurology', title: 'Neurología', desc: 'Diagnóstico y tratamiento experto de trastornos del cerebro, médula espinal y nervios periféricos.' },
          { icon: 'dermatology', title: 'Dermatología', desc: 'Tratamientos de cuidado de la piel de precisión, desde el diagnóstico médico hasta la mejora estética.' },
          { icon: 'medical_information', title: 'Medicina General', desc: 'Atención primaria integral y chequeos de bienestar para las necesidades diarias de salud de su familia.' },
        ].map((service, idx) => (
          <motion.div 
            key={idx} 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="group bg-surface-container-lowest p-10 rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 border border-outline-variant/10 flex flex-col items-start gap-6"
          >
            <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-tertiary-fixed transition-colors">
              <span className="material-symbols-outlined text-primary text-3xl group-hover:text-on-tertiary-fixed transition-colors">{service.icon}</span>
            </div>
            <h4 className="text-xl font-bold text-on-surface">{service.title}</h4>
            <p className="text-on-surface-variant text-sm leading-relaxed">{service.desc}</p>
            <a className="text-primary font-bold text-sm inline-flex items-center gap-1 group-hover:gap-3 transition-all" href="#">
              Saber Más <span className="material-symbols-outlined text-lg">chevron_right</span>
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const About = () => (
  <section className="py-32 bg-surface-container-low overflow-hidden" id="about">
    <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-24 items-center">
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="relative"
      >
        <div className="w-full aspect-[4/5] bg-surface rounded-lg overflow-hidden relative shadow-2xl">
          <img
            alt="Interior de la clínica"
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnnZavwGsJD2e9P5fOzzhZ_V54LBwZaqGkW2LnEDJpzfhGG_UfB7uOG4Ypjr8YZYn_NQyM0wbowBhISGVxmHNmxgERsDTU2Z9he4VaVb2waIKtOrfpMjZK8QWJM8QHmbVgV31bsAxRe6SWlxjPC68p2UI-kb-yh9iz3gO8FLYOtE_lHXarj02fVLjQzyGn3JsHS5FpmzEBKfvv9-FLdduwGK-rsVXBz30A0PKecKOamRI4oHVOYRn2LI7OV29BA-Oxzrrk1Jd-2CyF"
          />
        </div>
        <div className="absolute top-12 -right-12 w-48 h-48 bg-tertiary rounded-lg rotate-12 z-[-1] opacity-20"></div>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="space-y-10"
      >
        <h2 className="text-4xl font-bold text-on-surface leading-tight tracking-tight">Redefiniendo la Experiencia<br />Médica</h2>
        <p className="text-on-surface-variant leading-relaxed text-lg">Creemos que un entorno de curación es tan importante como la experiencia médica. UMEPA combina la serenidad arquitectónica con la precisión clínica.</p>
        <ul className="space-y-6">
          {[
            { title: 'Atención Premium 24/7', desc: 'Siempre disponibles para emergencias y consultas remotas.' },
            { title: 'Expertos Certificados', desc: 'Nuestros médicos son líderes reconocidos mundialmente en sus campos.' },
            { title: 'Integración Tecnológica Moderna', desc: 'Seguimiento de constantes vitales en tiempo real y registros digitales.' },
          ].map((item, idx) => (
            <li key={idx} className="flex items-start gap-4">
              <div className="mt-1 w-6 h-6 rounded-full bg-tertiary-fixed flex items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined text-on-tertiary-fixed text-sm" style={{ fontVariationSettings: "'wght' 700" }}>check</span>
              </div>
              <div>
                <h5 className="font-bold text-on-surface">{item.title}</h5>
                <p className="text-on-surface-variant text-sm">{item.desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  </section>
);

const Doctors = () => (
  <section className="py-32 bg-surface" id="doctors">
    <div className="max-w-7xl mx-auto px-8">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="flex justify-between items-end mb-16"
      >
        <div>
          <h2 className="text-4xl font-bold text-on-surface mb-4 tracking-tight">Nuestros Especialistas</h2>
          <p className="text-on-surface-variant">Un equipo selecto de expertos dedicados a su bienestar.</p>
        </div>
        <button className="hidden md:flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all">
          Ver Todos los Médicos <span className="material-symbols-outlined">arrow_forward</span>
        </button>
      </motion.div>
      <div className="grid md:grid-cols-3 gap-8">
        {[
          { name: 'Dr. Michael Chen', role: 'Cardiólogo Senior', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB4ZZtdg6LfNf6D0X1b8PquWx7uZvSSiIeChpdwX8Iqk5ym5eLj8Ssd9TRVpBTjgo8jxQwjb7D45BJ-AQhW3LI1KYW5jnRoKfCeOF-GiYMCCg6e1rsGa00BtJETbVQs6PHr_mcHf8LCrGoGl0Wb2AnIu_gCerHCExIfaWvy2ow1b_MZ3yFfCE7xQxA1JN8gMoglIV_thqkSbwey6Ae37ZFWsyhV0UeO2CDKhi8LI-sheq_As7cwQwmwnHwWaPirRFrudVKC1Fuuh0Ye' },
          { name: 'Dra. Sarah Johnson', role: 'Pediatra Líder', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDuXPPDjer0IRPo_LxYgKffVdb3-NgfyXPCzHj06b2WZzzH6_ZXkEMAqkbObRGP6k6JSjqbzr8vFJlJD-COAA1Te1q3yzn3NX-JwplTCxhQ6-phM_iMmjOSvTrAAzWZMj3yblg302XzLUFAKnBcHQ7FbwhbN3TTg3W9ViqC2i68U1U20gh-O1ACjByp8o4zFQZn8pEAGbvFUP7RjulRaWiSyn-Q8qeADhAs0PhqKUJqNJbFDDx-oUOLzSC7xH4La-w5HagPJEo0N401' },
          { name: 'Dra. Elena Rodriguez', role: 'Experta en Neurología', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBYuOZQZ9_pxQgHhyvPWdn07fiRhLTKLZEdPUjw7BJZMv85ROLhMzUlaKms4hXkmk_dQPfgCcW8iXvv0t3DLDX45U1jU3iK2v8eUhKOPCEHwr431aoyDZvoNj9cUb_u1Uwvu4O4fu05mLHkiSZc5O1RORUH0mtzDXUpSPzdluC-kWPBmoPFa6jmBDMCS8fu30HQeS1FOvS_A5exuX5HskFfiamyLHNTDDTWB8-zbudfBnyMn2nLSUmdeJItVP8BKUjYb1z3-ubPhjbL' },
        ].map((doc, idx) => (
          <motion.div 
            key={idx} 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="bg-surface-container-low rounded-lg p-6 group hover:bg-white hover:shadow-2xl transition-all duration-300"
          >
            <div className="aspect-square rounded-lg overflow-hidden mb-6">
              <img alt="Perfil del médico" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src={doc.img} />
            </div>
            <h4 className="text-xl font-bold text-on-surface mb-1">{doc.name}</h4>
            <p className="text-on-surface-variant text-xs font-bold tracking-widest uppercase mb-6">{doc.role}</p>
            <button className="w-full py-3 bg-secondary-container text-on-secondary-container rounded-lg font-bold text-sm hover:bg-primary hover:text-on-primary transition-colors">
              Ver Perfil
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Appointment = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    specialty: '',
    date: '',
    time: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const timeOptions = [];
  for (let i = 8; i <= 18; i++) {
    timeOptions.push(`${i.toString().padStart(2, '0')}:00`);
    if (i !== 18) timeOptions.push(`${i.toString().padStart(2, '0')}:30`);
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    try {
      const { error } = await supabase
        .from('bookings')
        .insert([
          {
            name: formData.name,
            phone: formData.phone,
            specialty: formData.specialty,
            date: formData.date,
            time: formData.time
          }
        ]);

      if (error) throw error;
      
      setStatus('success');
      setFormData({ name: '', phone: '', specialty: '', date: '', time: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="py-32 bg-surface relative" id="contact">
      <div className="max-w-4xl mx-auto px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="bg-white p-12 md:p-16 rounded-lg shadow-2xl shadow-primary/5 border border-outline-variant/10"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-on-surface mb-4">Reserva tu Consulta</h2>
            <p className="text-on-surface-variant">Completa los detalles a continuación y confirmaremos tu espacio en menos de 2 horas.</p>
          </div>
          <form className="grid md:grid-cols-2 gap-8" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <label className="text-xs font-bold tracking-widest uppercase text-on-surface-variant px-1">Nombre Completo</label>
              <input 
                required
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-surface-container-highest border-none rounded-lg p-4 focus:ring-2 focus:ring-primary-container focus:bg-white transition-all outline-none" 
                placeholder="Juan Pérez" 
                type="text" 
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold tracking-widest uppercase text-on-surface-variant px-1">Número de Teléfono</label>
              <input 
                required
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full bg-surface-container-highest border-none rounded-lg p-4 focus:ring-2 focus:ring-primary-container focus:bg-white transition-all outline-none" 
                placeholder="+52 (55) 0000-0000" 
                type="tel" 
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold tracking-widest uppercase text-on-surface-variant px-1">Especialidad</label>
              <select 
                required
                name="specialty"
                value={formData.specialty}
                onChange={handleChange}
                className="w-full bg-surface-container-highest border-none rounded-lg p-4 focus:ring-2 focus:ring-primary-container focus:bg-white transition-all outline-none"
              >
                <option value="">Seleccionar Especialidad</option>
                <option value="Cardiología">Cardiología</option>
                <option value="Pediatría">Pediatría</option>
                <option value="Neurología">Neurología</option>
                <option value="Dermatología">Dermatología</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold tracking-widest uppercase text-on-surface-variant px-1">Fecha Preferida</label>
              <input 
                required
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full bg-surface-container-highest border-none rounded-lg p-4 focus:ring-2 focus:ring-primary-container focus:bg-white transition-all outline-none" 
                type="date" 
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold tracking-widest uppercase text-on-surface-variant px-1">Hora Preferida</label>
              <select 
                required
                name="time"
                value={formData.time}
                onChange={handleChange}
                className="w-full bg-surface-container-highest border-none rounded-lg p-4 focus:ring-2 focus:ring-primary-container focus:bg-white transition-all outline-none"
              >
                <option value="">Seleccionar Hora</option>
                {timeOptions.map(t => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>
            <div className="md:col-span-2 pt-4">
              <button 
                disabled={status === 'submitting'}
                className="w-full py-4 bg-primary text-on-primary rounded-lg font-bold text-lg hover:shadow-xl hover:shadow-primary/30 transition-all scale-100 active:scale-95 duration-150 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === 'submitting' ? 'Enviando...' : 'Confirmar Cita'}
              </button>
              {status === 'success' && (
                <p className="text-green-600 text-center mt-4 font-medium">¡Cita solicitada con éxito! Nos pondremos en contacto pronto.</p>
              )}
              {status === 'error' && (
                <p className="text-red-600 text-center mt-4 font-medium">Hubo un error al enviar la solicitud. Por favor, inténtalo de nuevo.</p>
              )}
            </div>
          </form>
        </motion.div>
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-6xl pointer-events-none opacity-50 z-0">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary-container rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-tertiary-fixed rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

const Testimonials = () => (
  <section className="py-32 bg-surface-container-low">
    <div className="max-w-7xl mx-auto px-8">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl font-bold text-on-surface mb-4">Experiencias de Pacientes</h2>
        <p className="text-on-surface-variant">Únase a los miles que han confiado en nosotros para sus procesos de salud.</p>
      </motion.div>
      <div className="grid md:grid-cols-3 gap-8">
        {[
          { text: '"El nivel de cuidado y atención en UMEPA no tiene parangón. Desde el ambiente tranquilo hasta la experiencia del Dr. Chen, me sentí completamente seguro."', name: 'Emily Thompson', role: 'Paciente de Cardiología' },
          { text: '"Traer a mi hijo a UMEPA fue la mejor decisión. El ala de pediatría es tan amable y acogedora que elimina toda la ansiedad."', name: 'David Miller', role: 'Padre de familia' },
          { text: '"La tecnología que utilizan para el diagnóstico es increíble. Resultados rápidos y un plan de tratamiento muy claro. Verdaderamente atención clínica de alta gama."', name: 'Sarah Jenkins', role: 'Paciente de Neurología' },
        ].map((testimonial, idx) => (
          <motion.div 
            key={idx} 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="bg-white p-8 rounded-lg shadow-sm border border-outline-variant/10 flex flex-col justify-between"
          >
            <div>
              <div className="flex gap-1 text-tertiary-container mb-6">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                ))}
              </div>
              <p className="italic text-on-surface-variant mb-6 leading-relaxed">{testimonial.text}</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10"></div>
              <div>
                <h6 className="font-bold text-on-surface text-sm">{testimonial.name}</h6>
                <p className="text-xs text-on-surface-variant">{testimonial.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Location = () => (
  <section className="py-32 bg-surface" id="location">
    <div className="max-w-7xl mx-auto px-8">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl font-bold text-on-surface mb-4">Ubicación</h2>
        <p className="text-on-surface-variant">Visítenos en nuestras modernas instalaciones en el corazón de Mazatlán.</p>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="w-full h-[450px] rounded-lg overflow-hidden shadow-2xl border border-outline-variant/10"
      >
        <iframe
          allowFullScreen
          height="100%"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.08865745131!2d-106.42531632420951!3d23.239851608149845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8698abbc5806c95d%3A0xe24758787f0b548b!2sR%C3%ADo%20Baluarte%202%2C%20Palos%20Prietos%2C%2082010%20Mazatl%C3%A1n%2C%20Sin.!5e0!3m2!1ses!2smx!4v1714589254321!5m2!1ses!2smx"
          style={{ border: 0 }}
          width="100%"
        ></iframe>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-8 text-center"
        >
        <p className="text-on-surface font-semibold text-lg">Río Baluarte 2, Palos Prietos, 82010 Mazatlán, Sin.</p>
      </motion.div>
    </div>
  </section>
);

const Footer = () => (
  <motion.footer 
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
    className="bg-slate-900 dark:bg-black w-full rounded-t-[2rem]"
  >
    <div className="flex flex-col md:flex-row justify-between items-start w-full px-12 py-16 gap-8 max-w-7xl mx-auto">
      <div className="max-w-sm space-y-6">
        <div className="flex items-center mb-6">
          <img
            alt="UMEPA Logo"
            className="h-8 w-auto"
            src="https://lh3.googleusercontent.com/aida/ADBb0uipj7-kBEaPrgPxDybqStT50mGFprZBn48zS0mhXJya153pcdPMAcaSFuV93M-9yWidT0tCarinMXsLEnOaWYDc8bxFf-LKtwr8uZJKWwBjKrIYA1exgM3t2eC5PDSuEek6-97cemj8aa3gm-tBnz7ZogFdTRugajWHtS-cYgA0yf3wA9MSNKzjATSwURLhbTHyJ1VBg4z9xP-XaqUzEaxUkgMD9enj5SwImx8w1KafluaGnvfRfPxTkWRxF-yG6jcsIZU0xa_FMsg"
          />
        </div>
        <p className="font-sans text-sm text-slate-300 leading-relaxed">Brindando atención clínica editorial de alta gama diseñada para evocar una sensación de calma, competencia y amplitud.</p>
        <div className="flex gap-4">
          <a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-400/20 hover:text-blue-400 transition-all" href="#">
            <span className="material-symbols-outlined text-sm">public</span>
          </a>
          <a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-400/20 hover:text-blue-400 transition-all" href="#">
            <span className="material-symbols-outlined text-sm">alternate_email</span>
          </a>
          <a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-400/20 hover:text-blue-400 transition-all" href="#">
            <span className="material-symbols-outlined text-sm">call</span>
          </a>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-x-16 gap-y-4">
        <div>
          <h5 className="text-white font-semibold mb-4 text-sm">Enlaces Rápidos</h5>
          <ul className="space-y-3 font-sans text-sm">
            <li><a className="text-slate-400 hover:text-blue-300 hover:translate-x-1 transition-all inline-block" href="#">Inicio</a></li>
            <li><a className="text-slate-400 hover:text-blue-300 hover:translate-x-1 transition-all inline-block" href="#">Servicios</a></li>
            <li><a className="text-slate-400 hover:text-blue-300 hover:translate-x-1 transition-all inline-block" href="#">Médicos</a></li>
            <li><a className="text-slate-400 hover:text-blue-300 hover:translate-x-1 transition-all inline-block" href="#">Carreras</a></li>
          </ul>
        </div>
        <div>
          <h5 className="text-white font-semibold mb-4 text-sm">Ayuda al Paciente</h5>
          <ul className="space-y-3 font-sans text-sm">
            <li><a className="text-slate-400 hover:text-blue-300 hover:translate-x-1 transition-all inline-block" href="#">Política de Privacidad</a></li>
            <li><a className="text-slate-400 hover:text-blue-300 hover:translate-x-1 transition-all inline-block" href="#">Términos de Servicio</a></li>
            <li><a className="text-slate-400 hover:text-blue-300 hover:translate-x-1 transition-all inline-block" href="#">Portal del Paciente</a></li>
            <li><a className="text-slate-400 hover:text-blue-300 hover:translate-x-1 transition-all inline-block" href="#">Contactar Soporte</a></li>
          </ul>
        </div>
      </div>
      <div className="bg-white/5 p-8 rounded-lg border border-white/10 w-full md:w-auto min-w-[300px]">
        <h5 className="text-white font-semibold mb-2 text-sm">Suscríbete al Boletín</h5>
        <p className="text-slate-400 text-xs mb-4">Recibe los últimos consejos de salud y actualizaciones de la clínica.</p>
        <div className="flex gap-2">
          <input className="bg-white/5 border-white/10 rounded-lg px-4 py-2 text-sm text-white focus:ring-1 focus:ring-blue-400 w-full outline-none" placeholder="Tu correo" type="email" />
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition-colors">
            <span className="material-symbols-outlined text-sm">send</span>
          </button>
        </div>
      </div>
    </div>
    <div className="w-full px-12 py-8 border-t border-white/5 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
      <p className="font-sans text-xs text-slate-400">© 2024 UMEPA Clínica Médica. Todos los derechos reservados.</p>
      <div className="flex gap-6 text-xs text-slate-400">
        <p>Español (MX)</p>
        <p>Estado del Sistema: Saludable</p>
      </div>
    </div>
  </motion.footer>
);

const AdminDashboard = () => {
  const [session, setSession] = useState<any>(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [authLoading, setAuthLoading] = useState(true);

  const [bookings, setBookings] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editForm, setEditForm] = useState<any>({});

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setAuthLoading(false);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
    if (session) {
      fetchBookings();
    }
  }, [session]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) alert(error.message);
    setAuthLoading(false);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  const fetchBookings = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('bookings')
      .select('*')
      .order('created_at', { ascending: false });
      
    if (error) console.error('Error fetching bookings:', error);
    else setBookings(data || []);
    setLoading(false);
  };

  const startEdit = (b: any) => {
    setEditingId(b.id || b.created_at);
    setEditForm({ ...b });
  };

  const handleEditChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setEditForm({ ...editForm, [e.target.name]: e.target.value });
  };

  const saveEdit = async () => {
    if (!editingId) return;
    try {
      const matchId = editForm.id; 
      if (!matchId) return alert("Error resguardando: falta ID de reserva.");

      const { error } = await supabase
        .from('bookings')
        .update({
          name: editForm.name,
          phone: editForm.phone,
          specialty: editForm.specialty,
          date: editForm.date,
          time: editForm.time
        })
        .eq('id', matchId);

      if (error) throw error;
      
      setEditingId(null);
      fetchBookings();
    } catch (err: any) {
      alert("Error saving: " + err.message);
    }
  };

  if (authLoading) {
    return <div className="min-h-screen bg-surface p-8 text-center mt-20 font-medium">Comprobando autenticación...</div>;
  }

  if (!session) {
    return (
      <div className="min-h-screen bg-surface p-8 flex items-center justify-center">
        <form onSubmit={handleLogin} className="bg-white p-8 rounded-xl shadow-lg border border-outline-variant/10 w-full max-w-sm">
          <h2 className="text-2xl font-bold mb-6 text-center text-on-surface">Admin Login</h2>
          <input
            className="w-full mb-4 p-3 bg-surface-container-highest rounded-lg outline-none"
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            className="w-full mb-6 p-3 bg-surface-container-highest rounded-lg outline-none"
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="w-full py-3 bg-primary text-on-primary rounded-lg font-bold">
            Ingresar
          </button>
          <button type="button" onClick={() => window.location.hash = ''} className="w-full mt-4 py-2 text-primary font-bold text-sm">
            Volver al inicio
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-surface p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-on-surface">Panel de Administración</h1>
          <div className="flex gap-4 items-center">
            <button onClick={handleLogout} className="text-red-500 text-sm font-bold hover:underline">
              Cerrar Sesión
            </button>
            <button onClick={() => window.location.hash = ''} className="text-primary font-bold hover:underline flex items-center gap-2">
              <span className="material-symbols-outlined">arrow_back</span>
              Inicio
            </button>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-outline-variant/10 overflow-hidden">
          {loading ? (
            <div className="p-8 text-center text-on-surface-variant font-medium">Cargando reservas...</div>
          ) : bookings.length === 0 ? (
            <div className="p-8 text-center text-on-surface-variant font-medium">No hay reservas aún.</div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[800px]">
                <thead>
                  <tr className="bg-surface-container-low border-b border-outline-variant/10">
                    <th className="p-4 font-semibold text-on-surface">Nombre</th>
                    <th className="p-4 font-semibold text-on-surface">Teléfono</th>
                    <th className="p-4 font-semibold text-on-surface">Especialidad</th>
                    <th className="p-4 font-semibold text-on-surface">Fecha</th>
                    <th className="p-4 font-semibold text-on-surface">Hora</th>
                    <th className="p-4 font-semibold text-on-surface text-center">Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {bookings.map((b) => {
                    const rowId = b.id || b.created_at;
                    const isEditing = editingId === rowId;

                    return (
                      <tr key={rowId} className="border-b border-outline-variant/10 hover:bg-surface-container-lowest transition-colors">
                        <td className="p-4">
                          {isEditing ? (
                            <input name="name" value={editForm.name} onChange={handleEditChange} className="w-full p-2 bg-surface-container-highest rounded-md outline-none text-sm" />
                          ) : (
                            <span className="text-on-surface font-medium">{b.name}</span>
                          )}
                        </td>
                        <td className="p-4">
                          {isEditing ? (
                            <input name="phone" value={editForm.phone} onChange={handleEditChange} className="w-full p-2 bg-surface-container-highest rounded-md outline-none text-sm" />
                          ) : (
                            <span className="text-on-surface-variant">{b.phone}</span>
                          )}
                        </td>
                        <td className="p-4">
                          {isEditing ? (
                            <select name="specialty" value={editForm.specialty} onChange={handleEditChange} className="w-full p-2 bg-surface-container-highest rounded-md outline-none text-sm">
                              <option value="Cardiología">Cardiología</option>
                              <option value="Pediatría">Pediatría</option>
                              <option value="Neurología">Neurología</option>
                              <option value="Dermatología">Dermatología</option>
                            </select>
                          ) : (
                            <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold uppercase tracking-widest">{b.specialty}</span>
                          )}
                        </td>
                        <td className="p-4">
                          {isEditing ? (
                            <input type="date" name="date" value={editForm.date} onChange={handleEditChange} className="w-full p-2 bg-surface-container-highest rounded-md outline-none text-sm" />
                          ) : (
                            <span className="font-bold text-primary">{b.date}</span>
                          )}
                        </td>
                        <td className="p-4">
                          {isEditing ? (
                            <input type="time" name="time" value={editForm.time || ''} onChange={handleEditChange} className="w-full p-2 bg-surface-container-highest rounded-md outline-none text-sm" />
                          ) : (
                            <span className="font-bold text-primary">{b.time || '-'}</span>
                          )}
                        </td>
                        <td className="p-4 text-center">
                          {isEditing ? (
                            <div className="flex gap-2 justify-center">
                              <button onClick={saveEdit} className="text-green-600 bg-green-50 px-3 py-1 rounded-md text-xs font-bold hover:bg-green-100">Guardar</button>
                              <button onClick={() => setEditingId(null)} className="text-red-600 bg-red-50 px-3 py-1 rounded-md text-xs font-bold hover:bg-red-100">Cancelar</button>
                            </div>
                          ) : (
                            <button onClick={() => startEdit(b)} className="text-blue-600 bg-blue-50 px-4 py-1 flex items-center mx-auto rounded-md text-xs font-bold hover:bg-blue-100">Editar</button>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default function App() {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      setIsAdmin(window.location.hash === '#admin');
    };
    
    handleHashChange();
    
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  if (isAdmin) {
    return <AdminDashboard />;
  }

  return (
    <div className="bg-surface text-on-surface selection:bg-secondary-container selection:text-on-secondary-container font-sans">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Services />
        <About />
        <Doctors />
        <Appointment />
        <Testimonials />
        <Location />
      </main>
      <Footer />
    </div>
  );
}


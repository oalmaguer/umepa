/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';

const Navbar = () => (
  <motion.nav 
    initial={{ y: -100 }}
    animate={{ y: 0 }}
    transition={{ duration: 0.5 }}
    className="fixed top-0 w-full z-50 bg-white shadow-sm"
  >
    <div className="flex flex-col md:flex-row  justify-between items-center w-full px-8 py-4 max-w-7xl mx-auto">
      <a className="flex items-center" href="#">
       <img src="./images/logo2.png" width={100} height={100} className="" alt="" />
       <h2 className="text-2xl font-bold hover:cursor-pointer text-sky-700">UMEPA</h2>
      </a>
      <div className="hidden md:flex items-center gap-8 font-sans  text-md font-medium tracking-tight">
        <a className="text-slate-600 dark:text-slate-600 hover:text-blue-500 transition-colors" href="#" >Inicio</a>
        <a className="text-slate-600 dark:text-slate-600 hover:text-blue-500 transition-colors" href="#services">Servicios</a>
        <a className="text-slate-600 dark:text-slate-600 hover:text-blue-500 transition-colors" href="#about">Nosotros</a>
        <a className="text-slate-600 dark:text-slate-600 hover:text-blue-500 transition-colors" href="#doctors">Médicos</a>
        <a className="text-slate-600 dark:text-slate-600 hover:text-blue-500 transition-colors" href="#contact">Contacto</a>
      </div>
      <button onClick={() => window.location.hash = '#contact'} className="bg-primary text-on-primary px-6 py-2.5 rounded-full font-medium text-sm hover:scale-95 hover:cursor-pointer transition-all duration-150 shadow-lg shadow-primary/20">
        Reservar Cita
      </button>
    </div>
  </motion.nav>
);

const Hero = () => (
  <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-surface mt-10 md:mt-0">
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
        <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-container text-on-secondary-container text-xs font-bold tracking-widest uppercase">Atención Médica Premium ⭐⭐⭐⭐⭐</span>
        <h1 className="text-4xl md:text-7xl font-bold tracking-tighter leading-[1.1] text-on-surface">
          Tu Salud,<br /><span className="text-primary">Nuestra Prioridad y Compromiso</span>
        </h1>
        <p className="text-lg text-on-surface-variant max-w-lg leading-relaxed">
          Experimenta la excelencia clínica en un santuario de calma. Nuestros especialistas brindan una atención integral con el mejor trato posible.
        </p>
        <div className="flex flex-wrap gap-4 pt-4">
          <button onClick={() => {window.location.hash = '#';window.location.hash = '#services'}} className="cursor-pointer border-2 border-tertiary-fixed-dim text-tertiary bg-white/50 px-8 py-4 rounded-lg font-semibold hover:bg-tertiary-fixed transition-all">
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
          <motion.img
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
            alt="Equipo médico profesional"
            className="object-cover drop-shadow-2xl border-8 border-white/50 scale-110"
            src="./images/umepa3d.png"
          />
      
      </motion.div>
    </div>
  </section>
);

const Mission = () => (
  <section className="max-w-7xl mx-auto py-24" id="mission">
    <div className=" mx-auto px-8">
      <div className=" rounded-[2.5rem] p-8 md:p-16 flex flex-col md:flex-row items-center gap-12 md:gap-20">
        
        {/* Left Side: Illustration */}
        <div className="w-full md:w-1/2 relative flex items-center justify-center">
            {/* Soft blob background behind illustration */}
            <div className="absolute inset-0 m-auto w-3/4 h-3/4 rounded-full blur-2xl border-2 border-slate-100 bg-teal-50/50"></div>
            <motion.img 
             animate={{ y: [0, -20, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              src="./images/outside.png" 
              alt="Misión UMEPA" 
              className="relative z-10 shadow-xl border-4 border-white"
              style={{ maxHeight: '500px', borderRadius: '1rem' }}
            />
        </div>

        {/* Right Side: Content */}
        <div className="w-full md:w-1/2 flex flex-col items-start text-left">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800 leading-[1.15] mb-6">
            Nuestra Historia 
          </h2>
          <p className="text-slate-600 text-[1.05rem] leading-relaxed mb-10">
            Fundada en 2015, UMEPA ha sido un pilar en la atención médica de Mazatlán. Nacimos de la visión de ofrecer un espacio donde la calidez humana y la excelencia médica convergen para cuidar de la salud de todos los pacientes.
          </p>

          <div className="grid sm:grid-cols-2 gap-8 w-full">
            <div className="flex flex-col items-start">
              <div className="flex items-center gap-3 mb-3">
                <span className="material-symbols-outlined text-blue-600 bg-blue-50 p-2 rounded-xl text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                <h4 className="font-bold text-slate-800 text-lg leading-tight">Enfoque<br/>Compasivo</h4>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed pl-1">
                Atención que se siente como en casa para cada paciente.
              </p>
            </div>
            
            <div className="flex flex-col items-start">
              <div className="flex items-center gap-3 mb-3">
                <span className="material-symbols-outlined text-blue-600 bg-blue-50 p-2 rounded-xl text-2xl">science</span>
                <h4 className="font-bold text-slate-800 text-lg leading-tight">Diagnósticos<br/>Avanzados</h4>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed pl-1">
                Utilizando la última tecnología para resultados precisos.
              </p>
            </div>
          </div>
        </div>

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
          { icon: '👶', title: 'Pediatría', desc: 'Atención médica afectuosa para los más pequeños en un entorno cálido, amable y seguro.' },
          { icon: '❤️', title: 'Asma y Alergia', desc: 'Diagnóstico y tratamiento experto de trastornos respiratorios y alergias.' },
          { icon: '🦷', title: 'Odontología', desc: 'Tratamientos avanzados de estética e higiene dental para una sonrisa saludable y segura.' },
          { icon: '💪', title: 'Terapia Fisica y Rehabilitación', desc: 'Tratamientos especializados para recuperar la movilidad y mejorar la calidad de vida.' },
          { icon: '🍎', title: 'Nutrición Integral', desc: 'Planes personalizados para alcanzar tus metas de salud y bienestar.' },
        ].map((service, idx) => (
          <motion.div 
            key={idx} 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="group bg-white p-8 rounded-xl shadow-[0_2px_15px_rgba(0,0,0,0.06)] border border-slate-50 flex flex-col items-start gap-4 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <div className="w-16 h-16 rounded-2xl bg-[#eef3f9] flex items-center justify-center mb-2 overflow-hidden shadow-inner border border-white">
             
                <span className="text-[#1a5189] text-[32px]">{service.icon}</span>
            </div>
            <h4 className="text-[1.25rem] font-bold text-[#0c2f54] tracking-tight">{service.title}</h4>
            <p className="text-slate-500 text-sm leading-[1.6] mb-2">{service.desc}</p>
           
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
            src="./images/clinic.png"
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
        <p className="text-on-surface-variant leading-relaxed text-lg">En UMEPA, cada detalle está diseñado para tu bienestar. Desde nuestras instalaciones hasta nuestro equipo, todo está pensado para ofrecerte la mejor atención médica posible.</p>
        <ul className="space-y-6">
          {[
            { title: 'Atención Premium', desc: 'Atención personalizada y de alta calidad para cada paciente.' },
            { title: 'Expertos Certificados', desc: 'Nuestros médicos son líderes reconocidos en sus campos.' },
            { title: 'Integración Tecnológica Moderna', desc: 'Tecnología de vanguardia para un diagnóstico y tratamiento precisos.' },
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
      
      </motion.div>
      <div className="grid md:grid-cols-3 gap-8">
        {[
          { name: 'Dr. Ernesto Almaguer', role: 'Pediatra', university: 'Universidad Autonoma de Nuevo Leon', img: './images/doc.png' },
          { name: 'Lic. Carlos Almaguer', role: 'Fisioterapeuta', university: 'Universidad Autonoma de Guadalajara', img: './images/pt.png' },
          { name: 'Dr. Victor Hugo Cortez Padilla', role: 'Unidad de Asma y Alergia', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB4ZZtdg6LfNf6D0X1b8PquWx7uZvSSiIeChpdwX8Iqk5ym5eLj8Ssd9TRVpBTjgo8jxQwjb7D45BJ-AQhW3LI1KYW5jnRoKfCeOF-GiYMCCg6e1rsGa00BtJETbVQs6PHr_mcHf8LCrGoGl0Wb2AnIu_gCerHCExIfaWvy2ow1b_MZ3yFfCE7xQxA1JN8gMoglIV_thqkSbwey6Ae37ZFWsyhV0UeO2CDKhi8LI-sheq_As7cwQwmwnHwWaPirRFrudVKC1Fuuh0Ye' },
          { name: 'Dra. Edna J. Castillo Lopez', role: 'Odontologia Integral', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDuXPPDjer0IRPo_LxYgKffVdb3-NgfyXPCzHj06b2WZzzH6_ZXkEMAqkbObRGP6k6JSjqbzr8vFJlJD-COAA1Te1q3yzn3NX-JwplTCxhQ6-phM_iMmjOSvTrAAzWZMj3yblg302XzLUFAKnBcHQ7FbwhbN3TTg3W9ViqC2i68U1U20gh-O1ACjByp8o4zFQZn8pEAGbvFUP7RjulRaWiSyn-Q8qeADhAs0PhqKUJqNJbFDDx-oUOLzSC7xH4La-w5HagPJEo0N401' },
          { name: 'Dra. Pamel G. Haro Sanchez', role: 'Odontologia Integral', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBYuOZQZ9_pxQgHhyvPWdn07fiRhLTKLZEdPUjw7BJZMv85ROLhMzUlaKms4hXkmk_dQPfgCcW8iXvv0t3DLDX45U1jU3iK2v8eUhKOPCEHwr431aoyDZvoNj9cUb_u1Uwvu4O4fu05mLHkiSZc5O1RORUH0mtzDXUpSPzdluC-kWPBmoPFa6jmBDMCS8fu30HQeS1FOvS_A5exuX5HskFfiamyLHNTDDTWB8-zbudfBnyMn2nLSUmdeJItVP8BKUjYb1z3-ubPhjbL' },
          { name: 'Lic. Hector Gomez Becerra', role: 'Nutrición Integral', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBYuOZQZ9_pxQgHhyvPWdn07fiRhLTKLZEdPUjw7BJZMv85ROLhMzUlaKms4hXkmk_dQPfgCcW8iXvv0t3DLDX45U1jU3iK2v8eUhKOPCEHwr431aoyDZvoNj9cUb_u1Uwvu4O4fu05mLHkiSZc5O1RORUH0mtzDXUpSPzdluC-kWPBmoPFa6jmBDMCS8fu30HQeS1FOvS_A5exuX5HskFfiamyLHNTDDTWB8-zbudfBnyMn2nLSUmdeJItVP8BKUjYb1z3-ubPhjbL' },
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
            <p className="text-on-surface-variant text-xs font-medium tracking-widest uppercase mb-6">{doc.university}</p>
          
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
    
    // try {
    //   const { error } = await supabase
    //     .from('bookings')
    //     .insert([
    //       {
    //         name: formData.name,
    //         phone: formData.phone,
    //         specialty: formData.specialty,
    //         date: formData.date,
    //         time: formData.time
    //       }
    //     ]);

    //   if (error) throw error;
      
    //   setStatus('success');
    //   setFormData({ name: '', phone: '', specialty: '', date: '', time: '' });
    // } catch (error) {
    //   console.error('Error submitting form:', error);
    //   setStatus('error');
    // }
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
            <p className="text-on-surface-variant">Llámanos al siguiente número para agendar tu cita y confirmaremos tu espacio.</p>
          </div>
          
          <div className="flex flex-col items-center justify-center gap-4 mb-4">
            <div className="flex items-center gap-6 bg-surface-container-lowest px-10 py-6 rounded-2xl shadow-lg border border-outline-variant/10">
              <span className="text-2xl md:text-5xl font-extrabold text-primary tracking-widest">9810599</span>
              <button 
                onClick={(e) => {
                  e.preventDefault();
                  navigator.clipboard.writeText('9810599');
                  alert('¡Número copiado al portapapeles!');
                }}
                className="flex items-center justify-center w-14 h-14 bg-primary/10 text-primary rounded-xl hover:bg-primary hover:text-white transition-all duration-300 active:scale-95"
                title="Copiar número"
              >
                <span className="material-symbols-outlined">content_copy</span>
              </button>
            </div>
          </div>

          <div className="hidden">
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
          </div>
        </motion.div>
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-7xl pointer-events-none opacity-50 z-0">
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
          { text: '"Excelente atención del pediatra Almaguer."', name: 'Karla de la Puerta', role: 'Padre de familia' },
          { text: '"Muy buena atención, el doctor es muy amable y explica todo muy bien."', name: 'Juli Ramos', role: 'Padre de familia' },
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
    className="bg-primary w-full rounded-t-[2rem]"
  >
    <div className="flex flex-col md:flex-row justify-between items-start w-full px-12 py-16 gap-8 max-w-7xl mx-auto">
      <div className="max-w-sm space-y-6">
        <div className="flex items-center mb-6">
          <img
            alt="UMEPA Logo"
            className="h-16 w-auto"
            src="./images/logo2.png"
          />
        </div>
        <p className="font-sans text-sm text-slate-300 leading-relaxed">Brindando atención médica de alta gama diseñada para evocar una sensación de calma, competencia y amplitud.</p>
        <div className="flex gap-4">
          <a className="w-10 h-10 rounded-full text-white bg-white/5 flex items-center justify-center hover:bg-blue-400/20 hover:text-blue-400 transition-all" href="tel:+526699810599">
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
     
      </div>
   
    </div>
    <div className="w-full px-12 py-8 border-t border-white/5 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
      <p className="font-sans text-xs text-slate-400">© 2026 UMEPA Clínica Médica. Todos los derechos reservados.</p>
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
    // supabase.auth.getSession().then(({ data: { session } }) => {
    //   setSession(session);
    //   setAuthLoading(false);
    // });

    // const {
    //   data: { subscription },
    // } = supabase.auth.onAuthStateChange((_event, session) => {
    //   setSession(session);
    // });

    // return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
    if (session) {
      fetchBookings();
    }
  }, [session]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthLoading(true);
    // const { error } = await supabase.auth.signInWithPassword({
    //   email,
    //   password,
    // });
    // if (error) alert(error.message);
    setAuthLoading(false);
  };

  const handleLogout = async () => {
    // await supabase.auth.signOut();
  };

  const fetchBookings = async () => {
    // setLoading(true);
    // const { data, error } = await supabase
    //   .from('bookings')
    //   .select('*')
    //   .order('created_at', { ascending: false });
      
    // if (error) console.error('Error fetching bookings:', error);
    // else setBookings(data || []);
    // setLoading(false);
  };

  const startEdit = (b: any) => {
    setEditingId(b.id || b.created_at);
    setEditForm({ ...b });
  };

  const handleEditChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setEditForm({ ...editForm, [e.target.name]: e.target.value });
  };

  const saveEdit = async () => {
    // if (!editingId) return;
    // try {
    //   const matchId = editForm.id; 
    //   if (!matchId) return alert("Error resguardando: falta ID de reserva.");

    //   const { error } = await supabase
    //     .from('bookings')
    //     .update({
    //       name: editForm.name,
    //       phone: editForm.phone,
    //       specialty: editForm.specialty,
    //       date: editForm.date,
    //       time: editForm.time
    //     })
    //     .eq('id', matchId);

    //   if (error) throw error;
      
    //   setEditingId(null);
    //   fetchBookings();
    // } catch (err: any) {
    //   alert("Error saving: " + err.message);
    // }
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
      <div className="max-w-7xl mx-auto">
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
        <Mission />
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

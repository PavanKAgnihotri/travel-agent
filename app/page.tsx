"use client";

import Link from "next/link";
import Image from "next/image";

export default function DMCTravelRedesign() {
  return (
    <div
      style={{
        fontFamily: "'Inter', sans-serif",
        background: "#000",
        color: "#fff",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600&family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap');
        .hero-section { height: 100vh; width: 100%; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center; }
        .hero-section::after { content: ''; position: absolute; bottom: 0; left: 0; right: 0; height: 280px; background: linear-gradient(to bottom, transparent 0%, #000 100%); z-index: 1; pointer-events: none; }
        .video-bg { position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; z-index: 0; }
        .hero-overlay { position: absolute; inset: 0; background: radial-gradient(ellipse at center top, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.35) 40%, rgba(0,0,0,0.6) 100%); z-index: 0; }
        .hero-overlay::after { content: ''; position: absolute; inset: 0; background: linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.3) 75%, rgba(0,0,0,0.65) 100%); }
        .hero-content { position: relative; z-index: 2; text-align: center; max-width: 960px; width: 100%; padding: 0 32px; }
        .hero-eyebrow { display: inline-flex; align-items: center; gap: 0.65rem; padding: 0.55rem 1.4rem; border-radius: 999px; background: rgba(255,209,102,0.1); border: 1px solid rgba(255,209,102,0.35); color: #ffd166; letter-spacing: 0.2em; font-size: 0.75rem; text-transform: uppercase; font-weight: 600; margin-bottom: 2rem; }
        .hero-eyebrow-dot { width: 5px; height: 5px; border-radius: 50%; background: #ffd166; opacity: 0.8; }
        .hero-title { font-family: 'Playfair Display', serif; font-size: clamp(2.6rem, 5.2vw, 5.2rem); line-height: 1.05; margin: 0 0 0.25rem; letter-spacing: -0.03em; color: #fff; }
        .hero-title-accent { font-family: 'Playfair Display', serif; font-style: italic; font-size: clamp(2.6rem, 5.2vw, 5.2rem); line-height: 1.05; margin: 0 0 1.6rem; letter-spacing: -0.02em; background: linear-gradient(100deg, #ffd166 0%, #ffe9a0 50%, #ffd166 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
        .hero-rule { width: 48px; height: 1px; background: linear-gradient(90deg, transparent, rgba(255,209,102,0.6), transparent); margin: 0 auto 1.6rem; }
        .hero-subtitle { font-size: clamp(1rem, 1.15vw, 1.3rem); max-width: 700px; margin: 0 auto 1rem; color: rgba(255,255,255,0.8); line-height: 1.8; font-weight: 300; }
        .hero-sub-tagline { font-size: clamp(0.85rem, 1vw, 1.05rem); max-width: 600px; margin: 0 auto 2.8rem; color: rgba(255,209,102,0.75); line-height: 1.7; font-style: italic; letter-spacing: 0.02em; }
        .hero-actions { display: flex; flex-wrap: wrap; justify-content: center; gap: 1rem; }
        .hero-button,
        .hero-link { font-weight: 600; border-radius: 999px; padding: 1rem 2rem; transition: transform 200ms ease, box-shadow 200ms ease, background-color 200ms ease, color 200ms ease; text-decoration: none; font-size: 0.95rem; letter-spacing: 0.03em; }
        .hero-button { background: linear-gradient(135deg, #ffd166, #ffba00); color: #0a1628; box-shadow: 0 4px 24px rgba(255,209,102,0.35); }
        .hero-button:hover { transform: translateY(-3px); box-shadow: 0 8px 36px rgba(255,209,102,0.55); background: linear-gradient(135deg, #ffe080, #ffc300); }
        .hero-link { color: #fff; border: 1px solid rgba(255,255,255,0.45); background: rgba(255,255,255,0.06); backdrop-filter: blur(6px); }
        .hero-link:hover { transform: translateY(-3px); background: rgba(255,255,255,0.14); border-color: rgba(255,255,255,0.65); }

        .services-section { padding: 80px 20px 24px; color: #fff; position: relative; overflow: hidden; background: #000; }
        .services-section::before { content: ''; position: absolute; inset: 0; background: transparent; pointer-events: none; }
        .services-section::after { content: ''; }

        .about-section { position: relative; z-index: 1; max-width: 1100px; margin: 0 auto 110px; padding: 0 40px; }
        .about-deco { font-family: 'Playfair Display', serif; font-size: clamp(7rem, 14vw, 12rem); line-height: 1; color: rgba(201,168,76,0.04); position: absolute; top: -3rem; left: 20px; font-weight: 700; pointer-events: none; user-select: none; letter-spacing: -0.05em; }
        .about-inner { display: grid; grid-template-columns: 1fr 1.8fr; gap: 80px; align-items: start; }
        .about-left { position: sticky; top: 80px; }
        .about-eyebrow { font-size: 0.72rem; letter-spacing: 0.24em; text-transform: uppercase; color: rgba(201,168,76,0.65); font-weight: 600; margin-bottom: 1.4rem; display: flex; align-items: center; gap: 0.7rem; }
        .about-eyebrow::before { content: ''; display: inline-block; width: 22px; height: 1px; background: rgba(201,168,76,0.5); }
        .about-headline { font-family: 'Playfair Display', serif; font-size: clamp(1.7rem, 2.8vw, 2.6rem); font-weight: 400; line-height: 1.2; color: #fff; margin: 0 0 2rem; letter-spacing: -0.01em; }
        .about-headline em { font-style: italic; color: #c9a84c; }
        .about-vline { width: 1px; height: 80px; background: linear-gradient(to bottom, rgba(201,168,76,0.5), transparent); margin-bottom: 2rem; }
        .about-right { padding-top: 0.5rem; }
        .about-pull { font-family: 'Playfair Display', serif; font-style: italic; font-size: clamp(1.15rem, 1.8vw, 1.5rem); color: rgba(255,255,255,0.82); line-height: 1.65; margin-bottom: 2.5rem; padding-left: 1.4rem; border-left: 2px solid rgba(201,168,76,0.4); }
        .about-body { display: flex; flex-direction: column; gap: 1.4rem; }
        .about-body p { font-size: 1rem; color: rgba(255,255,255,0.5); line-height: 1.9; font-weight: 300; margin: 0; }
        .about-body strong { color: rgba(255,255,255,0.75); font-weight: 400; }
        .about-body em { color: rgba(201,168,76,0.8); font-style: italic; }
        .about-tagline { margin-top: 2.5rem; font-size: 0.82rem; letter-spacing: 0.18em; text-transform: uppercase; color: rgba(201,168,76,0.5); display: flex; align-items: center; gap: 1rem; }
        .about-tagline::before, .about-tagline::after { content: ''; flex: 1; height: 1px; background: rgba(201,168,76,0.15); }
        @media (max-width: 760px) {
          .about-section { padding: 0 20px; margin-bottom: 70px; }
          .about-inner { grid-template-columns: 1fr; gap: 32px; }
          .about-left { position: static; }
          .about-vline { display: none; }
        }
        .services-logo-container { position: relative; z-index: 1; text-align: center; margin-bottom: 3rem; display: flex; justify-content: center; }
        .services-logo { display: flex; align-items: center; justify-content: center; }
        .services-logo img { height: 160px; width: auto; object-fit: contain; filter: drop-shadow(0 8px 40px rgba(201,168,76,0.3)); opacity: 0.95; }
        @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-8px); } }
        
        .services-panel { display: none; }
        
        /* ── Diamond Services Layout ── */
        .services-diamond-section { position: relative; z-index: 1; max-width: 1200px; margin: 0 auto; padding: 0 40px 24px; }
        .sdh-eyebrow { font-size: 0.72rem; letter-spacing: 0.24em; text-transform: uppercase; color: rgba(201,168,76,0.65); font-weight: 600; margin-bottom: 1.2rem; display: flex; align-items: center; justify-content: center; gap: 0.8rem; }
        .sdh-eyebrow::before, .sdh-eyebrow::after { content: ''; display: inline-block; width: 22px; height: 1px; background: rgba(201,168,76,0.4); }
        .sdh-title { font-family: 'Playfair Display', serif; font-size: clamp(1.8rem, 3vw, 2.8rem); font-weight: 400; color: #fff; margin: 0 0 0.6rem; letter-spacing: 0.04em; text-align: center; }
        .sdh-rule { width: 40px; height: 1px; background: linear-gradient(90deg, transparent, #c9a84c, transparent); margin: 0 auto 1.2rem; }
        .sdh-desc { font-size: 0.95rem; color: rgba(255,255,255,0.45); line-height: 1.9; font-weight: 300; max-width: 480px; margin: 0 auto 60px; text-align: center; }
        
        .diamond-layout { position: relative; width: 980px; height: 880px; margin: 0 auto; }
        .diamond-svg { position: absolute; inset: 0; width: 100%; height: 100%; pointer-events: none; z-index: 0; }
        
        .diamond-center { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 170px; height: 170px; border-radius: 50%; border: 1px solid rgba(201,168,76,0.3); background: radial-gradient(circle, rgba(201,168,76,0.08) 0%, #000 70%); display: flex; flex-direction: column; align-items: center; justify-content: center; z-index: 2; box-shadow: 0 0 80px rgba(201,168,76,0.08); }
        .diamond-center-label { font-family: 'Playfair Display', serif; font-size: 1.42rem; font-weight: 700; color: #c9a84c; letter-spacing: 0.1em; line-height: 1; }
        .diamond-center-sub { font-size: 0.58rem; letter-spacing: 0.32em; text-transform: uppercase; color: rgba(201,168,76,0.45); margin-top: 5px; }
        .diamond-center-ring { position: absolute; width: 210px; height: 210px; border-radius: 50%; border: 1px dashed rgba(201,168,76,0.1); }
        
        .d-service { position: absolute; width: 290px; min-height: 270px; padding: 22px 24px 18px; z-index: 1; background: rgba(10, 14, 20, 0.82); border: 1px solid rgba(201,168,76,0.45); clip-path: polygon(25% 6%, 75% 6%, 100% 50%, 75% 94%, 25% 94%, 0% 50%); box-shadow: 0 18px 38px rgba(0,0,0,0.26); filter: drop-shadow(0 0 4px rgba(201,168,76,0.28)); display: flex; flex-direction: column; justify-content: center; box-sizing: border-box; text-decoration: none; cursor: pointer; transition: border-color 220ms ease, filter 220ms ease, background-color 220ms ease; }
        .d-service:hover { border-color: #ffd166; background: rgba(20, 18, 12, 0.94); filter: drop-shadow(0 0 3px rgba(255,209,102,0.95)) drop-shadow(0 0 18px rgba(255,209,102,0.65)); }
        .d-service.top { top: 28px; left: 50%; transform: translateX(-50%); text-align: center; align-items: center; }
        .d-service.right { top: 50%; right: 14px; transform: translateY(-50%); text-align: center; align-items: center; }
        .d-service.bottom { bottom: 28px; left: 50%; transform: translateX(-50%); text-align: center; align-items: center; }
        .d-service.left { top: 50%; left: 14px; transform: translateY(-50%); text-align: center; align-items: center; }
        
        .d-service-cat, .d-service-title, .d-service-copy, .d-service-link { max-width: 220px; }
        .d-service.top .d-service-cat, .d-service.top .d-service-title, .d-service.top .d-service-copy, .d-service.bottom .d-service-cat, .d-service.bottom .d-service-title, .d-service.bottom .d-service-copy { max-width: 240px; }
        .d-service-cat { font-size: 0.62rem; letter-spacing: 0.22em; text-transform: uppercase; color: #c9a84c; margin: 0 0 0.5rem; }
        .d-service-title { font-family: 'Playfair Display', serif; font-size: clamp(1.02rem, 1.35vw, 1.45rem); font-weight: 400; color: #fff; margin: 0 0 0.6rem; line-height: 1.25; letter-spacing: 0.01em; }
        .d-service-copy { font-size: 0.8rem; color: rgba(255,255,255,0.42); line-height: 1.6; font-weight: 300; margin: 0; }
        .d-service-link { display: inline-flex; align-items: center; gap: 0.4rem; margin-top: 0.8rem; font-size: 0.66rem; letter-spacing: 0.15em; text-transform: uppercase; color: rgba(201,168,76,0.55); text-decoration: none; transition: color 200ms ease; }
        .d-service-link:hover { color: rgba(201,168,76,0.9); }
        .d-service-link::after { content: ' →'; }

        .why-section { position: relative; overflow: hidden; padding: 24px 40px; background: #000; }
        .why-section::before { content: 'WHY'; position: absolute; top: 42px; right: 4%; font-family: 'Playfair Display', serif; font-size: clamp(7rem, 18vw, 16rem); line-height: 1; font-weight: 700; color: rgba(201,168,76,0.035); letter-spacing: -0.08em; pointer-events: none; }
        .why-inner { position: relative; z-index: 1; display: grid; grid-template-columns: minmax(250px, 0.78fr) minmax(0, 1.22fr); gap: 100px; max-width: 1160px; margin: 0 auto; }
        .why-intro { align-self: start; position: sticky; top: 80px; }
        .why-eyebrow { display: flex; align-items: center; gap: 0.75rem; margin: 0 0 1.4rem; color: #c9a84c; font-size: 0.68rem; font-weight: 600; letter-spacing: 0.24em; text-transform: uppercase; }
        .why-eyebrow::before { content: ''; width: 30px; height: 1px; background: #c9a84c; }
        .why-title { margin: 0; color: #fff; font-family: 'Playfair Display', serif; font-size: clamp(2.4rem, 4.2vw, 4.5rem); font-weight: 400; line-height: 1.04; letter-spacing: -0.025em; }
        .why-title em { color: #c9a84c; font-style: italic; }
        .why-lead { max-width: 340px; margin: 2rem 0 0; padding-left: 1.2rem; border-left: 1px solid rgba(201,168,76,0.5); color: rgba(255,255,255,0.52); font-size: 0.92rem; font-weight: 300; line-height: 1.85; }
        .why-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1px; background: rgba(201,168,76,0.18); border: 1px solid rgba(201,168,76,0.18); }
        .why-item { min-height: 235px; padding: 34px 32px 30px; background: #050505; transition: background-color 220ms ease, box-shadow 220ms ease; }
        .why-item:hover { background: #0b0a07; box-shadow: inset 0 0 0 1px rgba(201,168,76,0.4), 0 0 28px rgba(201,168,76,0.08); }
        .why-item-mark { display: block; width: 32px; height: 1px; margin-bottom: 2rem; background: #c9a84c; }
        .why-item-title { margin: 0 0 1rem; color: #c9a84c; font-family: 'Playfair Display', serif; font-size: clamp(1.25rem, 1.8vw, 1.7rem); font-weight: 400; line-height: 1.2; }
        .why-item-copy { margin: 0; color: rgba(255,255,255,0.52); font-size: 0.87rem; font-weight: 300; line-height: 1.8; }
        @media (max-width: 900px) {
          .why-inner { grid-template-columns: 1fr; gap: 56px; }
          .why-intro { position: static; }
          .why-lead { max-width: 560px; }
        }
        @media (max-width: 600px) {
          .diamond-layout { grid-template-columns: 1fr; }
          .d-service { min-width: 0; }
          .why-section { padding: 24px 20px; }
          .why-grid { grid-template-columns: 1fr; }
          .why-item { min-height: auto; padding: 28px 24px; }
        }

        .philosophy-section { position: relative; overflow: hidden; padding: 24px 40px; background: #030303; }
        .philosophy-section::before { content: 'ESSENCE'; position: absolute; top: 44px; left: 50%; transform: translateX(-50%); color: rgba(201,168,76,0.035); font-family: 'Playfair Display', serif; font-size: clamp(5rem, 13vw, 12rem); font-weight: 700; line-height: 1; letter-spacing: 0.04em; white-space: nowrap; pointer-events: none; }
        .philosophy-inner { position: relative; z-index: 1; max-width: 930px; margin: 0 auto; text-align: center; }
        .philosophy-eyebrow { display: inline-flex; align-items: center; gap: 0.9rem; margin: 0 0 1.7rem; color: #c9a84c; font-size: 0.68rem; font-weight: 600; letter-spacing: 0.25em; text-transform: uppercase; }
        .philosophy-eyebrow::before, .philosophy-eyebrow::after { content: ''; width: 34px; height: 1px; background: rgba(201,168,76,0.65); }
        .philosophy-title { max-width: 760px; margin: 0 auto; color: #fff; font-family: 'Playfair Display', serif; font-size: clamp(2.2rem, 4.6vw, 4.6rem); font-weight: 400; line-height: 1.08; letter-spacing: -0.025em; }
        .philosophy-title em { color: #c9a84c; font-style: italic; }
        .philosophy-rule { width: 54px; height: 1px; margin: 2.2rem auto 2.5rem; background: linear-gradient(90deg, transparent, #c9a84c, transparent); }
        .philosophy-copy { max-width: 650px; margin: 0 auto; color: rgba(255,255,255,0.58); font-size: 1rem; font-weight: 300; line-height: 1.95; }
        .philosophy-copy p { margin: 0; }
        .philosophy-copy p + p { margin-top: 1.45rem; }
        .philosophy-closing { max-width: 600px; margin: 2.6rem auto 0; color: rgba(201,168,76,0.82); font-family: 'Playfair Display', serif; font-size: clamp(1.15rem, 1.7vw, 1.45rem); font-style: italic; line-height: 1.6; }
        @media (max-width: 600px) {
          .philosophy-section { padding: 24px 20px; }
          .philosophy-section::before { top: 38px; font-size: 4.5rem; }
          .philosophy-eyebrow { font-size: 0.6rem; letter-spacing: 0.18em; }
          .philosophy-eyebrow::before, .philosophy-eyebrow::after { width: 20px; }
          .philosophy-copy { font-size: 0.92rem; line-height: 1.85; }
        }

        .partner-section { position: relative; overflow: hidden; padding: 24px 15px; background: #000; }
        .partner-section::before { content: ''; position: absolute; inset: 0; pointer-events: none; }
        .partner-section::after { content: ''; position: absolute; width: 360px; height: 360px; top: 50%; left: 50%; transform: translate(-50%, -50%); border: 1px solid rgba(201,168,76,0.06); border-radius: 50%; box-shadow: 0 0 90px rgba(201,168,76,0.06); pointer-events: none; }
        .partner-inner { position: relative; z-index: 1; width: 100%; margin: 0; padding: 56px 54px 62px; text-align: center; background: rgba(10, 14, 20, 0.58); border: 1px solid rgba(201,168,76,0.48); border-radius: 14px; box-sizing: border-box; box-shadow: 0 0 0 1px rgba(201,168,76,0.08), 0 18px 50px rgba(0,0,0,0.28), 0 0 34px rgba(201,168,76,0.08); }
        .partner-eyebrow { display: inline-flex; align-items: center; gap: 0.9rem; margin: 0 0 1.6rem; color: #c9a84c; font-size: 0.68rem; font-weight: 600; letter-spacing: 0.25em; text-transform: uppercase; }
        .partner-eyebrow::before, .partner-eyebrow::after { content: ''; width: 34px; height: 1px; background: rgba(201,168,76,0.65); }
        .partner-title { max-width: 700px; margin: 0 auto; color: #fff; font-family: 'Playfair Display', serif; font-size: clamp(1.8rem, 3.4vw, 3.3rem); font-weight: 400; line-height: 1.08; letter-spacing: -0.025em; }
        .partner-title em { color: #c9a84c; font-style: italic; }
        .partner-rule { width: 54px; height: 1px; margin: 2.2rem auto 2rem; background: linear-gradient(90deg, transparent, #c9a84c, transparent); }
        .partner-intro { max-width: 650px; margin: 0 auto 2.6rem; color: rgba(255,255,255,0.58); font-size: 0.98rem; font-weight: 300; line-height: 1.85; }
        .partner-list { display: flex; flex-wrap: wrap; justify-content: center; gap: 10px; max-width: 840px; margin: 0 auto; }
        .partner-pill { padding: 0.75rem 1.1rem; border: 1px solid rgba(201,168,76,0.28); color: rgba(255,255,255,0.72); background: rgba(201,168,76,0.035); font-size: 0.72rem; letter-spacing: 0.08em; text-transform: uppercase; transition: border-color 200ms ease, color 200ms ease, background-color 200ms ease, transform 200ms ease; }
        .partner-pill:hover { border-color: rgba(255,209,102,0.78); color: #ffd166; background: rgba(201,168,76,0.1); transform: translateY(-2px); }
        .partner-copy { max-width: 650px; margin: 2.8rem auto 0; color: rgba(255,255,255,0.55); font-size: 0.92rem; font-weight: 300; line-height: 1.85; }
        .partner-closing { margin: 2rem 0 0; color: #c9a84c; font-family: 'Playfair Display', serif; font-size: clamp(1.2rem, 2vw, 1.65rem); font-style: italic; line-height: 1.5; }
        @media (max-width: 600px) {
          .partner-section { padding: 24px 15px; }
          .partner-section::before { inset: 0; }
          .partner-section::after { width: 260px; height: 260px; }
          .partner-inner { padding: 40px 22px 46px; }
          .partner-title { font-size: clamp(1.7rem, 8vw, 2.4rem); }
          .partner-intro, .partner-copy { font-size: 0.9rem; }
          .partner-pill { padding: 0.65rem 0.8rem; font-size: 0.62rem; }
        }

        .footer-section { padding: 44px 20px 32px; background: #02060b; color: rgba(255,255,255,0.88); }
        .footer-inner { max-width: 1240px; margin: 0 auto; display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; gap: 18px; }
        .footer-brand { font-family: 'Playfair Display', serif; font-size: 1.35rem; letter-spacing: 0.12em; font-weight: 700; color: #ffd166; margin: 0; }
        .footer-tagline { margin: 6px 0 0; color: rgba(255,255,255,0.65); font-size: 0.95rem; }
        .footer-links { display: flex; flex-wrap: wrap; gap: 16px; align-items: center; }
        .footer-link { color: rgba(255,255,255,0.78); text-decoration: none; font-size: 0.95rem; transition: color 180ms ease, transform 180ms ease; }
        .footer-link:hover { color: #ffd166; transform: translateY(-1px); }
        .footer-link-separator { width: 1px; height: 18px; background: rgba(255,255,255,0.16); margin: 0 6px; }

        @media (max-width: 1100px) {
          .diamond-layout { width: 100%; height: auto; display: grid; grid-template-columns: 1fr 1fr; gap: 32px; padding-top: 20px; }
          .diamond-svg { display: none; }
          .diamond-center { position: static; transform: none; grid-column: 1 / -1; width: 140px; height: 140px; margin: 0 auto 8px; }
          .diamond-center-ring { display: none; }
          .d-service { position: static; transform: none; width: 100%; text-align: left !important; }
          .d-service.top, .d-service.right, .d-service.bottom, .d-service.left { position: static; transform: none; }
          .d-service .d-diamond-icon { margin: 0 0 14px 0 !important; }
          .services-diamond-section { padding: 0 20px 32px; }
          .sdh-desc { margin-bottom: 36px; }
        }

        @media (max-width: 760px) {
          .diamond-layout { grid-template-columns: 1fr; }
          .hero-section { min-height: 82vh; }
          .hero-content { padding: 0 20px; }
          .hero-eyebrow { font-size: 0.7rem; padding: 0.5rem 1.1rem; }
          .hero-title, .hero-title-accent { font-size: clamp(2.1rem, 7vw, 3rem); }
          .hero-subtitle { font-size: 0.95rem; }
          .hero-sub-tagline { font-size: 0.85rem; }
          .hero-button, .hero-link { width: 100%; text-align: center; display: block; }
          .hero-actions { flex-direction: column; align-items: stretch; }
          .services-logo img { height: 100px; }
          .services-heading h2 { font-size: clamp(1.75rem, 3vw, 2.5rem); }
          .services-section.layout-stacked .service-card { grid-template-columns: 1fr; }
          .services-section.layout-stacked .service-card:nth-child(even) { direction: ltr; }
          .services-panel { padding: 20px; }
          .service-card { min-height: auto; padding: 22px; }
          .footer-inner { flex-direction: column; align-items: flex-start; }
          .footer-links { width: 100%; justify-content: flex-start; }
        }
      `}</style>

      {/* Hero Section */}
      <section className="hero-section">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="video-bg"
          src="/vid_img/main_video.mp4"
        />
        <div className="hero-overlay" />

        <div className="hero-content">
          <h1 className="hero-title">Beyond Destinations.</h1>
          <p className="hero-title-accent">
            Into Experiences That Define a Place.
          </p>
          <div className="hero-rule" />
          <p className="hero-subtitle">
            DMC Travel creates thoughtfully curated journeys through trusted
            global partnerships, connecting travel professionals with
            distinctive destinations, authentic encounters, and exceptional
            experiences.
          </p>
          <p className="hero-sub-tagline">
            For travel advisors seeking depth.&nbsp;&nbsp;·&nbsp;&nbsp;For
            destinations seeking meaningful connections.
          </p>
          <div className="hero-actions">
            <a className="hero-button" href="#services">
              Explore Our Partnerships
            </a>
            <a className="hero-link" href="/b2b">
              Become a B2B Partner
            </a>
          </div>
        </div>
      </section>

      {/* 
        SERVICES SECTION - LAYOUT & COLOR VARIATIONS
        
        Available Layouts:
        - layout-classic (default): 3-column grid
        - layout-split: Large card + 2 stacked cards
        - layout-stacked: Full-width alternating rows
        
        Available Color Themes (add class to service-card):
        - services-card-theme-blue: Deep blue tones with cyan accents
        - services-card-theme-warm: Warm earth tones with orange accents
        - services-card-theme-jewel: Jewel tones with mixed accents
        - (remove theme class for default gold scheme)
        
        USAGE EXAMPLES:
        1. Classic layout: <section id="services" className="services-section layout-classic">
        2. Split layout: <section id="services" className="services-section layout-split">
        3. Blue theme: <Link ... className="service-card services-card-theme-blue" data-type="partnership">
      */}
      <section id="services" className="services-section layout-classic">
        <div className="services-logo-container">
          <div className="services-logo">
            <Image
              src="/DMCTravel.png"
              alt="DMC Travel"
              width={480}
              height={160}
              style={{
                height: 160,
                width: "auto",
                objectFit: "contain",
                filter: "drop-shadow(0 8px 40px rgba(201,168,76,0.3))",
                opacity: 0.95,
              }}
            />
          </div>
        </div>

        {/* About Section */}
        <div className="about-section">
          <span className="about-deco" aria-hidden="true">
            DMC
          </span>
          <div className="about-inner">
            <div className="about-left">
              <p className="about-eyebrow">About DMC Travel</p>
              <h2 className="about-headline">
                A <em>Different</em> Approach to Destination Partnerships
              </h2>
              <div className="about-vline" />
            </div>
            <div className="about-right">
              <p className="about-pull">
                &ldquo;The most memorable journeys are not defined by how many
                places travelers visit, but by how deeply they experience
                them.&rdquo;
              </p>
              <div className="about-body">
                <p>
                  Built on years of expertise across{" "}
                  <strong>
                    international travel, luxury experiences, educational
                    travel, MICE, and curated group journeys
                  </strong>
                  , DMC Travel connects travel professionals with carefully
                  selected destination partners who share our commitment to
                  authenticity, creativity, and exceptional service.
                </p>
                <p>
                  Our approach is <em>intentionally selective</em>. We seek
                  destinations, experiences, and partners that offer something
                  beyond the expected — places where culture, heritage,
                  gastronomy, nature, and local connections come together to
                  create truly meaningful journeys.
                </p>
                <p>
                  Through our network across North America and international
                  markets, we help travel professionals{" "}
                  <strong>discover, promote, and deliver</strong> extraordinary
                  experiences for their clients.
                </p>
              </div>
              <div className="about-tagline">
                North America &middot; International Markets
              </div>
            </div>
          </div>
        </div>

        {/* ── Diamond Services ── */}
        <div className="services-diamond-section">
          <p className="sdh-eyebrow">Our Services</p>
          <h2 className="sdh-title">
            Curated Solutions for the Global Travel Community
          </h2>
          <div className="sdh-rule" />
          <p className="sdh-desc">
            Four specialized pathways for travel professionals seeking depth,
            authenticity, and meaningful destination partnerships.
          </p>

          <div className="diamond-layout">
            {/* SVG — diamond outline + dashed connectors */}
            <svg
              className="diamond-svg"
              viewBox="0 0 880 880"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <polygon
                points="440,60 820,440 440,820 60,440"
                fill="none"
                stroke="rgba(201,168,76,0.07)"
                strokeWidth="1"
              />
              <line
                x1="440"
                y1="350"
                x2="440"
                y2="218"
                stroke="rgba(201,168,76,0.22)"
                strokeWidth="1"
                strokeDasharray="3 8"
              />
              <line
                x1="530"
                y1="440"
                x2="662"
                y2="440"
                stroke="rgba(201,168,76,0.22)"
                strokeWidth="1"
                strokeDasharray="3 8"
              />
              <line
                x1="440"
                y1="530"
                x2="440"
                y2="662"
                stroke="rgba(201,168,76,0.22)"
                strokeWidth="1"
                strokeDasharray="3 8"
              />
              <line
                x1="350"
                y1="440"
                x2="218"
                y2="440"
                stroke="rgba(201,168,76,0.22)"
                strokeWidth="1"
                strokeDasharray="3 8"
              />
              <circle cx="440" cy="218" r="3" fill="rgba(201,168,76,0.4)" />
              <circle cx="662" cy="440" r="3" fill="rgba(201,168,76,0.4)" />
              <circle cx="440" cy="662" r="3" fill="rgba(201,168,76,0.4)" />
              <circle cx="218" cy="440" r="3" fill="rgba(201,168,76,0.4)" />
            </svg>

            {/* Center circle */}
            <div className="diamond-center">
              <div className="diamond-center-ring" />
              <span className="diamond-center-label">DMC</span>
              <span className="diamond-center-sub">Travel</span>
            </div>

            {/* Top — FAM Experiences */}
            <Link href="/fam" className="d-service top">
              <p className="d-service-cat">FAM Experiences</p>
              <h3 className="d-service-title">
                Travel Advisor FAM Experiences
              </h3>
              <p className="d-service-copy">
                Immersive itineraries for travel professionals to experience
                destinations firsthand — building the confidence and knowledge
                to inspire clients.
              </p>
              <span className="d-service-link">Explore</span>
            </Link>

            {/* Right — Signature Guaranteed Departures */}
            <Link href="#" className="d-service right">
              <p className="d-service-cat">Small-Group Journeys</p>
              <h3 className="d-service-title">
                Signature Guaranteed Departures
              </h3>
              <p className="d-service-copy">
                Thoughtfully crafted small-group journeys for curious travelers
                seeking authentic discovery — culture, heritage, gastronomy, and
                meaningful connection.
              </p>
              <span className="d-service-link">Explore</span>
            </Link>

            {/* Bottom — Bespoke Travel */}
            <Link href="/b2b" className="d-service bottom">
              <p className="d-service-cat">Tailor-Made</p>
              <h3 className="d-service-title">Bespoke Travel Design</h3>
              <p className="d-service-copy">
                Tailor-made journeys for discerning travelers, private groups,
                families, and MICE experiences through our global DMC
                partnerships.
              </p>
              <span className="d-service-link">Explore</span>
            </Link>

            {/* Left — Destination Representation */}
            <Link href="/representation" className="d-service left">
              <p className="d-service-cat">Representation</p>
              <h3 className="d-service-title">Destination Representation</h3>
              <p className="d-service-copy">
                Supporting DMCs, tourism organizations, and experience providers
                seeking stronger visibility within North America and India.
              </p>
              <span className="d-service-link">Explore</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Why DMC Travel */}
      <section className="why-section" aria-labelledby="why-dmc-title">
        <div className="why-inner">
          <div className="why-intro">
            <p className="why-eyebrow">Why DMC Travel</p>
            <h2 id="why-dmc-title" className="why-title">
              Expertise.
              <br />
              <em>Relationships.</em>
              <br />
              Authenticity.
            </h2>
            <p className="why-lead">
              We create meaningful connections between exceptional destinations
              and the travel professionals who bring them to life.
            </p>
          </div>

          <div className="why-grid">
            <article className="why-item">
              <span className="why-item-mark" aria-hidden="true" />
              <h3 className="why-item-title">A Boutique Approach</h3>
              <p className="why-item-copy">
                We believe in quality over quantity. Our partnerships are
                carefully developed to ensure every destination and experience
                aligns with our standards.
              </p>
            </article>
            <article className="why-item">
              <span className="why-item-mark" aria-hidden="true" />
              <h3 className="why-item-title">
                Global Connections, Local Expertise
              </h3>
              <p className="why-item-copy">
                We collaborate with trusted destination specialists who
                understand their regions intimately and bring genuine local
                knowledge to every journey.
              </p>
            </article>
            <article className="why-item">
              <span className="why-item-mark" aria-hidden="true" />
              <h3 className="why-item-title">
                Designed for Travel Professionals
              </h3>
              <p className="why-item-copy">
                Our focus is B2B. We understand the needs of travel advisors,
                tour operators, and industry partners because we are built
                around collaboration.
              </p>
            </article>
            <article className="why-item">
              <span className="why-item-mark" aria-hidden="true" />
              <h3 className="why-item-title">Beyond the Ordinary</h3>
              <p className="why-item-copy">
                We look beyond iconic landmarks to uncover culture, traditions,
                hidden gems, culinary experiences, and meaningful encounters
                that create a deeper understanding of a destination.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Our Destination Philosophy */}
      <section
        className="philosophy-section"
        aria-labelledby="philosophy-title"
      >
        <div className="philosophy-inner">
          <p className="philosophy-eyebrow">Our Destination Philosophy</p>
          <h2 id="philosophy-title" className="philosophy-title">
            Discover the Character Behind the <em>Destination</em>
          </h2>
          <div className="philosophy-rule" aria-hidden="true" />
          <div className="philosophy-copy">
            <p>A destination is more than its famous attractions.</p>
            <p>
              It is the stories of its people, the traditions passed through
              generations, the landscapes that shape its identity, and the
              experiences that cannot be replicated elsewhere.
            </p>
          </div>
          <p className="philosophy-closing">
            At DMC Travel, we seek to reveal the essence of each destination,
            creating journeys that inspire curiosity, connection, and
            appreciation.
          </p>
        </div>
      </section>

      {/* Partner With Us */}
      <section className="partner-section" aria-labelledby="partner-title">
        <div className="partner-inner">
          <p className="partner-eyebrow">Partner With Us</p>
          <h2 id="partner-title" className="partner-title">
            Creating Meaningful Connections <em>Across Markets</em>
          </h2>
          <div className="partner-rule" aria-hidden="true" />
          <p className="partner-intro">We collaborate with:</p>
          <div className="partner-list" aria-label="Our partner network">
            <span className="partner-pill">
              Destination Management Companies
            </span>
            <span className="partner-pill">Tourism Boards</span>
            <span className="partner-pill">Hotels &amp; Resorts</span>
            <span className="partner-pill">Travel Advisors</span>
            <span className="partner-pill">Tour Operators</span>
            <span className="partner-pill">Experience Providers</span>
            <span className="partner-pill">MICE Specialists</span>
          </div>
          <p className="partner-copy">
            Whether you are looking to introduce a destination to new markets,
            develop unique travel products, or connect with trusted travel
            professionals, we welcome the opportunity to collaborate.
          </p>
          <p className="partner-closing">
            Together, we create journeys that leave a lasting impression.
          </p>
        </div>
      </section>

      {/* ─────────────── FOOTER ─────────────── */}
      <footer
        style={{
          background: "#060e1a",
          padding: "40px 48px 32px",
          borderTop: "0.5px solid rgba(201,168,76,0.12)",
        }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 24,
              marginBottom: 28,
            }}
          >
            <div>
              <div
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 18,
                  fontWeight: 700,
                  color: "#c9a84c",
                  letterSpacing: "0.06em",
                }}
              >
                DMC Travel
              </div>
              <div
                style={{
                  fontSize: 9.5,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "rgba(250,248,243,0.3)",
                  marginTop: 3,
                }}
              >
                NG Global Advisory & Consulting LLC (United States)
              </div>
            </div>
            <div style={{ display: "flex", gap: 28, flexWrap: "wrap" }}>
              {[
                "First page",
                "Second page",
                "Third page",
                "Terms and Conditions",
                "Privacy Policy",
              ].map((l) => (
                <a
                  key={l}
                  href={`#${l.toLowerCase()}`}
                  style={{
                    fontSize: 11.5,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "rgba(250,248,243,0.35)",
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLAnchorElement).style.color =
                      "#c9a84c")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLAnchorElement).style.color =
                      "rgba(250,248,243,0.35)")
                  }
                >
                  {l}
                </a>
              ))}
            </div>
          </div>
          <div
            style={{
              height: "0.5px",
              background: "rgba(201,168,76,0.1)",
              marginBottom: 20,
            }}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 8,
            }}
          >
            <p
              style={{
                fontSize: 11.5,
                color: "rgba(250,248,243,0.2)",
                letterSpacing: "0.04em",
              }}
            >
              © 2026 DMC Travel · NG Global Advisory & Consulting LLC. All
              rights reserved.
            </p>
            <p
              style={{
                fontSize: 11.5,
                color: "rgba(201,168,76,0.35)",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              -
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

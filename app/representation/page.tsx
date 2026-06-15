"use client";

import Link from "next/link";
import { useState, useRef } from "react";

const serviceImages: Record<string, string> = {
  "Bidding & Client Coordination": "/vid_img/bid_cord.jpeg",
  "Local Market Relationships": "/vid_img/local_rep.jpeg",
  "Event & Show Representation": "/vid_img/Event_show_rep.jpeg",
  "Americas-Focused Strategy": "/vid_img/full_package.jpeg",
};

export default function RepresentationPage() {
  const [open, setOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(
    "Bidding & Client Coordination",
  );
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement | null>(null);

  function openForm(service: string) {
    setSelectedService(service);
    setOpen(true);
    setSent(false);
    setError(null);
  }
  function closeForm() {
    setOpen(false);
  }

  function validateEmail(email: string) {
    return /\S+@\S+\.\S+/.test(email);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    const form = formRef.current;
    if (!form) return;
    const formData = new FormData(form);
    const name = formData.get("name")?.toString().trim() ?? "";
    const email = formData.get("email")?.toString().trim() ?? "";
    if (!name || !email) {
      setError("Please provide your name and email.");
      return;
    }
    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setSubmitting(true);
    // Simulate submission. Replace with API call when ready.
    await new Promise((r) => setTimeout(r, 900));
    setSubmitting(false);
    setSent(true);
    form.reset();
  }

  return (
    <div
      style={{
        fontFamily: "'Inter', sans-serif",
        color: "#fff",
        background: "#071826",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600&family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap');
        .rep-hero { min-height: 68vh; display:flex; align-items:center; justify-content:center; position:relative; padding:60px 20px; background-image: linear-gradient(180deg, rgba(4,19,30,0.6), rgba(4,19,30,0.9)), url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80'); background-size:cover; background-position:center; }
        .rep-container { max-width:1100px; margin:0 auto; position:relative; z-index:2; text-align:left; color:#fff; }
        .rep-breadcrumb { font-size:0.9rem; color:rgba(255,255,255,0.75); margin-bottom:12px; }
        .rep-title { font-family:'Playfair Display', serif; font-size:clamp(2rem,4vw,3rem); margin:0 0 12px; }
        .rep-lead { color:rgba(255,255,255,0.9); font-size:1.05rem; line-height:1.7; max-width:840px; }
        .rep-panel { margin-top:28px; background:rgba(255,255,255,0.04); border:1px solid rgba(255,255,255,0.06); padding:26px; border-radius:18px; display:grid; grid-template-columns: 1fr 380px; gap:20px; align-items:start; }
        .rep-list { display:flex; flex-direction:column; gap:14px; }
        .rep-item { background:rgba(255,255,255,0.03); padding:14px 16px; border-radius:12px; transition: transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease; }
        .rep-item:hover { transform: translateY(-6px); box-shadow: 0 20px 40px rgba(0,0,0,0.45); border-color: rgba(255,255,255,0.12); cursor:pointer; }
        .rep-item:active { transform: translateY(-2px); }
        .rep-cta { margin-top:18px; display:flex; gap:12px; flex-wrap:wrap; align-items:center; }
        .btn { padding:12px 18px; border-radius:999px; text-decoration:none; font-weight:600; display:inline-flex; align-items:center; justify-content:center; transition: transform 220ms cubic-bezier(.2,.9,.3,1), box-shadow 220ms ease, background 220ms ease, border-color 220ms ease, color 220ms ease; }

        /* Primary CTA - Contact Us */
        .btn-primary {
          background: linear-gradient(180deg,#ffd166,#ffcd3a);
          color: #08171f;
          box-shadow: 0 8px 30px rgba(255,193,66,0.12);
          border: 1px solid rgba(255,209,102,0.14);
        }
        .btn-primary:hover {
          transform: translateY(-4px) scale(1.01);
          box-shadow: 0 18px 50px rgba(255,193,66,0.18);
        }
        .btn-primary:active { transform: translateY(-2px); }
        .btn-primary:focus { outline: none; box-shadow: 0 0 0 4px rgba(255,209,102,0.12); }

        /* Secondary CTA - Back to Home */
        .btn-secondary {
          background: rgba(255,255,255,0.02);
          color: #fff;
          border: 1px solid rgba(255,255,255,0.12);
          padding: 10px 16px;
        }
        .btn-secondary:hover {
          transform: translateY(-3px);
          background: linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02));
          border-color: rgba(255,209,102,0.22);
          color: #ffd166;
          box-shadow: 0 12px 36px rgba(0,0,0,0.45);
        }
        .btn-secondary:active { transform: translateY(-1px); }
        .btn-secondary:focus { outline: none; box-shadow: 0 0 0 4px rgba(255,209,102,0.08); }

        /* Make CTAs more accessible when stacked on small screens */
        @media (max-width:640px) {
          .rep-cta { flex-direction:column; align-items:stretch; }
          .btn { width:100%; }
          .btn-primary { padding:12px 16px; }
          .btn-secondary { padding:10px 14px; }
        }
        .rep-aside { text-align:center; padding:18px; border-radius:12px; background:linear-gradient(180deg, rgba(255,255,255,0.02), rgba(0,0,0,0.12)); }
        .rep-image { width:100%; height:220px; object-fit:cover; border-radius:10px; display:block; margin-bottom:12px; }

        /* Form */
        .rep-form { display:flex; flex-direction:column; gap:12px; padding:12px; }
        .rep-row { display:flex; gap:12px; }
        .rep-field { flex:1; display:flex; flex-direction:column; }
        .rep-input, .rep-select { background:rgba(255,255,255,0.02); border:1px solid rgba(255,255,255,0.08); padding:12px 14px; color:#fff; border-radius:14px; }
        .rep-textarea { min-height:180px; resize:vertical; padding:16px 18px; border:1px solid rgba(255,255,255,0.12); border-radius:24px; background:rgba(255,255,255,0.05); box-shadow: inset 0 10px 30px rgba(0,0,0,0.18); line-height:1.85; }
        .rep-checkboxes { display:flex; flex-direction:column; gap:8px; }
        .form-error { color:#ffb4b4; font-weight:600; }
        .form-success { color:#b7f5c6; font-weight:700; }

        /* Modal */
        .rep-modal-overlay { position:fixed; inset:0; background:rgba(2,6,11,0.6); display:flex; align-items:center; justify-content:center; z-index:9999; padding:24px; }
        .rep-modal { width:100%; max-width:980px; height:80vh; background:linear-gradient(180deg,#071826,#04101a); border-radius:12px; position:relative; box-shadow:0 30px 80px rgba(0,0,0,0.6); overflow:hidden; display:flex; }
        .rep-modal-close { position:absolute; right:12px; top:10px; z-index:3; background:transparent; border:none; color:#fff; font-size:20px; cursor:pointer; }
        .rep-iframe { width:100%; height:100%; border:0; display:block; }
        .rep-modal-left { flex:1; padding:18px 20px; overflow:auto; }
        .rep-modal-right { width:380px; background:linear-gradient(180deg, rgba(255,255,255,0.02), rgba(0,0,0,0.06)); padding:18px; }

        @media (max-width:980px) { .rep-panel { grid-template-columns:1fr; } .rep-row { flex-direction:column; } .rep-modal { height:90vh; flex-direction:column; } .rep-modal-right { width:100%; } }
        @media (max-width:768px) { .rep-hero { padding:40px 16px; } .rep-title { font-size:clamp(1.8rem, 3.5vw, 2.5rem); margin-bottom:8px; } .rep-lead { font-size:0.95rem; } .rep-panel { padding:20px; gap:16px; } .rep-item { padding:12px 14px; } .rep-modal { max-width:95vw; height:85vh; } .rep-modal-left { padding:16px 18px; } .rep-form { gap:10px; padding:10px; } .rep-row { gap:10px; } .rep-input, .rep-select { padding:10px 12px; font-size:14px; } .rep-textarea { min-height:140px; padding:12px 14px; } .btn { padding:10px 16px; font-size:14px; } .rep-aside { padding:16px; } .rep-image { height:200px; } }
        @media (max-width:640px) { .rep-hero { min-height:60vh; padding:32px 12px; } .rep-breadcrumb { font-size:0.8rem; margin-bottom:8px; } .rep-title { font-size:clamp(1.5rem, 3vw, 2rem); margin-bottom:6px; } .rep-lead { font-size:0.9rem; line-height:1.6; } .rep-panel { grid-template-columns:1fr; padding:16px; gap:12px; } .rep-list { gap:10px; } .rep-item { padding:10px 12px; } .rep-cta { flex-direction:column; gap:8px; } .btn { width:100%; padding:12px 16px; } .rep-modal { max-width:100vw; height:92vh; border-radius:8px; } .rep-modal-close { right:8px; top:8px; font-size:24px; } .rep-modal-left { padding:14px 16px; overflow-y:auto; } .rep-modal-right { width:100%; padding:14px; margin-top:12px; } h2 { font-size:1.4rem !important; } .rep-form { gap:10px; padding:8px; } .rep-row { gap:8px; } .rep-field label { font-size:11px; margin-bottom:4px; } .rep-input, .rep-select { padding:9px 10px; font-size:13px; border-radius:10px; } .rep-textarea { min-height:120px; padding:12px 14px; font-size:13px; border-radius:16px; } .rep-checkboxes { gap:6px; } .form-error, .form-success { font-size:13px; } .rep-image { height:180px; margin-bottom:10px; } .rep-aside p { font-size:12px; line-height:1.5; } }
        @media (max-width:480px) { .rep-hero { min-height:55vh; padding:24px 10px; } .rep-title { font-size:clamp(1.3rem, 2.8vw, 1.8rem); } .rep-lead { font-size:0.85rem; } .rep-panel { padding:12px; gap:10px; } .rep-item { padding:8px 10px; margin-bottom:2px; } .rep-cta { gap:6px; } .btn { padding:10px 12px; font-size:13px; border-radius:999px; } .rep-modal { height:95vh; } .rep-modal-left { padding:12px 14px; } .rep-form { gap:8px; padding:6px; } .rep-row { gap:6px; } .rep-field label { font-size:10px; } .rep-input, .rep-select { padding:8px 9px; font-size:12px; } .rep-textarea { min-height:100px; padding:10px 12px; } .rep-modal-right { padding:12px; } .rep-image { height:150px; border-radius:6px; } }
      `}</style>

      <section className="rep-hero">
        <div className="rep-container">
          <div className="rep-breadcrumb">Representation · Americas</div>
          <h1 className="rep-title">
            Representation Services — North & South America
          </h1>
          <p className="rep-lead">
            We act as your local partner across the Americas — bidding for
            clients, coordinating business locally, and representing your
            company at travel shows and events so you can scale with confidence.
          </p>

          <div className="rep-panel">
            <div>
              <div className="rep-list">
                <div
                  role="button"
                  tabIndex={0}
                  onClick={() => openForm("Bidding & Client Coordination")}
                  onKeyDown={(e) =>
                    e.key === "Enter" &&
                    openForm("Bidding & Client Coordination")
                  }
                  className="rep-item"
                >
                  <strong>Bidding & Client Coordination</strong>
                  <div
                    style={{ marginTop: 8, color: "rgba(255,255,255,0.85)" }}
                  >
                    Prepare local bids, lead vendor negotiations, and coordinate
                    ground operations so proposals win and run smoothly.
                  </div>
                </div>

                <div
                  role="button"
                  tabIndex={0}
                  onClick={() => openForm("Local Market Relationships")}
                  onKeyDown={(e) =>
                    e.key === "Enter" && openForm("Local Market Relationships")
                  }
                  className="rep-item"
                >
                  <strong>Local Market Relationships</strong>
                  <div
                    style={{ marginTop: 8, color: "rgba(255,255,255,0.85)" }}
                  >
                    We maintain trusted regional contacts — hotels, ground
                    operators, venues and media — to open doors and streamline
                    partnerships.
                  </div>
                </div>

                <div
                  role="button"
                  tabIndex={0}
                  onClick={() => openForm("Event & Show Representation")}
                  onKeyDown={(e) =>
                    e.key === "Enter" && openForm("Event & Show Representation")
                  }
                  className="rep-item"
                >
                  <strong>Event & Show Representation</strong>
                  <div
                    style={{ marginTop: 8, color: "rgba(255,255,255,0.85)" }}
                  >
                    Attend travel shows, sales missions and trade events on your
                    behalf to network, pitch, and protect your brand presence.
                  </div>
                </div>

                <div
                  role="button"
                  tabIndex={0}
                  onClick={() => openForm("Americas-Focused Strategy")}
                  onKeyDown={(e) =>
                    e.key === "Enter" && openForm("Americas-Focused Strategy")
                  }
                  className="rep-item"
                >
                  <strong>Americas-Focused Strategy</strong>
                  <div
                    style={{ marginTop: 8, color: "rgba(255,255,255,0.85)" }}
                  >
                    Tailored approaches for North, Central and South American
                    markets with regional language support and cultural nuance.
                  </div>
                </div>

                <div style={{ display: "flex", gap: 12 }} className="rep-cta">
                  <a className="btn btn-primary" href="#contact">
                    Contact Us
                  </a>
                  <Link href="/" className="btn btn-secondary">
                    Back to Home
                  </Link>
                </div>
              </div>
            </div>

            <aside className="rep-aside">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="rep-image"
                src="/vid_img/representation.jpeg"
                alt="Representation"
              />
              <div
                style={{
                  fontSize: 14,
                  color: "rgba(255,255,255,0.9)",
                  marginBottom: 8,
                }}
              >
                Local teams, trusted networks, better outcomes.
              </div>
              <div style={{ color: "rgba(255,255,255,0.72)", fontSize: 13 }}>
                Focused coverage across the Americas — bilingual teams
                available.
              </div>
            </aside>
          </div>
        </div>
      </section>
      {open && (
        <div className="rep-modal-overlay" onClick={closeForm}>
          <div className="rep-modal" onClick={(e) => e.stopPropagation()}>
            <button
              className="rep-modal-close"
              onClick={closeForm}
              aria-label="Close form"
            >
              ✕
            </button>
            <div className="rep-modal-left">
              <h2
                style={{
                  margin: 0,
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "1.6rem",
                }}
              >
                {selectedService}
              </h2>
              <p style={{ color: "rgba(255,255,255,0.82)", marginTop: 8 }}>
                Fill the short form and our regional team will follow up about
                bidding, local coordination, or event representation.
              </p>

              <form ref={formRef} className="rep-form" onSubmit={handleSubmit}>
                {error && <div className="form-error">{error}</div>}
                {sent && (
                  <div className="form-success">
                    Thanks — we&apos;ll contact you shortly.
                  </div>
                )}

                <div className="rep-row">
                  <div className="rep-field">
                    <label
                      style={{
                        fontSize: 12,
                        color: "rgba(255,255,255,0.78)",
                        marginBottom: 6,
                      }}
                    >
                      Full name*
                    </label>
                    <input
                      name="name"
                      className="rep-input"
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div className="rep-field">
                    <label
                      style={{
                        fontSize: 12,
                        color: "rgba(255,255,255,0.78)",
                        marginBottom: 6,
                      }}
                    >
                      Company
                    </label>
                    <input
                      name="company"
                      className="rep-input"
                      placeholder="Company name"
                    />
                  </div>
                </div>

                <div className="rep-row">
                  <div className="rep-field">
                    <label
                      style={{
                        fontSize: 12,
                        color: "rgba(255,255,255,0.78)",
                        marginBottom: 6,
                      }}
                    >
                      Email*
                    </label>
                    <input
                      name="email"
                      className="rep-input"
                      placeholder="you@company.com"
                    />
                  </div>
                  <div className="rep-field">
                    <label
                      style={{
                        fontSize: 12,
                        color: "rgba(255,255,255,0.78)",
                        marginBottom: 6,
                      }}
                    >
                      Phone
                    </label>
                    <input
                      name="phone"
                      className="rep-input"
                      placeholder="Optional"
                    />
                  </div>
                </div>

                <div className="rep-row">
                  <div className="rep-field">
                    <label
                      style={{
                        fontSize: 12,
                        color: "rgba(255,255,255,0.78)",
                        marginBottom: 6,
                      }}
                    >
                      Primary market
                    </label>
                    <select name="market" className="rep-select">
                      <option>United States</option>
                      <option>Canada</option>
                      <option>Mexico</option>
                      <option>Brazil</option>
                      <option>Peru</option>
                      <option>Argentina</option>
                      <option>Other (Americas)</option>
                    </select>
                  </div>
                </div>

                <input type="hidden" name="service" value={selectedService} />

                <div>
                  <label
                    style={{
                      fontSize: 12,
                      color: "rgba(255,255,255,0.78)",
                      marginBottom: 6,
                    }}
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    className="rep-textarea"
                    placeholder="Share a quick brief, timeline, or key priorities"
                  />
                </div>

                <div style={{ display: "flex", gap: 12, marginTop: 8 }}>
                  <button
                    className="btn btn-primary"
                    type="submit"
                    disabled={submitting}
                  >
                    {submitting ? "Sending…" : "Submit request"}
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={closeForm}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
            <div className="rep-modal-right">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={serviceImages[selectedService] ?? "/vid_img/bid_cord.jpeg"}
                alt={selectedService}
                style={{ width: "100%", borderRadius: 8, marginBottom: 12 }}
              />
              <div
                style={{
                  color: "rgba(255,255,255,0.88)",
                  fontWeight: 700,
                  marginBottom: 6,
                }}
              >
                What we do
              </div>
              <div style={{ color: "rgba(255,255,255,0.76)", lineHeight: 1.6 }}>
                We bid for clients, coordinate local vendors, and represent your
                business at trade shows across the Americas. Provide a few
                details and we&apos;ll provide a tailored plan.
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

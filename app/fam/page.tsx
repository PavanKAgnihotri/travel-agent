import Link from "next/link";

export default function FamPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundImage:
          "linear-gradient(180deg, rgba(2,16,28,0.1), rgba(6,29,48,0.1)), url('https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1600&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "#fff",
        fontFamily: "'Inter', sans-serif",
        padding: "40px 24px",
      }}
    >
      <style>{`
        @media (max-width:768px) { div[style*="padding: 40px"] { padding: 32px 18px !important; } }
        @media (max-width:640px) { div[style*="padding: 40px"] { padding: 24px 14px !important; } }
        @media (max-width:480px) { div[style*="padding: 40px"] { padding: 18px 10px !important; } }
      `}</style>
      <main style={{ maxWidth: 1120, margin: "0 auto" }}>
        <section
          style={{
            padding: "36px 32px",
            borderRadius: 32,
            background: "rgba(4, 21, 38, 0.82)",
            border: "1px solid rgba(255,255,255,0.15)",
            backdropFilter: "blur(18px)",
            boxShadow: "0 40px 120px rgba(0, 0, 0, 0.35)",
          }}
        >
          <style>{`
            @media (max-width:768px) { section { padding: 28px 24px !important; border-radius: 24px !important; } }
            @media (max-width:640px) { section { padding: 20px 16px !important; border-radius: 20px !important; } }
            @media (max-width:480px) { section { padding: 16px 12px !important; border-radius: 16px !important; } }
          `}</style>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 24,
            }}
          >
            <style>{`
              @media (max-width:768px) { div[style*="marginBottom: 24"] { flex-direction: column; align-items: flex-start; gap: 12px; margin-bottom: 18px !important; } }
              @media (max-width:640px) { div[style*="marginBottom: 24"] { margin-bottom: 14px !important; } }
            `}</style>
            <p
              style={{
                margin: 0,
                color: "#ffd166",
                textTransform: "uppercase",
                letterSpacing: "0.18em",
                fontSize: "0.85rem",
              }}
            >
              Familiarization Trips
            </p>
            <Link
              href="/"
              style={{
                display: "inline-block",
                color: "#ffd166",
                textDecoration: "none",
                fontWeight: 600,
              }}
            >
              ← Back to services
            </Link>
          </div>
          <h1
            style={{
              margin: "18px 0 26px",
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2.5rem, 4vw, 5rem)",
              lineHeight: 1.02,
            }}
          >
            Familiarization Trips — Curated Learning Journeys
          </h1>
          <p
            style={{
              color: "rgba(255,255,255,0.82)",
              fontSize: "clamp(0.9rem, 2vw, 1.05rem)",
              lineHeight: 1.8,
              marginBottom: 36,
            }}
          >
            Immerse travel professionals in hand-curated destination experiences
            that build product knowledge, storytelling assets, and on-the-ground
            relationships to drive bookings and lasting partnerships.
          </p>
          <style>{`
            @media (max-width:640px) { h1 { margin: 12px 0 18px !important; } p[style*="marginBottom: 36"] { margin-bottom: 24px !important; } }
            @media (max-width:480px) { h1 { margin: 8px 0 14px !important; } p[style*="marginBottom: 36"] { margin-bottom: 18px !important; } }
          `}</style>

          {/* FAM trip feature box - hoverable info card with image and trip details */}
          <style>{`
            .fam-card-link {
              display: grid;
              grid-template-columns: minmax(260px, 1fr) 1.2fr;
              gap: 24px;
              padding: 26px;
              border-radius: 28px;
              background: rgba(255,255,255,0.06);
              border: 1px solid rgba(255,255,255,0.18);
              box-shadow: 0 24px 60px rgba(0,0,0,0.24);
              text-decoration: none;
              color: inherit;
              cursor: pointer;
              transition: transform 220ms ease, box-shadow 220ms ease, border-color 220ms ease;
            }
            .fam-card-link:hover {
              transform: translateY(-4px);
              box-shadow: 0 34px 90px rgba(0,0,0,0.32);
              border-color: rgba(255,255,255,0.32);
            }
            @media (max-width:768px) {
              .fam-card-link { grid-template-columns: 1fr; gap: 18px; padding: 20px; border-radius: 24px; }
              h2 { font-size: 1.6rem !important; }
              p { font-size: 0.95rem !important; }
            }
            @media (max-width:640px) {
              .fam-card-link { gap: 16px; padding: 18px; border-radius: 20px; margin-top: 16px !important; }
              h2 { font-size: 1.4rem !important; }
              span { font-size: 0.8rem !important; }
              p { font-size: 0.9rem !important; }
            }
            @media (max-width:480px) {
              .fam-card-link { gap: 12px; padding: 14px; border-radius: 16px; margin-top: 12px !important; }
              h2 { font-size: 1.2rem !important; }
              span { font-size: 0.75rem !important; }
              p { font-size: 0.85rem !important; }
            }
          `}</style>
          <Link href="/" className="fam-card-link">
            <div
              style={{
                minHeight: 360,
                borderRadius: 24,
                overflow: "hidden",
                background:
                  "linear-gradient(180deg, rgba(0,0,0,0.08), rgba(0,0,0,0.3))",
              }}
            >
              <style>{`
                @media (max-width:768px) { div[style*="minHeight: 360"] { min-height: 280px; border-radius: 20px; } }
                @media (max-width:640px) { div[style*="minHeight: 360"] { min-height: 240px; border-radius: 16px; } }
                @media (max-width:480px) { div[style*="minHeight: 360"] { min-height: 200px; border-radius: 12px; } }
              `}</style>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/vid_img/NL.png"
                alt="Northern lights over snowy landscape"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div>
                <span
                  style={{
                    display: "inline-flex",
                    marginBottom: 16,
                    color: "#ffd166",
                    textTransform: "uppercase",
                    letterSpacing: "0.16em",
                    fontSize: "0.82rem",
                  }}
                >
                  Aurora Adventure
                </span>
                <h2
                  style={{
                    margin: "0 0 12px",
                    fontSize: "2.1rem",
                    fontFamily: "'Playfair Display', serif",
                    lineHeight: 1.05,
                  }}
                >
                  Northern Lights FAM Journey
                </h2>
                <p
                  style={{
                    color: "rgba(255,255,255,0.85)",
                    margin: "8px 0 16px",
                    lineHeight: 1.6,
                  }}
                >
                  Experience the magic of the Aurora Borealis with an elevated
                  familiarization trip that blends luxury hospitality, expert
                  guides, and premium storytelling opportunities.
                </p>
                <div style={{ display: "grid", gap: 16 }}>
                  {[
                    { label: "When", value: "Nov 20 - Nov 26, 2026" },
                    { label: "Where", value: "Tromsø, Norway" },
                    { label: "Duration", value: "7 days / 6 nights" },
                    {
                      label: "Focus",
                      value: "Luxury fam trip for travel buyers & creators",
                    },
                  ].map((item) => (
                    <div key={item.label} style={{ display: "flex", gap: 12 }}>
                      <strong style={{ color: "#fff", minWidth: 90 }}>
                        {item.label}:
                      </strong>
                      <span
                        style={{
                          color: "rgba(255,255,255,0.78)",
                          lineHeight: 1.7,
                        }}
                      >
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div
                style={{
                  marginTop: 24,
                  display: "flex",
                  gap: 12,
                  flexWrap: "wrap",
                }}
              >
                {[
                  "Aurora viewing lounges",
                  "Private northern photo tours",
                  "Exclusive hotel site inspections",
                  "Content creation support",
                ].map((pill) => (
                  <span
                    key={pill}
                    style={{
                      padding: "0.9rem 1rem",
                      borderRadius: 999,
                      background: "rgba(255,255,255,0.08)",
                      color: "#fff",
                      fontSize: "0.95rem",
                    }}
                  >
                    {pill}
                  </span>
                ))}
              </div>
            </div>
          </Link>

          {/* Peru FAM trip feature box - second destination card */}
          <Link href="/" className="fam-card-link" style={{ marginTop: 24 }}>
            <div
              style={{
                minHeight: 360,
                borderRadius: 24,
                overflow: "hidden",
                background:
                  "linear-gradient(180deg, rgba(0,0,0,0.08), rgba(0,0,0,0.3))",
              }}
            >
              <style>{`
                @media (max-width:768px) { div[style*="marginTop"] div[style*="minHeight: 360"] { min-height: 280px; border-radius: 20px; } }
                @media (max-width:640px) { div[style*="marginTop"] div[style*="minHeight: 360"] { min-height: 240px; border-radius: 16px; } }
                @media (max-width:480px) { div[style*="marginTop"] div[style*="minHeight: 360"] { min-height: 200px; border-radius: 12px; } }
              `}</style>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/vid_img/Peru.png"
                alt="Peru Machu Picchu mountain landscape"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div>
                <span
                  style={{
                    display: "inline-flex",
                    marginBottom: 16,
                    color: "#ffd166",
                    textTransform: "uppercase",
                    letterSpacing: "0.16em",
                    fontSize: "0.82rem",
                  }}
                >
                  Machu Picchu Explorer
                </span>
                <h2
                  style={{
                    margin: "0 0 12px",
                    fontSize: "2.1rem",
                    fontFamily: "'Playfair Display', serif",
                    lineHeight: 1.05,
                  }}
                >
                  Cusco & Sacred Valley — Cultural Immersion
                </h2>
                <p
                  style={{
                    color: "rgba(255,255,255,0.85)",
                    margin: "8px 0 16px",
                    lineHeight: 1.6,
                  }}
                >
                  Discover ancient Incan citadels, immersive cultural
                  experiences, and premium lodge inspections—tailored for travel
                  buyers and creators building authentic, bookable itineraries.
                </p>
                <div style={{ display: "grid", gap: 16 }}>
                  {[
                    { label: "When", value: "May 15 - May 22, 2026" },
                    { label: "Where", value: "Cusco & Sacred Valley, Peru" },
                    { label: "Duration", value: "8 days / 7 nights" },
                    {
                      label: "Focus",
                      value:
                        "Luxury cultural adventure for travel professionals",
                    },
                  ].map((item) => (
                    <div key={item.label} style={{ display: "flex", gap: 12 }}>
                      <strong style={{ color: "#fff", minWidth: 90 }}>
                        {item.label}:
                      </strong>
                      <span
                        style={{
                          color: "rgba(255,255,255,0.78)",
                          lineHeight: 1.7,
                        }}
                      >
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div
                style={{
                  marginTop: 24,
                  display: "flex",
                  gap: 12,
                  flexWrap: "wrap",
                }}
              >
                {[
                  "Machu Picchu guided tours",
                  "Sacred Valley site inspections",
                  "Local artisan market visits",
                  "Premium lodge experiences",
                ].map((pill) => (
                  <span
                    key={pill}
                    style={{
                      padding: "0.9rem 1rem",
                      borderRadius: 999,
                      background: "rgba(255,255,255,0.08)",
                      color: "#fff",
                      fontSize: "0.95rem",
                    }}
                  >
                    {pill}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        </section>
      </main>
    </div>
  );
}

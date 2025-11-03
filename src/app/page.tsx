import React from "react";
import {
  CheckCircle,
  Hammer,
  Building2,
  Home,
  Store,
  Shield,
  Clock,
  Cpu,
  MapPin,
  Mail,
  Phone,
  FileText,
  ArrowRight,
  Package,
  Layers,
  Percent,
} from "lucide-react";

/* -------------------- Simple in-file UI primitives (no external UI lib) -------------------- */
function Button({
  className = "",
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { className?: string }) {
  return (
    <button
      className={`inline-flex items-center justify-center px-4 py-2 text-sm font-medium border rounded-2xl shadow-sm hover:opacity-90 transition ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
function Card({
  className = "",
  children,
}: React.PropsWithChildren<{ className?: string }>) {
  return <div className={`rounded-2xl border bg-white shadow-sm ${className}`}>{children}</div>;
}
function CardHeader({
  className = "",
  children,
}: React.PropsWithChildren<{ className?: string }>) {
  return <div className={`px-6 pt-6 ${className}`}>{children}</div>;
}
function CardContent({
  className = "",
  children,
}: React.PropsWithChildren<{ className?: string }>) {
  return <div className={`px-6 pb-6 ${className}`}>{children}</div>;
}
function CardTitle({
  className = "",
  children,
}: React.PropsWithChildren<{ className?: string }>) {
  return <h3 className={`text-lg font-semibold ${className}`}>{children}</h3>;
}

/* ------------------------------------ Logo path ------------------------------------ */
const LOGO_URL = "/RESLLC LOGO.png";

/* =================================================================================== */
export default function RESLLCSite() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Header (logo only) */}
      <header className="sticky top-0 z-30 backdrop-blur bg-white/80 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          <div className="flex items-center">
            <img src={LOGO_URL} alt="RES LLC Logo" className="h-20 w-auto" />
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#services" className="hover:text-slate-700">Services</a>
            <a href="#markets" className="hover:text-slate-700">Who We Serve</a>
            <a href="#process" className="hover:text-slate-700">How It Works</a>
            <a href="#advantages" className="hover:text-slate-700">Why RES</a>
            <a href="#pricing" className="hover:text-slate-700">Pricing</a>
            <a href="#partnerships" className="hover:text-slate-700">Partnerships</a>
            <a href="#contact" className="hover:text-slate-700">Contact</a>
          </nav>
          <div className="hidden md:block">
            <a href="#contact">
              <Button className="bg-black text-white border-black">Request an Estimate</Button>
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
              Accurate Estimates. <span className="text-orange-600">Smart Technology.</span> Real-World Results.
            </h1>
            <p className="mt-5 text-lg text-slate-700 max-w-prose">
              RES LLC provides precise, fast, and reliable building-material takeoffs for residential,
              multi-family, and commercial projects—delivered 100% remotely and formatted for purchase orders,
              bid comparisons, and budgeting.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#contact">
                <Button className="bg-orange-600 text-white border-orange-600">Get a Quote</Button>
              </a>
              <a href="#services">
                <Button className="bg-white text-slate-900 border">See Services</Button>
              </a>
            </div>
            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
              {[
                { icon: <Shield className="h-4 w-4" />, text: "Accuracy First" },
                { icon: <Clock className="h-4 w-4" />, text: "Fast Turnaround" },
                { icon: <Cpu className="h-4 w-4" />, text: "AI-Assisted + Verified" },
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2 bg-slate-50 rounded-xl px-3 py-2">
                  <span className="text-slate-700">{item.icon}</span>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="rounded-3xl border shadow-sm p-6 bg-gradient-to-br from-slate-50 to-white">
              <div className="grid grid-cols-2 gap-4">
                <Stat label="Avg. Turnaround" value="3–5 days" />
                <Stat label="Coverage" value="Nationwide" />
                <Stat label="Formats" value="PDF / Excel / POS" />
                <Stat label="Focus" value="Residential, Multi-family, & Commercial" />
              </div>
              <div className="mt-6 text-xs text-slate-500">
                * Expedited options available. POS-compatible deliverables for Spruce/Epicor on request.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-16 md:py-24 bg-slate-50 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight">Services</h2>
          <p className="mt-3 text-slate-700 max-w-prose">
            Complete, construction-grade material takeoffs tailored to your workflow and region.
          </p>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <ServiceCard
              icon={<Home />}
              title="Residential Estimating"
              points={[
                "Single-family, duplex, multi-family",
                "Foundation, framing, envelope, interiors",
                "Region-adjusted codes & materials",
              ]}
            />
            <ServiceCard
              icon={<Building2 />}
              title="Commercial Estimating"
              points={[
                "Small to mid-size commercial",
                "Structural + architectural alignment",
                "Exterior envelope & interior finishes",
              ]}
            />
            <ServiceCard
              icon={<Store />}
              title="Lumberyard / Building Center"
              points={[
                "POS-ready BOMs (Spruce/Epicor)",
                "Standardized quality & speed",
                "Co-branded deliverables",
              ]}
            />
          </div>
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <ServiceCard
              icon={<FileText />}
              title="Homeowner Pre-Build Estimates"
              points={[
                "Budget clarity before you build",
                "Compare bids apples-to-apples",
                "Simple, readable reports",
              ]}
            />
            <ServiceCard
              icon={<Hammer />}
              title="Custom Consulting"
              points={[
                "Third-party estimate reviews",
                "Plan audits & scope checks",
                "RESXL-assisted 3-D visualization",
              ]}
            />
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section id="markets" className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight">Who We Serve</h2>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <AudienceCard
              title="Builders"
              desc="Small to mid-size contractors needing fast, reliable takeoffs without hiring full-time staff."
            />
            <AudienceCard
              title="Lumberyards"
              desc="Accurate estimates that integrate with POS, reduce returns, and strengthen customer trust."
            />
            <AudienceCard
              title="Homeowners & Designers"
              desc="Pre-build budgets and clear material breakdowns for confident decision-making."
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="process" className="py-16 md:py-24 bg-slate-50 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight">How It Works</h2>
          <ol className="mt-8 grid md:grid-cols-3 gap-6 list-decimal list-inside">
            {[
              { title: "Send Plans", desc: "Upload PDFs via secure link or email with project details." },
              { title: "We Estimate", desc: "AI-assisted takeoff with human verification and regional code alignment." },
              { title: "Deliver & Support", desc: "Receive a complete, customizable Bill of Materials in your preferred format." },
            ].map((s, i) => (
              <li key={i} className="bg-white rounded-2xl border shadow-sm p-6">
                <div className="font-semibold">{s.title}</div>
                <p className="text-slate-700 mt-2">{s.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Why RES */}
      <section id="advantages" className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight">Why Choose RES</h2>
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Proven Advantages</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-slate-700">
                  {[
                    "Accuracy & field knowledge—every quantity verified",
                    "AI-assisted automation with human oversight",
                    "Custom formats: PDF, Excel, or POS-ready",
                    "Regional compliance baked into every takeoff",
                    "100% remote—nationwide service",
                  ].map((t, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-orange-600 mt-0.5" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Brand Pillars</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-slate-700">
                  {[
                    "Accuracy First",
                    "Integrity—no shortcuts, no inflated numbers",
                    "Efficiency—fast turnarounds",
                    "Innovation—continuous AI improvement",
                    "Reliability—consistent results from plan to project",
                  ].map((t, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-orange-600 mt-0.5" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing (Simplified structure only — no dollar amounts) */}
      <section id="pricing" className="py-16 md:py-24 bg-slate-50 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <Layers className="h-6 w-6 text-orange-600" />
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight">Pricing Framework</h2>
          </div>
          <p className="mt-3 text-slate-700 max-w-prose">
            Clear structure without publishing exact rates. Pricing scales by total square footage (TSF),
            selected packs, and bundles. Residential projects are designed for <strong>3,000–10,000 TSF</strong>.
            Commercial / Multi-Family projects fit <strong>3,000–20,000 TSF</strong>.
          </p>

          {/* SF ranges + Packs + Discounts */}
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Square Footage Ranges</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-slate-700">
                  <li>Residential: <strong>Min 3,000 TSF</strong> — <strong>Max 10,000 TSF</strong></li>
                  <li>Commercial / Multi-Family: <strong>Min 3,000 TSF</strong> — <strong>Max 20,000 TSF</strong></li>
                  <li className="text-xs text-slate-500">
                    Example breakpoints used internally: 3,000 · 4,500 · 6,000 · 7,500 · 10,000 · 15,000 · 20,000 TSF
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Package className="h-5 w-5" /> Available Packs (à la carte)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-700">
                  {[
                    "Form / Slab",
                    "Wall",
                    "Floor Frame",
                    "Beam / Joist / Rafter (w/ layouts)",
                    "Cornice",
                    "Roofing",
                    "Exterior Finish",
                    "Interior Finish",
                  ].map((p, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-orange-600 mt-0.5" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Percent className="h-5 w-5" /> Discount Options
                </CardTitle>
              </CardHeader>
              <CardContent className="text-slate-700">
                <ul className="space-y-2">
                  <li>Multi-line / multi-pack discounts</li>
                  <li>Bulk or pre-pay options available</li>
                </ul>
                <p className="text-xs text-slate-500 mt-3">
                  Ask about partner packages for lumberyards and builders.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Bundle tiers */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold">Bundle Tiers (by scope)</h3>
            <p className="text-slate-700 text-sm mt-1">
              Choose a bundle for end-to-end scope, or mix packs à la carte. Tiers reflect common combinations we deliver.
            </p>

            <div className="mt-6 grid md:grid-cols-2 gap-6">
              <BundleCard
                level="Tier 1"
                scope={[
                  "Form / Slab",
                  "Wall",
                  "Cornice",
                ]}
              />
              <BundleCard
                level="Tier 2"
                scope={[
                  "Form / Slab",
                  "Wall",
                  "Beam / Joist / Rafter",
                  "Cornice",
                ]}
              />
              <BundleCard
                level="Tier 3"
                scope={[
                  "Form / Slab",
                  "Wall",
                  "Beam / Joist / Rafter",
                  "Cornice",
                  "Exterior Finish",
                ]}
              />
              <BundleCard
                level="Tier 4"
                scope={[
                  "Form / Slab",
                  "Wall",
                  "Floor Frame",
                  "Beam / Joist / Rafter",
                  "Cornice",
                  "Exterior Finish",
                ]}
              />
              <BundleCard
                level="Tier 5"
                scope={[
                  "Form / Slab",
                  "Wall",
                  "Floor Frame",
                  "Beam / Joist / Rafter",
                  "Cornice",
                  "Roofing",
                  "Exterior Finish",
                ]}
              />
              <BundleCard
                level="Tier 6"
                scope={[
                  "Form / Slab",
                  "Wall",
                  "Floor Frame",
                  "Beam / Joist / Rafter",
                  "Cornice",
                  "Roofing",
                  "Exterior Finish",
                  "Interior Finish",
                ]}
                highlight
              />
            </div>

            <div className="mt-6 text-sm text-slate-600">
              <strong>Note:</strong> Final pricing depends on total square footage, scope tier, and selected packs.
              We’ll confirm scope and provide a written quote before work begins.
            </div>
          </div>
        </div>
      </section>

      {/* Partnerships */}
      <section id="partnerships" className="py-16 md:py-24 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight">Lumberyard & Builder Partnerships</h2>
          <p className="mt-3 text-slate-700 max-w-prose">
            We standardize estimating quality and speed for suppliers and contractors.
            Co-branded deliverables and referral credits available.
          </p>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {[
              { title: "POS-Ready", desc: "BOMs formatted for Spruce / Epicor or custom templates." },
              { title: "Priority Turnarounds", desc: "Reliable timelines to keep quotes moving." },
              { title: "Co-Branded", desc: "Your brand on client-facing reports if desired." },
            ].map((p, i) => (
              <Card key={i}>
                <CardHeader>
                  <CardTitle>{p.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-slate-700">{p.desc}</CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-10 items-start">
          <div className="md:col-span-1">
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight">Founder</h2>
            <p className="mt-3 text-slate-700 max-w-prose">Shawn Cutshall — Founder & Lead Estimator</p>
          </div>
          <div className="md:col-span-2">
            <div className="bg-slate-50 rounded-2xl border p-6">
              <p className="text-slate-700">
                Two decades of hands-on construction experience combined with advanced digital takeoff expertise.
                Developer of the RESXL intelligent estimating platform. Known for accuracy, speed, and region-aware material standards.
              </p>
              <ul className="mt-4 grid sm:grid-cols-2 gap-3 text-slate-700">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-orange-600" /> Residential, multi-family, and commercial focus
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 md:py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight">Request an Estimate</h2>
          <p className="mt-2 text-slate-300 max-w-prose">
            Send your plans and project details. We’ll confirm scope, timeline, and deliverables.
          </p>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2 bg-white text-slate-900 rounded-2xl p-6">
              <form name="resllc-contact" className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input className="border rounded-xl px-3 py-2" placeholder="Your Name" required />
                <input className="border rounded-xl px-3 py-2" type="email" placeholder="Email" required />
                <input className="border rounded-xl px-3 py-2 md:col-span-2" placeholder="Company (optional)" />
                <textarea className="border rounded-xl px-3 py-2 md:col-span-2" rows={5} placeholder="Project details (location, scope, timeline)" />
                <Button type="submit" className="bg-orange-600 text-white border-orange-600 md:col-span-2">Submit</Button>
              </form>
              <p className="text-xs text-slate-500 mt-3">
                Submitting this form does not share files. After submission, we’ll email you a secure link to upload drawings.
              </p>
            </div>
            <div className="space-y-4">
              <InfoRow icon={<Mail className="h-5 w-5" />} label="Email" value="rambuiltestimating@gmail.com" href="mailto:rambuiltestimating@gmail.com" />
              <InfoRow icon={<Phone className="h-5 w-5" />} label="Phone" value="(918) 986-4747" href="tel:+19189864747" />
              <InfoRow icon={<MapPin className="h-5 w-5" />} label="Service Area" value="United States (Remote)" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-sm flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="text-slate-600">
            © {new Date().getFullYear()} Rambuilt Estimating Services LLC • dba RES LLC
          </div>
          <div className="flex items-center gap-4">
            <a href="#services" className="hover:text-slate-800 flex items-center gap-1">
              Services <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#contact" className="hover:text-slate-800 flex items-center gap-1">
              Contact <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* -------------------------------- Helper Components -------------------------------- */
function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border bg-white p-4">
      <div className="text-xs uppercase tracking-wide text-slate-500">{label}</div>
      <div className="text-xl font-semibold mt-1">{value}</div>
    </div>
  );
}
function ServiceCard({
  icon,
  title,
  points,
}: {
  icon: React.ReactNode;
  title: string;
  points: string[];
}) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center gap-3">
        <div className="p-2 rounded-xl bg-orange-50 text-orange-700">{icon}</div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2 text-slate-700">
          {points.map((p, i) => (
            <li key={i} className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-orange-600 mt-0.5" />
              <span>{p}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
function AudienceCard({ title, desc }: { title: string; desc: string }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent className="text-slate-700">{desc}</CardContent>
    </Card>
  );
}
function InfoRow({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const Content = (
    <div className="flex items-center gap-3">
      <div className="p-2 rounded-xl bg-white/10 ring-1 ring-white/20">{icon}</div>
      <div>
        <div className="text-xs uppercase tracking-wide text-slate-300">{label}</div>
        <div className="font-medium text-white">{value}</div>
      </div>
    </div>
  );
  return href ? (
    <a href={href} className="block hover:opacity-90">
      {Content}
    </a>
  ) : (
    <div>{Content}</div>
  );
}
function BundleCard({
  level,
  scope,
  highlight = false,
}: {
  level: string;
  scope: string[];
  highlight?: boolean;
}) {
  return (
    <Card className={highlight ? "ring-2 ring-orange-500" : ""}>
      <CardHeader>
        <CardTitle>{level}</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2 text-slate-700">
          {scope.map((s, i) => (
            <li key={i} className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-orange-600 mt-0.5" />
              <span>{s}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

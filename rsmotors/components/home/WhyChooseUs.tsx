import { Award, Check, ShieldCheck, Sparkles } from "lucide-react";

export const WhyChooseUs = () => {
  return (
    <section className="why-section">
      <div className="why-heading">
        <p className="kicker">Why choose us</p>
        <h2>
          Knowledge, care and
          <br />a personal approach.
        </h2>
      </div>
      <div className="feature-grid">
        <article>
          <Award />
          <h3>Experience since 1992</h3>
          <p>Over 34 years of personal experience in the automotive trade.</p>
        </article>
        <article>
          <ShieldCheck />
          <h3>Carefully selected</h3>
          <p>
            Attention to condition, specification, provenance and available
            history.
          </p>
        </article>
        <article>
          <Sparkles />
          <h3>Japanese market knowledge</h3>
          <p>Distinctive Japanese models, hybrids and modern classics.</p>
        </article>
        <article>
          <Check />
          <h3>Personal &amp; transparent</h3>
          <p>
            Direct communication, clear descriptions and individual attention.
          </p>
        </article>
      </div>
    </section>
  );
};

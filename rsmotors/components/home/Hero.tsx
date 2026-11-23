import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-grid">
        <div className="hero-copy">
          <div className="eyebrow">
            <span /> Selected Japanese Cars &amp; Modern Classics
          </div>
          <h1>
            Find the car
            <br />
            <em>you&apos;ve been looking for.</em>
          </h1>
          <p className="hero-lead">
            Carefully selected Japanese imports and modern classics, available
            in Ireland or sourced from Japan for you.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#cars">
              View Cars for Sale <ArrowRight size={18} />
            </a>
            <a className="button button-ghost" href="#import">
              Import a Car from Japan <ArrowRight size={18} />
            </a>
          </div>
          <div className="experience-line">
            <span className="experience-number">34+</span>
            <span>
              <strong>Years of automotive experience</strong>
              <br />
              Over 34 years — since 1992
            </span>
          </div>
        </div>
        <div
          className="hero-visual"
          aria-label="RS Rising Sun Motors vehicle showcase placeholder"
        >
          <div className="sun-disc" />
          <div className="vehicle-stage">
            <div className="stage-line" />
            <div className="stage-car">
              <div className="car-roof" />
              <div className="car-body">
                <span />
              </div>
              <div className="wheel wheel-left" />
              <div className="wheel wheel-right" />
            </div>
          </div>
          <div className="visual-badge">
            <span>RS</span>
            <div>
              <strong>Selected in Japan</strong>
              <small>Quality comes first</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

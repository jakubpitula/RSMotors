import { ChevronRight } from "lucide-react";

export const Services = () => {
  return (
    <section className="services" id="cars">
      <article className="service-card service-card-dark">
        <div className="service-number">01</div>
        <p className="kicker">Available now</p>
        <h3>Cars for Sale</h3>
        <p>
          Explore our selection of Japanese imports and modern classics, with
          careful attention to condition, specification and available history.
        </p>
        <a href="#stock">
          Browse available cars <ChevronRight size={18} />
        </a>
      </article>
      <article className="service-card service-card-red" id="import">
        <div className="service-number">02</div>
        <p className="kicker">Sourced for you</p>
        <h3>Import to Order</h3>
        <p>
          Looking for something specific? Tell us the model, year and preferred
          specification, and we will discuss suitable sourcing options in Japan.
        </p>
        <a href="#contact">
          Request a consultation <ChevronRight size={18} />
        </a>
      </article>
    </section>
  );
};

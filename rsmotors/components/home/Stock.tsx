import { ArrowRight } from "lucide-react";

export const Stock = () => {
  return (
    <section className="stock-section" id="stock">
      <div className="stock-heading">
        <div>
          <p className="kicker">Featured vehicle</p>
          <h2>Cars with a story.</h2>
        </div>
        <a className="text-link" href="#contact">
          View all vehicles <ArrowRight size={17} />
        </a>
      </div>
      <article className="vehicle-card">
        <div className="vehicle-photo">
          <div className="photo-placeholder">
            <span className="placeholder-sun" />
            <span className="placeholder-copy">
              Vehicle photography
              <br />
              to be supplied
            </span>
          </div>
          <span className="status-pill">Available — details to confirm</span>
        </div>
        <div className="vehicle-details">
          <p className="vehicle-origin">Japan · 2022</p>
          <h3>
            Toyota Corolla
            <br />
            Touring Sports Hybrid
          </h3>
          <p className="vehicle-spec">
            W×B specification · Modellista styling · Hybrid
          </p>
          <div className="vehicle-facts">
            <div>
              <span>Colour</span>
              <strong>Platinum White Pearl Mica</strong>
            </div>
            <div>
              <span>Status</span>
              <strong>Details to confirm</strong>
            </div>
          </div>
          <a className="button button-primary" href="#contact">
            Enquire about this car <ArrowRight size={18} />
          </a>
        </div>
      </article>
    </section>
  );
};

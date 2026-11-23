import { VehicleCardProps } from "@/utils/types";
import { ArrowRight } from "lucide-react";

export const VehicleCard = (props: VehicleCardProps) => {
  const vehicle = props.vehicle;
  return (
    <article className="vehicle-card">
      <div className="vehicle-photo">
        <div className="photo-placeholder">
          <span className="placeholder-sun" />
          <span className="placeholder-copy"></span>
        </div>
        <span className="status-pill">{vehicle.status}</span>
      </div>
      <div className="vehicle-details">
        <p className="vehicle-origin">
          {vehicle.originYear} · {vehicle.originCountry}
        </p>
        <h3>
          {vehicle.make} {vehicle.model}
          <br />
          {vehicle.extraInfo}
        </h3>
        <p className="vehicle-spec">{vehicle.extraInfo}</p>
        <div className="vehicle-facts">
          <div>
            <span>Colour</span>
            <strong>{vehicle.colour}</strong>
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
  );
};

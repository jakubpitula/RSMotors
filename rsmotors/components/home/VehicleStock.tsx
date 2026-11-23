import { ArrowRight } from "lucide-react";
import { VehicleCard } from "../vehicles/VehicleCard";
import { VehicleType } from "@/utils/types";

export const Stock = () => {
  const vehicles: VehicleType[] = [
    {
      photoUrl: "Vehicle photography to be supplied",
      status: "Available — details to confirm",
      originCountry: "Japan",
      originYear: 2022,
      make: "Toyota",
      model: "Corolla",
      extraInfo: "Touring Sports Hybrid",
      specification: "W×B specification · Modellista styling · Hybrid",
      colour: "Platinum White Pearl Mica",
    },
  ];

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
      {vehicles.map((vehicle, index) => (
        <VehicleCard key={index} vehicle={vehicle} />
      ))}
    </section>
  );
};

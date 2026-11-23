export type VehicleType = {
  photoUrl: string;
  status: string;
  originCountry: string;
  originYear: number;
  make: string;
  model: string;
  extraInfo: string;
  specification: string;
  colour: string;
};

export type VehicleCardProps = {
  vehicle: VehicleType;
};

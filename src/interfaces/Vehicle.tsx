export interface IVehicleMedia {
  label: string | null;
  description: string | null;
  alt: string | undefined;
  placement: string | null;
  src: string | null;
  type: string | null;
}

export interface IVehicle {
  name: string | null;
  condition: "new" | "used" | "demo";
  media: Array<IVehicleMedia>;
  is_sold: boolean;
  __typename?: string;
}
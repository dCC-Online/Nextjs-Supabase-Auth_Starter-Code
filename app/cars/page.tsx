import React from "react";
import { supabaseServerClient } from "../lib/initSupabase";
import { Car } from "../lib/types";
import CarsList from "./CarsList";

export default async function CarsPage() {
  const { data, error } = await supabaseServerClient.from("cars").select("*");
  const cars = data as Car[];
  console.log("Cars: ", cars);
  return (
    <div>
      <CarsList cars={cars} />
    </div>
  );
}

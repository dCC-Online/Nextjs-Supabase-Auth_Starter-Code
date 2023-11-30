import React from "react";
import { supabaseServerClient } from "../lib/initSupabase";
import { Car } from "../lib/types";
import CarsList from "./CarsList";
import Link from "next/link";

export default async function CarsPage() {
  const { data, error } = await supabaseServerClient.from("cars").select("*");
  const cars = data as Car[];
  console.log("All Cars: ", cars);
  return (
    <div className="flex flex-col items-center justify-center w-full">

      <Link href="/cars/garage" className="my-4 text-lg text-indigo-600 hover:text-indigo-500">
          My Garage
      </Link>

      <div className="w-full max-w-4xl px-4">
        <CarsList cars={cars} />
      </div>
    </div>
  );
}

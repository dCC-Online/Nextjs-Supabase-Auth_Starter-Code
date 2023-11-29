import React from "react";
import { Car } from "../lib/types";
import { FaCar } from "react-icons/fa";
type CarsListProps = {
  cars: Car[];
};

export default function CarsList({ cars }: CarsListProps) {
  return (
    <div className="mt-10 flex flex-col items-center justify-center">
      {cars.map((car) => (
        <div key={car.id} className="mb-4 w-full max-w-md bg-white rounded-lg shadow-md p-6 space-y-2">
          <div className="flex items-center space-x-3">
            <FaCar className="text-indigo-600 h-6 w-6" />
            <h3 className="text-lg text-gray-900 font-semibold">{car.make} {car.model}</h3>
          </div>
          <p className="text-gray-600">Year: {car.year}</p>
        </div>
      ))}
    </div>
  );
}

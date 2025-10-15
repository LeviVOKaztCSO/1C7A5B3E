import { useState } from "react";
import CarCard from "../components/CarCard";
import styles from "../styles/Home.module.css";

const cars = [
  { brand: "BMW", model: "M3", year: 2021, price: "18 000 000 Ft" },
  { brand: "Audi", model: "A4", year: 2020, price: "14 500 000 Ft" },
  { brand: "Mercedes", model: "C200", year: 2019, price: "15 200 000 Ft" },
  { brand: "Tesla", model: "Model 3", year: 2022, price: "20 800 000 Ft" },
  { brand: "Toyota", model: "Supra", year: 2021, price: "17 400 000 Ft" }
];

export default function Home() {
  const [search, setSearch] = useState("");

  const filteredCars = cars.filter(car =>
    (car.brand + " " + car.model).toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Autók adatbázisa</h1>
        <input
          type="text"
          placeholder="Keresés autó név alapján..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className={styles.search}
        />
      </header>

      <main className={styles.main}>
        {filteredCars.map((car, index) => (
          <CarCard key={index} car={car} />
        ))}
      </main>

     
    </div>
  );
}

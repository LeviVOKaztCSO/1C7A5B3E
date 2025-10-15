export default function CarCard({ car }) {
  return (
    <div className="car-card">
      <h2>{car.brand} {car.model}</h2>
      <p><strong>Évjárat:</strong> {car.year}</p>
      <p><strong>Ár:</strong> {car.price}</p>
    </div>
  );
}

export default function Moods() {
  const moods = [
    { mood: "Fáradt", coffee: "Espresso" },
    { mood: "Boldog", coffee: "Latte" },
    { mood: "Stresszes", coffee: "Cappuccino" },
    { mood: "Nyugodt", coffee: "Americano" },
  ];

  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>Hangulat alapú kávéajánló</h1>
      <ul>
        {moods.map((item, index) => (
          <li key={index}>
            <strong>{item.mood}</strong> → {item.coffee}
          </li>
        ))}
      </ul>
    </main>
  );
}

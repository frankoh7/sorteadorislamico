import { useState } from "react";

const allNumbers = Array.from({ length: 42 }, (_, i) => i + 1);

export default function SorteadorIslamico() {
  const [sortedNumbers, setSortedNumbers] = useState<number[]>([]);
  const [current, setCurrent] = useState<number | null>(null);

  const sortNumber = () => {
    const remaining = allNumbers.filter((n) => !sortedNumbers.includes(n));
    if (remaining.length === 0) return;
    const newNumber = remaining[Math.floor(Math.random() * remaining.length)];
    setSortedNumbers([...sortedNumbers, newNumber]);
    setCurrent(newNumber);
  };

  return (
    <div className="min-h-screen bg-cover bg-center flex flex-col items-center justify-center p-6" style={{ backgroundImage: 'url(https://static.vecteezy.com/system/resources/previews/040/522/187/non_2x/islamic-background-banner-with-floral-mosque-ornament-free-vector.jpg)' }}>
      <div className="bg-white/80 backdrop-blur-lg p-8 rounded-2xl shadow-xl text-center max-w-lg w-full">
        <h1 className="text-3xl font-bold mb-6 text-emerald-800">Compartilhamento de Perguntas</h1>
        <div className="text-6xl font-bold mb-4 text-yellow-700">
          {current !== null ? current : "-"}
        </div>
        <button className="bg-emerald-700 hover:bg-emerald-800 text-white px-6 py-2 text-lg rounded-xl" onClick={sortNumber}>
          Sortear
        </button>
        <div className="mt-6 text-sm text-gray-700">
          <span className="font-semibold">Números já sorteados:</span>
          <div className="flex flex-wrap gap-2 mt-2 justify-center">
            {sortedNumbers.map((num) => (
              <span key={num} className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-lg text-xs">
                {num}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

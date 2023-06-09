import React from "react";

function TopButtons({ setQuery }) {
  const cities = [
    {
      id: 1,
      title: "Santiago",
    },
    {
      id: 2,
      title: "La serena",
    },
    {
      id: 3,
      title: "Antofagasta",
    },
    {
      id: 4,
      title: "Puerto Montt",
    },
    {
      id: 5,
      title: "Punta arenas",
    },
  ];

  return (
    <div className="flex items-center justify-around my-6">
      {cities.map((city) => (
        <button
          key={city.id}
          className="text-white text-lg font-medium "
          onClick={() => setQuery({ q: city.title })}
        >
          {city.title}
        </button>
      ))}
    </div>
  );
}

export default TopButtons;

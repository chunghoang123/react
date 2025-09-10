import React from "react";

export default function LazyLoadComp() {
  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Lazy Loaded Content</h2>
      <p className="text-justify leading-relaxed">
        {Array.from({ length: 100 }).map((_, i) => (
          <span key={i}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, harum.
            Provident, eveniet! Ipsum velit voluptatibus dolores amet tempora quos
            placeat!{" "}
          </span>
        ))}
      </p>
    </div>
  );
}

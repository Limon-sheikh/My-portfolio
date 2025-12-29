import React, { useEffect, useState } from "react";

function Progress({ title, percent }) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = percent;
    const duration = 1000; // 1 second
    const stepTime = Math.abs(Math.floor(duration / end));

    const timer = setInterval(() => {
      start += 1;
      setWidth(start);
      if (start === end) clearInterval(timer);
    }, stepTime);

    return () => clearInterval(timer);
  }, [percent]);

  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1 text-primary text-md font-semibold">
        <span>{title}</span>
        <span>{width}%</span>
      </div>
      <div className="w-full bg-secondary/5 rounded-full overflow-hidden">
        <div className="bg-accent h-2 rounded-full transition-all duration-500" style={{ width: `${width}%`}}></div>
      </div>
    </div>
  );
}

export default Progress;

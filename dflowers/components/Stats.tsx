"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { site } from "@/config/site";

function Counter({
  target,
  suffix = "",
}: {
  target: number;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    const duration = 1800;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export function Stats() {
  const { stats } = site;

  return (
    <section className="border-y border-border bg-background py-16 sm:py-20">
      <div className="container-dflowers">
        <ul className="grid grid-cols-2 gap-10 lg:grid-cols-4 lg:gap-8">
          {stats.items.map((item, index) => (
            <motion.li
              key={item.label}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <p className="font-serif text-4xl font-light text-accent-deep sm:text-5xl">
                <Counter target={item.value} suffix={item.suffix} />
              </p>
              <p className="mt-2 text-sm text-text-muted sm:text-base">
                {item.label}
              </p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}

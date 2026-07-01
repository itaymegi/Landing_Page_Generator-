"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { site } from "@/config/site";

function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
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

export function TrustBar() {
  const { trustBar } = site;

  return (
    <section className="border-y border-beige/60 bg-cream py-8 sm:py-10">
      <div className="container-shani">
        <ul className="flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-12 lg:gap-20">
          {trustBar.items.map((item, index) => (
            <motion.li
              key={item.label}
              className="flex items-center gap-3 text-base text-brown/80 sm:text-lg"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <span className="text-xl" aria-hidden="true">
                {item.icon}
              </span>
              <span className="font-medium">
                {item.counter ? (
                  <>
                    <Counter target={item.counter} suffix={item.suffix} />{" "}
                    {item.label}
                  </>
                ) : (
                  item.label
                )}
              </span>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}

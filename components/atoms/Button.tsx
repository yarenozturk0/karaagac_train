"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import clsx from "clsx";
import { forwardRef } from "react";

type Variant = "primary" | "ghost" | "quiet";

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "ref"> {
  variant?: Variant;
}

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-ink text-paper-soft hover:bg-ink-soft border border-ink",
  ghost:
    "bg-transparent text-ink border border-ink/20 hover:border-ink/60",
  quiet:
    "bg-transparent text-ink-muted hover:text-ink border border-transparent",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { variant = "primary", className, children, ...rest },
  ref,
) {
  return (
    <motion.button
      ref={ref}
      whileHover={{ y: -1 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
      className={clsx(
        "inline-flex items-center gap-2 px-6 py-3 font-ui text-sm tracking-[0.08em] uppercase transition-colors duration-300",
        variantClasses[variant],
        className,
      )}
      {...rest}
    >
      {children}
    </motion.button>
  );
});

import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "./ThemeProvider";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      className="relative w-14 h-7 md:w-16 md:h-8 rounded-full border-2 border-foreground/20 hover:border-foreground/40 bg-muted/50 backdrop-blur-sm transition-colors duration-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary group"
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      {/* Track background glow */}
      <motion.div
        className="absolute inset-0 rounded-full"
        animate={{
          background: isDark
            ? "linear-gradient(135deg, hsl(220 40% 12%), hsl(240 30% 18%))"
            : "linear-gradient(135deg, hsl(45 95% 88%), hsl(30 33% 94%))",
        }}
        transition={{ duration: 0.6 }}
      />

      {/* Scribble stars for dark mode */}
      <AnimatePresence>
        {isDark && (
          <>
            {[
              { x: 6, y: 4, size: 2, delay: 0.1 },
              { x: 10, y: 14, size: 1.5, delay: 0.2 },
              { x: 18, y: 6, size: 2.5, delay: 0.15 },
              { x: 14, y: 18, size: 1, delay: 0.25 },
            ].map((star, i) => (
              <motion.span
                key={`star-${i}`}
                initial={{ opacity: 0, scale: 0, rotate: -45 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0, rotate: 45 }}
                transition={{ duration: 0.4, delay: star.delay, ease: [0.22, 1, 0.36, 1] }}
                className="absolute text-accent font-handwritten pointer-events-none"
                style={{
                  left: star.x,
                  top: star.y,
                  fontSize: `${star.size * 4}px`,
                  lineHeight: 1,
                }}
              >
                ✦
              </motion.span>
            ))}
          </>
        )}
      </AnimatePresence>

      {/* Scribble rays for light mode */}
      <AnimatePresence>
        {!isDark && (
          <>
            {[0, 60, 120, 180, 240, 300].map((deg, i) => (
              <motion.span
                key={`ray-${i}`}
                initial={{ opacity: 0, scaleY: 0 }}
                animate={{ opacity: 0.4, scaleY: 1 }}
                exit={{ opacity: 0, scaleY: 0 }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
                className="absolute w-[1px] h-2 bg-accent origin-bottom pointer-events-none"
                style={{
                  left: 8,
                  top: 6,
                  transform: `rotate(${deg}deg) translateY(-8px)`,
                }}
              />
            ))}
          </>
        )}
      </AnimatePresence>

      {/* Toggle knob */}
      <motion.div
        className="absolute top-[3px] md:top-[3px] w-5 h-5 md:w-6 md:h-6 rounded-full shadow-md flex items-center justify-center overflow-hidden"
        animate={{
          left: isDark ? "calc(100% - 24px)" : "3px",
          background: isDark
            ? "linear-gradient(135deg, hsl(240 20% 30%), hsl(220 30% 20%))"
            : "linear-gradient(135deg, hsl(45 95% 65%), hsl(35 90% 55%))",
          rotate: isDark ? 360 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 25,
        }}
      >
        {/* Sun/Moon face — scribble style */}
        <AnimatePresence mode="wait">
          {isDark ? (
            <motion.svg
              key="moon"
              initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
              transition={{ duration: 0.3 }}
              viewBox="0 0 24 24"
              className="w-3 h-3 md:w-3.5 md:h-3.5"
              fill="none"
              stroke="hsl(45 95% 75%)"
              strokeWidth="2.5"
              strokeLinecap="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </motion.svg>
          ) : (
            <motion.svg
              key="sun"
              initial={{ opacity: 0, rotate: 90, scale: 0.5 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: -90, scale: 0.5 }}
              transition={{ duration: 0.3 }}
              viewBox="0 0 24 24"
              className="w-3 h-3 md:w-3.5 md:h-3.5"
              fill="none"
              stroke="hsl(30 50% 30%)"
              strokeWidth="2.5"
              strokeLinecap="round"
            >
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
            </motion.svg>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Hover tooltip */}
      <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 font-handwritten text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        {isDark ? "light mode" : "dark mode"}
      </span>
    </button>
  );
};

export default ThemeToggle;

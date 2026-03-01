import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Rocket, Trophy, Code2, Gamepad2, Brain, Globe, Cpu, Star } from "lucide-react";
import work1 from "@/assets/work-1.png";
import work2 from "@/assets/work-2.png";
import work3 from "@/assets/work-3.png";
import work4 from "@/assets/work-4.png";
import work5 from "@/assets/work-5.png";
import work6 from "@/assets/work-6.png";
import featureImg from "@/assets/feature-dev.png";

interface PinItem {
  id: string;
  type: "image" | "text" | "achievement" | "tag";
  x: number;
  y: number;
  rotation: number;
  width?: number;
  content?: string;
  subtitle?: string;
  image?: string;
  icon?: React.ElementType;
  color?: string;
}

const pinItemsDesktop: PinItem[] = [
  { id: "p1", type: "image", x: 80, y: 60, rotation: -3, width: 280, image: work1, content: "SpaceVista — NASA Space Apps" },
  { id: "p2", type: "image", x: 650, y: 180, rotation: 4, width: 260, image: work2, content: "GameForge Engine" },
  { id: "p3", type: "image", x: 1200, y: 40, rotation: -2, width: 300, image: featureImg, content: "React Development" },
  { id: "p4", type: "image", x: 400, y: 450, rotation: 5, width: 240, image: work3, content: "AI Vision System" },
  { id: "p5", type: "image", x: 1000, y: 400, rotation: -4, width: 270, image: work4, content: "IoT Dashboard" },
  { id: "p6", type: "image", x: 1500, y: 250, rotation: 3, width: 250, image: work5, content: "Portfolio v2" },
  { id: "p7", type: "image", x: -200, y: 350, rotation: -5, width: 260, image: work6, content: "Open Source Tools" },
  { id: "p8", type: "image", x: 1700, y: 500, rotation: 2, width: 240, image: work1, content: "ML Pipeline" },
  { id: "a1", type: "achievement", x: 350, y: 30, rotation: 6, icon: Trophy, color: "hsl(var(--primary))", content: "NASA Space Apps", subtitle: "Global Winner 2024" },
  { id: "a2", type: "achievement", x: 900, y: 20, rotation: -5, icon: Star, color: "hsl(var(--secondary))", content: "Open Source", subtitle: "500+ Contributions" },
  { id: "a3", type: "achievement", x: 1400, y: 500, rotation: 4, icon: Rocket, color: "hsl(var(--accent))", content: "Projects Shipped", subtitle: "30+ Deployed" },
  { id: "a4", type: "achievement", x: -100, y: 100, rotation: -3, icon: Brain, color: "hsl(var(--primary))", content: "AI/ML Models", subtitle: "12+ Trained" },
  { id: "t1", type: "tag", x: 550, y: 380, rotation: -8, content: "React", color: "hsl(var(--primary))" },
  { id: "t2", type: "tag", x: 180, y: 500, rotation: 12, content: "Unity", color: "hsl(var(--secondary))" },
  { id: "t3", type: "tag", x: 1100, y: 300, rotation: -6, content: "Python", color: "hsl(var(--accent))" },
  { id: "t4", type: "tag", x: 800, y: 550, rotation: 10, content: "C++", color: "hsl(var(--primary))" },
  { id: "t5", type: "tag", x: 1600, y: 80, rotation: -4, content: "Next.js", color: "hsl(var(--secondary))" },
  { id: "t6", type: "tag", x: -50, y: 550, rotation: 7, content: "TensorFlow", color: "hsl(var(--accent))" },
  { id: "t7", type: "tag", x: 1350, y: 350, rotation: -10, content: "Node.js", color: "hsl(var(--primary))" },
  { id: "q1", type: "text", x: 700, y: -30, rotation: -2, content: "\"Code is poetry written in logic.\"" },
  { id: "q2", type: "text", x: 1500, y: 600, rotation: 3, content: "\"Always building, always learning.\"" },
];

const pinItemsMobile: PinItem[] = [
  { id: "p1", type: "image", x: 20, y: 30, rotation: -2, width: 160, image: work1, content: "SpaceVista" },
  { id: "p2", type: "image", x: 380, y: 100, rotation: 3, width: 150, image: work2, content: "GameForge" },
  { id: "p3", type: "image", x: 700, y: 20, rotation: -1, width: 170, image: featureImg, content: "React Dev" },
  { id: "p4", type: "image", x: 200, y: 280, rotation: 4, width: 140, image: work3, content: "AI Vision" },
  { id: "p5", type: "image", x: 560, y: 300, rotation: -3, width: 155, image: work4, content: "IoT Dashboard" },
  { id: "p6", type: "image", x: 850, y: 180, rotation: 2, width: 145, image: work5, content: "Portfolio v2" },
  { id: "a1", type: "achievement", x: 220, y: 10, rotation: 5, icon: Trophy, color: "hsl(var(--primary))", content: "NASA Space Apps", subtitle: "Winner 2024" },
  { id: "a2", type: "achievement", x: 600, y: 440, rotation: -4, icon: Star, color: "hsl(var(--secondary))", content: "Open Source", subtitle: "500+ Contributions" },
  { id: "t1", type: "tag", x: 50, y: 250, rotation: -6, content: "React", color: "hsl(var(--primary))" },
  { id: "t2", type: "tag", x: 450, y: 430, rotation: 8, content: "Unity", color: "hsl(var(--secondary))" },
  { id: "t3", type: "tag", x: 780, y: 400, rotation: -5, content: "Python", color: "hsl(var(--accent))" },
  { id: "t4", type: "tag", x: 100, y: 440, rotation: 10, content: "C++", color: "hsl(var(--primary))" },
  { id: "q1", type: "text", x: 380, y: -10, rotation: -2, content: "\"Code is poetry.\"" },
];

const BOARD_WIDTH_DESKTOP = 2200;
const BOARD_HEIGHT_DESKTOP = 800;
const BOARD_WIDTH_MOBILE = 1050;
const BOARD_HEIGHT_MOBILE = 550;

const PinBoard = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const lastPos = useRef({ x: 0, y: 0 });
  const boardX = useMotionValue(0);
  const boardY = useMotionValue(0);
  const [containerSize, setContainerSize] = useState({ w: 0, h: 0 });
  const [isMobile, setIsMobile] = useState(false);

  const pinItems = isMobile ? pinItemsMobile : pinItemsDesktop;
  const BOARD_WIDTH = isMobile ? BOARD_WIDTH_MOBILE : BOARD_WIDTH_DESKTOP;
  const BOARD_HEIGHT = isMobile ? BOARD_HEIGHT_MOBILE : BOARD_HEIGHT_DESKTOP;

  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        const w = containerRef.current.clientWidth;
        setContainerSize({ w, h: containerRef.current.clientHeight });
        setIsMobile(w < 768);
      }
    };
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  useEffect(() => {
    if (containerSize.w > 0) {
      const initialX = -(BOARD_WIDTH - containerSize.w) / 2;
      const initialY = -(BOARD_HEIGHT - containerSize.h) / 2;
      boardX.set(initialX);
      boardY.set(initialY);
    }
  }, [containerSize, isMobile]);

  const clampPosition = (x: number, y: number) => {
    const minX = -(BOARD_WIDTH - containerSize.w + 100);
    const maxX = 100;
    const minY = -(BOARD_HEIGHT - containerSize.h + 100);
    const maxY = 100;
    return {
      x: Math.max(minX, Math.min(maxX, x)),
      y: Math.max(minY, Math.min(maxY, y)),
    };
  };

  const handlePointerDown = (e: React.PointerEvent) => {
    isDragging.current = true;
    lastPos.current = { x: e.clientX, y: e.clientY };
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging.current) return;
    const dx = e.clientX - lastPos.current.x;
    const dy = e.clientY - lastPos.current.y;
    lastPos.current = { x: e.clientX, y: e.clientY };
    const clamped = clampPosition(boardX.get() + dx, boardY.get() + dy);
    boardX.set(clamped.x);
    boardY.set(clamped.y);
  };

  const handlePointerUp = () => {
    isDragging.current = false;
  };

  return (
    <section id="pinboard" className="py-8 md:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-12 mb-4 md:mb-8">
        <motion.h2
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="font-brush font-black text-3xl md:text-7xl text-primary"
        >
          My Pin Board
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="font-handwritten text-base md:text-2xl text-muted-foreground mt-1 md:mt-2"
        >
          drag to explore ↔
        </motion.p>
      </div>

      <div
        ref={containerRef}
        className="relative w-full h-[400px] md:h-[700px] cursor-grab active:cursor-grabbing select-none overflow-hidden"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
        style={{ touchAction: "none" }}
      >
        {/* Grid background */}
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }} />

        <motion.div
          style={{ x: boardX, y: boardY }}
          className="absolute"
        >
          {pinItems.map((item, i) => (
            <motion.div
              key={item.id}
              className="absolute"
              style={{
                left: item.x,
                top: item.y,
                rotate: item.rotation,
                width: item.width,
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.03 }}
            >
              {item.type === "image" && (
                <div className="group relative">
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 z-10 w-3 h-3 md:w-4 md:h-4 rounded-full bg-destructive shadow-md border-2 border-destructive/50" />
                  <div className="bg-card border border-border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <img
                      src={item.image}
                      alt={item.content || ""}
                      className="w-full h-28 md:h-48 object-cover"
                      draggable={false}
                    />
                    <div className="p-2 md:p-3">
                      <p className="font-display font-semibold text-xs md:text-sm text-foreground">{item.content}</p>
                    </div>
                  </div>
                </div>
              )}

              {item.type === "achievement" && (
                <div className="relative">
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 z-10 w-3 h-3 md:w-4 md:h-4 rounded-full bg-accent shadow-md border-2 border-accent/50" />
                  <div className="bg-card border-2 border-border rounded-xl p-3 md:p-5 shadow-lg w-[140px] md:w-[200px]">
                    {item.icon && <item.icon className="w-6 h-6 md:w-8 md:h-8 mb-1 md:mb-2" style={{ color: item.color }} />}
                    <p className="font-display font-bold text-foreground text-xs md:text-base">{item.content}</p>
                    <p className="text-muted-foreground text-[10px] md:text-xs mt-0.5 md:mt-1">{item.subtitle}</p>
                  </div>
                </div>
              )}

              {item.type === "tag" && (
                <div className="relative inline-block">
                  <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 z-10 w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-primary shadow border border-primary/50" />
                  <span className="inline-block px-3 py-1.5 md:px-4 md:py-2 rounded-full font-display font-bold text-xs md:text-sm shadow-md border border-border bg-card text-foreground">
                    {item.content}
                  </span>
                </div>
              )}

              {item.type === "text" && (
                <div className="relative max-w-[180px] md:max-w-[250px]">
                  <div className="absolute -top-1.5 left-4 z-10 w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-secondary shadow border border-secondary/50" />
                  <div className="bg-card/80 backdrop-blur border border-border rounded-lg p-3 md:p-4 shadow-md">
                    <p className="font-handwritten text-sm md:text-lg text-muted-foreground italic">{item.content}</p>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PinBoard;

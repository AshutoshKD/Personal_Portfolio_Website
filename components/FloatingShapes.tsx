"use client";

import { motion } from "framer-motion";

export function ProjectArt({ type, index }: { type: string; index: number }) {
  const colors = [
    { primary: "var(--accent)", secondary: "var(--accent-secondary)" },
    { primary: "var(--accent-tertiary)", secondary: "var(--accent)" },
    { primary: "var(--accent-secondary)", secondary: "var(--accent-tertiary)" },
  ];
  
  const color = colors[index % colors.length];

  if (type === "nodes") {
    return (
      <motion.svg
        width="200"
        height="150"
        viewBox="0 0 200 150"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="mx-auto"
      >
        <motion.circle
          cx="100"
          cy="30"
          r="12"
          fill="none"
          stroke={color.primary}
          strokeWidth="2"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2 }}
        />
        <motion.circle cx="100" cy="30" r="4" fill={color.primary} />
        
        <motion.line
          x1="88"
          y1="38"
          x2="50"
          y2="70"
          stroke="var(--border-light)"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        />
        <motion.line
          x1="112"
          y1="38"
          x2="150"
          y2="70"
          stroke="var(--border-light)"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        />
        
        <motion.circle
          cx="40"
          cy="80"
          r="10"
          fill="none"
          stroke={color.secondary}
          strokeWidth="2"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.6 }}
        />
        <motion.circle
          cx="100"
          cy="90"
          r="10"
          fill="none"
          stroke={color.secondary}
          strokeWidth="2"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.7 }}
        />
        <motion.circle
          cx="160"
          cy="80"
          r="10"
          fill="none"
          stroke={color.secondary}
          strokeWidth="2"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.8 }}
        />
        
        <motion.line
          x1="50"
          y1="80"
          x2="90"
          y2="90"
          stroke="var(--border-light)"
          strokeWidth="1"
          strokeDasharray="4 4"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: 0.9, duration: 0.3 }}
        />
        <motion.line
          x1="110"
          y1="90"
          x2="150"
          y2="80"
          stroke="var(--border-light)"
          strokeWidth="1"
          strokeDasharray="4 4"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: 0.9, duration: 0.3 }}
        />

        <motion.circle
          cx="100"
          cy="130"
          r="8"
          fill={color.primary}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: [0, 1.2, 1], opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        />
        <motion.line
          x1="100"
          y1="100"
          x2="100"
          y2="122"
          stroke={color.primary}
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: 1, duration: 0.3 }}
        />
      </motion.svg>
    );
  }

  if (type === "connection") {
    return (
      <motion.svg
        width="200"
        height="150"
        viewBox="0 0 200 150"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="mx-auto"
      >
        <motion.rect
          x="20"
          y="40"
          width="50"
          height="35"
          rx="4"
          fill="none"
          stroke={color.primary}
          strokeWidth="2"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2 }}
        />
        <motion.circle cx="45" cy="57" r="8" fill={color.primary} opacity="0.3" />
        <motion.circle cx="45" cy="57" r="4" fill={color.primary} />
        
        <motion.rect
          x="130"
          y="40"
          width="50"
          height="35"
          rx="4"
          fill="none"
          stroke={color.secondary}
          strokeWidth="2"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3 }}
        />
        <motion.circle cx="155" cy="57" r="8" fill={color.secondary} opacity="0.3" />
        <motion.circle cx="155" cy="57" r="4" fill={color.secondary} />
        
        <motion.path
          d="M 70 57 Q 100 57 100 57 T 130 57"
          fill="none"
          stroke="var(--border-light)"
          strokeWidth="2"
          strokeDasharray="6 6"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        />
        
        <motion.g
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.8, type: "spring" }}
        >
          <circle cx="100" cy="110" r="18" fill="none" stroke={color.primary} strokeWidth="2" />
          <circle cx="100" cy="110" r="10" fill="none" stroke={color.secondary} strokeWidth="1" />
          <motion.circle
            cx="100"
            cy="110"
            r="4"
            fill={color.primary}
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.g>
        
        <motion.line
          x1="45"
          y1="75"
          x2="85"
          y2="95"
          stroke="var(--border-light)"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: 1, duration: 0.3 }}
        />
        <motion.line
          x1="155"
          y1="75"
          x2="115"
          y2="95"
          stroke="var(--border-light)"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: 1, duration: 0.3 }}
        />
      </motion.svg>
    );
  }

  return (
    <motion.svg
      width="200"
      height="150"
      viewBox="0 0 200 150"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="mx-auto"
    >
      <motion.rect
        x="40"
        y="100"
        width="120"
        height="25"
        rx="3"
        fill="none"
        stroke={color.secondary}
        strokeWidth="2"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.2 }}
      />
      <motion.rect
        x="50"
        y="70"
        width="100"
        height="25"
        rx="3"
        fill="none"
        stroke={color.primary}
        strokeWidth="2"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.4 }}
      />
      <motion.rect
        x="60"
        y="40"
        width="80"
        height="25"
        rx="3"
        fill="none"
        stroke={color.secondary}
        strokeWidth="2"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.6 }}
      />
      
      <motion.circle
        cx="100"
        cy="20"
        r="8"
        fill={color.primary}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8, type: "spring" }}
      />
      
      <motion.line
        x1="100"
        y1="28"
        x2="100"
        y2="40"
        stroke={color.primary}
        strokeWidth="2"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ delay: 1, duration: 0.3 }}
      />
    </motion.svg>
  );
}

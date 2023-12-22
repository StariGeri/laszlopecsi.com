export const menuContainerVariants = {
  initial: {
    x: 'calc(100% + 100px)',
  },
  enter: {
    x: '0',
    transition: {
      duration: 0.3,
      ease: [0.76, 0, 0.24, 1],
      staggerChildren: 0.2,
    },
  },
  exit: {
    x: 'calc(100% + 100px)',
    transition: {
      duration: 0.3,
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

// Animation variants for individual menu items
export const menuItemVariants = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    opacity: 0,
  },
};

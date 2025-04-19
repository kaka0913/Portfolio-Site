/*
	Installed from https://reactbits.dev/ts/default/
*/

import React, { useEffect, useRef, ReactNode } from "react";
import { useSpring, animated } from "@react-spring/web";

interface AnimatedContentProps {
  children: ReactNode;
  threshold?: number;
  rootMargin?: string;
  animationFrom?: { opacity: number; transform: string };
  animationTo?: { opacity: number; transform: string };
  delay?: number;
  onAnimationComplete?: () => void;
}

const AnimatedContent: React.FC<AnimatedContentProps> = ({
  children,
  threshold = 0.1,
  rootMargin = "-100px",
  animationFrom = { opacity: 0, transform: "translate3d(0,40px,0)" },
  animationTo = { opacity: 1, transform: "translate3d(0,0,0)" },
  delay = 0,
  onAnimationComplete,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [styles, api] = useSpring(() => ({
    from: animationFrom,
    config: { mass: 1, tension: 180, friction: 12 },
  }));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          api.start({
            to: animationTo,
            delay,
            onRest: () => {
              if (onAnimationComplete) {
                onAnimationComplete();
              }
            },
          });
          if (containerRef.current) {
            observer.unobserve(containerRef.current);
          }
        }
      },
      { threshold, rootMargin }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [api, animationTo, delay, onAnimationComplete, rootMargin, threshold]);

  const Container = animated('div');

  return (
    <Container ref={containerRef} style={styles}>
      {children}
    </Container>
  );
};

export default AnimatedContent;

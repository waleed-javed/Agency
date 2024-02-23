import { motion, stagger, useAnimate } from "framer-motion";
import { useEffect } from "react";
import { TextGenerateProps, cn } from "../../utilities/utilities";

export const TextGenerateEffect = ({
  words,
  className,
  childClassName,
}: TextGenerateProps) => {
  // animation hook
  const [scope, animate] = useAnimate();

  //   array of words
  const wordsArray: string[] = words.split(" ");

  // animation effect
  useEffect(() => {
    animate(
      "span",
      { opacity: 1 },
      {
        duration: 2,
        delay: stagger(0.2),
      }
    );
  }, [scope.current]);

  //   sub component to render animation
  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => (
          <motion.span key={word + idx} className="text-purple-400 opacity-0">
            {word}{" "}
          </motion.span>
        ))}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-4">
        <div
          className={cn(
            " dark:text-white text-black text-2xl leading-snug tracking-wide",
            childClassName
          )}
        >
          {renderWords()}
        </div>
      </div>
    </div>
  );
};

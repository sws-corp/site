 import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Instagram, Shuffle, Trophy } from "lucide-react";

export type InstagramPuzzleGameProps = {
  image_url:string
  grid_size:number
}

export function InstagramPuzzleGame({image_url,grid_size}:InstagramPuzzleGameProps) {
  const [pieces, setPieces] = useState<number[]>([]);
  const [selected, setSelected] = useState<number | null>(null);
  const [solved, setSolved] = useState(false);
  const [moves, setMoves] = useState(0);
 
  const totalPieces = grid_size ** 2

  useEffect(() => {
    shufflePieces();
  }, []);

  const shufflePieces = () => {
    const shuffled = Array.from(Array(totalPieces).keys()).sort(   () => Math.random() - 0.5  );
    setPieces(shuffled);
    setSolved(false);
    setMoves(0);
  };

  const handlePieceClick = (index: number) => {
    if (solved) return;

    if (selected === null) {
      setSelected(index);
    } else {
      const newPieces = [...pieces];
      [newPieces[selected], newPieces[index]] = [
        newPieces[index],
        newPieces[selected],
      ];
      setPieces(newPieces);
      setSelected(null);
      setMoves((prev) => prev + 1);
      checkSolution(newPieces);
    }
  };

  const checkSolution = (currentPieces: number[]) => {
    if (currentPieces.every((piece, index) => piece === index)) {
      setSolved(true);
    }
  };

  const getBackgroundPosition = (index: number) => {
    const row = Math.floor(index / grid_size);
    const col = index % grid_size;
    const step = 100 / (grid_size - 1);
    return `${col * step}% ${row * step}%`;
  };

  return (
    <section className="py-24 bg-auto relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-white">
            Follow Us
          </h2>
          <p className="text-zinc-400 max-w-xl mx-auto">
            Complete the puzzle to unlock our Instagram feed!{" "}
          </p>
        </motion.div>

        <div className="relative">
          <motion.div
            className="gap-1.5 max-w-md mx-auto mb-8 aspect-square bg-zinc-900/50 p-2 rounded-xl border border-zinc-800"
            style={{
              display: "grid",
              gridTemplateColumns: `repeat(${grid_size}, 1fr)`,
            }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
          >
            {pieces.map((piece, index) => (
              <motion.div
                key={index}
                className={`
                  relative aspect-square overflow-hidden rounded-lg cursor-pointer
                  ${selected === index ? "ring-2 ring-[#90CA03]" : ""} 
                `}
                whileHover={{ scale: 0.95 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => handlePieceClick(index)}
                style={{
                  backgroundImage: `url(${image_url})`,
                  backgroundSize: `${grid_size * 100}%`,
                  backgroundPosition: getBackgroundPosition(piece),
                  backgroundRepeat: "no-repeat",
                }}
              />
            ))}
          </motion.div>
 
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-4">
              <motion.button
                onClick={shufflePieces}
                className="px-6 py-2.5 rounded-lg font-medium bg-zinc-800 text-white hover:bg-zinc-700 transition-colors flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={solved}
              >
                <Shuffle className="w-4 h-4" />
                <span>Shuffle</span>
              </motion.button>
              <div className="text-zinc-400">
                Moves: <span className="text-white font-medium">{moves}</span>
              </div>
            </div>

            <AnimatePresence>
              {solved && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="flex flex-col items-center gap-4"
                >
                  <div className="flex items-center gap-2 text-[#90CA03] font-medium">
                    <Trophy className="w-5 h-5" />
                    <span>Puzzle Completed!</span>
                  </div>

                  <motion.a
                    href="https://instagram.com/sws.corp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-3 rounded-full font-medium bg-[#90CA03] text-black hover:bg-[#7AB002] transition-colors flex items-center gap-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Instagram className="w-5 h-5" />
                    <span>Follow Us on Instagram</span>
                  </motion.a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
 
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute -top-1/2 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#90CA03]/5 rounded-full blur-[100px]" />
      </div>
    </section>
  );
}

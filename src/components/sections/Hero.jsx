import AnimatedBlob from "../AnimatedBlob";

export default function HeroSection() {
  return (
    <div className="relative overflow-hidden min-h-screen bg-accent-dark text-white">
      {/* Blobs */}
      <AnimatedBlob top="10%" left="5%" color="rgba(99,102,241,0.2)" />
      <AnimatedBlob
        top="30%"
        left="60%"
        color="rgba(236,72,153,0.2)"
        size="300px"
      />
      <AnimatedBlob
        top="70%"
        left="20%"
        color="rgba(16,185,129,0.15)"
        size="350px"
      />

      {/* Actual Hero Content */}
      <div className="relative h-screen flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-4xl md:text-6xl text-primary font-bold">
          Loop.AI — Smarter Tools for African Creators
        </h1>
        <p className="mt-4 max-w-xl text-secondary text-lg text-gray-300">
          Create faster, caption better, and stay ahead of trends. Your
          intelligent creative partner.
        </p>
        <button className="mt-6 px-6 py-3 bg-purple-600 hover:bg-purple-700 transition rounded-xl text-white font-semibold">
          Join the Waitlist
        </button>
      </div>
    </div>
  );
}

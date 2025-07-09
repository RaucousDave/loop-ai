import AnimatedBlob from "../AnimatedBlob";
import FadeInOnScroll from "../FadeIn";

export default function WhyLoopAI() {
  return (
    <>
      <section className="relative bg-gray-300 px-6 py-12 overflow-hidden  min-h-screen  text-black">
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
        <div className="max-w-4xl mx-auto text-center">
          <FadeInOnScroll>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Loop.AI?
            </h2>
            <p className="text-lg text-black mb-10">
              Because African creators deserve more than generic tools. Loop.AI
              was built to understand your voice, your culture, and your hustle.
              It's not just AI — it's your creative partner, tuned to your
              reality.
            </p>
          </FadeInOnScroll>

          <div className="grid md:grid-cols-3 gap-10 text-left">
            <FadeInOnScroll delay={0.2}>
              <div className="bg-[#111] text-white p-6 rounded-2xl shadow-md hover:shadow-purple-500/20 transition">
                <h3 className="text-xl font-semibold mb-2">
                  🧠 Smart, But Simple
                </h3>
                <p className="text-gray-400">
                  We use powerful AI under the hood — but keep the interface
                  clean and easy. No jargon. No stress.
                </p>
              </div>
            </FadeInOnScroll>
            <FadeInOnScroll delay={0.5}>
              <div className="bg-[#111] p-6 rounded-2xl shadow-md hover:shadow-pink-500/20 text-white transition">
                <h3 className="text-xl font-semibold mb-2">
                  🌍 Made for Africa
                </h3>
                <p className="text-gray-400">
                  Loop speaks your language — literally. Pidgin, Yoruba,
                  Swahili, and more. It’s local-first by design.
                </p>
              </div>
            </FadeInOnScroll>
            <FadeInOnScroll delay={0.8}>
              <div className="bg-[#111] text-white p-6 rounded-2xl shadow-md hover:shadow-green-500/20 transition">
                <h3 className="text-xl font-semibold mb-2">🎯 Creator-First</h3>
                <p className="text-gray-400">
                  We’re not trying to replace you — we’re here to help you move
                  faster, stay consistent, and grow your audience.
                </p>
              </div>
            </FadeInOnScroll>
          </div>
        </div>
      </section>
    </>
  );
}

import FadeInOnScroll from "../FadeIn";

export default function Benefits() {
  return (
    <>
      <section
        id="features"
        className="relative z-10 bg-[#0a0a0a] text-white py-24 px-6 md:px-16 lg:px-32"
      >
        <FadeInOnScroll>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold">
              Made for the Culture. <br className="hidden md:block" />
              Built for Creators.
            </h2>
            <p className="mt-4 text-gray-400 max-w-xl mx-auto text-lg">
              Loop.AI gives African creators the power of intelligent tools —
              without killing your vibe.
            </p>
          </div>
        </FadeInOnScroll>
        <div className="grid md:grid-cols-3 gap-10 text-center">
          <FadeInOnScroll delay={0.2}>
            <div className="bg-[#111] rounded-2xl p-8 shadow-md hover:shadow-purple-500/30 transition">
              <span className="text-4xl">🎯</span>
              <h3 className="text-xl font-semibold mt-4 mb-2">Auto-Captions</h3>
              <p className="text-gray-400">
                Never stress your brain again. Get smart captions & hashtags in
                seconds.
              </p>
            </div>
          </FadeInOnScroll>
          <FadeInOnScroll delay={0.5}>
            <div className="bg-[#111] rounded-2xl p-8 shadow-md hover:shadow-pink-500/30 transition">
              <span className="text-4xl">📈</span>
              <h3 className="text-xl font-semibold mt-4 mb-2">Trend Tracker</h3>
              <p className="text-gray-400">
                Know what’s hot in your niche — before everyone else does.
              </p>
            </div>
          </FadeInOnScroll>
          <FadeInOnScroll delay={0.8}>
            <div className="bg-[#111] rounded-2xl p-8 shadow-md hover:shadow-green-500/30 transition">
              <span className="text-4xl">🌍</span>
              <h3 className="text-xl font-semibold mt-4 mb-2">
                Local Language Vibes
              </h3>
              <p className="text-gray-400">
                Create in Pidgin, Yoruba, Swahili and more — Loop speaks your
                vibe.
              </p>
            </div>
          </FadeInOnScroll>
        </div>

        {/* Optional CTA */}
        <div className="text-center mt-16">
          <a
            href="#cta"
            className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-xl transition"
          >
            Join the Waitlist
          </a>
        </div>
      </section>
    </>
  );
}

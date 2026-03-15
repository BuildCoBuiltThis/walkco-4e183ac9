'use client';

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Header */}
      <header className="border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-500">🐕 WalkCo</div>
          <nav className="hidden md:flex gap-8">
            <a href="#features" className="hover:text-blue-400 transition">Features</a>
            <a href="#pricing" className="hover:text-blue-400 transition">Pricing</a>
            <a href="#faq" className="hover:text-blue-400 transition">FAQ</a>
          </nav>
          <div className="flex gap-4">
            <button className="px-4 py-2 text-sm hover:text-blue-400 transition">Sign In</button>
            <button className="px-4 py-2 text-sm bg-blue-600 rounded-lg hover:bg-blue-700 transition">Get Started</button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Trusted Dog Walks,
            <span className="text-blue-500"> On Demand</span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-400 mb-10">
            Connect with vetted local dog walkers. Book walks in minutes, track in real-time, and get photo updates — all in one app.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-blue-600 rounded-lg text-lg font-semibold hover:bg-blue-700 transition">
              Book Your First Walk
            </button>
            <button className="px-8 py-4 border border-zinc-700 rounded-lg text-lg font-semibold hover:border-zinc-600 transition">
              Become a Walker
            </button>
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-zinc-400">
            <div className="flex items-center gap-2">
              <span className="text-2xl">⚡</span>
              <span>Instant Booking</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🔒</span>
              <span>Vetted Walkers</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">📊</span>
              <span>Real-time GPS</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-zinc-800">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Everything You Need</h2>
          <p className="text-xl text-zinc-400">Built for dog owners and walkers</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-zinc-900 p-8 rounded-xl border border-zinc-800 hover:border-blue-500 transition">
            <div className="text-4xl mb-4">🐾</div>
            <h3 className="text-xl font-bold mb-2">Dog Profiles</h3>
            <p className="text-zinc-400">Create detailed profiles with preferences, special needs, and personality traits</p>
          </div>
          <div className="bg-zinc-900 p-8 rounded-xl border border-zinc-800 hover:border-blue-500 transition">
            <div className="text-4xl mb-4">📍</div>
            <h3 className="text-xl font-bold mb-2">Live Tracking</h3>
            <p className="text-zinc-400">Watch your dog's walk in real-time with GPS tracking and route history</p>
          </div>
          <div className="bg-zinc-900 p-8 rounded-xl border border-zinc-800 hover:border-blue-500 transition">
            <div className="text-4xl mb-4">📸</div>
            <h3 className="text-xl font-bold mb-2">Photo Updates</h3>
            <p className="text-zinc-400">Receive adorable photos of your pup during their adventure</p>
          </div>
          <div className="bg-zinc-900 p-8 rounded-xl border border-zinc-800 hover:border-blue-500 transition">
            <div className="text-4xl mb-4">💳</div>
            <h3 className="text-xl font-bold mb-2">Easy Payments</h3>
            <p className="text-zinc-400">Secure in-app payments with automatic billing and receipts</p>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-zinc-800">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Loved by Dog Parents</h2>
          <p className="text-xl text-zinc-400">Join thousands of happy pups and their owners</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-zinc-900 p-8 rounded-xl border border-zinc-800">
            <div className="text-yellow-500 text-2xl mb-4">⭐⭐⭐⭐⭐</div>
            <p className="text-zinc-300 mb-4">"WalkCo has been a lifesaver! The walkers are professional and my dog Charlie absolutely loves them. The real-time tracking gives me peace of mind."</p>
            <div className="font-semibold">Sarah M.</div>
            <div className="text-sm text-zinc-500">Golden Retriever owner</div>
          </div>
          <div className="bg-zinc-900 p-8 rounded-xl border border-zinc-800">
            <div className="text-yellow-500 text-2xl mb-4">⭐⭐⭐⭐⭐</div>
            <p className="text-zinc-300 mb-4">"As a walker, WalkCo makes my job so easy. The scheduling system is intuitive and I love building relationships with regular clients."</p>
            <div className="font-semibold">Mike R.</div>
            <div className="text-sm text-zinc-500">Professional Walker</div>
          </div>
          <div className="bg-zinc-900 p-8 rounded-xl border border-zinc-800">
            <div className="text-yellow-500 text-2xl mb-4">⭐⭐⭐⭐⭐</div>
            <p className="text-zinc-300 mb-4">"Best decision ever! My anxious rescue dog Luna has come out of her shell thanks to her regular walker. The photo updates make my day!"</p>
            <div className="font-semibold">Jessica L.</div>
            <div className="text-sm text-zinc-500">Rescue Dog Mom</div>
          </div>
        </div>
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-blue-500 mb-2">50K+</div>
            <div className="text-zinc-400">Walks Completed</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-blue-500 mb-2">10K+</div>
            <div className="text-zinc-400">Happy Dogs</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-blue-500 mb-2">500+</div>
            <div className="text-zinc-400">Verified Walkers</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-blue-500 mb-2">4.9</div>
            <div className="text-zinc-400">Average Rating</div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-zinc-800">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Simple, Fair Pricing</h2>
          <p className="text-xl text-zinc-400">Pay per walk with no hidden fees</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-zinc-900 p-8 rounded-xl border border-zinc-800 hover:border-zinc-700 transition">
            <h3 className="text-2xl font-bold mb-2">30-Minute Walk</h3>
            <div className="text-5xl font-bold text-blue-500 mb-4">$25</div>
            <div className="text-zinc-400 mb-6">per walk</div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span className="text-zinc-300">Perfect for busy days</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span className="text-zinc-300">GPS tracking</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span className="text-zinc-300">2-3 photos included</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span className="text-zinc-300">Walk report</span>
              </li>
            </ul>
            <button className="w-full py-3 border border-zinc-700 rounded-lg hover:border-zinc-600 transition">Select Plan</button>
          </div>
          <div className="bg-zinc-900 p-8 rounded-xl border-2 border-blue-500 hover:border-blue-400 transition relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-500 px-4 py-1 rounded-full text-sm font-semibold">Most Popular</div>
            <h3 className="text-2xl font-bold mb-2">60-Minute Walk</h3>
            <div className="text-5xl font-bold text-blue-500 mb-4">$40</div>
            <div className="text-zinc-400 mb-6">per walk</div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span className="text-zinc-300">Full exercise session</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span className="text-zinc-300">GPS tracking</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span className="text-zinc-300">5+ photos included</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span className="text-zinc-300">Detailed walk report</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span className="text-zinc-300">Water break included</span>
              </li>
            </ul>
            <button className="w-full py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition">Select Plan</button>
          </div>
          <div className="bg-zinc-900 p-8 rounded-xl border border-zinc-800 hover:border-zinc-700 transition">
            <h3 className="text-2xl font-bold mb-2">Walk Packages</h3>
            <div className="text-5xl font-bold text-blue-500 mb-4">$180</div>
            <div className="text-zinc-400 mb-6">5 walks (save 10%)</div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span className="text-zinc-300">Mix 30 & 60 min walks</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span className="text-zinc-300">All standard features</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span className="text-zinc-300">Priority booking</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span className="text-zinc-300">Same walker guarantee</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span className="text-zinc-300">Valid for 60 days</span>
              </li>
            </ul>
            <button className="w-full py-3 border border-zinc-700 rounded-lg hover:border-zinc-600 transition">Select Plan</button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-zinc-800">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-zinc-400">Everything you need to know</p>
        </div>
        <div className="space-y-6">
          <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800">
            <h3 className="text-xl font-bold mb-2">How are walkers vetted?</h3>
            <p className="text-zinc-400">All walkers undergo background checks, reference verification, and in-person interviews. They must also complete our dog safety and handling certification program.</p>
          </div>
          <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800">
            <h3 className="text-xl font-bold mb-2">Can I request the same walker?</h3>
            <p className="text-zinc-400">Absolutely! Once you find a walker your dog loves, you can book them for recurring walks or mark them as a favorite for future bookings.</p>
          </div>
          <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800">
            <h3 className="text-xl font-bold mb-2">What if I need to cancel?</h3>
            <p className="text-zinc-400">You can cancel up to 2 hours before a scheduled walk for a full refund. Cancellations within 2 hours are subject to a 50% fee.</p>
          </div>
          <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800">
            <h3 className="text-xl font-bold mb-2">Is my dog insured during walks?</h3>
            <p className="text-zinc-400">Yes! All walks are covered by our comprehensive pet insurance policy at no extra cost to you.</p>
          </div>
          <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800">
            <h3 className="text-xl font-bold mb-2">How do I become a walker?</h3>
            <p className="text-zinc-400">Click "Become a Walker" to start your application. You'll need to pass our background check, provide references, and complete our training program. Most walkers earn $20-30 per walk.</p>
          </div>
          <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800">
            <h3 className="text-xl font-bold mb-2">What areas do you serve?</h3>
            <p className="text-zinc-400">We're currently in major metro areas and expanding rapidly. Enter your zip code in the app to check availability in your neighborhood.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-zinc-800">
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-12 md:p-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Give Your Dog the Best Walks?</h2>
          <p className="text-xl mb-8 text-blue-100">Join thousands of happy dogs and their owners today</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-blue-600 rounded-lg text-lg font-semibold hover:bg-zinc-100 transition">
              Download the App
            </button>
            <button className="px-8 py-4 border-2 border-white rounded-lg text-lg font-semibold hover:bg-blue-600 transition">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-2xl font-bold text-blue-500 mb-4">🐕 WalkCo</div>
              <p className="text-zinc-400">Trusted dog walks, on demand.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Product</h4>
              <ul className="space-y-2 text-zinc-400">
                <li><a href="#" className="hover:text-white transition">Features</a></li>
                <li><a href="#" className="hover:text-white transition">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition">How it Works</a></li>
                <li><a href="#" className="hover:text-white transition">Safety</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-zinc-400">
                <li><a href="#" className="hover:text-white transition">About Us</a></li>
                <li><a href="#" className="hover:text-white transition">Careers</a></li>
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
                <li><a href="#" className="hover:text-white transition">Press</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Support</h4>
              <ul className="space-y-2 text-zinc-400">
                <li><a href="#" className="hover:text-white transition">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-zinc-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-zinc-400 text-sm">© 2024 WalkCo. All rights reserved.</p>
            <div className="flex gap-6 text-zinc-400">
              <a href="#" className="hover:text-white transition">Twitter</a>
              <a href="#" className="hover:text-white transition">Instagram</a>
              <a href="#" className="hover:text-white transition">Facebook</a>
              <a href="#" className="hover:text-white transition">LinkedIn</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
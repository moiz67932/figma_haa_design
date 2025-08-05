"use client"

export function ProductScreenshot() {
  return (
    <section className="py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">See HAA in action</h2>
          <p className="text-xl text-gray-600">
            A clean, intuitive interface that makes managing your assets effortless
          </p>
        </div>

        <div className="relative animate-slide-up">
          <div className="relative mx-auto max-w-6xl">
            <div className="absolute inset-0 bg-gradient-to-r from-[#0056B3]/20 to-[#FF7A00]/20 rounded-3xl blur-3xl transform rotate-1"></div>
            <div className="relative bg-white rounded-3xl shadow-2xl border border-gray-200 p-8 transform -rotate-1 hover:rotate-0 transition-transform duration-500">
              <div className="bg-gray-100 rounded-2xl aspect-video flex items-center justify-center">
                <img
                  src="/placeholder.svg?height=600&width=1000&text=HAA+Dashboard+Screenshot"
                  alt="Home & Auto Assistant Dashboard"
                  className="rounded-2xl shadow-lg max-w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

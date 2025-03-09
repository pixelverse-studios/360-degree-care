export default function CompanionsServicesPage() {
    return (
        <main>
            <div className="bg-gray-50 text-gray-800">
                <section className="relative bg-blue-600 text-white px-4 py-16">
                    <div className="max-w-5xl mx-auto text-center">
                        <h1 className="text-4xl font-extrabold mb-4">
                            Elder Companion Services
                        </h1>
                        <p className="text-lg font-light max-w-2xl mx-auto mb-6">
                            Warm, personal care that keeps seniors socially
                            engaged, safe, and comfortable at home.
                        </p>
                        <button className="px-6 py-3 bg-white text-blue-600 rounded-full font-semibold hover:bg-gray-100 transition">
                            Contact Us
                        </button>
                    </div>
                </section>

                {/* WHAT IS AN ELDER COMPANION? */}
                <section className="max-w-5xl mx-auto px-4 py-12">
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Text Column */}
                        <div>
                            <h2 className="text-3xl font-bold mb-4">
                                What is an Elder Companion?
                            </h2>
                            <p className="mb-6 text-gray-700 leading-relaxed">
                                An elder companion is a compassionate, reliable
                                professional who spends dedicated time with
                                seniors, supporting them with daily tasks
                                and—most importantly—meaningful social
                                engagement. Whether it’s sharing stories over a
                                cup of tea, playing a board game, or simply
                                being present to listen, a trusted companion can
                                help reduce loneliness and improve quality of
                                life.
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                At 360 Degree Care, our companions create a
                                warm, respectful environment that fosters both
                                emotional and physical well-being. From gently
                                reminding seniors about medication to planning
                                fun activities, an elder companion truly becomes
                                a friend you can count on.
                            </p>
                        </div>

                        {/* Image / Graphic Column */}
                        <div className="flex items-center justify-center">
                            {/* This could be an <img> tag if you have an asset to show */}
                            <div className="bg-blue-100 w-full h-64 rounded-lg flex items-center justify-center">
                                <span className="text-blue-600 font-bold text-xl">
                                    {/* Replace this with an <img src="..." alt="..."/> */}
                                    [Elder Companion Image Placeholder]
                                </span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* BENEFITS SECTION */}
                <section className="bg-white py-12">
                    <div className="max-w-5xl mx-auto px-4">
                        <h2 className="text-3xl font-bold mb-8 text-center">
                            How Elder Companions Help
                        </h2>

                        <div className="grid md:grid-cols-3 gap-6">
                            {/* Benefit 1 */}
                            <div className="p-6 border border-gray-100 shadow-sm rounded-lg">
                                <h3 className="text-xl font-semibold mb-2">
                                    Social Connection
                                </h3>
                                <p className="text-gray-700 leading-relaxed">
                                    Companions engage in conversation, share
                                    activities, and accompany seniors on walks
                                    or local outings—fostering companionship and
                                    preventing isolation.
                                </p>
                            </div>
                            {/* Benefit 2 */}
                            <div className="p-6 border border-gray-100 shadow-sm rounded-lg">
                                <h3 className="text-xl font-semibold mb-2">
                                    Daily Assistance
                                </h3>
                                <p className="text-gray-700 leading-relaxed">
                                    From meal prep to light housekeeping,
                                    companions help with everyday tasks so
                                    seniors can maintain a comfortable,
                                    low-stress routine at home.
                                </p>
                            </div>
                            {/* Benefit 3 */}
                            <div className="p-6 border border-gray-100 shadow-sm rounded-lg">
                                <h3 className="text-xl font-semibold mb-2">
                                    Peace of Mind
                                </h3>
                                <p className="text-gray-700 leading-relaxed">
                                    Family members can rest assured knowing
                                    their loved one has a trusted presence to
                                    monitor safety, assist with reminders, and
                                    offer caring support.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                {/* CTA SECTION */}
                <section className="py-12 bg-blue-50">
                    <div className="max-w-4xl mx-auto text-center px-4">
                        <h2 className="text-2xl font-bold mb-4">
                            Ready to Get Started?
                        </h2>
                        <p className="text-gray-700 mb-6">
                            Contact 360 Degree Care to learn more about our
                            Elder Companion Services. We’ll work with you to
                            design a care plan that fits your loved one’s unique
                            needs, ensuring they remain safe, engaged, and happy
                            at home.
                        </p>
                        <button className="px-6 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition">
                            Schedule a Consultation
                        </button>
                    </div>
                </section>
            </div>
        </main>
    )
}

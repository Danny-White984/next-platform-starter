export default function FreeRamenPage() {
    return (
        <div className="flex flex-col gap-8 items-center">
            <section className="text-center py-8">
                <div className="text-8xl mb-6">🍜</div>
                <h1 className="mb-4 text-4xl sm:text-5xl">
                    Claim Your Free Ramen!
                </h1>
            </section>

            <section className="w-full max-w-md">
                <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-xl p-8 shadow-lg">
                    <div className="text-center text-white">
                        <p className="text-xl font-medium mb-4">
                            Send code <span className="font-bold text-2xl">30190</span> to
                        </p>
                        <p className="text-2xl font-bold">
                            (971) 220-2871
                        </p>
                        <p className="text-lg mt-4">
                            to receive ramen
                        </p>
                    </div>
                </div>
            </section>

            <a
                href="/"
                className="text-neutral-400 hover:text-white transition-colors"
            >
                ← Back to Home
            </a>
        </div>
    );
}

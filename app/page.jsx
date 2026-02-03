export default function Page() {
    return (
        <div className="flex flex-col gap-12 sm:gap-16">
            <section className="text-center py-8">
                <h1 className="mb-6 text-5xl sm:text-6xl">
                    Welcome to Deysi's Website!
                </h1>
                <p className="text-xl sm:text-2xl text-neutral-300 max-w-2xl mx-auto">
                    Your one-stop destination for amazing deals and freebies
                </p>
            </section>

            <section className="grid gap-6 sm:grid-cols-2">
                <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-xl p-8 text-center shadow-lg">
                    <div className="text-6xl mb-4">🍜</div>
                    <h2 className="text-white mb-4">Unlimited Free Ramen!</h2>
                    <p className="text-orange-100 text-lg">
                        That's right — enjoy as much delicious ramen as you want, completely free!
                    </p>
                </div>

                <div className="bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl p-8 text-center shadow-lg">
                    <div className="text-6xl mb-4">🎁</div>
                    <h2 className="text-white mb-4">One Free Thing at the GA!</h2>
                    <p className="text-purple-100 text-lg">
                        Stop by and claim your free item — on the house!
                    </p>
                </div>
            </section>

            <section className="bg-neutral-800/50 rounded-xl p-8 text-center">
                <h3 className="text-2xl mb-4">Thanks for Visiting!</h3>
                <p className="text-neutral-300">
                    We're so happy you're here. Enjoy your free stuff!
                </p>
            </section>
        </div>
    );
}

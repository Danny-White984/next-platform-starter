import Image from 'next/image';

const photos = [
    'IMG_20251009_210934546_AE.jpg',
    'IMG-20251009-WA0020.jpg',
    'IMG-20251015-WA0005.jpg',
    'IMG-20251021-WA0090.jpg',
    'IMG-20251023-WA0009.jpg',
    'IMG-20251026-WA0060.jpg',
    'IMG-20251026-WA0071.jpg',
    'IMG-20251026-WA0079.jpg',
    'IMG-20251026-WA0088.jpg',
    'IMG-20251026-WA0093.jpg',
    'IMG_20251108_154206199_AE.jpg',
    'IMG_20251108_162132093.jpg',
    'IMG-20251108-WA0000.jpg',
    'IMG-20251108-WA0005.jpg',
    'IMG-20251108-WA0006.jpg',
    'IMG-20251108-WA0019.jpg',
    'IMG_20251114_213301087_AE.jpg',
    'IMG_20251118_131604091_HDR_AE.jpg',
    'IMG_20251118_213056246_AE.jpg',
    'IMG-20251124-WA0011.jpg',
];

export default function MemoriesPage() {
    return (
        <div className="flex flex-col gap-12 sm:gap-16">
            <section className="text-center py-8">
                <h1 className="mb-6 text-5xl sm:text-6xl">
                    Memories
                </h1>
                <p className="text-xl sm:text-2xl text-neutral-300 max-w-2xl mx-auto">
                    A collection of special moments
                </p>
            </section>

            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {photos.map((photo, index) => (
                    <div
                        key={photo}
                        className="relative aspect-square overflow-hidden rounded-xl bg-neutral-800"
                    >
                        <Image
                            src={`/images/memories/${photo}`}
                            alt={`Memory ${index + 1}`}
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-300"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                    </div>
                ))}
            </section>
        </div>
    );
}

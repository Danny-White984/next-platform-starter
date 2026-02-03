'use client';

import Image from 'next/image';
import { useState } from 'react';

const photoData = [
    {
        file: 'IMG_20251009_210934546_AE.jpg',
        message: "I really enjoyed going to that banquet with you. also look closly and you can see Micah"
    },
    {
        file: 'IMG-20251009-WA0020.jpg',
        message: "I really like that dress. It is probably my second-favorite dress I've seen on you."
    },
    {
        file: 'IMG-20251015-WA0005.jpg',
        message: "I remeber i was missing you when you sent that to me, and it made me pretty happy to see your face"
    },
    {
        file: 'IMG-20251021-WA0090.jpg',
        message: "I had such a great time at the mall with you guys. I felt kinda bad, but I'm really happy we did it"
    },
    {
        file: 'IMG-20251023-WA0009.jpg',
        message: "That is one of my favorite smiles. And I really like that shirt, Half because of the way it looks and half cuz of memories."
    },
    {
        file: 'IMG-20251026-WA0060.jpg',
        message: "I felt so awkward taking that picture, but i am so happy we did. It's one of my favorites."
    },
    {
        file: 'IMG-20251026-WA0071.jpg',
        message: "Thank you for saying yes to the date. even though I didn't call it one . . . my bad :(."
    },
    {
        file: 'IMG-20251026-WA0079.jpg',
        message: "I'm so grateful you suggested taking a picture. I have so much fun all the time looking at them and remembering. Also, I'm still embarrassed by the big zit I had on my forehead."
    },
    {
        file: 'IMG-20251026-WA0088.jpg',
        message: "This is one of my favorite photos, there's one where I'm looking at you too, but i wasnt able to put that on the website. When I look at it, it still feels like I'm right there."
    },
    {
        file: 'IMG-20251026-WA0093.jpg',
        message: "Your smile looks really good here, and even though this is not one of my favorites, it looks really cool. Also, ignore my cheesy smile."
    },
    {
        file: 'IMG_20251108_154206199_AE.jpg',
        message: "I was so happy you went on jewish with me, and I had a great time walking around the park with you."
    },
    {
        file: 'IMG_20251108_162132093.jpg',
        message: "I Like looking at this photo, it looks so funny to me, I smile most of the time that I look at it."
    },
    {
        file: 'IMG-20251108-WA0000.jpg',
        message: "I had a lot of fun every time we studied at the GA. I didn't get much studying done, but I have no regrets."
    },
    {
        file: 'IMG-20251108-WA0005.jpg',
        message: "I remember sitting on the curb with you when we were taking these. That day I thought so many times, It's pretty cool that Deysi is on Jewish with me."
    },
    {
        file: 'IMG-20251108-WA0006.jpg',
        message: "I thought it was so cool that you decided to wear a flower that I gave you."
    },
    {
        file: 'IMG-20251108-WA0019.jpg',
        message: "this is probably the picture I look at the most. A lot of pictures are my favorite for different reason but this one is maybe overall my favorite"
    },
    {
        file: 'IMG_20251114_213301087_AE.jpg',
        message: "My face looks so dumb. I hope you like this picture. Also, sorry for letting you take the blame for the food incident. At least at the library, we got more studying done than at the GA."
    },
    {
        file: 'IMG_20251118_131604091_HDR_AE.jpg',
        message: "I barely remember this one, but I thought I looked kinda fat, so I thought you would like it. JK i like this one because it is different than a lot of the other ones I have."
    },
    {
        file: 'IMG_20251118_213056246_AE.jpg',
        message: "This is one of my faviort things I did with you, Because i didnt really want to do it that much, but the fact that you wanted to do it gave me a chance to do something for you, which was so fun for me."
    },
    {
        file: 'IMG-20251124-WA0011.jpg',
        message: "You look really good in this picture, and more than that, you look really genuine. I hope you enjoyed reading my comments about these photos."
    },
];

function FlipCard({ photo, index }) {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <div
            className="flip-card aspect-square cursor-pointer"
            onClick={() => setIsFlipped(!isFlipped)}
        >
            <div className={`flip-card-inner ${isFlipped ? 'flipped' : ''}`}>
                <div className="flip-card-front rounded-xl overflow-hidden bg-neutral-800">
                    <Image
                        src={`/images/memories/${photo.file}`}
                        alt={`Memory ${index + 1}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                </div>
                <div className="flip-card-back rounded-xl bg-gradient-to-br from-pink-500 to-purple-600 p-4 flex items-center justify-center">
                    <p className="text-white text-center text-sm sm:text-base leading-relaxed">
                        {photo.message}
                    </p>
                </div>
            </div>
        </div>
    );
}

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
                <p className="text-sm text-neutral-400 mt-4">
                    Click on any photo to see a special message
                </p>
            </section>

            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {photoData.map((photo, index) => (
                    <FlipCard key={photo.file} photo={photo} index={index} />
                ))}
            </section>
        </div>
    );
}

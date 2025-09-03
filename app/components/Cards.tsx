'use client'
import React, { useEffect, useState, useRef } from 'react';
import CardTitle from './CardTitle';
import Card from './Card';
import { useRouter } from 'next/navigation';

interface GameItem {
    enabled: boolean;
    name: string;
    slug: string;
    vendor: string;
    description: string;
    thumbnail: string;
    thumbnailBlur: string;
    borderColor: string;
    categories: string[];
    theoreticalPayOut: number;
    restrictedTerritories: string[];
    hasFunMode: boolean;
    featured: boolean;
    maxWinUSD: number;
    maxBetUSD: number;
    favorite: boolean;
}
interface FeaturedProps {
    category: string;
    title: string;
    image: string;
}

const SCROLL_AMOUNT = 320; // px, adjust based on card width

const Cards = ({ category, title, image }: FeaturedProps) => {
    const [games, setGames] = useState<GameItem[]>([]);
    const [loading, setLoading] = useState(true);
    const scrollRef = useRef<HTMLDivElement>(null);
    const router = useRouter();

    useEffect(() => {
        let url = "https://jpapi-staging.jackpot.bet/casino/games";
        if (category === 'featured') {
            url += "?sort=featuredPriority";
        } else if (category === 'Joriginals') {
            url += "?vendor=JackpotOriginal";
        } else if (category === 'new') {
            url += "?sort=createdAt";
        } else if (category === 'providers') {
            url += "?sort=provider";
        } else if (category === 'Slots') {
            url += "?category=" + 'VIDEOSLOTS';
        } else if (category === 'TableGames') {
            url += "?category=" + 'TABLEGAMES';
        } else if (category === 'Gameshow') {
            url += "?category=" + 'GAMESHOWS';
        } else {
            url += "";
        }

        fetch(url)
            .then(res => res.json())
            .then(data => {
                data = data.data.items;
                setGames(data);
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, []);

    const scrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: -SCROLL_AMOUNT, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: SCROLL_AMOUNT, behavior: 'smooth' });
        }
    };

    const handleViewAll = () => {
        router.push(`/results?category=${encodeURIComponent(category)}`);
    };

    return (
        <div className='mt-4 mb-0 pb-0'>
            <CardTitle
                title={title}
                img={image}
                right={
                    <div className="flex items-center gap-2">
                        <button
                            className="text-base font-bold w-25 rounded bg-[#332E42] text-white hover:bg-[#44345a] transition h-8"
                            onClick={handleViewAll}
                        >
                            View All
                        </button>
                        <button
                            className="w-8 h-8 flex items-center justify-center rounded bg-[#332E42] text-white hover:bg-[#44345a] transition"
                            aria-label="Previous"
                            onClick={scrollLeft}
                        >
                            <svg width="16" height="16" fill="none" viewBox="0 0 16 16">
                                <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                        <button
                            className="w-8 h-8 flex items-center justify-center rounded bg-[#332E42] text-white hover:bg-[#44345a] transition"
                            aria-label="Next"
                            onClick={scrollRight}
                        >
                            <svg width="16" height="16" fill="none" viewBox="0 0 16 16">
                                <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                }
            />

            {loading ? (
                <p>Loading...</p>
            ) : (
                <div
                    ref={scrollRef}
                    className="flex overflow-x-auto gap-3 hide-scrollbar"
                >
                    {games.map(game => (
                        <div key={game.slug} className="flex-shrink-0">
                            <Card game={game} />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Cards;
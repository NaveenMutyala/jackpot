'use client';
import React, { useState, useEffect } from 'react';
import Card from './Card';

// Define the shape of a game item from the API
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

// Results component displays search results as cards in a responsive row
const Results = ({ category }: { category: string }) => {
    // State for fetched games
    const [games, setGames] = useState<GameItem[]>([]);
    // State for loading indicator
    const [loading, setLoading] = useState(true);

    // Fetch games from API when category changes
    useEffect(() => {
        let url = "https://jpapi-staging.jackpot.bet/casino/games";
        if (category === 'Featured Games') {
            url += "?sort=featuredPriority";
        } else if (category === 'Jackpot Originals') {
            url += "?vendor=JackpotOriginal";
        } else if (category === 'New Games') {
            url += "?sort=createdAt";
        } else if (category === 'providers') {
            url += "?sort=provider";
        } else if (category === 'Slots') {
            url += "?category=" + 'VIDEOSLOTS';
        } else if (category === 'Table Games') {
            url += "?category=" + 'TABLEGAMES';
        } else if (category === 'Game shows') {
            url += "?category=" + 'GAMESHOWS';
        } else {
            url += "?search=" + category;
        }
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setGames(data.data.items);
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, [category]);

    return (
        <div className='mt-4'>
            {/* Show loading indicator while fetching */}
            {loading ? (
                <div>Loading...</div>
            ) : (
                // Display all games in a responsive row, wrapping as needed
                <div className="flex flex-wrap gap-2">
                    {games.map((game) => (
                        <div key={game.slug} className="flex-shrink-0">
                            {/* Render each game as a Card */}
                            <Card game={game} />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Results;

import React, { useState } from 'react';

// SearchItems displays category items in a horizontal row with border and background, supports single selection
interface SearchItemsProps {
    searchfunction: (selected: string) => void;
}

const SearchItems = ({ searchfunction }: SearchItemsProps) => {
    const items = [
        'Jackpot Originals',
        'New Games',
        'Slots',
        "Featured Games",
        "Live Dealer",
        "Game Shows",
        "Table Games"
    ];
    const [selected, setSelected] = useState<string>("");

    const handleToggle = (item: string) => {
        const updated = selected === item ? "" : item;
        setSelected(updated);
        searchfunction(updated);
    };

    return (
        <div
            className="flex gap-3 mt-2 overflow-x-auto hide-scrollbar"
            style={{ WebkitOverflowScrolling: 'touch' }}
        >
            {items.map((item, index) => (
                <div
                    key={index}
                    className={`px-4 py-2 rounded border border-[#332E42] text-sm font-medium cursor-pointer transition
                        ${selected === item ? 'bg-[#44345a] text-white' : 'bg-[#332E42] text-white hover:bg-[#44345a]'}`}
                    onClick={() => handleToggle(item)}
                >
                    {item}
                </div>
            ))}
        </div>
    );
};

export default SearchItems;
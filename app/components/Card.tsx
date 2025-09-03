import React from 'react';
interface GameItem {
    name: string;
    thumbnail: string;
    borderColor: string;
}

interface CardProps {
    game: GameItem;
}
const Card = ({ game }: CardProps) => {
    return (
        <div className='card' style={{ borderColor: game.borderColor }}>
            <img src={game.thumbnail} alt={game.name} />
        </div>
    );
};

export default Card;
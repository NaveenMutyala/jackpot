'use client';

// Import brand logo component
import Brand from "./components/Brand";
// Import navigation bar component
import NavBar from "./components/NavBar";
// Import search bar component
import Search from "./components/Search";
// Import cards section component
import Cards from "./components/Cards";
// Next.js hook to get current path
import { usePathname } from 'next/navigation';
// Import search results grid component
import Results from "./components/Results";
// Node.js path module (not used, can be removed)
import path from "path";
// React state hook
import { useState } from "react";
// Import search items dropdown/list component
import SearchItems from "./components/SearchItems";

export default function Home() {
  // Get current path from Next.js router
  const pathname = usePathname();
  // State for search input value
  const [search, setSearch] = useState('');
  // Handler for search input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  const handleToggle = (selected: string) => {
    setSearch(selected);
  };
  return (
    <div className="container">
      {/* Navigation bar at the top */}
      <NavBar />
      <div className="container">
        {/* Brand logo */}
        <Brand />
        {/* Search bar with input handler */}
        <Search searchfunction={handleInputChange} />
        {/* Search items dropdown/list */}
        <SearchItems searchfunction={handleToggle} />
        {/* Show cards sections if no search, otherwise show search results */}
        {search === '' ?
          <div>
            <Cards category="featured" title="Featured Games" image="/Featured.png" />
            <Cards category="Joriginals" title="Jackpot Originals" image="/Joriginal.png" />
            <Cards category="Slots" title="Slots" image="/Slots.png" />
            <Cards category="Providers" title="Providers" image="/Provider.png" />
            <Cards category="TableGames" title="Table Games" image="/Table.png" />
            <Cards category="Gameshow" title="Game Shows" image="/GShow.png" />
            <Cards category="Sports" title="Sports" image="/Sports.png" />
            <Cards category="new" title="New Games" image="/NewGame.png" />
          </div> : <Results searchitem={search} />}
      </div>
    </div>
  );
}

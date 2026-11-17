import '../styles/SearchBar.css';
import search from '../assets/search.svg';
import { useState } from 'react';

interface SearchBarProps {
    onSearch: (username: string) => void;
}

function SearchBar({ onSearch }: SearchBarProps) {
    const [username, setUsername] = useState('');

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        onSearch(username.trim());
    }

    return (
        <form className="search-bar" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Search GitHub user..."
                value={username}
                onChange={(event) => setUsername(event.target.value)}
            />
            <button type="submit">
                <img src={search} alt="Search" />
                Search
            </button>
        </form>
    );
}

export default SearchBar;
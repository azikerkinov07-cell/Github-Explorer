import './styles/App.css';
import { useState } from 'react';
import SearchBar from './components/SearchBar';
import UserProfile from './components/UserProfile';
import RepoList from './components/RepoList';
import type { GitHubUser, GitHubRepo } from './types/github';

function App() {
    const [user, setUser] = useState<GitHubUser | null>(null);
    const [repos, setRepos] = useState<GitHubRepo[]>([]);
    const [error, setError] = useState('');

    async function searchUser(username: string) {
        setError('');

        const trimmedUsername = username.trim();
        const encodedUsername = encodeURIComponent(trimmedUsername);

        try {
            const response = await fetch(
                `https://api.github.com/users/${encodedUsername}`
            );

            if (!response.ok) {
                const errorData = await response.json();
                console.error(errorData);
                throw new Error(`GitHub API error: ${response.status}`);
            }

            const userData: GitHubUser = await response.json();

            const reposResponse = await fetch(
                `https://api.github.com/users/${encodedUsername}/repos?per_page=100&sort=updated`
            );

            if (!reposResponse.ok) {
                throw new Error(`Repositories error: ${reposResponse.status}`);
            }

            const reposData: GitHubRepo[] = await reposResponse.json();

            setUser(userData);
            setRepos(reposData);
        } catch (error) {
            setUser(null);
            setRepos([]);

            if (error instanceof Error) {
                setError(error.message);
            }
        }
    }

    return (
        <main className="app">
            <header className="header">
                <h1>GitHub Explorer</h1>
            </header>

            <SearchBar onSearch={searchUser} />

            {error && <p>{error}</p>}

            {user && <UserProfile user={user} />}
            {user && <RepoList repos={repos} />}
        </main>
    );
}

export default App;
import '../styles/RepoList.css';
import type { GitHubRepo } from '../types/github';

interface RepoListProps {
    repos: GitHubRepo[];
}

function RepoList({ repos }: RepoListProps) {
    return (
        <div className="repositories">
            <h2>Repositories</h2>
            <ul className="repo-list">
                {repos.map((repo) => (
                    <li className="repo-card" key={repo.id}>
                        <h3>{repo.name}</h3>
                        <div className="repo-info">
                            <p>{repo.language || 'Unknown'}</p>
                            <p>★ {repo.stargazers_count}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default RepoList;
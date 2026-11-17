export interface GitHubUser {
    login: string;
    html_url: string;
    public_repos: number;
    followers: number;
    following: number;
}

export interface GitHubRepo {
    id: number;
    name: string;
    html_url: string;
    language: string | null;
    stargazers_count: number;
}
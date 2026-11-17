import '../styles/UserProfile.css';
import type { GitHubUser } from '../types/github';

interface UserProfileProps {
    user: GitHubUser;
}

function UserProfile({ user }: UserProfileProps) {
    return (
        <div className="user-profile">
            <h2 className="profile-name">{user.login}</h2>
            <a href={user.html_url} className="profile-github">@{user.login}</a>
            <hr />
            <div className="stats">
                <div className="repos">
                    <p>Repositories</p>
                    <h2>{user.public_repos}</h2>
                </div>
                <div className="followers">
                    <p>Followers</p>
                    <h2>{user.followers}</h2>
                </div>
                <div className="following">
                    <p>Following</p>
                    <h2>{user.following}</h2>
                </div>
            </div>
        </div>
    );
}

export default UserProfile;
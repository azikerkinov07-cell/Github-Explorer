const express = require('express');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config({
    path: path.join(__dirname, '.env')
});

const app = express();
const PORT = 3001;

app.get('/api/users/:username', async (req, res) => {
    try {
        const response = await fetch(
            `https://api.github.com/users/${encodeURIComponent(req.params.username)}`,
            {
                headers: {
                    Accept: 'application/vnd.github+json',
                    Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
                    'X-GitHub-Api-Version': '2022-11-28'
                }
            }
        );

        const data = await response.json();
        res.status(response.status).json(data);
    } catch {
        res.status(500).json({ message: 'Server error' });
    }
});

app.get('/api/users/:username/repos', async (req, res) => {
    try {
        const response = await fetch(
            `https://api.github.com/users/${encodeURIComponent(req.params.username)}/repos?per_page=100&sort=updated`,
            {
                headers: {
                    Accept: 'application/vnd.github+json',
                    Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
                    'X-GitHub-Api-Version': '2022-11-28'
                }
            }
        );

        const data = await response.json();
        res.status(response.status).json(data);
    } catch {
        res.status(500).json({ message: 'Server error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
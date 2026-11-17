
const express = require('express');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config({
    path: path.join(__dirname, '.env')
});

const app = express();
const PORT = process.env.PORT || 3001;

async function githubRequest(url) {
    const headers = {
        Accept: 'application/vnd.github+json',
        'X-GitHub-Api-Version': '2022-11-28'
    };

    if (process.env.GITHUB_TOKEN) {
        headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
    }

    const response = await fetch(url, { headers });
    const data = await response.json();

    return {
        status: response.status,
        data
    };
}

app.get('/api/users/:username', async (req, res) => {
    try {
        const username = encodeURIComponent(req.params.username);

        const result = await githubRequest(
            `https://api.github.com/users/${username}`
        );

        res.status(result.status).json(result.data);
    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: 'Server error'
        });
    }
});

app.get('/api/users/:username/repos', async (req, res) => {
    try {
        const username = encodeURIComponent(req.params.username);

        const result = await githubRequest(
            `https://api.github.com/users/${username}/repos?per_page=100&sort=updated`
        );

        res.status(result.status).json(result.data);
    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: 'Server error'
        });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

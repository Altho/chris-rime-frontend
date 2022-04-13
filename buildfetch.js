const fetch = require('isomorphic-fetch');
const { spawn } = require('child_process');
const fs = require('fs');
require('dotenv').config({ path: './.env.local' });

async function login() {
    const url = `${process.end.DB_HOST}/api/auth/local`;

    let token;

    try {
        const req = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: process.env.DB_EMAIL,
                password: process.env.DB_PASSWORD,
            }),
        });

        if (!req.ok) throw new Error(req.status);

        const user = await req.json();

        token = user.jwt;
    } catch (e) {
        console.error(e);
        process.exit(e);
    }

    return token;
}

async function build() {
    let token = await login();
    const command = process.env.NODE_ENV === 'production' ? 'build' : 'dev';

    const npm = spawn('npm', ['run', command], { env: { ...process.env, TOKEN: token } });

    npm.stdout.on('data', (data) => {
        console.log(`${data}`);
    });

    npm.stderr.on('data', (data) => {
        console.error(`stderr: ${data}`);
    });

    npm.on('close', (code) => {
        console.log(`child process exited with code ${code}`);
    });
}

module.exports = {
    apps: [{
        name: 'bookshop',
        script: './initializers/server/index.js',
        cwd: process.cwd() + '/_deploy',
        instances: 2,
        exec_mode: 'cluster'
    }],
    deploy: {
        production: {
            host: ['localhost'],
            ref: 'origin/master',
            repo: 'git@github.com:ipcross/group4.git',
            'post-deploy': 'npm install && npm run build:all && pm2 startOrRestart pm2.config.js --env production',
            path: process.cwd() + '/_deploy',
            ssh_options: 'StrictHostKeyChecking=no',
            "env"  : {
                "NODE_ENV": "production"
            }
        }
    }
}
module.exports = {
    apps: [{
        name: "uefa",
        script: "./index.js",
        error_file: 'logs/uefa-err.log',
        out_file: 'logs/uefa-out.log',
        log_file: 'logs/uefa.log',
        log_date_format: "YYYY-MM-DD HH:mm:ss Z",
        time: true,
        instances: "max",
        env: {
            NODE_ENV: "production",
        },
        env_development: {
            NODE_ENV: "development",
        },
        env_production: {
            NODE_ENV: "production",
        },
        max_memory_restart: "500M",
        max_restarts: 10,
        restart_delay: 60000
    }]
}

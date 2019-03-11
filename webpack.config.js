
switch (process.env.NODE_ENV) {
    case 'dev':
    case 'development':
        return require('config/webpack.dev');
    case 'dist':
    case 'distribution':
    case 'prod':
    case 'production':
    default:
        return require('config/webpack.dist');
}

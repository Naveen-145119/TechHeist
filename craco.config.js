// CRACO configuration to integrate Locator Babel plugin only in development
module.exports = {
  babel: {
    plugins: [
      [
        '@locator/babel-jsx/dist',
        {
          env: 'development'
        }
      ]
    ]
  }
}

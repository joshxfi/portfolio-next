module.exports = {
  reactStrictMode: true,
}

module.exports = {
  async redirects() {
    return [
      {
        source: '/github',
        destination: 'https://github.com/joshxfi',
        permanent: false,
        basePath: false
      },
      
      {
        source: '/linkedin',
        destination: 'https://www.linkedin.com/in/joshdanielb/',
        permanent: false,
        basePath: false
      },

      {
        source: '/discord',
        destination: 'https://discord.gg/QwfcUbtzHv',
        permanent: false,
        basePath: false
      },
    ]
  },
};
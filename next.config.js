module.exports = {
    async rewrites() {
      return [
        {
          source: '/api/:path*',
          destination: '/api/:path*',
        },
      ];
    },
    future: {
      webpack5: true,
    },
    env: {
      MONGODB_URI: 'mongodb+srv://drukdenWD:mqn0lTkZXSWbqKbs@cluster0.hkq8itb.mongodb.net/?retryWrites=true&w=majority',
      MONGODB_DB: 'Agro-Chain on xrpl',
    },
    experimental: {
      apiResolver: true,
    },
  

  };
  
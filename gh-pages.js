import ghpages from 'gh-pages';

ghpages.publish(
  'public', // path to public directory
  {
    branch: 'gh-pages',
    repo: 'https://github.com/kbzt/kleidi.ca.git', // Update to point to your repository
    user: {
      name: 'Kleidi', // update to use your name
      email: 'mail@kleidi.ca' // Update to use your email
    },
    dotfiles: true
  },
  () => {
    console.log('Deploy Complete!');
  }
);

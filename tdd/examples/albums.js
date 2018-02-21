import SpotifyWrapper from '../src/index';

global.fetch = require('node-fetch');


const spotify = new SpotifyWrapper({
  token: 'BQBfisutFTyIyqr0RLMqVaT95ogkTZo87MieB09XEEEzQOwJGLfSzZIdYv0Gr6lx3JNt1LoM2zXtausw3YILpU8t64Z4L_K9tbbtAg_pKOUFHr95OvAUZQ0SDPb6qv4JTze31MgUgKi_DQP4mQ',
});

const albums = spotify.search.albums('Incubus');

albums.then(data => data.albums.items.map(item => console.log(item.nome)));

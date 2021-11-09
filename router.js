import renderStart from './Pages/Start/start.js';
import renderGame from './Pages/Game/index.js';

const Router = () => {
  const router = new Navigo('/', { hash: true });
  router
    .on({
      '/': async () => {
        const start = await renderStart();
        await router.updatePageLinks(start);
      },
      game: async () => {
        await renderGame();
      },
    })
    .resolve();
};

export default Router;

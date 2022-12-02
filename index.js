import metaversefile from "metaversefile";

const { useApp, useCleanup } = metaversefile;
const baseUrl = import.meta.url.replace(/(\/)[^\/\\]*$/, "$1");

export default (e) => {
  const app = useApp();
  app.name = "character-stats-banner";

  let live = true;
  let reactApp = null;
  e.waitUntil(
    (async () => {
        const u = `${baseUrl}/character-stats-banner.react`;
        reactApp = await metaversefile.createAppAsync({
          start_url: u,
        });
        if (!live) {
          reactApp.destroy();
          return;
        }
        reactApp.scale.set(1, 1, 1);
        app.add(reactApp);
        reactApp.updateMatrixWorld();
    })()
  );

  useCleanup(() => {
    live = false;
    reactApp && reactApp.destroy();
  });

  return app;
};

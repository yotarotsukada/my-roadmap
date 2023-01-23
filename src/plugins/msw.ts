export default defineNuxtPlugin(async () => {
  const { MSW } = useRuntimeConfig();
  if (process.env.NODE_ENV === 'development') {
    const disableMSW = MSW === 'false';
    if (disableMSW) {
      return;
    }
    const { worker } = await import('@/mocks/browser');
    worker.start({
      onUnhandledRequest: (req, print) => {
        if (req.url.pathname.startsWith('/_nuxt/')) {
          return;
        }
        print.warning();
      },
    });
  }
});

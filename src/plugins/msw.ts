export default defineNuxtPlugin(async () => {
  const { NODE_ENV, MSW } = useRuntimeConfig();
  if (NODE_ENV !== 'development' || MSW === 'false') {
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
});

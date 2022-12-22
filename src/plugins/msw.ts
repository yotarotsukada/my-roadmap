export default defineNuxtPlugin(async () => {
  const config = useRuntimeConfig();
  if (process.env.NODE_ENV === 'development') {
    const disableMSW =
      config.MSW === 'false' || config.MSW === 'FALSE' || config.MSW === '0';
    if (disableMSW) {
      return;
    }
    const { worker } = await import('@/mocks/browser');
    worker.start();
  }
});

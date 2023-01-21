// src/mocks/handlers.js
import { rest } from 'msw';
import { mockMountains } from './data/playground';
import { mockProjects } from './data/projects';
import { mockTasks } from './data/tasks';

const timeout = async (ms = 0) => {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve(0);
    }, ms);
  });
};

export const handlers = [
  rest.get('https://api.nuxtjs.dev/mountains', async (_req, res, ctx) => {
    await timeout();
    return res(ctx.status(200), ctx.json(mockMountains));
  }),
  rest.get('https://api/projects', async (_req, res, ctx) => {
    await timeout();
    return res(ctx.status(200), ctx.json(mockProjects));
  }),
  rest.get('https://api/projects/:id', async (_req, res, ctx) => {
    await timeout();
    return res(ctx.status(200), ctx.json(mockProjects[0]));
  }),
  rest.get('https://api/tasks/:projectId', async (_req, res, ctx) => {
    await timeout();
    return res(ctx.status(200), ctx.json(mockTasks));
  }),
];

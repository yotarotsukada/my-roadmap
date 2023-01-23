// src/mocks/handlers.js
import { rest } from 'msw';
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
  rest.get('projects', async (_req, res, ctx) => {
    await timeout();
    return res(ctx.status(200), ctx.json({ projects: mockProjects }));
  }),
  rest.get('projects/:id', async (_req, res, ctx) => {
    await timeout();
    return res(
      ctx.status(200),
      ctx.json({ project: { ...mockProjects[0], tasks: mockTasks } })
    );
  }),
];

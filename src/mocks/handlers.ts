// src/mocks/handlers.js
import { rest } from 'msw';
import { mockMountains } from './data/playground';

export const handlers = [
  rest.get('https://api.nuxtjs.dev/mountains', (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockMountains));
  }),
];

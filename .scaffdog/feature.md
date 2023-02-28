---
name: 'feature'
root: 'src'
output: [
  'features/**/*',
]
ignore: ['src']
questions:
  name: 'Please enter a feature name.'
---

# index.ts

```ts
// export * from './composables';
export * from './mocks';
export * from './schema';

```

# mocks.ts

```ts
export const mock{{ inputs.name | pascal }}s = [
  
];

```

# schema.ts

```ts
export type {{ inputs.name | pascal }} = {

}

```

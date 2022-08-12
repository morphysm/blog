import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/archive',
    component: ComponentCreator('/archive', '401'),
    exact: true
  },
  {
    path: '/tags',
    component: ComponentCreator('/tags', 'd75'),
    exact: true
  },
  {
    path: '/tags/famed',
    component: ComponentCreator('/tags/famed', '799'),
    exact: true
  },
  {
    path: '/tags/hello',
    component: ComponentCreator('/tags/hello', 'cd5'),
    exact: true
  },
  {
    path: '/tags/morphysm',
    component: ComponentCreator('/tags/morphysm', '496'),
    exact: true
  },
  {
    path: '/welcome',
    component: ComponentCreator('/welcome', '8fd'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'f3d'),
    routes: [
      {
        path: '/docs/intro',
        component: ComponentCreator('/docs/intro', '5ba'),
        exact: true,
        sidebar: "defaultSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '648'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];

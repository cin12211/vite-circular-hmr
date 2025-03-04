# vite-circular-hmr

A lightweight Vite plugin to fix Hot Module Replacement (HMR) issues caused by circular imports and dependency cycles.

[![npm version](https://badge.fury.io/js/vite-circular-hmr.svg)](https://www.npmjs.com/package/vite-circular-hmr)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Installation

Install the plugin via npm:

```bash
npm install vite-circular-hmr -D
```

## Usage
```ts
// vite.config.js
import circularHMR from 'vite-circular-hmr';

export default {
  plugins: [...other,
  circularHMR() // <----- add this
  ],
};
```
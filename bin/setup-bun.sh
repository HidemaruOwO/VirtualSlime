#!/bin/bash
git submodule update --init --remote

bun install
bun run cache-posts

cd VirtualSlime-API
yarn install


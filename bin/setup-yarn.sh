#!/bin/bash
git submodule update --init --remote

yarn install
yarn run cache-posts

cd VirtualSlime-API
yarn install


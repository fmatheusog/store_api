#! /usr/bin/bash

echo "Installing dependencies..."
npm install

echo "Running prisma migrations..."
npx prisma migrate dev

echo "Running application..."
npm run dev
## Frontend

npm create vite@latest frontend --template react

cd frontend

npm i

## Backend

mkdir backend

cd backend

npm init -y

npm i express

npm install typescript ts-node-dev @types/node @types/express --save-dev

Create a new file named tsconfig.json & Add below content to it.

`{
  "compilerOptions": {
    "target": "ES2021",
    "module": "CommonJS",
    "outDir": "dist",
    "rootDir": "src",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true
  }
}`

init:
	npm i typescript --save-dev
	npx tsc --init
	npm i gts --save-dev
	npx gts init
	npm install --save-dev jest ts-jest @types/jest
	npm install -g jest-cli
	jest --init

test:
	npm test

run:
	node dist/main/index.js

clean:
	npm run clean


init:
	npm i typescript --save-dev
	npx tsc --init
	npm i gts --save-dev
	npx gts init
	npm install --save-dev jest ts-jest @types/jest
	npm install -g jest-cli
	jest --init

test:
	npm test -- -u

run:
	node dist/main/index.js

clean:
	npm run clean

paydevs:
	npm install -g npm-cli-login
	npm set registry https://npm.paydevs.com/
	npm-cli-login -u <username> -p <password> -e <email> -r https://npm.paydevs.com
	npm publish

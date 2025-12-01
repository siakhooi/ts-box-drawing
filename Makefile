init:
	npm i typescript --save-dev
	npx tsc --init
	npm i gts --save-dev
	npx gts init
	npm install --save-dev jest ts-jest @types/jest
	npm install -g jest-cli
	jest --init

build:
	npm install
	npm test

test:
	npm test -- -u

run:
	node dist/main/index.js

clean:
	npm run clean

all: clean set-version build

set-version:
	scripts/set-version.sh
commit:
	scripts/git-commit-and-push.sh
release:
	scripts/create-release.sh
# update CHANGELOG.md
# update package.json version
# npm install
# npm test
# update release.env

# git add CHANGELOG.md package.json
#     git commit -m "release: v$(shell cat package.json | jq -r .version)"
#     git tag v$(shell cat package.json | jq -r .version)
#     git push origin v$(shell cat package.json | jq -r .version)
#     git push origin main

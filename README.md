# sample-testcafe

## Usage

```
docker run --rm -p 9000:80 -v $(PWD)/public/index.html:/usr/share/nginx/html/index.html nginx:latest
yarn testcafe chrome __test__/index.js
```

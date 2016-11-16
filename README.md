# webpack-react-singlepage-starter
Starter code for single-page React app using Webpack

```bash
cd path/to/your/project
git clone git@github.com:n1ckp/webpack-react-singlepage-starter.git .
# Remove git history, then initialise new git repo for your project
rm -rf .git/ && git init
```
Then make sure to edit `package.json` and change the **name**, **description**, **repo url**, and **author**.

```bash
npm install
npm start
```
Then go to localhost:8080 in your browser.

For different start configurations, clone specific branches like so:
```bash
# With Mocha, Chai, and Sinon installed (run 'npm test')
git clone -b tests git@github.com:n1ckp/webpack-react-singlepage-starter.git .
```

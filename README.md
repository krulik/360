# Static Boilerplate

A minimal, clean and simple boilerplate based on Harp, npm as a task runner, and deploy to Github Pages.

***

## Setup

- `git clone` this repo
- `npm install`
- Open up `package.json` and change any needed configuration in `config` or `scripts`

## Run

- `npm start` will open a browser on `http://localhost:3000` (BrowserSync)
- All your `.jade, .scss, md` files are being watched and magically served (Harp + BrowserSync)

## Build

- `npm build` will create a `dist` folder with all your static files.
- It will also create a CNAME file for you.

## Deploy

- `npm deploy` will take your `dist` and push it to your repo's `gh-pages` branch
- `username.github.io/repo` and `YOUR_DOMAIN` are magically updated

***

## Tools

- [HarpJS](http://harpjs.com/)
- [BrowserSync](http://www.browsersync.io/)
- [git-directory-deploy](https://github.com/X1011/git-directory-deploy)
- [npm](https://www.npmjs.com/)

## Reference

- [Start a Blog with Harp](http://kennethormandy.com/journal/start-a-blog-with-harp)
- [Harp, Gulp and BrowserSync](http://charliegleason.com/articles/harp-gulp-and-browsersync)
- [How to Use npm as a Build Tool (AMAZING)](http://blog.keithcirkel.co.uk/how-to-use-npm-as-a-build-tool/)
- [Task Automation with npm run](http://substack.net/task_automation_with_npm_run)

To the creators of these tools, articles and all the people sharing their knowledge - I want to say thank you!

***

## License

MIT

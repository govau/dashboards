'use strict';

const path = require('path');
const fs = require('fs');
const url = require('url');

// Make sure any symlinks in the project folder are resolved:
// https://github.com/facebookincubator/create-react-app/issues/637
const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

const resolveToSite = (path) => {
  const SITES = [
    'smart-cities',
    'performance-dashboard',
    'red-tape-reduction',
  ];

  const siteArg = process.argv.find(arg => arg.startsWith('site='));

  // test scripts don't define a site, so it's OK to return the path here
  if (!siteArg) return path;

  const siteName = siteArg.split('=')[1];

  if (!SITES.includes(siteName)) {
    throw Error(`No such site: ${siteName}`);
  }

  return `sites/${siteName}/${path}`;
};

const envPublicUrl = process.env.PUBLIC_URL;

function ensureSlash(path, needsSlash) {
  const hasSlash = path.endsWith('/');
  if (hasSlash && !needsSlash) {
    return path.substr(path, path.length - 1);
  } else if (!hasSlash && needsSlash) {
    return `${path}/`;
  } else {
    return path;
  }
}

const getPublicUrl = appPackageJson =>
  envPublicUrl || require(appPackageJson).homepage;

// We use `PUBLIC_URL` environment variable or "homepage" field to infer
// "public path" at which the app is served.
// Webpack needs to know it to put the right <script> hrefs into HTML even in
// single-page apps that may serve index.html for nested URLs like /todos/42.
// We can't use a relative path in HTML because we don't want to load something
// like /todos/42/static/js/bundle.7289d.js. We have to know the root.
function getServedPath(appPackageJson) {
  const publicUrl = getPublicUrl(appPackageJson);
  const servedUrl =
    envPublicUrl || (publicUrl ? url.parse(publicUrl).pathname : '/');
  return ensureSlash(servedUrl, true);
}

// config after eject: we're in ./config/
module.exports = {
  // paths shared between sites
  dotenv: resolveApp('.env'),
  appPackageJson: resolveApp('package.json'),
  yarnLockFile: resolveApp('yarn.lock'),
  testsSetup: resolveApp('src/setupTests.js'),
  appNodeModules: resolveApp('node_modules'),
  publicUrl: getPublicUrl(resolveApp('package.json')),
  servedPath: getServedPath(resolveApp('package.json')),

  // site-specific paths
  appBuild: resolveApp(resolveToSite('build')),
  appPublic: resolveApp(resolveToSite('public')),
  appHtml: resolveApp(resolveToSite('public/index.html')),
  appIndexJs: resolveApp(resolveToSite('src/index.js')),
  appSrc: resolveApp(resolveToSite('src')),
  appStyle: resolveApp(resolveToSite('src/style')),
};

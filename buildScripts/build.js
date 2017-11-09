// More info on Webpack's Node API here:
// https://webpack.github.io/docs/node.js-api.html Allowing console calls below
// since this is a build file.
/*eslint-disable no-console*/
import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod';
import { chalkError, chalkSuccess, chalkWarning, chalkProcessing } from './chalkConfig';

process.env.NODE_ENV = 'production'; // this assures the Babel dev config doesn't apply.

console.log(chalkProcessing('Generating minified bundle for production. This will take a moment...'));

webpack(webpackConfig).run((err, stats) => {
  if (err) { // so a fatal error occurred. Stop here.
    console.error(chalkError(err));
    return 1;
  }

  const jsonStats = stats.toJson();

  if (jsonStats.hasErrors) {
    return jsonStats
      .errors
      .map(error => console.error(chalkError(error)));
  }

  if (jsonStats.hasWarnings) {
    console.log(chalkWarning('Webpack generated the following warnings: '));
    jsonStats
      .warnings
      .map(warning => console.log(chalkWarning(warning)));
  }

  console.info(`Webpack stats: ${stats}`);

  // if we got this far, the build succeeded.
  console.log(chalkSuccess('Your app has been built for production and written to /dist!'));

  return 0;
});

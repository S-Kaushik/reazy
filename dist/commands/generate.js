'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.env = undefined;

exports.default = function (vorpal) {
  vorpal.command('init [type]', 'create a new app or plugin \n\  type: [web/mobile/plugin]').autocomplete(['mobile', 'web', 'plugin']).action(function (args, callback) {
    this.log('');
    var self = this;
    if (!args.type || ['mobile', 'web', 'plugin'].indexOf(args.type) === -1) {
      this.prompt({
        type: 'list',
        name: 'type',
        message: 'What would you like to create?',
        choices: ['mobile', 'web', 'plugin']
      }, function (result) {
        if (result.type === 'mobile') {
          self.log('Okay, generating a mobile app for you');
          env.run('reazy:app', generatorOptions, callback);
        } else {
          self.log('Coming soon!');
          // callback();
        }
      });
    } else {
      if (args.type === 'mobile') {
        env.run('reazy:app', generatorOptions, callback);
      } else {
        self.log('Coming soon!');
        // callback();
      }
    }
    // env.run('reazy:app', generatorOptions);
  });

  vorpal.command('add <plugin>').description('add a new plugin').autocomplete(['native-config']).action(function (args, callback) {
    env.run('reazy:add-plugin', args);
  });

  vorpal.command('remove <plugin>').description('remove a plugin completely').autocomplete(['native-config']).action(function (args, callback) {
    env.run('reazy:remove-plugin', args);
  });
};

var _yeomanEnvironment = require('yeoman-environment');

var _yeomanEnvironment2 = _interopRequireDefault(_yeomanEnvironment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var env = _yeomanEnvironment2.default.createEnv();

var reazyGenerators = '../reazy-generator/generators';

env.register(require.resolve(reazyGenerators + '/app'), 'reazy:app');
env.register(require.resolve(reazyGenerators + '/add-plugin'), 'reazy:add-plugin');
env.register(require.resolve(reazyGenerators + '/remove-plugin'), 'reazy:remove-plugin');

var generatorOptions = {
  disableNotifyUpdate: true
};

exports.env = env;
//# sourceMappingURL=generate.js.map
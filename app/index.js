'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');


var NetteWebappGenerator = module.exports = function NetteWebappGenerator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);

  this.on('end', function () {
    this.installDependencies({ skipInstall: options['skip-install'] });
  });

  this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(NetteWebappGenerator, yeoman.generators.Base);

NetteWebappGenerator.prototype.askFor = function askFor() {
  var cb = this.async();

  // welcome message
  var welcome = '\n ' + 'nette'.blue.bold + '\n';

  console.log(welcome);

  var prompts = [];
  /*
  [{
    name: 'someOption',
    message: 'Would you like to enable this option?',
    default: 'Y/n',
    warning: 'Yes: Enabling this will be totally awesome!'
  }];
  */

  this.prompt(prompts, function (err, props) {
    if (err) {
      return this.emit('error', err);
    }

    //this.someOption = (/y/i).test(props.someOption);

    cb();
  }.bind(this));
};

NetteWebappGenerator.prototype.app = function app() {
  this.mkdir('app');
  this.mkdir('app/templates');

  this.copy('_package.json', 'package.json');
  this.copy('_bower.json', 'bower.json');
};

NetteWebappGenerator.prototype.projectfiles = function projectfiles() {
  //this.copy('editorconfig', '.editorconfig');
  //this.copy('jshintrc', '.jshintrc');
};

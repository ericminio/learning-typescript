var jsdom = require('jsdom');
const { JSDOM } = jsdom;

var dom = new JSDOM(`<!doctype html><html><body></body></html>`);
var window = dom.window;
var document = window.document;

global.document = document;
global.HTMLElement = window.HTMLElement;
global.XMLHttpRequest = window.XMLHttpRequest;

require('core-js/es6');
require('core-js/es7/reflect');
require('zone.js');

var testing = require('@angular/core/testing');
var browser = require('@angular/platform-browser-dynamic/testing');
var platform = browser.platformBrowserDynamicTesting();

testing.TestBed.initTestEnvironment(browser.BrowserDynamicTestingModule, platform);
testing.TestBed.configureCompiler({
  providers: [ {
    provide:require('@angular/compiler').ResourceLoader,
    useValue:{
      get:function(url){
        var content = require('fs').readFileSync('./app/lib/' + url).toString();
        return content;
      }
  } }],
  useJit: true
});

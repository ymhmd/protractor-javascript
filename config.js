var HtmlReporter = require('protractor-beautiful-reporter');
var jasmineReporters = require('jasmine-reporters');

require('babel-register')({
    presets: [ 'env' ]
});

exports.config = {
    framework: 'jasmine2',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['./src/specs/facebook-tests.js'],

    restartBrowserBetweenTests: true,

    capabilities: {
        browserName: 'chrome',
        chromeOptions: {
            args: ["--headless", "--disable-gpu", "--window-size=800x600"]
        }
    },


    jasmineNodeOpts: {
        defaultTimeoutInterval: 30000,
        showColors: true
    },


    onPrepare: function() {
        //generates html report and screenshots
        jasmine.getEnv().addReporter(new HtmlReporter({
            baseDirectory: './reports/screenshots'
        }).getJasmine2Reporter());

        //generates xml reports to be integrated with CI/CD
        jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter(null, true, true));
    }

};

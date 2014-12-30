//  angular-guide-pdf
/*  This Source Code Form is subject to the terms of the Mozilla Public
 *  License, v. 2.0. If a copy of the MPL was not distributed with this
 *  file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 *  Owner: rsperberg@gmail.com
 *  @license MPL 2.0
 *  @copyright Roger Sperberg 2014
 */


var fs = require("fs");
var guideFiles = [];
var guideNames = [];
var guidePath = '/Users/sperberx/dev/angular.js/docs/content/guide/';
var extension = '.ngdoc';

guideFiles[0] = { filename: 'introduction', heading: 'Introduction' };
guideFiles[1] = { filename: 'concepts', heading: 'Conceptual Overview' };
guideFiles[2] = { filename: 'databinding', heading: 'Data Binding' };
guideFiles[3] = { filename: 'controller', heading: 'Controllers' };
guideFiles[4] = { filename: 'services', heading: 'Services' };
guideFiles[5] = { filename: 'scope', heading: 'Scopes' };
guideFiles[6] = { filename: 'di', heading: 'Dependency Injection' };
guideFiles[7] = { filename: 'templates', heading: 'Templates' };
guideFiles[8] = { filename: 'expression', heading: 'Expressions' };
guideFiles[9] = { filename: 'filter', heading: 'Filters' };
guideFiles[10] = { filename: 'forms', heading: 'Forms' };
guideFiles[11] = { filename: 'directive', heading: 'Directives' };
guideFiles[12] = { filename: 'animations', heading: 'Animations' };
guideFiles[13] = { filename: 'module', heading: 'Modules' };
guideFiles[14] = { filename: 'compiler', heading: 'HTML Compiler' };
guideFiles[15] = { filename: 'providers', heading: 'Providers' };
guideFiles[16] = { filename: 'bootstrap', heading: 'Bootstrap' };
guideFiles[17] = { filename: 'unit-testing', heading: 'Unit Testing' };
guideFiles[18] = { filename: 'e2e-testing', heading: 'E2E Testing' };
guideFiles[19] = { filename: '$location', heading: 'Using $location' };
guideFiles[20] = { filename: 'css-styling', heading: 'Working With CSS' };
guideFiles[21] = { filename: 'i18n', heading: 'i18n and l10n' };
guideFiles[22] = { filename: 'security', heading: 'Security' };
guideFiles[23] = { filename: 'accessibility', heading: 'Accessibility' };
guideFiles[24] = { filename: 'ie', heading: 'Internet Explorer Compatibility' };
guideFiles[25] = { filename: 'production', heading: 'Running in Production' };
guideFiles[26] = { filename: 'migration', heading: 'Migrating from Previous Versions' };
guideFiles[27] = { filename: 'index', heading: 'Table of Contents' };

guideNames[0] = 'introduction';
guideNames[1] = 'concepts';
guideNames[2] = 'databinding';
guideNames[3] = 'controller';
guideNames[4] = 'services';
guideNames[5] = 'scope';
guideNames[6] = 'di';
guideNames[7] = 'templates';
guideNames[8] = 'expression';
guideNames[9] = 'filter';
guideNames[10] = 'forms';
guideNames[11] = 'directive';
guideNames[12] = 'animations';
guideNames[13] = 'module';
guideNames[14] = 'compiler';
guideNames[15] = 'providers';
guideNames[16] = 'bootstrap';
guideNames[17] = 'unit-testing';
guideNames[18] = 'e2e-testing';
guideNames[19] = '$location';
guideNames[20] = 'css-styling';
guideNames[21] = 'i18n';
guideNames[22] = 'security';
guideNames[23] = 'accessibility';
guideNames[24] = 'ie';
guideNames[25] = 'production';
guideNames[26] = 'migration';
guideNames[27] = 'index';

var fileTitles = {
'introduction' :  'Introduction',
'concepts' :  'Conceptual Overview',
'databinding' :  'Data Binding',
'controller' :  'Controllers',
'services' :  'Services',
'scope' :  'Scopes',
'di' :  'Dependency Injection',
'templates' :  'Templates',
'expression' :  'Expressions',
'filter' :  'Filters',
'forms' :  'Forms',
'directive' :  'Directives',
'animations' :  'Animations',
'module' :  'Modules',
'compiler' :  'HTML Compiler',
'providers' :  'Providers',
'bootstrap' :  'Bootstrap',
'unit-testing' :  'Unit Testing',
'e2e-testing' :  'E2E Testing',
'$location' :  'Using $location',
'css-styling' :  'Working With CSS',
'i18n' :  'i18n and l10n',
'security' :  'Security',
'accessibility' :  'Accessibility',
'ie' :  'Internet Explorer Compatibility',
'production' :  'Running in Production',
'migration' :  'Migrating from Previous Versions',
'index' :  'Table of Contents'
}
var fileOrder = {
'introduction' :  100,
'concepts' :  200,
'databinding' :  210,
'controller' :  220,
'services' :  230,
'scope' :  240,
'di' :  250,
'templates' :  260,
'expression' :  270,
'filter' :  280
'forms' :  290,
'directive' :  300,
'animations' :  310,
'module' :  320,
'compiler' :  330,
'providers' :  340,
'bootstrap' :  350,
'unit-testing' :  410,
'e2e-testing' :  420,
'$location' :  500,
'css-styling' :  510,
'i18n' :  520,
'security' :  525,
'accessibility' :  530,
'ie' :  530,
'production' :  540,
'migration' :  550,
'index' :  ''
}


/*  access all the filenames and titles stored in fileTitles  */
// Object.keys(fileTitles).forEach(function(key) {
//     var value = fileTitles[key];
//     console.log('The file named ' +  key + '.ngdoc has the title "' + value + '".');
// });

/*  access all the filenames, as stored in guideNames  */
// Object.keys(guideNames).forEach(function(key, i){
//     var value = guideNames[key];
//     console.log(value);
// })

/*  see if I can read a file  */
var pathAndFile = guidePath + guideNames[0] + extension;   // introduction.ngdoc
var aFile = fs.readFile(pathAndFile, 'utf8', function (err,data) {
    if (err) {
        return console.log(err);
    }
    console.log(data);
    console.log('aFile is an array T/F: ' + Array.isArray(data));
    console.log('the type of data is ',typeof data);

    var sortOrderRegex = /@sortOrder (\d{3})/;
    var result = sortOrderRegex.exec(data);
    console.log('matched line is ', result[0]);
    var orderNumber =result[0].substring(11, 14);
    console.log('extracted order number is', orderNumber);

});


// console.log('aFile is an array T/F: ' + Array.isArray(aFile));

/*  read a file and write it to a different file  */
// var fs = require('fs');
// fs.createReadStream('input.txt').pipe(fs.createWriteStream('output.txt'));

(function (global) {
    System.config({
        paths: {
            // paths serve as alias
            'npm:': 'node_modules/'
        },
        // map tells the System loader where to look for things
        map: {
            // our app is within the app folder
            app: 'app',
            '@angular/material': 'npm:@angular/material/bundles/material.umd.js',

            // CDK individual packages
            '@angular/cdk/platform': 'npm:@angular/cdk/bundles/cdk-platform.umd.js',
            '@angular/cdk/a11y': 'npm:@angular/cdk/bundles/cdk-a11y.umd.js',
            // ...
            'hammerjs': 'npm:hammerjs',
        },
        // packages tells the System loader how to load when no filename and/or no extension
        packages: {
            app: {
                main: './main.js',
                defaultExtension: 'js'
            },
            hammerjs: {main: './hammer.min.js', defaultExtension: 'js'}
        }
    });
})(this);
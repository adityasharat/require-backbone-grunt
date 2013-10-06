module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: {
            build: "build/*"
        },
        copy: {
            src : {
                files: [
                    {expand: true, flatten: true, src : ['src/*.html'], dest : 'build/'},
                    {expand: true, cwd: 'lib/', src : ['**'], dest : 'build/lib/'},
                    {expand: true, cwd: 'src/images', src : ['**'], dest : 'build/images/'},
                    {expand: true, cwd: 'src/js', src : ['**/*.html'], dest : 'build/js/'},
                    {expand: true, cwd: 'src/css', src : ['**'], dest : 'build/css/'}
                ]
            }
        },
        uglify: {
            options : { mangle: true },
            build: {
                files : [
                    {src : 'src/js/models/Currency.js', dest : 'build/js/models/Currency.js' },
                    {src : 'src/js/collections/CurrencyCollection.js', dest : 'build/js/collections/CurrencyCollection.js' },
                    {src : 'src/js/views/CurrencyView.js', dest : 'build/js/views/CurrencyView.js' },
                    {src : 'src/js/views/CurrencyCollectionView.js', dest : 'build/js/views/CurrencyCollectionView.js' },
                    {src : 'src/js/views/CurrencyFormView.js', dest : 'build/js/views/CurrencyFormView.js' },
                    {src : 'src/js/views/AppView.js', dest : 'build/js/views/AppView.js' },
                    {src : 'src/js/routers/Router.js', dest : 'build/js/routers/Router.js' },
                    {src : 'src/js/main.js', dest : 'build/js/main.js' },
                ]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['clean', 'copy', 'uglify']);
};
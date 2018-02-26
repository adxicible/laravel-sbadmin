let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/assets/js/app.js', 'public/js')
   .sass('resources/assets/sass/app.scss', 'public/css')
   .sass('resources/assets/vendor/font-awesome/scss/font-awesome.scss', 'public/css')
   .copyDirectory('resources/assets/vendor/font-awesome/fonts', 'public/fonts')
   .sass('resources/assets/scss/sb-admin.scss', 'public/css')
   .copy('resources/assets/vendor/bootstrap/css/bootstrap.min.css', 'public/css')
   .copy('resources/assets/vendor/bootstrap/css/bootstrap.min.css.map', 'public/css')
   .copy('resources/assets/vendor/bootstrap/js/bootstrap.min.js', 'public/js')
   .copy('resources/assets/vendor/bootstrap/js/bootstrap.min.js.map', 'public/js')
   .copy('resources/assets/js/sb-admin-datatables.min.js', 'public/js')
   .copy('resources/assets/vendor/datatables/dataTables.bootstrap4.css', 'public/css')
   .copy('resources/assets/vendor/datatables/dataTables.bootstrap4.js', 'public/js')
   .copy('resources/assets/vendor/datatables/jquery.dataTables.js', 'public/js');

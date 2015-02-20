'use strict';

module.exports = function(grunt) {

    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

    // Define the configuration for all the tasks
    grunt.initConfig({

        // Project settings
        project: {
            // configurable paths
            app: require('./bower.json').appPath || 'app',
            dist: 'dist'
        },

        // Watches files for changes and runs tasks based on the changed files
        watch: {
            bower: {
                files: ['bower.json'],
                tasks: ['wiredep']
            },
            js: {
                files: [
                    '<%= project.app %>/*.js',
                    '<%= project.app %>/components/**/*.js',
                    '<%= project.app %>/pages/**/*.js',
                    '<%= project.app %>/services/*.js'
                ],
                tasks: ['newer:jshint:all'],
                options: {
                    livereload: true
                }
            },
            jsTest: {
                files: [
                    'test/spec/**/*.js'
                ],
                tasks: ['newer:jshint:test', 'karma']
            },
            compass: {
                files: [
                    '<%= project.app %>/styles/*.{scss,sass}',
                    '<%= project.app %>/components/**/*.{scss,sass}',
                    '<%= project.app %>/pages/**/*.{scss,sass}'
                ],
                tasks: ['compass:server', 'autoprefixer']
            },
            gruntfile: {
                files: ['Gruntfile.js'],
                tasks: ['wiredep']
            },
            livereload: {
                options: {
                    livereload: '<%= connect.options.livereload %>'
                },
                files: [
                    '<%= project.app %>/{,*/}*.html',
                    '<%= project.app %>/**/{,*/}*.html',
                    '.tmp/styles/{,*/}*.css',
                    '<%= project.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
                ]
            }
        },

        // The actual grunt server settings
        connect: {
            options: {
                port: 9000,
                // Change this to '0.0.0.0' to access the server from outside.
                hostname: 'localhost',
                livereload: 35729
            },
            livereload: {
                options: {
                    open: true,
                    // open: {appName: 'Firefox'},
                    base: [
                        '.tmp',
                        '<%= project.app %>'
                    ]
                }
            },
            test: {
                options: {
                    port: 9001,
                    base: [
                        '.tmp',
                        'test',
                        '<%= project.app %>'
                    ]
                }
            },
            dist: {
                options: {
                    base: '<%= project.dist %>'
                }
            }
        },

        // Make sure code styles are up to par and there are no obvious mistakes
        jshint: {
            options: {
                jshintrc: '.jshintrc',
                reporter: require('jshint-stylish')
            },
            all: {
                src: [
                    'Gruntfile.js',
                    '<%= project.app %>/*.js',
                    '<%= project.app %>/components/**/*.js',
                    '<%= project.app %>/pages/**/*.js',
                    '<%= project.app %>/services/*.js'
                ]
            },
            test: {
                options: {
                    jshintrc: 'test/.jshintrc'
                },
                src: ['test/spec/**/*.js']
            }
        },

        // Empties folders to start fresh
        clean: {
            dist: {
                files: [{
                    dot: true,
                    src: [
                        '.tmp',
                        '<%= project.dist %>/*',
                        '!<%= project.dist %>/.git*'
                    ]
                }]
            },
            server: '.tmp'
        },

        // Add vendor prefixed styles
        autoprefixer: {
            options: {
                browsers: ['last 1 version']
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: '.tmp/styles/',
                    src: '{,*/}*.css',
                    dest: '.tmp/styles/'
                }]
            }
        },

        // Automatically inject Bower components into the app
        wiredep: {
            app: {
                src: ['<%= project.app %>/index.html'],
                ignorePath: new RegExp('^<%= project.app %>/')
            }
            // sass: {
            //     src: [
            //         '<%= project.app %>/styles/*.{scss,sass}',
            //         '<%= project.app %>/components/**/*.{scss,sass}',
            //         '<%= project.app %>/pages/**/*.{scss,sass}'
            //     ],
            //     ignorePath: '<%= project.app %>/bower_components/'
            // }
        },

        // Compiles Sass to CSS and generates necessary files if requested
        compass: {
            options: {
                sassDir: '<%= project.app %>/styles',
                cssDir: '.tmp/styles',
                javascriptsDir: '<%= project.app %>',
                generatedImagesDir: '.tmp/images/generated',
                imagesDir: '<%= project.app %>/images',
                fontsDir: '<%= project.app %>/styles/fonts',
                // importPath: '<%= project.app %>/bower_components',
                httpImagesPath: '<%= project.app %>/images',
                httpGeneratedImagesPath: '<%= project.app %>/images/generated',
                httpFontsPath: '<%= project.app %>/styles/fonts',
                relativeAssets: false,
                assetCacheBuster: false,
                raw: 'Sass::Script::Number.precision = 10\n'
            },
            dist: {
                options: {
                    generatedImagesDir: '<%= project.dist %>/images/generated'
                }
            },
            server: {
                options: {
                    debugInfo: true
                }
            }
        },

        // Renames files for browser caching purposes
        filerev: {
            dist: {
                src: [
                    '<%= project.dist %>/scripts/{,*/}*.js',
                    '<%= project.dist %>/styles/{,*/}*.css',

                    '<%= project.dist %>/styles/fonts/*'
                ]
            }
        },

        // Reads HTML for usemin blocks to enable smart builds that automatically
        // concat, minify and revision files. Creates configurations in memory so
        // additional tasks can operate on them
        useminPrepare: {
            html: '<%= project.app %>/index.html',
            options: {
                dest: '<%= project.dist %>',
                flow: {
                    html: {
                        steps: {
                            js: ['concat', 'uglifyjs'],
                            css: ['cssmin']
                        },
                        post: {}
                    }
                }
            }
        },

        // Performs rewrites based on filerev and the useminPrepare configuration
        usemin: {
            html: ['<%= project.dist %>/{,*/}*.html'],
            css: ['<%= project.dist %>/styles/{,*/}*.css'],
            options: {
                assetsDirs: ['<%= project.dist %>']
            }
        },

        // The following *-min tasks produce minified files in the dist folder
        cssmin: {
            options: {
                // root: '<%= project.app %>'
            }
        },

        htmlmin: {
            dist: {
                options: {
                    collapseWhitespace: true,
                    collapseBooleanAttributes: true,
                    removeCommentsFromCDATA: true,
                    removeOptionalTags: true
                },
                files: [{
                    expand: true,
                    cwd: '<%= project.dist %>',
                    src: [
                        '<%= project.app %>/*.html',
                        '<%= project.app %>/components/**/*.html',
                        '<%= project.app %>/pages/**/*.html'
                    ],
                    dest: '<%= project.dist %>'
                }]
            }
        },

        ngAnnotate: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '.tmp/concat/scripts',
                    src: '*.js',
                    dest: '.tmp/concat/scripts'
                }]
            }
        },

        // Copies remaining files to places other tasks can use
        copy: {
            dist: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: '<%= project.app %>',
                    dest: '<%= project.dist %>',
                    src: [
                        'bower_components/bootstrap-sass-official/**',
                        '*.{ico,png,txt}',
                        '.htaccess',
                        '*.html',
                        'pages/{,*/}*.html',
                        'components/{,*/}*.html',
                        'images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}',
                        'fonts/*'
                    ]
                }, {
                    expand: true,
                    cwd: '.tmp/images',
                    dest: '<%= project.dist %>/images',
                    src: ['generated/*']
                }]
            },
            styles: {
                expand: true,
                cwd: '<%= project.app %>/styles',
                dest: '.tmp/styles/',
                src: '{,*/}*.css'
            }
        },

        // Run some tasks in parallel to speed up the build process
        concurrent: {
            server: [
                'compass:server'
            ],
            test: [
                'compass'
            ],
            dist: [
                'compass:dist'
            ]
        },

        // By default, your `index.html`'s <!-- Usemin block --> will take care of
        // minification. These next options are pre-configured if you do not wish
        // to use the Usemin blocks.
        // cssmin: {
        //   dist: {
        //     files: {
        //       '<%= project.dist %>/styles/main.css': [
        //         '.tmp/styles/{,*/}*.css',
        //         '<%= project.app %>/styles/{,*/}*.css'
        //       ]
        //     }
        //   }
        // },
        // uglify: {
        //   dist: {
        //     files: {
        //       '<%= project.dist %>/scripts/scripts.js': [
        //         '<%= project.dist %>/scripts/scripts.js'
        //       ]
        //     }
        //   }
        // },
        // concat: {
        //   dist: {}
        // },

        bump: {
            options: {
                files: ['package.json', 'bower.json'],
                updateConfigs: [],
                commit: false,
                commitMessage: 'Release v%VERSION%',
                commitFiles: ['-a'], // '-a' for all files
                createTag: false,
                tagName: 'v%VERSION%',
                tagMessage: 'Version %VERSION%',
                push: false,
                pushTo: 'origin',
                gitDescribeOptions: '--tags --always --abbrev=1 --dirty=-d' // options to use with '$ git describe'
            }
        },

        replace: {
            appgen: {
                // source files array (supports minimatch)
                src: [
                    'bower.json',
                    'bower-ie8.json',
                    'package.json',
                    '<%= project.app %>/*.html',
                    '<%= project.app %>/*.js',
                    '<%= project.app %>/components/**/*.js',
                    '<%= project.app %>/pages/**/*.js',
                    '<%= project.app %>/services/*.js',
                    'test/spec/**/*.js'
                ],
                overwrite: true,
                replacements: [{
                    from: 'angularStarterFractal', // string replacement
                    to: grunt.option('appname')
                }]
            }
        },

        // Test settings
        karma: {
            continuousInt: {
                configFile: 'karma.conf.js',
                singleRun: true,
                reporters: ['teamcity', 'coverage'],
                coverageReporter: {
                    type: 'teamcity',
                    dir: 'coverage/'
                },
                background: false
            },
            unit: {
                configFile: 'karma.conf.js',
                singleRun: false
            }
        }
    });


    grunt.registerTask('serve', 'Compile then start a connect web server', function(target) {
        if (target === 'dist') {
            return grunt.task.run(['build', 'connect:dist:keepalive']);
        }

        grunt.task.run([
            'clean:server',
            'wiredep',
            'concurrent:server',
            'autoprefixer',
            'connect:livereload',
            'watch'
        ]);
    });

    grunt.registerTask('server', 'DEPRECATED TASK. Use the "serve" task instead', function(target) {
        grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
        grunt.task.run(['serve:' + target]);
    });

    grunt.registerTask('test', [
        'clean:server',
        'concurrent:test',
        'autoprefixer',
        'connect:test',
        'karma'
    ]);

    grunt.registerTask('unitTest', [
        'clean:server',
        'concurrent:test',
        'autoprefixer',
        'connect:test',
        'karma:unit'
    ]);
    grunt.registerTask('continuousIntegration', [
        'clean:server',
        'concurrent:test',
        'autoprefixer',
        'connect:test',
        'karma:continuousInt'
    ]);
    grunt.registerTask('citest', function(){
        grunt.task.run(['continuousIntegration']);
    });
    grunt.registerTask('build', [
        //does not play well with TC CI. causing files to be bumped to different versions
        // 'bump',
        'clean:dist',
        'wiredep',
        'useminPrepare',
        'concurrent:dist',
        'concat',
        'autoprefixer',        
        'ngAnnotate',
        'copy:dist',
        'cssmin',
        'uglify',
        'filerev',
        'usemin',
        'htmlmin'
    ]);

    grunt.registerTask('default', [
        'newer:jshint',
        'test',
        'build'
    ]);
};
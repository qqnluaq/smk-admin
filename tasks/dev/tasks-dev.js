module.exports = function( grunt ) {

    grunt.config( 'mode', 'dev' )

    grunt.registerTask( 'build-lib', [
        'jshint:lib',
        'copy:lib',
    ] )

    grunt.registerTask( 'build-admin', [
        'gen-tags',
        'write-tags',
        'write-tag-head-foot',
        'concat:admin',
        'jshint:admin',
    ] )

    grunt.registerTask( 'write-tags', function () {
        var tag = grunt.config( 'tag' )
        var tags = Object.keys( tag ).sort()

        var fn = grunt.template.process( '<%= buildPath %>/tags.js' )
        grunt.log.write( 'Writing ' + tags.length + ' tags to ' + fn + '...' )
        
        grunt.file.write( fn, tags.map( function ( t ) { 
            return 'include.tag( "' + t + '", ' + JSON.stringify( tag[ t ], null, '    ' ) + ' );' 
        } ).join( '\n\n' ) )

        grunt.log.ok()
    } )

    grunt.config.merge( {
        clean: {
            temp: {
                src: [ undefined, '<%= buildPath %>/tags.js' ]
            }
        },

        copy: {
            'lib': {
                files: [
                    {
                        expand: true,
                        cwd: '<%= srcPath %>/smk',
                        src: [ '**' ],
                        dest: '<%= buildPath %>/smk'
                    },
                    {
                        expand: true,
                        cwd: '<%= srcPath %>/lib',
                        src: [ '**' ],
                        dest: '<%= buildPath %>/lib'
                    },
                ]
            },
        },

        concat: {
            admin: {
                options: {
                    banner: '// SMK Admin\n',
                    process: '<%= processTemplate %>',
                },
                src: [
                    'lib/include.js',
                    '<%= buildPath %>/tags-head.js',
                    '<%= buildPath %>/tags.js',
                    '<%= buildPath %>/tags-foot.js',
                    '<%= srcPath %>/admin.js'
                ],
                dest: '<%= buildPath %>/admin.js'
            }
        },

    } )

}
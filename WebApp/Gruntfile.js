module.exports = function(grunt){
	grunt.initConfig({
		watch: {
			less: {
				files: ['styles/*.less'],
				tasks: ['less', 'postcss'], // run single method with concat:method_name
				options: {
				  livereload: true,
				},
			},
			scripts: {
				files: ['scripts/*.js'],
				tasks: ['uglify'], // run single method with concat:method_name
				options: {
				  livereload: true,
				},
			},
		},
		less: {
			src: {
			   expand:	true,
			   cwd:		"styles/",
			   src:		"*.less",
			   dest:	"styles/",
			   ext:		".css",
		   },
		},
		postcss: {
			options: {
				processors: [
					require('pixrem')(), // add fallbacks for rem units
					require('autoprefixer')({
						browsers: ['last 2 versions', '> 5%'],
					}), // add vendor prefixes
					require('cssnano')() //minify
				]
			},
			dist: {
				src: 'styles/*.css'
			}
		},
		uglify: {
			options: {
				beautify: true
		    },
			my_target: {
				files:[{
					expand: true,
					cwd:	'scripts/',
					src:	'*.js',
					dest:	'scripts/build',
					ext:	'.min.js'
				}]
			}
		},
	});

	// Enable Dependencies
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-postcss');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.registerTask('default', ['watch']);
	grunt.registerTask('finalize', ['postcss']);
};

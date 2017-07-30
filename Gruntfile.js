module.exports = function (grunt) {
	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON("package.json"),
		exec: {
			sass: {
				command: "sass --watch public/assets/sass/:public/assets/css"
			}
		},
		nodemon: {
			dev: {
				script: "index.js",
				options: {
					watch: ["index.js"]
				}
			}
		}
	});

	grunt.loadNpmTasks("grunt-exec"); // https://www.npmjs.com/package/grunt-exec
	grunt.loadNpmTasks("grunt-nodemon"); // https://github.com/ChrisWren/grunt-nodemon

	// Default task(s).
	grunt.registerTask("default", ["exec:sass", "nodemon"]);
};
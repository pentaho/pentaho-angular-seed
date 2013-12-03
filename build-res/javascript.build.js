({
  appDir: "./module-scripts/app/",
  optimize: "uglify",
  optimizeCss: "none",
  baseUrl: ".",
  dir: "../bin/scriptOutput",
  paths: {
    requireLib: '../package-res/resources/web/app/lib/common-ui/resources/web/require'
  },
  
  include: "requireLib",

  uglify: {
    toplevel: true,
    ascii_only: true,
    beautify: false,
    max_line_length: 1000,

    //How to pass uglifyjs defined symbols for AST symbol replacement,
    //see "defines" options for ast_mangle in the uglifys docs.
    defines: {
        DEBUG: ['name', 'false']
    },

    //Custom value supported by r.js but done differently
    //in uglifyjs directly:
    //Skip the processor.ast_mangle() part of the uglify call (r.js 2.0.5+)
    no_mangle: true
  },

  modules: [
    {
      name: "main"
    }
  ]
})

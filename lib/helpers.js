var md,
    fs = require('fs'),
    path = require('path'),
    remarkable = require('remarkable'),
    hljs = require('highlight.js');

function highlight(code, lang){
  try {
    try {
      return hljs.highlight(lang, code).value;
    } catch (err) {
      if (!/Unknown language/i.test(err.message)) {
        throw err;
      }
      return hljs.highlightAuto(code).value;
    }
  } catch (err) {
    return code;
  }
}

md = new remarkable({
  html: true,
  highlight: highlight
});

module.exports = {
  html: function(file, options){
    return fs.readFileSync(file, 'utf8')
  },
  markdown: function(file, options){
    return md.render(fs.readFileSync(file, 'utf8'))
  },
  handleize: function(str, options){
    return str.replace(/[\s]/gi, '-');
  },
  asset: function(file){
    if (file.indexOf('.js') > -1){
      return './assets/js/' + file
    } else if (file.indexOf('.css') > -1){
      return './assets/css/' + file
    } else if (file.indexOf('.png') > -1){
      return './assets/images/' + file
    } else if (file.indexOf('.jpg') > -1){
      return './assets/images/' + file
    } else if (file.indexOf('.svg') > -1){
      return './assets/images/' + file
    }
  }, 
  limit: function(array, limit, options){
    var result = '';

    for (var i = 0; i < limit; i++){
      result += options.fn(array[i]) 
    }

    return result;
  }
}

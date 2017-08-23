module.exports = {
      entry: {
				'main':'./main.js',
				'news':'./js/news.js'
			},
      output: {
          path: __dirname, // 输出文件的保存路径
          filename: '../build/js/[name].js' // 输出文件的名称
      },
  module: {
      loaders: [
	  {
		test: /\.css$/,
		loader: 'style!css!autoprefixer?{browsers:["last 2 version", "> 1%"]}',
	  },
	{
        test: /\.js?$/,
        exclude: /(node_modules|bower_components)/,
        loaders: [
          'babel?presets[]=react,presets[]=es2015,presets[]=stage-1'
        ]
	}
	,
	{
        test: /\.json$/,
        loader: "json"
	}

	]
	}
	,
	externals: {
	'react': 'React' ,
	'react-dom': 'ReactDOM' ,
	'jquery': 'jQuery' 
	}
}
  

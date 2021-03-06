var ExtractTextPlugin = require("extract-text-webpack-plugin");
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
			{ test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css!autoprefixer") }
			,
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
	plugins: [
	new ExtractTextPlugin("../build/css/[name].css")
	]
	,
	externals: {
	      'react': 'React' ,
	      'react-dom': 'ReactDOM' ,
	      'jquery': 'jQuery' 
	}

}
  

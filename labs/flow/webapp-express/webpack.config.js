const path = require("path");
const webpack = require("webpack");
webpack().newCompilation();
module.exports = {
	entry: "./src/app.ts",
	mode: "production",
	target: "node",
	plugins: [new webpack.IgnorePlugin({ resourceRegExp: /^pg-native$/ })],
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: "ts-loader",
				exclude: /node_modules/,
			},
		],
	},
	resolve: {
		extensions: [".tsx", ".ts", ".js"],
	},
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "dist"),
	},
};

'use strict';
const foregroundColor = '#F92672';
const backgroundColor = '#2E1E96';
const red = '#F71735';
const green = '#0FFF95';
const yellow = '#FFFC56';
const blue = '#01cdfe';
const magenta = '#000000';
const cyan = '#01cdfe';

module.exports.onWindow = browserWindow => browserWindow.setVibrancy('dark');

module.exports.decorateConfig = config => {
  config.backgroundColor = 'rgba(0,0,0,.8)';
  return config;
}

exports.decorateConfig = config => Object.assign({}, config, {
	backgroundColor,
	foregroundColor,
	borderColor: '#FE2370',
	cursorColor: '#F71735',
	colors: {
		black: backgroundColor,
		red,
		green,
		yellow,
		blue,
		magenta,
		cyan,
		white: '#f1f1f0',
		lightBlack: '#686868',
		lightRed: red,
		lightGreen: green,
		lightYellow: yellow,
		lightBlue: blue,
		lightMagenta: magenta,
		lightCyan: cyan,
		lightWhite: foregroundColor
	},
	css: `
		${config.css}
		.tab_active:before {
			border-color: rgba(255, 106, 193, 0.25);
		}
	`
});

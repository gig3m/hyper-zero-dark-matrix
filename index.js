'use strict';
const foregroundColor = '#ffffff';
const backgroundColor = '#222222';
const black = backgroundColor;
const red = '#F07B3C';
const green = '#22FF99DE';
const yellow = '#CDB943';
const blue = '#50B4DC';
const magenta = '#8B6CCF';
const cyan = '#49A6D2';
const gray = '#404040';
const brightBlack = '#8B8B8B';
const brightWhite = foregroundColor;

exports.decorateConfig = config => {
	return Object.assign({}, config, {
		backgroundColor,
		foregroundColor,
		borderColor: '#404040',
		cursorColor: '#FF4377',
		colors: [
      // regular
			black,
			red,
			green,
			yellow,
			blue,
			magenta,
			cyan,
			gray,

			// bright
			brightBlack,
			red,
			green,
			yellow,
			blue,
			magenta,
			cyan,
			brightWhite
		],
		css: `
			${config.css || ''}
      .tabs. .tabs_list .tabs_text {
        color: #1ABC9C;
      }
			.tab_active:before {
				border-color: #FF4377;
			}
		`
	});
};

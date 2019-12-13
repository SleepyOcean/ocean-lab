let common = {
	IMG_SERVER_URL_PLACEHOLDER: 'PLACEHOLDER=IMG_SERVER_URL',
	HOME_BG: ''
};

// 发布模式配置
let production = {
	REQUEST_BASE_URL: 'http://www.sleepyocean.com/server',
	AJAX_TIMEOUT: 30000
};

// 开发模式配置
let dev = {
	REQUEST_BASE_URL: 'http://localhost:9999',
	IMG_SERVER_URL: 'http://localhost:9999/resource/img/',
	AJAX_TIMEOUT: 10000
};

let Config = Object.assign(common, dev || production);
export default Config;

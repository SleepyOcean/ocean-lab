import axios from '../utils/axios';
import util from '../utils/util';

export const getLabMenus = (params) => {
	return axios.ajax(util.getHost() + '/static/config/LabMenu.json', 'get');
};

export const getChinese = () => {
	return axios.ajax(util.getHost() + '/static/resources/Chinese.json', 'get');
};

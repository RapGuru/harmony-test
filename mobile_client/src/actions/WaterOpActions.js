export const SET_WATER_OP_CONFIGS = 'SET_WATER_OP_CONFIGS';

export function setWaterOpConfigs(parametersAndSamplingSites){
	console.log("setWaterOpConfigs - action");
	return (dispatch) => { dispatch({type: SET_WATER_OP_CONFIGS, data: parametersAndSamplingSites});};
}
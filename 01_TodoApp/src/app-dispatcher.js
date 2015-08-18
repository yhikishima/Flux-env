/*
* 【Dispatcher】
* グローバルなEventEmitterのような
* ActionをStoreに届ける
*/

// Actionを起動
AppDispatch.dispatch(action);

// コールバックの登録
AppDispatch.registor(callback);
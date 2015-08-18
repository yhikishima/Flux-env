/*
* 【Action】
* タイプとデータをもつオブジェクト（likeメソッド）
*
* 【Action Creator】
* Actionを生成するヘルパー関数（orメソッド）
*/

import AppDispatcher from '../app-dispatcher';
import Appconstants from '../app-constants';

var TodoActionCreators = {
  create: function(text) {
    AppDispatcher.dispatch({
      actionType: AppConstants.TODO_CCREATE,
      text: text
    });
  }
};

export default TodoActionCreators;
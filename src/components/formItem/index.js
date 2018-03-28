/**
 * Created by anlen.wang on 2018/03/12.
 */
import formCompontent from './item.vue';

/* istanbul ignore next */
const myItem={
	install:function(Vue){
		Vue.component('my-item', formCompontent);
	}
};

export default myItem;

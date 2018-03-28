/**
 * Created by galen99 on 2018/1/5.
 */
import Ueditor from './src/Ueditor.vue';
/* istanbul ignore next */
Ueditor.install = function(Vue) {
    Vue.component(Ueditor.name, Ueditor);
};

export default Ueditor;

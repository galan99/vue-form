import Mock from 'mockjs';
import {vuetable} from './vuetable.js';
import {wandaoList} from './wandao.js';

let data = [].concat(vuetable,wandaoList);

data.forEach(function(res){
    Mock.mock(res.path, res.data);
});
export default Mock;

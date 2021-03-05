/*
    使用mockjs提供mock数据接口
*/
import Mock from 'mockjs'
import data from './data.json'

// 返回商品列表（goods）的接口
Mock.mock('/goods',{code:0,data:data.goods})
// 返回评价（ratings）的接口
Mock.mock('/ratings',{code:0,data:data.ratings})
// 返回商店详情（info）的接口
Mock.mock('/info',{code:0,data:data.info})


// 这个模块比较特别
// export default ???   不需要向外暴露任何数据，只需要保证能执行一次即可

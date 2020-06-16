// components/ans-card.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    ansUrl:{
      type:String,
      value:"/pages/article/article?pageClass='ans'"
    },
    authImg:{
      type:String,
      value:"/image/logo.png"
    },
    authName:{
      type:String,
      value:"官方回答"
    },
    text:{
      type:String,
      value:"羽绒服是我们冬天不可少的一件外套,如果羽绒服脏了很多人会选择送到干洗店清洗,但是有些羽绒服是不支持干洗的。在这里也不建议大家把羽绒服放到洗衣机"
    },
    agreeInfo:{
      type:Array,
      value:[1,2,"2020-04-11"]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})

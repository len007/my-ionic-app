export const DEBUG: boolean = false;

export const ROOT_URL = DEBUG ? 'http://47.95.226.153:8080' : 'http://47.95.226.153:8080';
// export const ROOT_URL = DEBUG ? 'http://47.95.226.153:10081' : 'http://api.mmetopup.com';
export const RESOURCE_URL = DEBUG ? 'http://47.95.226.153:10081/images/' : 'http://47.95.226.153:10081/images/';

// MOCK URL
export const MOCK_URL = 'https://www.easy-mock.com/mock/59ae6cfee0dc6633419d9b9d/user';

//用户信息相关
export const USER_INFO_API = {
    sms: '/api/sms',   //发送验证码
    register: '/api/register',  //用户注册
    login: '/api/login',  //用户登陆
    info: '/api/user/info',  //获取用户信息
    cheak_code: '/api/user/check_code',  //找回密码或者设置支付密码前检验输入验证码是否正确 争对已经存在的用户
    set_nickname: '/api/user/set_nickname', //设置昵称
    set_head: '/api/user/set_head',  //设置头像
    set_pay_password: '/api/user/set_pay_password',  //设置支付密码
    get_qr_code: '/api/user/get_qr_code', //获取我的收款二维码
    bill: '/api/user/bill',  //获取我的账单
    bill_detail: '/api/user/bill_detail',  //获取账单详情
    search_user: '/api/user/search_user',  //搜索用户
    transfer: '/api/user/transfer',  //转账
    get_recharge_config: '/api/user/get_recharge_config',  //获取话费充值面额
    reset_password: '/api/reset_password',  //重置密码
    get_transfer_record: '/api/user/get_transfer_record',  //获取转账记录
    get_phone_order: '/api/user/get_phone_order',   //获取话费充值订单
    get_phone_order_detail: '/api/user/get_phone_order_detail',  //获取话费订单详情
    get_recharge_order: '/api/user/get_recharge_order',   //获取用户充值记录
    get_recharge_order_detail: '/api/user/get_recharge_order_detail',   //获取用户充值详情
    verify_pay_password: '/api/user/verify_pay_password',   //验证支付密码
    set_fingerprint: '/api/user/set_fingerprint',   //设置指纹
    invite_info: '/api/user/invite_info',  //获取邀请好友相关信息
    bind_inviter: '/api/user/bind_inviter', //绑定邀请者
    get_list: '/api/bank_card/get_list',  //获取我的银行卡列表
    create: '/api/bank_card/create',  //添加银行卡
    edit: '/api/bank_card/edit',  //编辑银行卡
    delete: '/api/bank_card/delete',  //删除银行卡
    get_default: '/api/bank_card/get_default',  //获取默认银行卡信息    
    get_by_id: '/api/bank_card/get_by_id',  //获取某张银行卡详细信息
    get_withdraw_list: '/api/user/get_withdraw_list',  //获取我的提现申请
    apply_withdraw: '/api/user/apply_withdraw',  //申请提现
    bind_phone: '/api/user/bind_phone', //绑定手机号
    get_home_slide: '/api/common/get_home_slide',//获取首页轮播图
    get_bank_status: '/api/common/get_bank_status',//获取银行的状态
    get_history_phone: '/api/user/get_history_phone',//获取历史充值手机号码
    address: '/api/user/address', //添加或者编辑收货地址
    get_default_address: '/api/user/get_default_address',//获取默认地址
    del_address: '/api/user/del_address',//删除地址
    get_address: '/api/user/get_address',//获取地址列表
    get_notice: '/api/common/get_notice', //获取滚动公告列表
    get_version: '/api/common/get_version',//检查版本更新
    get_package_config: '/api/user/get_package_config',//获取流量充值配置
}

//同城
export const CITY_API = {
    set_real_name: '/api/user/set_real_name',                    //设置实名认证信息
    get_real_name: '/api/user/get_real_name',                    //获得实名认证信息
    get_city_list: '/api/common/get_city_list',                  //获取城市列表
    get_category_list: '/api/common/get_category_list',          //获取同城分类列表
    get_position_list: '/api/common/get_position_list',          //获取发布职位时可供选择的类型
    publish: '/api/city/publish',                                //同城发布信息
    get_city_detail: '/api/city/get_city_detail',                //获取同城信息详情
    get_my_publish_list: '/api/city/get_my_publish_list',        //获取我发布的信息列表
    set_down: '/api/city/set_down',                              //下架
    set_top: '/api/city/set_top',                                //置顶
    get_city_goods_list: '/api/city/get_city_list',              //获取同城列表
    get_publisher: '/api/city/get_owner',            // 获取发布者基本信息
    get_publisher_goods: '/api/city/get_owner_goods', // 获取发布者发的商品列表
    get_publisher_comment: '/api/city/get_owner_comment', // 获取发布者发的评论列表
    is_follow: '/api/city/follow', // 收藏/取消收藏
    get_order_list: '/api/city/get_order_list',                  //获取订单列表
    get_order_detail: '/api/city/get_order_detail',              //获取订单详情
    close_order: '/api/city/close_order',                        //卖家关闭订单
    cancel_order: '/api/city/cancel_order',                      //买家取消订单
    pass_order: '/api/city/pass_order',                          //卖家处理订单【发货】
    apply_refund: '/api/city/apply_refund',                      //买家申请退款
    refund_order: '/api/city/refund_order',                      //卖家同意退款
    confirm_order: '/api/city/confirm_order',                    //买家确认收货
    get_refund_desc: '/api/common/get_refund_desc',              //获取可供选择的退款理由\
    get_city_comment: '/api/city/get_city_comment',              //获取同城信息评价列表
    comment: '/api/city/comment',                                //买家 发表评论
}

export const WATER_API = {
    get_delivery_range: '/api/water/get_delivery_range',  //获取可配送区域
    get_water_config: '/api/water/get_water_config',  //获取可预定水的配置
    get_index: '/api/water/get_index',  //订水主页的信息
    get_order_list: '/api/water/get_order_list',  //获取订单列表
    get_order_detail: '/api/water/get_order_detail',  //获取订单详情
}

//支付相关
export const PAY_API = {
    create_order: '/api/pay/create_order',  //创建订单
    pay_order: '/api/pay/pay_order',  //支付订单
}

//版本相关
export const RESOURCE = {
    apk: 'http://res.mmetopup.com/data/HiPay.apk',    // APK下载地址
    version: '1.2.0',                  //客户端当前版本号
}

export const OrderKey = 'qNGhyMUB2yDvQGGtlln9ryxvxZ0mjDv2LQNlcsESBn70J7xeTq5KXo3AkVuYYKrD'; // 下单key
export const PayKey = 'RA1JNkIWBqjb8ERkpdwPyDJ6oDDM0xAVDy2LxtQaCFE9gvTiSygcGauxwXoTrl0K';   // 支付key

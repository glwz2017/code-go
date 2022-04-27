$(function () {
    //返回顶部
    $('.go-btn').click(function () {
        $('html,body').animate({scrollTop: 0});
    });
//导航列表
    $('.js-order-li >li').mouseenter(function () {
        $(this).addClass('active').siblings().removeClass('active');
    });
    $('.nav-c').mouseleave(function () {
        $('.js-order-li >li').eq(0).addClass('active').siblings().removeClass('active');
    });
//登录前后
    $('.js-user-activity').click(function (e) {
        $('.user-item').show();
        $(document).one('click', function () {
            $('.user-item').hide();
        });
        e.stopPropagation();
    });
//    模拟进度条进度指示条
    var getJsUl = $('.js-progress-ul li');

    function showProgress() {
        var step = parseInt(Math.random() * 3);//模拟后台返回数据接受【0,1,2】代表3个状态
        getJsUl.eq(step).css({color: '#b21f1f'});
        getJsUl.eq(step).prevAll().css({color: '#b21f1f'});
        getJsUl.eq(step).children().css({borderBottom: '2px solid #b21f1f'});
        getJsUl.eq(step).children().children('img').attr('src', '../img/images/order/show2.png');
        getJsUl.eq(step).prevAll().children().children('img').attr('src', '../img/images/order/show2.png');
        getJsUl.eq(step).prevAll().children().css({borderBottom: '2px solid #b21f1f'});
    }

    showProgress();//调用订单进度状态

    //地址选择
    $('.js-ress-box li').click(function () {
        $(this).addClass('active-address').siblings('li').removeClass('active-address');
    });
    //地址编辑
    // $('.js-edit-address').click(function (e) {
    //     e.stopPropagation();
    //     layer.open({
    //         type: 2,
    //         title: 'dfjskl',
    //         area: ['950px', '430px'],
    //         content: './update-address.html',
    //         success: function () {
    //             $('.layui-layer-content').css('padding', '0 20px');
    //         }
    //     });
    // });
    //地址添加
    $('.add-address,.js-edit-address').click(function () {
        layer.open({
            type: 2,
            title: 'update info',
            area: ['850px', '850px'],
            content: './address-page.html',
            success: function () {
                $('.layui-layer-content').css('padding', '0 20px');
            }
        });
    });
    //选择付款方式
    $('.js-pay-label').click(function () {
        $(this).prev().toggleClass('active');
    });
    //付款按钮弹窗
    $('.checkout-btn').click(function () {
        layer.open({
            type: 1,
            title: '付款地址确认',
            content: $('.payment-pop-ups').prop('outerHTML'),
            area: ['600px', '360px']
        })

    });

    $('.js-dhl').click(function (e) {
        $('.js-dhl-ul').show();
        $(document).one("click", function () {
            $(".js-dhl-ul").hide();
        });
        e.stopPropagation();
    });
    $('.js-dhl-ul li').click(function () {
        $('.js-dhl').val($(this).text());
        $('.js-dhl-ul').hide();
    });

    $('.js-coupon-div').hover(function (e) {
        $('.coupon-info').stop().slideDown();
        $(document).one('click', function () {
            $('.coupon-info').hide();
        });
        e.stopPropagation();
    }, function () {
        $('.coupon-info').stop().slideUp();
    });
    $('.coupon-info li').click(function (e) {
        $('.js-coupon-input').val($(this).html().trim());
        $(this).parent().hide();
        e.stopPropagation();
    });
//左右保持一致
//     function changeHeight() {
//         $('.box-l').css({height: ($('.box-r').height())});
//     }
//     changeHeight();
});//end function

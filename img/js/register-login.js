// 文本框选中
$('.form-item input').focus(function () {
  $(this).parent().addClass('active')
})
$('.form-item input').blur(function () {
  $(this).parent().removeClass('active')
})
// 文本框选中
$('.enemy-item input').focus(function () {
  $(this).parent().addClass('active')
})
$('.enemy-item input').blur(function () {
  $(this).parent().removeClass('active')
})

// 忽略信息按钮
$('.js-skip-btn').click(function () {
  $(this).parents('.go-window-pop').fadeOut()
  window.open('./member/orderIndex.html','_self')
})
// 确认完善信息
$('.js-enemy-btn').click(function () {
  $(this).parents('.go-window-pop').fadeOut()
 window.open('./member/essentialInformation.html','_self')
})

// 信息类型
$('.js-enemy-nav dd').click(function () {
  $(this).addClass('active').siblings('dd').removeClass('active');
})

// 国家选择下拉框
$('.js-country-title').click(function (e) {
  $('.js-total-shipping,.js-total-country').hide()
  $(this).find('.js-total-country').show();
  e.stopPropagation();
});
$('.js-total-country .country-item').click(function (e) {
  $('.js-country-name').html($(this).text());
  $(this).parent().hide();
  e.stopPropagation();
});

//职位与领域下拉选择
$('.js-shipping-title').click(function (e) {
  $('.js-total-shipping,.js-total-country').hide()
  $(this).find('.js-total-shipping').show()
  e.stopPropagation();
})
$('.js-total-shipping .item').click(function (e) {
  $(this).parents('.js-shipping-title').find('.js-current-shipping').html($.trim($(this).text()))
  $(this).parent().hide();
  e.stopPropagation();
})
// 点击其它地方关闭下拉
$(document).click(function () {
  $('.js-total-shipping,.js-total-country').hide()
});

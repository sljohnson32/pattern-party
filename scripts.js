$('.tab').click((e) => {
  let tabID = $(e.target).parents('.tab').attr('data-tab')
  let currentTab = $('.tab.is-selected').attr('data-tab')
  if (currentTab !== tabID) {
    $('.is-selected.mobile-tab').children('h4').children('span').html('&#43;')
    $('.tab.is-selected').removeClass('is-selected')
    $('.display.is-selected').removeClass('is-selected')
    $(`[data-tab=${tabID}]`).addClass('is-selected')
    $(`[data-display=${tabID}]`).addClass('is-selected')
    $('.is-selected.mobile-tab').children('h4').children('span').html('&#45;')
  }
})

$('#menu-button').click(() => {
  $('#nav-link-container').toggleClass('hide');
})

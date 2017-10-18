$('.tab').click((e) => {
  let tabID = $(e.target).parents('.tab').attr('data-tab')
  $('.tab.is-selected').removeClass('is-selected')
  $('.display.is-selected').removeClass('is-selected')
  $(`[data-tab=${tabID}]`).addClass('is-selected')
  $(`[data-display=${tabID}]`).addClass('is-selected')
})



// if ($(e.target).attr('class') == 'unlocked') {
//   $(e.target).toggleClass('locked unlocked')
//   $(e.target).attr('src', './imgs/locked.png')
// } else {
//   $(e.target).toggleClass('locked unlocked')
//   $(e.target).attr('src', './imgs/unlocked.png')
// }

// &#45;

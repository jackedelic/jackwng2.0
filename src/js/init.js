jQuery(document).ready(function ($) {
  /* 
    FitText settings
  */

  setTimeout(function () {
    $('h1.responsive-headline').fitText(
      1,
      { minFontSize: '40px', maxFontSize: '90px' },
      100
    )
  })

  /* 
    Smooth Scrolling
  */

  $('.smoothscroll').on('click', function (e) {
    e.preventDefault()
    let target = this.hash
    target = $(target)
    $('html, body')
      .stop()
      .animate(
        {
          scrollTop: target.offset().top
        },
        800,
        'swing',
        function () {
          window.location.hash = target
        }
      )
  })

  /* 
    Highlight the current section in the navigation bar
  */

  let sections = $('section')
  let navigation_links = $('#nav-wrap a')

  sections.waypoint({
    handler: function (event, direction) {
      let active_section = $(this) // About, Contact, Portfolio, Quote, Resume.
      if (direction === 'up') active_section = active_section.prev()
      let active_link = $(
        "#nav-wrap a[href='#" + active_section.attr('id') + "']"
      )
      navigation_links.parent().removeClass('current')
      active_link.parent().addClass('current')
    },
    offset: '35%'
  })

  /* 
    Ensures that #header background-image height is equal to the browser height.
  */

  $('header').css({ height: $(window).height() })
  $(window).on('resize', function () {
    $('header').css({ height: $(window).height() })
    $('body').css({ width: $(window).width() })
  })

  /* 
    Fade in/out primary navigation
  */

  $(window).on('scroll', function () {
    let h = $('header').height()
    let y = $(window).scrollTop()
    let nav = $('#nav-wrap')

    if (y > h * 0.2 && y < h && $(window).outerWidth() > 768) {
      nav.fadeOut('fast')
    } else {
      if (y < h * 0.2) {
        nav.removeClass('opaque').fadeIn('fast')
      } else {
        nav.addClass('opaque').fadeIn('fast')
      }
    }
  })

  /* 
    Modal popup
  */

  $('.item-wrap a').magnificPopup({
    type: 'inline',
    fixedContentPos: false,
    removalDelay: 200,
    showCloseBtn: false,
    mainClass: 'mfp-fade'
  })

  $(document).on('click', '.popup-modal-dismiss', function (e) {
    e.preventDefault()
    $.magnificPopup.close()
  })
})

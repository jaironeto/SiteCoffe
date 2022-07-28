window.addEventListener('resize', (e) => {

  header();
  reset();
})

window.document.body.querySelector('body>header:first-of-type>nav>ol')
  .addEventListener('click', function (e) {

    if (window.innerWidth <= 800) {
      li = window.document.body.querySelector('body>header:first-of-type>nav>ol>li:first-of-type')
      ol = window.document.body.querySelector('body>header:first-of-type>nav>ol')

      for (var index = 0; index < 4; index++) {

        if (li.getAttribute('style')) {
          li.style.display = ""
          ol.style.height = ""

        } else {
          li.style.display = "block"
          ol.style.height = "150%"

        }

        li = li.nextElementSibling;
      }
    }
  })


let header = function () {
  if ((window.innerWidth > 800) && (window.innerWidth < 1200)) {
    var diferenca = 1200 - window.innerWidth
    var index = 0;

    while (diferenca > 20) {
      diferenca -= 25;
      index++
    }

    if (index != 0) {
      document.body.querySelector('header:first-of-type > nav > ol').style.minWidth
        = (55 + index) + '%'
    }
  } else {
    document.body.querySelector('header:first-of-type > nav > ol').style.minWidth
      = ''
  }
}

function reset() {
  if (window.innerWidth > 800) {
    window.document.body.querySelector('body>header:first-of-type>nav>ol')
      .style.height = ""
    window.document.body.querySelector('body>header:first-of-type>nav>ol>li')
      .style.display = ""
  }
}
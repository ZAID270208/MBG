(function() {
  function $(id) {
    return document.getElementById(id);
  }

  var card = $('card'),
      openB = $('open'),
      closeB = $('close'),
      timer = null;
  console.log('wat', card);
  openB.addEventListener('click', function () {
    card.setAttribute('class', 'open-half');
    if (timer) clearTimeout(timer);
    timer = setTimeout(function () {
      card.setAttribute('class', 'open-fully');
      timer = null;
    }, 1000);
  });

  closeB.addEventListener('click', function () {
    card.setAttribute('class', 'close-half');
    if (timer) clearTimerout(timer);
    timer = setTimeout(function () {
      card.setAttribute('class', '');
      timer = null;
    }, 1000);
  });

}());

(function() {
  function $(id) {
    return document.getElementById(id);
  }

  var card = $('card'),
      openB = $('open'),
      closeB = $('close'),
      timer = null,
      song = $('birthday-song'); // Ambil elemen audio

  openB.addEventListener('click', function () {
    card.setAttribute('class', 'open-half');
    
    // MAINKAN LAGU SAAT DIBUKA
    if (song) {
        song.play().catch(error => {
            console.log("Autoplay dicegah oleh browser, lagu akan berputar setelah interaksi.");
        });
    }

    if (timer) clearTimeout(timer);
    timer = setTimeout(function () {
      card.setAttribute('class', 'open-fully');
      timer = null;
    }, 1000);
  });

  closeB.addEventListener('click', function () {
    card.setAttribute('class', 'close-half');
    
    // MATIKAN LAGU SAAT DITUTUP (Opsional)
    if (song) {
        song.pause();
        song.currentTime = 0; // Reset lagu ke awal
    }

    if (timer) clearTimeout(timer); // Perbaikan typo 'clearTimerout'
    timer = setTimeout(function () {
      card.setAttribute('class', '');
      timer = null;
    }, 1000);
  });

}());
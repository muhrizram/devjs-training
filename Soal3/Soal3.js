const user = {
    name: 'Dhafa',
    age: 22,
    hasMoney: 11000
}

const movie = {
    name: 'Hentai The Movie',
    ticketPrice: 10000,
    minAge: 13,
}

function ticketValidation(user, movie){
    const isAdult = user.age >= movie.minAge;
    const worthiness = user.hasMoney >= movie.ticketPrice;
    if (isAdult && worthiness) return console.log('Selamat '+user.name+', kamu berhasil membeli tiket '+movie.name+' dengan harga '+movie.ticketPrice);
    if(!isAdult && !worthiness) return console.log('Gagal membeli tiket karena emang ga layak dari segi apapun');
    if(!isAdult) return console.log('Gagal membeli tiket karena belum cukup umur');
    if(!worthiness) return console.log('Gagal membeli tiket karena uang kurang');
}

ticketValidation(user, movie);

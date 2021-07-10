function getRandomDogImage () {
    //console.log('test')
    var request = $.ajax({
        url: "https://dog.ceo/api/breeds/image/random",
        method: "GET",
        dataType:"html"
    });

    request.done(function(response) {
        var img = $('<img>').attr('src', response.message);
        $('body').append(img);
    })

    request.fail(function (error, status) {
        alert(error);
    })
}
const url1 = "http://api.tvmaze.com/shows/"

// function for creating image, season list, cast list
const showAllInfo = (id) => {
      showMovieInfo(id);
      showSeasons(id);
      showCast(id);
}

const showMovieInfo = (id) => { 
    $.ajax({
        url:`${url1}${id}`,
        method:"GET",
    }).done((response) => {
        $('.hTitle').html('')
        input.val("");
        cardHolder.html("");
        let card = `<h1 class="mb-5 mt-5 text-center">${response.name}</h1>
            <div class="card mb-3 border-0" style="max-width: 1000px;">
                <div class="row ">
                    <div class="col-8 mr-5">
                    <img src="${response.image.original}" class="img-fluid img-size"  alt="...">
                    </div>
                    <div class="col-4">
                        <div class="card-body">
                           <ul class='seasons'></ul>
                           <ul class='cast'></ul>
                        </div>
                    </div>
                    </div>
                </div>
            <h2>Show details</h2>
            ${response.summary}`;
        cardHolder.append(card);
    }).fail(() => {
        alert('Network error');
    });
};

const showSeasons = (id) => {
    $.ajax({
        url: `${url1}${id}/seasons`,
        method: "GET",
    }).done((response) => {
        let numberOfSeasons = `<h2> Seasons(${response.length})</h2>`
        $('.card-body').prepend(numberOfSeasons);
        response.forEach((element) => {
        let seasons = `
            <li>${element.premiereDate} - ${element.endDate}</li>                        
                        `;
        $(".seasons").append(seasons);
    });
    });
};
    
const showCast = (id) => {
    $.ajax({
        url: `${url1}${id}/cast`,
    }).done((response) => {
        let listOfCast = `<h2>Cast</h2>`
        $('.seasons').after(listOfCast);
        response.forEach((element) => {
        let castMembers = `
            <li>${element.person.name}</li>                      
              `;
        $(".cast").append(castMembers);
        });
    });
};

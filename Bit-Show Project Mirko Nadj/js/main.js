// nodes
const input = $('input');
const errorElement = $('.alert');
const url = "http://api.tvmaze.com/search/shows?q=";
const urlFirst = "http://api.tvmaze.com/shows?q=";
const cardHolder = $(".cardHolder");

// start function for getting top 50 movies after loading page

$(document).ready(() => {
    firstFifty();
})

// function for getting and displaying top 50 movies

function firstFifty() {
    $.ajax({
        url:`${urlFirst}`,
        method: "GET",
    }).done(function (responseF) {
        cardHolder.html("");
        $('.hTitle').html('Popular shows')
        if (responseF.length == 0) {
            errorElement.text("No results");
            return;
        }
        else {    // sorting by rating           
        responseF.sort((a, b) => {
            return b.rating.average - a.rating.average
        });
        }
        let firstFiftyM = responseF.slice(0,50);
        //console.log(firstFiftyM);
        firstFiftyM.forEach(function (item) {
            var card = $(`<div class='col-4 mt-5' onclick="goToInfo('${item.id}')">
                            <div class= 'card card-show'>
                                <img src='${item.image.medium}'>
                                <div class='card-body'>
                                    <h5 class='card-title' > ${item.name}</h5>
                                </div>
                            </div>
                        </div>`);
            cardHolder.append(card);
        });
    }).fail (function () {
        errorElement.text("Network error")
        errorElement.toggle();
    });
};

// function for getting a dropdown list when searching

function dropdownSearch () {
	const inputText = input.val();

	var request = $.ajax({
		url: "https://api.tvmaze.com/search/shows?q=" + inputText
	});

	request.done(function(result) {
		$(".searchList").text('');
		for (let i = 0; i < 10; i++) {
			if(result[i] !== undefined) {
				let searchListItem = $("<li>");
				searchListItem.append(result[i].show.name);
				searchListItem.attr("id", result[i].show.id);
				$(".searchList").append(searchListItem);
			}
            else {
                if ($(".searchList").children().length === 0 && input.val() !== '') {                
                let searchListItem = $(`<li>No result</li>`);
                $(".searchList").append(searchListItem);
                break;
                }
            }
		}
		$("li").on("click", function() {
			const usedLink = $(this).attr("id");
            showAllInfo(usedLink)
            $("ul").html("");            
		});
	});
};

// function for searching movies by letter

function search(inputValue) {
    $.ajax({
        url:`${url}${inputValue}`,
        method: "GET",

    }).done(function (response) {
        cardHolder.html("");
        $('.hTitle').html('Show results')
        if (response.length == 0) {
            errorElement.text("No results");
            $('.hTitle').html('No results');
            return;
        }
        response.forEach(function (item) {
            
            var card = $(`<div class='col-4 mt-5' onclick="goToInfo('${item.show.id}')">
                            <div class= 'card card-show'>
                                <img src='${item.show.image.medium}'>
                                <div class='card-body' >
                                    <h5 class='card-title'> ${item.show.name}</h5>
                                </div>
                            </div>
                        </div>`);
            cardHolder.append(card);
        });
    }).fail (function () {
        errorElement.text("Network error")
        errorElement.toggle();
    })
}
// handler function for search input, on pressing enter key

function searchHandler(event) {
    if (event.keyCode == 13) {
        var inputValue = input.val();
        input.blur();
        if (!inputValue) {
            errorElement.text("Input is required");
            errorElement.toggle();
            return;
        }
        search(inputValue);
        $("ul").html("");
        input.val("");
    }
}

// function for clearing search input
function clearInput () {
    input.val("");
    errorElement.text("");
    errorElement.css("display", "none");
}

// function after card selection
function goToInfo(id) {
    showAllInfo(id);
}

// event listeners

input.on("keydown", searchHandler);
input.on("focus", clearInput);
input.on("keyup", dropdownSearch);


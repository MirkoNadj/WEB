//$(document).ready(function () {
	//console.log('Hello World')
//})



//$('.navigation li:first').addClass('bottom');


//$('.navigation li').addClass('uppercase') 

//$('.navigation li.active').css('color', 'green')

//$('.navigation li')

//var navigationElements = $('.navigation li')

$(document).ready(function() {
    $('.popup-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
            titleSrc: function(item) {
                return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
            }
        }
    });
});

var arrOfImgLinks=[];
    arrOfImgLinks.push("http://farm9.staticflickr.com/8241/8589392310_7b6127e243_s.jpg");
    arrOfImgLinks.push("http://farm9.staticflickr.com/8379/8588290361_ecf8c27021_s.jpg");
    arrOfImgLinks.push("http://farm4.staticflickr.com/3721/9207329484_ba28755ec4_o.jpg");
    arrOfImgLinks.push("http://farm9.staticflickr.com/8241/8589392310_7b6127e243_s.jpg");
    arrOfImgLinks.push("http://farm9.staticflickr.com/8379/8588290361_ecf8c27021_s.jpg");
    arrOfImgLinks.push("http://farm4.staticflickr.com/3721/9207329484_ba28755ec4_o.jpg");

    $(arrOfImgLinks).each(function(index,element){
        var createImg=$("<img>");
        $("ul").after(createImg);
        $("img:first").attr("src",arrOfImgLinks[index])
    });

$( "img" ).each(function( index, element ) {
	var widthPx =  Math.random() * (400 - 150) + 150;
	
	$( element ).css("width", widthPx + "px")	
	
	if ( widthPx < 200 ) {        
        $( this ).css( "border" , "5px solid red" );
         return true        
        }else  {
           return false
        }
	
	});

	$('img:first').before('<h1>Gallery</h1>');


	

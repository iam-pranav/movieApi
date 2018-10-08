

$(document).ready( () =>{

	$('#content').css('display', 'none')
	$('#searchbtn').click(( e ) =>{
		e.preventDefault()

		let searchItem	=	$('#item').val()
		
		if ( searchItem == '' || searchItem	==	null || searchItem == undefined ) {

			// alert("enter valid entry")
			$('.modal').show(500)
			$('.close, .btn').click(() =>{

				$('.modal').hide(500)

			})
			return

		} else {

			callCrawl( searchItem )
			$('#content').css('display', '')
		}
		
	})

	

})

const callCrawl	=	( param ) => {

	$.ajax({
		type: 'GET',
		datatype: 'json',
		async: true,
		url:'https://www.omdbapi.com/?apikey=df308db8&t='+param,

		success: (response) =>{

			console.log(response)
			$('#plot').text(response.Plot)
			$('#awards').text(response.Awards)
			$('#imdbid').text(response.imdbID).attr('title', 'imdbID')
			$('#released').text(response.Released).attr('title', 'Released Date')
			$('#review').text(response.Response).attr('title','Response')
			$('#season').text(response.totalSeasons).attr('title', 'totalSeasons')
			$('#metascore').text(response.Metascore).attr('title', 'Metascore')			
			$('#imdbVotes').text(response.imdbVotes).attr('title', 'imdbVotes')
			$('#poster').attr('src',response.Poster)
			$('#title').html(response.Title)
			$('#rated').text(response.Rated).attr('title', 'Rated')
			$('#runtime').text(response.Runtime).attr('title', 'Runtime')
			$('#genre').text(response.Genre).attr('title', 'Genre')
			$('#year').text(response.Type +' ('+response.Year+')')
			$('#rating').text(response.imdbRating).attr('title',response.Ratings[0].Source)
			$('.table').html('<tr><td>'+ response.Title +'</td><td><img src="'+response.Poster+'"></td></tr>')
			$('#writers').html('<b>Writers : </b>'+response.Writer)
			$('#actors').html('<b>Actors : </b>'+response.Actors)
			$('#directors').html('<b>Director : </b>'+response.Director)
		}

	})

}

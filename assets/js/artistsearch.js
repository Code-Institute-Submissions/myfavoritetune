
// Artist search takes the corrently hyphontaed name from the user input to get the correct artist image, number of albums and picture.

function displaydatainmyartistpage(music_search_artist) {

    let artist_name_artistsearch = music_search_artist.name;
    let picture_artistsearch = music_search_artist.picture_medium;
    let number_of_albums = music_search_artist.nb_album;

    document.getElementById("artist_name_artistsearch").innerHTML = artist_name_artistsearch;
    document.getElementById("number_of_albums_artistsearch").innerHTML = number_of_albums;
    document.getElementById("picture_artistsearch").className = "artist_inital_image";  // changes the css class for the picture_artistsearch from spin to static.
    document.getElementById("picture_artistsearch").src = picture_artistsearch;
}

function artist_search() {
    let user_input = document.getElementById("user_input").value;
    let api_request = new XMLHttpRequest();

    api_request.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var the_response = api_request.responseText;
            var music_search_artist = JSON.parse(the_response);
            displaydatainmyartistpage(music_search_artist);
        }
        else {
           // console.log("this stuff is not working");
        }
    };
    api_request.open("GET", "https://deezerdevs-deezer.p.rapidapi.com/artist/" + user_input);
    api_request.setRequestHeader("x-rapidapi-host", "deezerdevs-deezer.p.rapidapi.com");
    api_request.setRequestHeader("x-rapidapi-key", "ef9686a9b9msh4dbce73327763a8p14d988jsn38434b35145a");
    api_request.send();
}

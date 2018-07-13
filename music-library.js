class Library {
  constructor(name, creator) {
    this.name = name
    this.creator = creator
    this.playlists = [/*{}, {}*/]
  }
}

class Playlist {
  constructor(name) {
    this.name = name
    this.tracks = []
  }

  addTrack(track){
    this.tracks.push(track)
  }

  get overallRating() {
    let ratingAVG = 0;
    this.tracks.forEach(function(track) {
      ratingAVG += track.rating
    })
    return ratingAVG = ratingAVG/this.tracks.length
  }

  get totalDuration() {
    let duration = 0;
    this.tracks.forEach(function(track) {
      duration += track.length
    })
    return duration
  }
}

class Track {
  constructor(title, rating/*1-5*/, length/*int in s*/) {
    this.title = title
    this.rating = rating
    this.length = length
  }
}

const library1 = new Library("Favorite Music", "Adib")
const playlist1 = new Playlist("sad songs")
library1.playlists.push(playlist1)
const track1 = new Track("The blues' blues", 4, 235)
const track2 = new Track("Everything's gonna be alright", 1, 65)
playlist1.addTrack(track1)
playlist1.addTrack(track2)
console.log(playlist1.totalDuration)


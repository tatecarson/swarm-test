var WebTorrent = require('webtorrent')
var client = new WebTorrent()

client.add('https://swarm-test.netlify.app/immaterialcloud.torrent', function (torrent) {
  // Got torrent metadata!
  console.log('Client is downloading:', torrent.infoHash)

  torrent.files[0].appendTo('body')
})
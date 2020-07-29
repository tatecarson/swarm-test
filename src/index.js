import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

var WebTorrent = require('webtorrent')
var client = new WebTorrent()

      client.add('https://swarm-test.netlify.app/immaterialcloud.torrent', function (torrent) {
        // Got torrent metadata!
        console.log('Client is downloading:', torrent.infoHash)

        torrent.files[0].appendTo('body')
      })
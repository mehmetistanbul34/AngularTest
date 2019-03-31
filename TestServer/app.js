'use strict';

const fs = require('fs');



function dosyaOkunduktanSonraCallEtCallback(err, data) {

  if (err) throw err;

  console.log(data);

}

fs.readFile('dosya.txt', 'utf-8',dosyaOkunduktanSonraCallEtCallback); //asenkron

console.log('Dosya okundu');


let data = fs.readFileSync('dosya.txt', 'utf-8'); //senkron

console.log(data);

console.log('Dosya okundu');

let i = 0;

console.time('zaman');

for (i = 1; i < 101; i++) {
  console.log(i + ' Yusuf SEZER')
}

console.timeEnd('zaman');

console.log(__dirname);




'use strict';

const http = require('http');

const sunucu = http.createServer(function (request, response) {

  response.writeHead(200, {
    'Content-Type': 'text/html; charset=utf-8'
  });

  response.write('Merhaba dünyalı <b>Node.js </b> dünyasına hoşgeldiniz...');

  response.end();

});

sunucu.listen(1453);

console.log('Sunucu çalışıyor...');



console.log('Sunucu çalışıyor...');

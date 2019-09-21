const cheerio = require('cheerio')
const request = require('request')
const fs = require('fs')
const path = require('path')


request('https://www.gamespot.com/news/', (error, response, html) => {
	if (!error && response.statusCode == 200) {
		const $ = cheerio.load(html)
		$('body').find('section.filter-results').find('article').each((i, el) => {
			const title = $(el).find('h3.media-title').text()
			var img_url = $(el).find('.media-img').find('img').attr('src')
			extname = path.extname(img_url)
			const thumbnail = genImageId() + extname
			request(img_url).pipe(fs.createWriteStream('/home/yheancarh/Code/Projects/throneofgamers/frontend/public/news_images/'+thumbnail))
			request('https://www.gamespot.com'+$(el).find('a').attr('href'), (error, response, newhtml) => {
				if (!error && response.statusCode == 200) {
					const page = cheerio.load(newhtml)
					const author = page('body').find('p.news-byline').children().first().text()
					const body = page('body').find('section.article-body').find('.js-content-entity-body').text()
					const datetime = page('body').find('p.news-byline').find('time').text()
					console.log({
						title: title,
						author: author,
						datetime: datetime,
						body: body,
						thumbnail: thumbnail,
						source: 'https://www.gamespot.com'
					})
				}
			})
		})
	}
})


function genImageId () {
   var result = '';
   const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
   var charactersLength = characters.length;
   for ( var i = 0; i < 6; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}

function remNewlines (input) {
	var re = /\n\s+/gi
	var newstr = input.replace(re, '')
	return newstr
}

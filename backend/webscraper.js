const cheerio = require('cheerio')
const request = require('request')
const fs = require('fs')
const path = require('path')
const CronJob = require('cron').CronJob
const MongoClient = require('mongodb').MongoClient


// new CronJob('* * 4 * * *', () => {
MongoClient.connect('mongodb://localhost:27017', (err, client) => {
	if (err) {
		console.log('Unable to connect to database', err)
	} else {
		console.log("Connected to database")
		const db = client.db('throneofgamers')
		db.collection('posts', (err, collection) => {
			if (err) {
				console.log('Unable to access collection', err)
			} else {
				console.log('Connected to collection')

				// IGN
				request('https://za.ign.com/article/news?keyword__type=release', (error, response, html) => {
					if (!error && response.statusCode == 200) {
						const $ = cheerio.load(html)
						$('.broll').find('article').each((i, el) => {
								const title = $(el).find('h3').text()
								var img_url = $(el).find('.t').find('img').attr('src')
								extname = path.extname(img_url)
								const thumbnail = genImageId() + extname
								request(img_url).pipe(fs.createWriteStream('/home/yheancarh/Code/Projects/throneofgamers/frontend/public/news_images/'+thumbnail))
								request($(el).find('a').attr('href'), (error, response, newhtml) => {
									if (!error && response.statusCode == 200) {
										const page = cheerio.load(newhtml)
										const author = remNewlines(page('.articleBody').find('.article-authors').text())
										const body = remNewlines(page('.articleBody').find('.article-section').text())
										const datetime = remNewlines(page('.articleBody').find('.article-publish-date').text())
										collection.insertOne({
											title: title,
											author: author,
											thumbnail: thumbnail,
											datetime: datetime,
											body: body,
											source: 'https://za.ign.com'
										})
								}
							})
						})
					}
				})


				// GAMESPOT scrape
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

				// UNITY scrape
				request('https://unity3d.com/public-relations/news', (error, response, html) => {
					if (!error && response.statusCode == 200) {
						const $ = cheerio.load(html)
						$('body').find('.g8').find('.item').each((i, el) => {
							const title = $(el).find('.title').text()
							const datetime = $(el).find('.date').text()
							request('https://unity3d.com'+$(el).find('.title').find('a').attr('href'), (error, response, newhtml) => {
								const page = cheerio.load(newhtml)
								const body = page('body').find('.g9.article').text()
								collection.insertOne({
									title: title,
									datetime: datetime,
									body: body,
									thumbnail: unity,
									source: 'https://unity3d.com/public-relations/news'
								})
							})
						})
					}
				})


				// ADD more news scrapes here -------->>>>>>>>

				// console.log('Scraping DONE!!!')
			}
		})
	}
	// client.close()
	// console.log('News Updated!!!')
})
// })

function genImageId() {
   var result           = '';
   const characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
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

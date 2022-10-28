(function(document) {

    const id = process.env.INSTA_APP_ID;
    const token = process.env.INSTA_APP_TOKEN;

    const url = 'https://graph.facebook.com/v15.0/' + id + '?access_token=' + token + '&fields=name,media{caption,media_url,permalink,timestamp,username}'

    fetch(url)
	.then((response) => {
	    return response.json();
	})
	.then((json) => {
	    let html = '';
	    let insta = json.media.data;
	    for (let i = 0; i < 4; i++) {
		let url     = insta[i].media_url;
		let href    = insta[i].permalink;
		let caption = insta[i].caption;
		let li = `<li><a href="${href}" target="qoo_insta"><img src="${url}" alt="${caption}"><p>${caption}</p></a></li>`;
		html += li;
	    }
	    document.querySelector('.insta-list').innerHTML = html;
	});

})(document);

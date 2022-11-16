(function(document) {

    const id = process.env.INSTA_APP_ID;
    const token = process.env.INSTA_APP_TOKEN;

    const url = 'https://graph.facebook.com/v15.0/' + id + '?access_token=' + token + '&fields=name,media{caption,media_url,permalink,timestamp,username}'

    fetch(url)
	.then((response) => {
	    return response.json();
	})
	.then((json) => {
	    let i = 0;
	    let html = '';
	    let insta = json.media.data;
	    for (let item of json.media.data) {
		if (i < 6) {
		    let url     = item.media_url;
		    let href    = item.permalink;
		    let caption = item.caption;
		    let li = `<li><a href="${href}" target="qoo_insta"><img src="${url}" alt="${caption}"><p>${caption}</p></a></li>`;
		    html += li;
		    i++;
		}
	    }
	    document.querySelector('.insta-list').innerHTML = html;
	});

})(document);

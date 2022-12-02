(function(document) {

    const id = process.env.FB_INSTA_ID;
    const token = process.env.FB_ACCESS_TOKEN;

    const url = 'https://graph.facebook.com/v15.0/' + id + '?access_token=' + token + '&fields=name,media{caption,media_url,permalink,timestamp,username}'

    fetch(url)
	.then((response) => {
	    return response.json();
	})
	.then((json) => {
	    let i = 0;
	    let html = '';
	    for (let item of json.media.data) {
		if (i < 3) {
		    let url     = item.media_url;
		    let href    = item.permalink;
		    let caption = item.caption;
		    html += `<li><a href="${href}" target="_blank"><img src="${url}" alt="${caption}"><p>${caption}</p></a></li>`;
		    i++;
		}
	    }
	    document.querySelector('.insta-list').innerHTML = html;
	});

})(document);

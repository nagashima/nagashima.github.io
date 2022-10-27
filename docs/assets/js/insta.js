(function(document) {

    const url = 'https://graph.facebook.com/v15.0/17841401892436310?access_token=EAAJunDiZC39wBACflMckWiFoxmP24aZAt1fFa9ervAeGy5ZBjvZBakHvUGOaCtv817TcpqvGsgMjBGqqmWjSgDYgfwPaRmrcC2fW3pZBsUX3OoGbf9fZCRxGxCxibZA3s7HiwHF0DESWpRZA5D93Ys6ZAI8ZCNNbCJ7RCnHWYISKQRTovtgbvNC5rN&fields=name,media{caption,like_count,media_url,permalink,timestamp,username}'

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
		let li = `
<li>
  <a href="${href}" target="qoo_insta">
    <img src="${url}" alt="${caption}">
    <p>${caption}</p>
  </a>
</li>
`;
		html += li;
	    }
	    document.querySelector('.insta-list').innerHTML = html;
	});


})(document);

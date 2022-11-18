(function(document) {

    const jpDate = function (str) {
	//return (new Date(str.substr(0, 19) + '+0000')).toLocaleDateString('ja-JP');
	const date = new Date(str.substr(0, 19) + '+0000');
	return date.toLocaleDateString('ja-JP') + ' ' + date.toLocaleTimeString('ja-JP').substr(0, 5);
    };

    const id = process.env.FB_PAGE_ID;
    const token = process.env.FB_ACCESS_TOKEN;

    const url = 'https://graph.facebook.com/v15.0/' + id + '?access_token=' + token + '&fields=posts';

    fetch(url)
	.then((response) => {
	    return response.json();
	})
	.then((json) => {
	    let i = 0;
	    let html = '';
	    for (let item of json.posts.data) {
		if (i < 5) {
		    let date = jpDate(item.created_time);
		    let text = item.message;
		    let li = `<tr><td width="30%" style="text-align:center">${date}</td><td width="70%">${text}</td></tr>`;
		    html += li;
		    i++;
		}
	    }
	    if (html) {
		document.querySelector('.posts-list').innerHTML = '<table>' + html + '</table>';
	    }
	});

})(document);

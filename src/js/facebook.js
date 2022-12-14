(function(document) {

    const jpDate = function (str) {
	const date = new Date(str.substr(0, 19) + '+0000');
	const ret = date.getFullYear() + '/' + ("0" + (date.getMonth() + 1)).slice(-2) + '/' + ("0" + date.getDate()).slice(-2);
	if (ret > '2022/12/04') {
	    return ret;
	}
	//return (new Date(str.substr(0, 19) + '+0000')).toLocaleDateString('ja-JP');
	//const date = new Date(str.substr(0, 19) + '+0000');
	//return date.toLocaleDateString('ja-JP') + ' ' + date.toLocaleTimeString('ja-JP').substr(0, 5);
    };

    const id = process.env.FB_PAGE_ID;
    const token = process.env.FB_ACCESS_TOKEN;

    const url = 'https://graph.facebook.com/v15.0/' + id + '?access_token=' + token + '&fields=posts{created_time,id,message,permalink_url}';

    fetch(url)
	.then((response) => {
	    return response.json();
	})
	.then((json) => {
	    let i = 0;
	    let html = '';
	    for (let item of json.posts.data) {
		if (i < 5) {
		    if (item.message) {
			let date = jpDate(item.created_time);
			if (date) {
			    let text = item.message;
			    let href = item.permalink_url;
			    //html += `<tr><td class="post-date">${date}</td><td><a href="${href}" target="_blank">${text}</a></td></tr>`;
			    html += `<tr><td><dl><dt>${date}</dt><dd><a href="${href}" target="_blank">${text}</a></dd></dl></td></tr>`;
			    i++;
			}
		    }
		}
	    }
	    if (html) {
		document.querySelector('.posts-list').innerHTML = '<table>' + html + '</table>';
	    }
	});

})(document);

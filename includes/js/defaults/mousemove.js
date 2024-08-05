window.casualMousemoveItems = [];
window.urgentMousemoveItems = [];
window.mousemove = {
	listen: {
		casual: function (callback) {
			window.casualMousemoveItems.push(callback);
		},
		urgent: function (callback) {
			window.urgentMousemoveItems.push(callback);
		}
	}
}

const casualMousemoveDebounced = window.debounce((function () {
	for (const callback of window.casualMousemoveItems) callback(scrollTop, scrollBottom);
}), 100, { leading: true, maxWait: 250 });

const urgentMousemoveDebounced = window.debounce((function () {
	for (const callback of window.urgentMousemoveItems) callback(scrollTop, scrollBottom);
}), 50, { leading: true, maxWait: 50 });

document.addEventListener("mousemove", function () {
	casualMousemoveDebounced();
	urgentMousemoveDebounced();
});
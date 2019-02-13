
/*
* @function fetchDataClient
* @param url string
* @param options object
* @author Omar Sucapuca
*
* */
const self = window;
const fetchDataClient = (url) => {
    return new Promise(function (resolve, reject) {
        if (!url) {
            return reject(new DOMException('Aborted', 'AbortError'))
        }

        const callbackName = `jsonp_callback_${Math.random().toString(36).substr(2)}`;

        self[callbackName] = (data) => {
            delete self[callbackName];
            document.body.removeChild(script);
            resolve(data);
        };

        const script = document.createElement('script');
        script.src = `${url}${url.indexOf('?') >= 0 ? '&' : '?'}jsoncallback=${callbackName}`;
        document.body.appendChild(script);
    });
};

export default fetchDataClient;

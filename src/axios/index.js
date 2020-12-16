import JsonP from 'jsonp'

class Axios {
  static jsonp(options) {
    return new Promise((resolve, reject) => {
      JsonP(options.url,
        {param: 'callback'},
        (err, response) => {
        if (response.status === 0) {
          resolve(response)
        } else {
          reject(response.message)
        }
      });
    });
  }
}

export default Axios;
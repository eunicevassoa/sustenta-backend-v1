import { auth } from 'strapi-helper-plugin';
import { axios } from 'axios'

export default class UploadAdapter {
    constructor( loader ) {
      // Save Loader instance to update upload progress.
      this.loader = loader;
    }
  
    upload() {
      const data = new FormData();
      data.append('typeOption', 'upload_image');
      data.append('file', this.loader.file);
  
      return new Promise((resolve, reject) => {
        axios.post(
          `${strapi.backendURL}/upload`,
          {
            headers: {
              'Authorization': "Bearer " + auth.getToken()
            }
          },
          data,
          //withCredentials: true
        )
        .then((response) => {
            console.log(res)
            var resData = res.data;
            resData.default = resData.url;
            resolve(resData);
        })
        .catch((error) => {
            console.log(error)
            reject(error)
        })
        /*axios({
          url: `${strapi.backendURL}/upload`,
          method: 'post',
          data,
          headers: {
            'Authorization': "Bearer " + auth.getToken()
          },
          withCredentials: true
        }).then(res => {
          console.log(res)
          var resData = res.data;
          resData.default = resData.url;
          resolve(resData);
        }).catch(error => {
          console.log(error)
          reject(error)
        });*/
      });
    }
  
    abort() {
      // Reject promise returned from upload() method.
    }
  }
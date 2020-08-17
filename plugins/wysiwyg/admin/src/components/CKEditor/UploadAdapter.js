import { auth } from 'strapi-helper-plugin';
import axios from 'axios'

export default class UploadAdapter {
    constructor( loader ) {
      // Save Loader instance to update upload progress.
      this.loader = loader;
    }
  
    async upload() {
      let token =  auth.getToken()
      console.log(token)
      const data = new FormData();
      data.append('typeOption', 'upload_image');
      data.append('files', this.loader.file)
      await axios.post(
        `${strapi.backendURL}/upload`,
        data,
        {
          headers: {
            'Authorization': "Bearer " + token,
            //'Content-Type': 'multipart/form-data'
          }
        },
      )
      .then((response) => {
          console.log(token)
          var resData = response.data;
          resData.default = resData.url;
      })
      .catch((error) => {
          console.log(error.message)
      })

      return 'test'
    }
  
    abort() {
      // Reject promise returned from upload() method.
    }
  }
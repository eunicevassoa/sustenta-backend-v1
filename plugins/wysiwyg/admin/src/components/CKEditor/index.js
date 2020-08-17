import React from 'react';
import PropTypes from 'prop-types';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import styled from 'styled-components';
import { auth } from 'strapi-helper-plugin';
import UploadAdapter from './UploadAdapter'
import StrapiUploadAdapter from '@martinkronstad/ckeditor5-strapi-upload-adapter'; 


const Wrapper = styled.div`
  .ck-editor__main {
    min-height: 200px;
    > div {
      min-height: 200px;
    }
  }
`;

let token =  auth.getToken()
const configuration = {
  extraPlugins: [
    StrapiUploadAdapter
  ],
  strapiUploadAdapter: {
    uploadUrl: `${strapi.backendURL}/upload`,
    absUrl: `${strapi.backendURL}`,
    headers: {
      Authorization: "Bearer " + token
    }
  },
  toolbar: [
    'heading',
    '|',
    'bold',
    'italic',
    'link',
    'bulletedList',
    'numberedList',
    '|',
    'imageUpload',
    'mediaEmbed',
    'blockQuote',
    'insertTable',
    'undo',
    'redo',
  ],
  image: {
    toolbar: [
        'imageStyle:full',
        'imageStyle:side',
        '|',
        'imageTextAlternative'
    ],
    styles: [
        'full',
        'side'
    ]
  }
  /*image: {
    styles: [
        'alignLeft', 'alignCenter', 'alignRight'
    ],
    resizeOptions: [
        {
            name: 'imageResize:original',
            label: 'Original',
            value: null
        },
        {
            name: 'imageResize:50',
            label: '50%',
            value: '50'
        },
        {
            name: 'imageResize:75',
            label: '75%',
            value: '75'
        }
    ],
    toolbar: [
        'imageStyle:alignLeft', 'imageStyle:alignCenter', 'imageStyle:alignRight',
        '|',
        //'imageResize',
        '|',
        'imageTextAlternative'
    ]
  }*/
};

const Editor = ({ onChange, name, value }) => {
  return (
    <Wrapper>
      <CKEditor
        editor={ClassicEditor}
        config={configuration}
        data={value}
        onChange={(event, editor) => {
          const data = editor.getData();
          onChange({ target: { name, value: data } });
        }}
      />
    </Wrapper>
  );
};

Editor.propTypes = {
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
};

export default Editor;
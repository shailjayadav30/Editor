import './App.css';
import 'react-quill/dist/quill.snow.css';
import ReactQuill from 'react-quill';
import { useState } from 'react';

const modules = {
  toolbar: [
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    [{ font: [] }],
    [{ size: [] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [
      { list: 'ordered' },
      { list: 'bullet' },
      { indent: '-1' },
      { indent: '+1' },
    ],
  ],
};

function App() {
  const [value, setValue] = useState('');

  return (
    <div className="h-screen w-full flex">
      <div className="h-full w-1/2 p-2 fixed left-0 top-0 bottom-0">
        <ReactQuill
          className="h-full"
          theme="snow"
          value={value}
          onChange={(newValue) => setValue(newValue)}
          modules={modules}
        />
      </div>
      <div className="h-full w-1/2 ml-auto p-2 border-l border-black overflow-y-auto">
        <div
          dangerouslySetInnerHTML={{ __html: value }}
          className="whitespace-pre-wrap"
        />
      </div>
    </div>
  );
}

export default App;

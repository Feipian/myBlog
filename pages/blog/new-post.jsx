import fs from 'fs';
import path from 'path';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

// 定义内容文件夹的路径
const contentFolderPath = path.join('posts');

export default function NewPost() {
  const router = useRouter();

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 在这里可以执行提交逻辑，将表单数据发送到服务器或进行其他操作
    console.log('Form submitted:', { title, content });

    // 创建 Markdown 文件
    // 下面這行是甚麼意思?
    // 使用正則表達式把空格變成-
    const fileName = `${title.replace(/ /g, '-').replace(/[^a-zA-Z0-9-_]/g, '')}.md`;
    const filePath = path.join(contentFolderPath, fileName);


    // 写入文件内容
    fs.writeFileSync(filePath, `
    ---
    title: ${title} 
    author: ${author}
    date: ${new Date().toISOString()}
    ---

    ${content}
    `);

    // 重新导航到 blog 页面
    router.push('/blog');
  };

  return (
    <div className="max-w-5xl mx-auto mt-8 flex flex-col">
      <h1 className="text-3xl font-bold mb-4">Create a New Post</h1>
      <form onSubmit={handleSubmit} className="bg-white p-4 rounded-md shadow-md flex justify-between">
        <div className="w-2/3 mr-4">
          <label className="block mb-2">
            Title:
            <input
              type="text"
              value={title}
              // 當輸入框更改時會改變 title 的值，並更新輸入框的內容
              onChange={(e) => setTitle(e.target.value)}
              className="w-full border p-2 rounded-md mt-1"
            />
          </label>
           {/* 怎麼增加author欄位 */}
           <label className='block mb-2'>
            Author:
                <input
                    type='text'
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    className="w-full border p-2 rounded-md mt-1"
                    >

                </input>
           </label>
          
          <label className="block mb-2">
            Content:
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full border p-2 rounded-md mt-1"
              rows="8"
            />
          </label>
        </div>
        <div className="w-1/3">
          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue "
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}


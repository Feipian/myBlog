import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

// 設定放置markdown的資料夾
// Set the folder for put markdown file
// 現在的位置 process.cwd()
// Now place
const postsDirectory = path.join(process.cwd(), 'posts');

export function getSortedPostsData() {
    // 读取当前目录下的文件和子目录
    // read current directory file and subdirctory
    const fileNames = fs.readdirSync(postsDirectory);
    const allPostData = fileNames.map((fileName) => {
        // fileName是匿名函數用來代表 for i in filenames 的i
        const id = fileName.replace(/\.md$/, '');

        // read mardown file as string
        const fullPath = path.join(postsDirectory, fileName);
        // read File
        const fileContents = fs.readFileSync(fullPath, 'utf-8');

        // Use gray-matter to parse the post metadata section
        // format transform
        const matterResult = matter(fileContents);

        // Combine the data with the id
        return {
            id,
            ...matterResult.data,
        };

    });

    // Sort posts by date
    return allPostData.sort((a, b) => {
        if (a.date < b.date) {
            return 1;
        } else {
            return -1;
        }
    });

}

export function getAllPostIds() {
    const fileNames = fs.readdirSync(postsDirectory);
    // get all md or mdx?? file name and duplicate md sub dir name
    return fileNames.map((fileName) => {
        return {
            params: {
                // link to the pages/post/[id]
                id: fileName.replace(/\.md$/, ''),
            }
        }
    })
}

// when we get id want to get the md content?
export async function getPostData(id) {
    const fullPath = path.join(postsDirectory, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf-8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // use mark to convert markdown into HTML string
    const processedContent = await remark()
        .use(html)
        .process(matterResult.content);
    const contentHtml = processedContent.toString();

    // Combine the data with the id
    return {
        id,
        contentHtml,
        ...matterResult.data,
    }
}
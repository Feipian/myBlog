import Head from "next/head";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Date from '../../components/date';
import Link from "next/link";


export async function getStaticProps({ params }) {
    // Fetch necessary data for the blog post using params.id
    const postData = await getPostData(params.id);
    return {
        props: {
            postData,
        },
    };
}

export async function getStaticPaths() {
    // Return a list of possible value for id
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false,
    };
}


export default function Post({ postData }) {
    return (
        <>
            <article className="prose lg:prose-xl max-w-2xl border-violet-700 min-h-screen rounded-sm container">

                <div className="container  ">
                    <Head>
                        <title>{postData.title}</title>
                    </Head>
                    <div className=" text-center text-2xl mb-2 border-y-4 border-violet-700 py-2">
                        <Link href={`/blog`} className="text-violet-600 text-blod hover:text-violet-200">Blog</Link>
                    </div>
                    <div className="text-2xl">

                        {postData.title}
                        <br />
                        {postData.id}
                        <br />
                        <Date dateString={postData.date}></Date>
                    </div>
                    <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} className="border-t-2 border-violet-700"></div>
                </div>
            </article>
        </>
    );
}





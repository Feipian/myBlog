import { getSortedPostsData } from "../../lib/posts";
import Link from 'next/link';
import Date from "../../components/date";



export async function getStaticProps() {
    const allPostData =  getSortedPostsData();
    return {
        props : {
            allPostData,
        },
    };
}

export default function blog({allPostData}) {
    return (
        <>
            <div className="container">
                <div className="text-center text-4xl">
                    Blog
                </div>
                <ul>
                    {allPostData.map(({id, date, title}) => (
                        <li key={id}>
                            <Link href={`/posts/${id}`}>{title}</Link>
                            <br />
                            <small className="">
                                <Date dateString={date}></Date>
                            </small>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}
import { getSortedPostsData } from "../../lib/posts";
import Link from 'next/link';
import Date from "../../components/date";



export async function getStaticProps() {
    const allPostData = getSortedPostsData();
    return {
        props: {
            allPostData,
        },
    };
}




export default function blog({ allPostData }) {
    
    return (
        <>
            <div className="container max-w-2xl bg-indigo-50 min-h-screen rounded-sm ">

                <div className="container p-4">
                    <div className=" text-center text-2xl mb-4 border-y-2 py-2 bg-stone-800 text-white text-bold">
                        Blog
                    </div>
                    <div className="w-full ">

                        <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-4  ">
                            {allPostData.map(({ id, date, title }) => (
                                <div className=" bg-slate-100 p-3  rounded-lg shadow-lg " key={id}>
                                    <Link href={`/posts/${id}`} className="text-lime-800 text-lg hover:underline hover:text-lime-500">{title}</Link>
                                    <br />
                                    <div className="text-sm text-lime-800">
                                        <Date dateString={date}></Date>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* <ul >
                            {allPostData.map(({ id, date, title }) => (


                                <li key={id}>
                                    <Link href={`/posts/${id}`}>{title}</Link>
                                    <br />
                                    <small className="">
                                        <Date dateString={date}></Date>
                                    </small>
                                </li>

                            ))}
                        </ul> */}

                    </div>
                </div>
            </div>
        </>
    );
}
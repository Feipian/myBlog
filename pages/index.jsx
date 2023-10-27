import Image from 'next/image'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

import Script from "next/script";
import { initFirebase } from "../Firebase/firebaseApp";



export default function Home() {
  initFirebase();
  const provider = new GoogleAuthProvider();
  const auth = getAuth();

  const signIn = async () => {
    const result = await signInWithPopup(auth, provider);
    console.log(result.user);
  }


  return (
    <>


      <Script src="https://kit.fontawesome.com/72c34bbb42.js" crossorigin="anonymous"></Script>
      <Script src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></Script>
      <Script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></Script>

      <main className="container mx-auto py-8 flex flex-col sm:flex-row">
        <aside className="w-full sm:w-1/4 p-4  ">
          <div className="bg-white p-4 shadow rounded text-center mx-auto">
            <div className="icon text-5xl">
              <i className="fa fa-html5 text-5xl" aria-hidden="true"></i>
            </div>
            <p>HTML</p>
            <div className="icon text-5xl">
              <i className="fa fa-css3 text-5xl" aria-hidden="true"></i>
            </div>
            <p>CSS</p>
            <div className="icon text-5xl">
              <i className="fa-brands fa-js"></i>
            </div>
            <p>javascript</p>
            <div className="icon text-5xl">
              <i className="fa-brands fa-bootstrap"></i>
            </div>
            <p>BootStrap</p>

            <div className="icon text-5xl">
              <i className="fa-brands fa-react"></i>
            </div>
            <p>React</p>

            <div className="icon text-5xl">
              <i className="fa-brands fa-vuejs"></i>
            </div>
            <p>Vue</p>
          </div>
        </aside>

        <section className="w-full sm:w-3/4 p-4">
          <div className="bg-white p-4 shadow rounded">
            <h2 className="text-2xl font-semibold mb-4">Introduction</h2>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="text-info md:w-1/2">
                <p className="text-base leading-6 text-gray-700">王鴻銘</p>
                <p className="text-base leading-6 text-gray-700">無工作經驗</p>
                <p className="text-base leading-6 text-gray-700">職位:WEB 前端</p>
                <p className="text-base leading-6 text-gray-700">最高學歷:National Quemoy University {"->"} CSIE</p>
              </div>

              <div className="image-container">
                <Image src="/images/Home/Dog.webp" alt="My webp dog" width={200} height={200} />
              </div>
            </div>

            <h2 className="font-semibold mt-2">學習過的領域:</h2>
            <ul className="list-disc pl-4 mt-4">
              <li>Front-End: 基礎網頁設計、RWD、CSS、CSS Framework、JavaScript, TypeScript, PHP</li>
              <li>Back-End: Flask, Django, Laravel, Deno, Node</li>
              <li>Machine Learning: Pytorch, ScikitLearn, CrossValidation, Regression</li>
              <li>Language: C, Python, C#, C++, Java, JavaScript, TypeScript, PHP</li>
              <li>SRE: Ansible, JumpServer, CentOS, Ubuntu, AWS, Jenkins, Terraform, Zabbix</li>
              <li>證照: 電腦硬體裝修乙級, 工業電子乙級, 網路架設</li>
            </ul>
          </div>
        </section>


      </main>

    </>

  );
}

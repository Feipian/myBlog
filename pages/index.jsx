


import Script from "next/script";



export default function Home() {
  return (
    <>
      

      <Script src="https://kit.fontawesome.com/72c34bbb42.js" crossorigin="anonymous"></Script>
      <Script src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></Script>
      <Script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></Script>

      <main className="container mx-auto py-8 flex flex-col sm:flex-row">
        <aside className="w-full sm:w-1/4 p-4 ">
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

            <p className="text-base leading-6 text-gray-700">王鴻銘</p>
            <p className="text-base leading-6 text-gray-700">無工作經驗</p>
            <p className="text-base leading-6 text-gray-700">職位:WEB 前端</p>
            <p className="text-base leading-6 text-gray-700">最高學歷:National Quemoy University {"->"} CSIE</p>

            <h2 className="font-semibold mt-2">學習過的領域:</h2>
            <ul className="list-disc pl-4 mt-4">
              <li>Front-End:基礎網頁設計、RWD、CSS、CSS FrameWork、JavaScript、 TypeScript、PHP</li>
              <li>Back-End:Flask、Django、Laravel、Deno、Node</li>
              <li>Machine Learning:Pytorch、ScikitLearn、CrossValidation、Regression</li>
              <li>Language: C、Python、C#、C++、Java、JavaScript、TypeScript、PHP</li>
              <li>SRE: Ansible, JumpServer, CentOS, Ubuntu, AWS, Jenkins, Terraform, Zabbix</li>
              <li>證照: 電腦硬體裝修乙級、工業電子乙級、網路架設</li>
            </ul>



          </div>

        </section>
      </main>

    </>

  );
}

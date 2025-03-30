'use client'
import { useState } from 'react'

export default function AboutContent() {
  const [isKorean, setIsKorean] = useState<boolean>(true)
  const handleLanguageChange = (e) => {
    const selectedLanguage = e.target.value
    setIsKorean(selectedLanguage === 'ko')
  }
  return (
    <div>
      <div className="flex items-center justify-end">
        <select
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-auto p-2 pr-8 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-center"
          id="language"
          onChange={handleLanguageChange}
          defaultValue={'ko'} // 현재 선택된 언어를 표시
        >
          <option selected value="ko">
            🇻🇳&nbsp;Việt Nam
          </option>
          <option value="en">🇺🇸&nbsp;English</option>
        </select>
      </div>
      <div className="p-4">{isKorean ? <VietNamContent /> : <EnglishContent />}</div>
    </div>
  )
}

const VietNamContent = () => {
  return (
    <div>
      <header>
        <h1>Xin chào, tôi là <span className="highlight">Steve Bang</span></h1>
        <h2>Lập trình viên Full-stack với 4+ năm kinh nghiệm</h2>
      </header>
      <section className="about-me">
        <h3>👨‍💻 Về tôi</h3>
        <p>
          Tôi là lập trình viên chuyên về hệ thống backend với đam mê xây dựng các giải pháp tối ưu.
          Với hơn 3 năm làm việc tại các công ty product và outsource, tôi đã phát triển được nhiều kỹ năng quan trọng và cần thiết cho bản thân tôi.
        </p>
      </section>

      <section className="expertise">
        <h3>🛠 Kỹ năng chuyên môn</h3>
        <ul className="skills">
          <li><strong>Ngôn ngữ:</strong> C#, Java, Javascript, TypeScript.</li>
          <li><strong>Framework/Công nghệ:</strong>Dot NET, Sprint Boot, Docker, Kubernetes</li>
          <li><strong>Cơ sở dữ liệu:</strong> SQL Server, MySQL, MongoDB, PostgreSQL</li>
          <li><strong>Khác:</strong> Azure, CI/CD, Microservices</li>
        </ul>
      </section>

      <section className="experience">
        <h3>💼 Kinh nghiệm làm việc</h3>
        <div className="job">
          <h4>Full stack - 1ByteSoftware</h4>
          <p className="date">2022 - Đến nay</p>
          <ul className="responsibilities">
            <li>Trưởng dự án của hệ thống <a href='https://jframework.io/' target='_blank'>JFramework</a>, hệ thống mà 70% các sản phẩm đều cần đến, hệ thống giúp cho các project được triển khai nhanh chóng và có được nhiều thời gian để phát triển đúng tính năng cốt lỗi.</li>
            <li>Phát triển hệ thống <a href='https://vardytests.com/' target='_blank'>VardyTests</a>, các bài tests cho các chứng chỉ thi nổi tiếng trên thế giới như IELTS, PTE, SAT,...</li>
          </ul>
          <h4>Full stack - 1ByteSoftware</h4>
          <p className="date">2020 - 2022</p>
          <ul className="responsibilities">
            <li>Tham gia phát triển ứng dụng quản lý thư viện cho nhà trường.</li>
          </ul>
        </div>
      </section>
    </div>
  )
}
const EnglishContent = () => {
  return (
    <div>
      <header>
        <h1>Hello, I'm <span className="highlight">Steve Bang</span></h1>
        <h2>Full-stack Developer with 4+ years of experience</h2>
      </header>

      <section className="about-me">
        <h3>👨‍💻 About Me</h3>
        <p>
          I am a backend-focused developer with a passion for building optimized solutions.
          With over 3 years of experience working at both product and outsourcing companies,
          I have developed essential and critical skills for my career.
        </p>
      </section>

      <section className="expertise">
        <h3>🛠 Technical Skills</h3>
        <ul className="skills">
          <li><strong>Languages:</strong> C#, Java, JavaScript, TypeScript.</li>
          <li><strong>Frameworks/Technologies:</strong> .NET, Spring Boot, Docker, Kubernetes</li>
          <li><strong>Databases:</strong> SQL Server, MySQL, MongoDB, PostgreSQL</li>
          <li><strong>Others:</strong> Azure, CI/CD, Microservices</li>
        </ul>
      </section>

      <section className="experience">
        <h3>💼 Work Experience</h3>
        <div className="job">
          <h4>Full Stack Developer - 1ByteSoftware</h4>
          <p className="date">2022 - Present</p>
          <ul className="responsibilities">
            <li>Project lead for the <a href='https://jframework.io/' target='_blank'>JFramework</a> system, which is used in 70% of our products.
              This system accelerates project deployment, allowing more time to develop core functionalities.</li>
            <li>Developed the <a href='https://vardytests.com/' target='_blank'>VardyTests</a> platform, providing test preparation for renowned global certifications such as IELTS, PTE, SAT, etc.</li>
          </ul>
          <h4>Full Stack Developer - 1ByteSoftware</h4>
          <p className="date">2020 - 2022</p>
          <ul className="responsibilities">
            <li>Contributed to developing a library management application for schools.</li>
          </ul>
        </div>
      </section>
    </div>
  )
}

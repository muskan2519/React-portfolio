import Education from "./Education"
import Experience from "./Experience"
import OtherInfo from "./OtherInfo"
import Projects from "./Projects"
import Skills from "./Skills"

export default function Main() {
    return(
        <main id="main">

            <section className="bodySection1">
                {/* Image url - https://dfla.org/wp-content/uploads/2018/12/Dark-Red-background-banner.jpg */}
                <img src="/images/body-section-1-img.jpg" alt="Background for Introduction" className="section1Img" />
                <div className="section1Text" id="bodysection1Text">
                    <h1 className="myName">Hi! My name is Muskan Aggarwal</h1>
                    <h4 className="myProfile"><i>A Web/Software/Mobile Application Developer</i></h4>
                </div>
            </section>

            <section className="bodySection2 bodySection" id="bodySection2">
                <h2>About Me</h2>
                <p>I am a dedicated and result oriented Software Developer with around 3 years of professional experience in designing and developing websites/softwares as well as creating and launching both android and IOS based mobile applications.</p>
            </section>

            <section className="bodySection3 bodySection" id="bodySection7">
                <h2>Education</h2>
                <Education />
            </section>

            <section className="bodySection3 bodySection" id="bodySection3">
                <h2>Work Experience</h2>
                <Experience />
            </section>

            <section className="bodySection4 bodySection" id="bodySection4">
                <h2>Skills</h2>
                <Skills />
            </section>

            <section className="bodySection5 bodySection" id="bodySection5">
                <h2>Professional Projects</h2>
                <Projects />
            </section>

            <section className="bodySection6 bodySection" id="bodySection6">
                <h2>Contact Information</h2>
                <OtherInfo />
            </section>

        </main>
    )
}
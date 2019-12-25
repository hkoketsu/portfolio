import IndexLayout from '../layouts'
import AboutSection from '../components/about/AboutSection'
import WorkSection from '../components/work/WorkSection'
import SkillSection from '../components/skill/SkillSection'
import ContactSection from '../components/contact/ContactSection'

const IndexPage = () => (
  <IndexLayout>
    <AboutSection />
    <WorkSection />
    <SkillSection />
    <ContactSection/>
  </IndexLayout>
)

export default IndexPage

import About from '../components/organism/about'
import Achievements from '../components/organism/achievements'
import Facilities from '../components/organism/facilities'
import Footer from '../components/organism/footer'
import Form from '../components/organism/form'
import Header from '../components/organism/header'
import Teachers from '../components/organism/Teachers'

export default function Home() {
  return (
    <>
<Header/>
<Teachers/>
<Facilities/>
<Achievements/>
<About/>
<Form/>
<Footer/>
    </>
  )
}
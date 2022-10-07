import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Recognized from './components/Recognized';
import News from './components/News';
import CaseStudy from './components/CaseStudy';
import Resources from './components/Resources';
import Partners from './components/Partners';
import Agile from './components/Agile';
import Subscribe from './components/Subscribe';
import WorkTogether from './components/WorkTogether';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

// API
import useHeroHook from './api/HeroApi.js';
import useServicesHook from './api/ServicesApi.js';
import useRecognizedHook from './api/RecognizedApi.js';
import useNewsHook from './api/NewsApi';
import useCaseStudyHook from './api/CaseStudyApi';
import usePartnersHook from './api/PartnersApi';
import useResourcesHook from './api/ResourcesApi';
import useAgileHook from './api/AgileApi';

function App() {
    const heroData = useHeroHook();
    const servicesData = useServicesHook();
    const recognizedData = useRecognizedHook();
    const newsData = useNewsHook();
    const caseStudyData = useCaseStudyHook();
    const partnersData = usePartnersHook();
    const resourcesData = useResourcesHook();
    const agileData = useAgileHook();

    return (
        <>
            <Navbar />
            <Hero
                data={heroData}
            />
            <Services
                data={servicesData}
            />
            <Recognized
                data={recognizedData}
                image="images/international-world.svg"
            />
            <News
                data={newsData}
            />
            <CaseStudy
                data={caseStudyData}
            />
            <Partners
                data={partnersData}
                // title="Partners"
                heading="Partners"
                text="We are proud to work with the best brands in the world."
            />
            <Resources
                data={resourcesData}
            />
            <Agile
                data={agileData}
                title="Agile approach to iterate effectively"
                heading="Passionate consultants"
                image="images/1633086035-agileapproach.svg"
            />
            <Subscribe
                title="Agile approach to iterate effectively"
                heading="Get the best of Zeo news straight to your inbox!"
                image="images/1633086035-agileapproach.svg"
            />
            <WorkTogether
                text="Let's work together"
                email="hello@email.com"
            />
            <ContactUs
                heading="Contact Us"
            />
            <Footer />
        </>
    );
}

export default App;
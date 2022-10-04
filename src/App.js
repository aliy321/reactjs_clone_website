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

function App() {
    return (
        <>
            <Navbar />
            <Hero
                title="Winner of the UK & EU & MENA Search Awards"
                heading="Tailor-made strategies to maximize your results"
                text="Zeo is a digital marketing agency with a team of 50+ consultants. Using modern technology to make data-driven decisions is our competitive advantage. The world's most valuable brands, unicorn startups, and internet companies prefer to work with us to fulfill their digital potential."
                buttonText="See our sucess stories"
                buttonLink="#contact"
                imageSmall="images/1584862245-hero-mobile.svg"
                imageBig="images/1609311090-homepage-hero.svg"
            />
            <Services
                title="What can we do for you?"
                heading="Our Services"
                text="We bring the 'technical' and 'creative' together while serving our core fundamental services."
                buttonText="Get Started"
                buttonLink="#contact"
                image="images/1584862245-hero-mobile.svg"
            />
            <Recognized
                title="Every new client is an opportunity for having another award"
                heading="Recognized by industry's best minds"
                buttonText="Get Started"
                buttonLink="#contact"
                image="images/international-world.svg"
            />
            <News
                title="Digitalzone brings top marketing professionals since 2013"
                heading="Largest Digital Marketing Conference of Eastern Europe & MENA"
                text="We organize Digitalzone conference since 2013 to bring the brightest minds of digital marketing, like Rand Fishkin, Wil Reynolds, Aleyda Solis and Brian Dean with Europe's digital marketing community together. It is not only a conference but also a monthly meetup where people can share new insights with others. Proudly speaking, we have reached more than 50K+ marketers within 10 years and learned together to be better marketers."
                buttonText="View More"
                buttonLink="#contact"
                image="images/1632233359-event-europa-full.webp"
            />
            <CaseStudy
                title="References &"
                heading="Case Studies"
                text="We are providing our proficiency to have the best results in our clients' industries."
            />
            <Partners
                // title="Partners"
                heading="Partners"
                text="We are proud to work with the best brands in the world."
            />
            <Resources
                title="Digital Marketing"
                heading="Resources"
                text="50 blog posts, 3 videos, 1 e-books and more."
            />
            <Agile
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
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ContactSection from '../components/ContactSection';

export default function HomePage() {
    return (
        <main>
            <HeroSection />
            <ServicesSection />
            <TestimonialsSection />
            <ContactSection />
        </main>
    );
}

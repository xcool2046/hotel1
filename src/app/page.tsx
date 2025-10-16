import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import Booking from "@/components/booking"
import Rooms from "@/components/rooms"
import Dining from "@/components/dining"
import Spa from "@/components/spa"
import Meetings from "@/components/meetings"
import Gallery from "@/components/gallery"
import Location from "@/components/location"
import Reviews from "@/components/reviews"
import FAQ from "@/components/faq"
import Newsletter from "@/components/newsletter"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <main>
        <Hero />
        <Booking />
        <Rooms />
        <Dining />
        <Spa />
        <Meetings />
        <Gallery />
        <Location />
        <Reviews />
        <FAQ />
        <Newsletter />
      </main>

      <Footer />
    </div>
  );
}

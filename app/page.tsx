import HeroSection from "@/components/home/HeroSection";
import StatsSection from "@/components/home/StatsSection";
import FeaturedDishes from "@/components/home/FeaturedDishes";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import DeliveryBanner from "@/components/home/DeliveryBanner";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import InstagramFeed from "@/components/home/InstagramFeed";
import SpecialOfferBanner from "@/components/home/SpecialOfferBanner";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <FeaturedDishes />
      <WhyChooseUs />
      <SpecialOfferBanner />
      <DeliveryBanner />
      <TestimonialsSection />
      <InstagramFeed />
    </>
  );
}

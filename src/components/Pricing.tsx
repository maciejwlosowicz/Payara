import React, { useState, useEffect } from "react";
import PricingCard from "./PricingCard";

const plans = [
  {
    title: "Freebie",
    subtitle: "Ideal for individuals who need quick access to basic features.",
    price: 0,
    features: [
      { text: "20,000+ of PNG & SVG graphics", enabled: true },
      { text: "Access to 100 million stock images", enabled: true },
      { text: "Upload custom icons and fonts", enabled: false },
      { text: "Unlimited Sharing", enabled: false },
      { text: "Upload graphics & video in up to 4k", enabled: false },
      { text: "Unlimited Projects", enabled: false },
      { text: "Instant Access to our design system", enabled: false },
      { text: "Create teams to collaborate on designs", enabled: false },
    ],
  },
  {
    title: "Professional",
    subtitle: "Ideal for individuals who who need advanced features and tools for client work.",
    price: 25,
    features: [
      { text: "20,000+ of PNG & SVG graphics", enabled: true },
      { text: "Access to 100 million stock images", enabled: true },
      { text: "Upload custom icons and fonts", enabled: true },
      { text: "Unlimited Sharing", enabled: true },
      { text: "Upload graphics & video in up to 4k", enabled: true },
      { text: "Unlimited Projects", enabled: true },
      { text: "Instant Access to our design system", enabled: false },
      { text: "Create teams to collaborate on designs", enabled: false },
    ],
  },
  {
    title: "Enterprise",
    subtitle: "Ideal for businesses who need personalized services and security for large teams.",
    price: 100,
    features: [
      { text: "20,000+ of PNG & SVG graphics", enabled: true },
      { text: "Access to 100 million stock images", enabled: true },
      { text: "Upload custom icons and fonts", enabled: true },
      { text: "Unlimited Sharing", enabled: true },
      { text: "Upload graphics & video in up to 4k", enabled: true },
      { text: "Unlimited Projects", enabled: true },
      { text: "Instant Access to our design system", enabled: true },
      { text: "Create teams to collaborate on designs", enabled: true },
    ],
  },
];

const Pricing: React.FC = () => {

  const [selected, setSelected] = useState<string>("");
  
  useEffect(() => {
    const priceIndex: number = plans.findIndex( row => row.title === selected);
    if(priceIndex !== -1){
      console.log(`Total price for one year of the ${selected} plan: $${plans[priceIndex].price*12}`);
    }
  }, [selected]); 

  return (
    <div className="pricing">
      <div className="pt-15 pb-725">
        <h1 className="pricing-title Text-XL-Bold">Powerful features for <span>powerful creators</span></h1>
        <div className="pricing-subtitle Text-Base-Medium pt-1">Choose a plan that's right for you</div>
      </div>

      <main>
        {plans.map((plan, index) => (
          <PricingCard key={index} {...plan} selected={selected} setSelected={setSelected} />
        ))}
      </main>
    </div>
  );
};

export default Pricing;

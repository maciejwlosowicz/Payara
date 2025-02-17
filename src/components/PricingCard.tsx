import React from "react";
import clsx from "clsx";
import Button from "./shared/Button";
import Enabled from "./shared/Enabled";
import Disabled from "./shared/Disabled";

interface PricingCardProps {
    title: string;
    subtitle: string;
    price: number;
    features: { text: string; enabled: boolean }[];
    selected: string;
    setSelected: React.Dispatch<React.SetStateAction<string>>;
}

const PricingCard: React.FC<PricingCardProps> = ({ title, subtitle, price, features, selected, setSelected }) => {

    return (
        <div className={clsx(selected === title ? "card-active" : "card")}>
            <div className={clsx(selected === title ? "card-content-active" : "card-content")}>
                <h3 className={clsx(selected === title ? "card-title-active" : "card-title", "Text-L-Medium")}>{title}</h3>
                <div className={clsx(selected === title ? "card-subtitle-active" : "card-subtitle", "Text-Base-Medium pt-1")}>{subtitle}</div>
                <div className="card-price pt-1">
                    <div className={clsx(selected === title ? "card-amount-active" : "card-amount", "Text-XL-Bold")}>${price}</div>
                    <div className={clsx(selected === title ? "card-term-active" : "card-term", "Text-Base-Medium")}>/ Month</div>
                </div>
                <div className="pt-15">
                    <Button text="Get Started Now" title={title} selected={selected} setSelected={setSelected}/>
                </div>
                <div className="pt-15">
                    {features.map((feature, index) => (
                        <div className="card-list-item" key={index}>
                            <div className="card-list-item-icon">
                                {
                                    feature.enabled ?
                                        <Enabled isSelected={selected === title ? true : false} />
                                        :
                                        <Disabled isSelected={selected === title ? true : false} />}
                            </div>
                            <div className={clsx(selected === title ? (feature.enabled ? "card-list-item-text-enable-active" : "card-list-item-text-disable-active") : (feature.enabled ? "card-list-item-text-enable" : "card-list-item-text-disable"), "Text-Base-Medium pl-1")}>
                                {feature.text}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PricingCard;

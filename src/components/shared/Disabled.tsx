import React from "react";
import clsx from "clsx";

interface IconProps {
    isSelected: boolean;
}

const Disabled: React.FC<IconProps> = ({ isSelected }) => {

    return (
        <svg className={clsx(isSelected === true ? "card-list-item-icon-icon-no-active" : "card-list-item-icon-icon-no")} width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M15.9983 32C24.8348 32 31.9983 24.8366 31.9983 16C31.9983 7.16344 24.8348 0 15.9983 0C7.16174 0 -0.00170898 7.16344 -0.00170898 16C-0.00170898 24.8366 7.16174 32 15.9983 32ZM20.2389 19.2978C20.4992 19.5581 20.4992 19.9803 20.2389 20.2406C19.9785 20.501 19.5564 20.501 19.2961 20.2406L15.9967 16.9412L12.6973 20.2406C12.437 20.501 12.0149 20.501 11.7545 20.2406C11.4942 19.9803 11.4942 19.5581 11.7545 19.2978L15.0539 15.9984L11.7536 12.6981C11.4933 12.4378 11.4933 12.0157 11.7536 11.7553C12.014 11.495 12.4361 11.495 12.6964 11.7553L15.9967 15.0556L19.297 11.7553C19.5573 11.495 19.9795 11.495 20.2398 11.7553C20.5001 12.0157 20.5001 12.4378 20.2398 12.6981L16.9395 15.9984L20.2389 19.2978Z"/>
        </svg>
    )
};

export default Disabled;

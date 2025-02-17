import React from "react";
import clsx from "clsx";

interface IconProps {
    isSelected: boolean;
}

const Enabled: React.FC<IconProps> = ({ isSelected }) => {

    return (
        <svg className={clsx(isSelected === true ? "card-list-item-icon-icon-yes-active" : "card-list-item-icon-icon-yes")} width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M15.9983 32C24.8348 32 31.9983 24.8366 31.9983 16C31.9983 7.16344 24.8348 0 15.9983 0C7.16174 0 -0.00170898 7.16344 -0.00170898 16C-0.00170898 24.8366 7.16174 32 15.9983 32ZM21.7913 13.1495C22.058 12.8957 22.0684 12.4737 21.8145 12.207C21.5606 11.9403 21.1387 11.9299 20.872 12.1838L13.6717 19.0379L11.1666 16.1763C10.9241 15.8992 10.5029 15.8713 10.2258 16.1138C9.94881 16.3563 9.92083 16.7775 10.1634 17.0545L13.1263 20.4391C13.246 20.5758 13.4162 20.6577 13.5976 20.666C13.7791 20.6742 13.956 20.6081 14.0876 20.4829L21.7913 13.1495Z"/>
        </svg>
    )
};

export default Enabled;

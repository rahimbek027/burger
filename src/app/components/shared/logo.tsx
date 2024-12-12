import React from "react";
import Image from "next/image";
import logo from "../../../../public/logo.svg";

interface IAppProps { className?: string }

export const Logo: React.FC<IAppProps> = () => {
    return <Image src={logo} alt={logo} className={``} />;
};

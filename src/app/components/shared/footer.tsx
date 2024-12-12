import React from "react";
import { Container, Logo, Title } from "./index";
import Image from "next/image";
import call from "../../../../public/Call.svg";
import vk from "../../../../public/entypo-social_vk-with-circle.svg";
import telegraph from "../../../../public/bi_telegram.svg";


export const Footer: React.FC = () => {
    return (
        <footer className={`my-[clamp(1.563rem, 1.295rem + 1.34vw, 2.5rem)]`}>
            <Container>
                <div className="flex flex-col md:flex-row md:justify-between justify-start">
                    <div className="flex flex-col md:justify-between justify-start">
                        <Logo />
                        <p className="text-sm text-gray-600 mt-2">
                            © YouMeal, 2022
                            <br />
                            <span className="text-gray-500">Design: Anastasia Ilina</span>
                        </p>
                    </div>

                    <div className="flex flex-col md:justify-normal gap-[4px]">
                        <Title text="Номер для заказа" size="sm" />
                        <div className="flex justify-start gap-[5px]">
                            <Image src={call} alt="Call Icon" width={24} height={24} />
                            <Title text="+7 (930) 833-38-11" size="sm" />
                        </div>
                    </div>
                    <div>
                        <Title text="Мы в соцсетях" size="sm" />
                        <div className={`flex justify-start gap-[15px]`}>
                            <Image src={vk} alt="" width={36} height={36} />
                            <Image src={telegraph} alt="" width={36} height={36} />
                        </div>
                    </div>

                </div>
            </Container>
        </footer>
    );
};

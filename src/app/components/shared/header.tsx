import React from "react";
import { Container, Logo, Title } from "./index";
import Image from "next/image";
import big_burger from "../../../../public/pic.svg";

type Props = {
    className?: string;
};

export const Header: React.FC<Props> = ({ className }) => {
    return (
        <header className={`flex justify-center items-center mb-2`}>
            <Container>
                <main className="flex flex-col items-center">
                    <Logo />
                    <div className={`flex flex-col md:flex-row md:justify-between items-center gap-[20px]`}>
                        <Image src={big_burger} alt="Big Burger" />
                        <p className={`text-center text-[30px] md:text-[50px] text-[#FF5C00] font-bold`}>Только самые <br /> сочные бургеры!</p>
                    </div>
                </main>
            </Container>
        </header>
    );
};

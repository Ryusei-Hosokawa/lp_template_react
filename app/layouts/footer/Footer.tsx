import React from "react";
import { companyInformation } from "../../LpData";
import { Link } from "react-router";

export default function Footer() {
    return (
        <footer className="sticky top-full bg-gray-800 text-white py-[100px]">
            <div className="max-w-screen-xl mx-auto px-4">
                <div className="flex flex-col items-center">
                    <ul className="
                        flex
                        justify-center
                        items-center
                        mb-[20px]
                    ">
                        <li>
                            <a
                                href="about"
                                className="hover:text-gray-300 transition-colors"
                            >
                                会社概要
                            </a>
                        </li>
                        <span className="mx-[10px]">|</span>
                        <li>
                            <a
                                href="privacy_policy"
                                className="hover:text-gray-300 transition-colors"
                            >
                                プライバシーポリシー
                            </a>
                        </li>
                    </ul>
                    <small className="text-[12px] text-[#c9c9c9] font-[300]">
                        Copyright © {companyInformation.name} All rights reserved.
                    </small>
                </div>
            </div>
        </footer>
    );
}

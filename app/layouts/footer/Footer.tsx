import React from "react";
import { companyInformation } from "../../LpData";
import { Link } from "react-router";

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-[100px]">
            <div className="max-w-screen-xl mx-auto px-4">
                <div className="flex flex-col items-center">
                    <ul className="
                        flex
                        justify-center
                        items-center
                        mb-[20px]
                    ">
                        <li>
                            <Link
                                to="/about"
                                className="hover:text-gray-300 transition-colors"
                            >
                                会社概要
                            </Link>
                        </li>
                        <span className="mx-[10px]">|</span>
                        <li>
                            <Link
                                to="/privacy_policy"
                                className="hover:text-gray-300 transition-colors"
                            >
                                プライバシーポリシー
                            </Link>
                        </li>
                    </ul>
                    <small className="text-[12px] text-[#c9c9c9] font-[300]">Copyright © 株式会社和田板金工業 All rights reserved.</small>
                </div>
            </div>
        </footer>
    );
}

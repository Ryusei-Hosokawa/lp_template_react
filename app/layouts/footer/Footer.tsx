import React from "react";
import { companyInformation } from "../../LpData";
import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex flex-col items-center">
          <p className="mb-4 space-x-6">
            <Link to="/about" className="hover:text-gray-300 transition-colors">会社概要</Link>
            <span className="mx-2">|</span>
            <Link to="/privacy_policy" className="hover:text-gray-300 transition-colors">プライバシーポリシー</Link>
          </p>
          <p className="text-center text-sm text-gray-400">
            <small>Copyright © 株式会社和田板金工業 All rights reserved.</small>
          </p>
        </div>
      </div>
    </footer>
  )
}

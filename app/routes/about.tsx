import React from "react";
import { useHeaderResizeEffect } from "../logics/headerResizeObserver";

export default function About() {
    // ヘッダーの高さに応じてマージンを調整するカスタムフックを使用
    useHeaderResizeEffect();

    return (
        <main className="page__main">
            <div className="max-w-[800px] mx-auto px-4 py-10">
                <h1 className="text-2xl font-bold text-center mb-8">会社概要</h1>
                
                <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                    <table className="w-full border-collapse">
                        <tbody>
                            <tr>
                                <th className="bg-red-600 text-white p-4 w-1/3 border border-white text-center">会社名</th>
                                <td className="bg-white p-4 border border-gray-200">オンライン学習塾ソレアド</td>
                            </tr>
                            <tr>
                                <th className="bg-red-600 text-white p-4 border border-white text-center">営業時間</th>
                                <td className="bg-white p-4 border border-gray-200">9:00～19:00</td>
                            </tr>
                            <tr>
                                <th className="bg-red-600 text-white p-4 border border-white text-center">定休日</th>
                                <td className="bg-white p-4 border border-gray-200">年末年始・夏季休暇</td>
                            </tr>
                            <tr>
                                <th className="bg-red-600 text-white p-4 border border-white text-center">代表取締役</th>
                                <td className="bg-white p-4 border border-gray-200">青山 雄一</td>
                            </tr>
                            <tr>
                                <th className="bg-red-600 text-white p-4 border border-white text-center">所在地(本社)</th>
                                <td className="bg-white p-4 border border-gray-200">
                                    〒114-0001
                                    <br />
                                    東京都北区東十条4-6-3 菊地ビル 204
                                </td>
                            </tr>
                            <tr>
                                <th className="bg-red-600 text-white p-4 border border-white text-center">連絡先</th>
                                <td className="bg-white p-4 border border-gray-200">
                                    【TEL】03-6679-6620
                                    <br />
                                    【Mail】contact@kakomonselect.com
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </main>
    );
}

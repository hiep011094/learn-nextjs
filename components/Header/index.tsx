"use client"; // This is a client component 👈🏽
import * as React from 'react';

import Link from 'next/link'
import { usePathname } from 'next/navigation';
import Topic from '../Topic';

export interface IHeaderProps {
    handleToggle: any
    toggle: boolean
    dataCate: Array<any>
}



export default function Header({ dataCate, handleToggle, toggle }: IHeaderProps) {

    const pathName: string = usePathname();
    const isHome: string = '/'


    return (
        <header className="header">
            <div className="header_container">

                <h1 id="logo" className="header_logo">
                    <Link className="nav_link" href="/">
                        <figure className="icon">
                            <img src="/assets/images/common/img_logo.svg" alt="" />
                        </figure>
                        <span className="brand_span">オウンドメディアタイトル</span>
                    </Link>
                </h1>

                <div className="header_contact">
                    <Link href="/" className="nav_link">
                        <img className="icon" src="/assets/images/common/icon_email_dark_stroke.svg" alt="お問合せ" />
                        <span className="txt">お問合せ</span>
                    </Link>
                </div>

                <div className="header_menu_icon" onClick={handleToggle}>
                    <div className="nav_toggler">
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </div>
                </div>

                <div id="menu" className={`nav_wrap ${toggle ? "open" : ""}`}>
                    <nav className="nav">
                        <div className="container">
                            <div className="nav_container">
                                <div className="nav_item">
                                    <h3 className="nav_item_title">Category</h3>
                                    <ul className="nav_menu nav_menu__normal">
                                        {
                                            dataCate.map((item) =>
                                                <li key={item.id} className="nav_menu_item">
                                                    <Link className="nav_link" href={"/archive/cate/" + item.slug}>{item.title}</Link>
                                                </li>
                                            )
                                        }
                                    </ul>
                                </div>
                                <div className="nav_item">
                                    <h3 className="nav_item_title">Page</h3>
                                    <ul className="nav_menu nav_menu__smaller">
                                        <li className="nav_menu_item">
                                            <Link className="nav_link" href="#">トップページ</Link>
                                        </li>
                                        <li className="nav_menu_item">
                                            <Link className="nav_link" href="#">記事一覧</Link>
                                        </li>
                                        <li className="nav_menu_item">
                                            <Link className="nav_link" href="#" target="_blank"
                                                rel="noopener noreferrer">お問合せ<span className="icon"></span></Link>
                                        </li>
                                        <li className="nav_menu_item">
                                            <Link className="nav_link" href="#" target="_blank"
                                                rel="noopener noreferrer">個人情報保護方針<span className="icon"></span></Link>
                                        </li>
                                        <li className="nav_menu_item">
                                            <Link className="nav_link" href="#" target="_blank"
                                                rel="noopener noreferrer">運営会社<span className="icon"></span></Link>
                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </nav>
                </div>

            </div>

            {(pathName !== isHome) ? <Topic /> : ""}

            <div className="header_container_pc">
                <div className="container">
                    <ul className="bottom_menu">
                        {
                            dataCate.map((item) =>
                                <li key={item.id} className="nav_menu_item">
                                    <Link className="nav_link" href={"/archive/cate/" + item.slug}>{item.title}</Link>
                                </li>
                            )
                        }
                    </ul>
                </div>
            </div>
        </header>
    );
}

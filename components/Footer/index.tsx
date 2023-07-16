import Link from 'next/link';
import * as React from 'react';

export interface IFooterProps {
}

export default function Footer (props: IFooterProps) {
  return (
    <footer className="footer">
            <div className="footer_contact">
                <Link href="#" className="nav_link">
                    <img className="icon" src="/assets/images/common/icon_email_light_stroke.svg" alt="" />
                    <span className="txt">お問合せはこちら</span>
                </Link>
            </div>

            <div className="footer_container">
                <div className="footer_menu">
                    <ul className="footer_menu_ul">
                        <li>
                            <Link href="#" className="nav_link" target="_blank" rel="noopener noreferrer">
                                個人情報保護方針
                                <span className="icon"></span>
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="nav_link" target="_blank" rel="noopener noreferrer">
                                運営会社
                                <span className="icon"></span>
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="nav_link" target="_blank" rel="noopener noreferrer">
                                オンラインショップ
                                <span className="icon"></span>
                            </Link>
                        </li>
                    </ul>
                </div>

                <h3 className="footer_logo">
                    <Link href="/" className="nav_link">
                        <img src="/assets/images/common/img_logo_light.svg" alt="images" />
                    </Link>
                </h3>

                <p className="copy_right">OSAKA WADA CHEMICAL INDUSTRY CO.,LTD ALL RIGHTS RESERVED</p>
            </div>
        </footer>
  );
}

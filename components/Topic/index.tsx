import Link from 'next/link';
import * as React from 'react';


export default function Topic () {
  return (
    <div className="header_breadcrumb">
        <div className="container">
            <ul className="breadcrumb">
                <li><Link href="#">トップ</Link><span></span></li>
                <li>すべての記事</li>
            </ul>
        </div>
    </div>
  );
}

import Link from "next/link"

import { Metadata } from "next"

import '@/public/assets/scss/news.scss';

export const metadata: Metadata = {
    title: 'tag | 進化するごみ袋',
    description: "進化するごみ袋 | サステナブルなリサイクルの最新トピックを提供",
    openGraph: {
        title: '進化するごみ袋 | サステナブルなリサイクルの最新トピックを提供',
        description: '進化するごみ袋 | サステナブルなリサイクルの最新トピックを提供'
    }
}


export default function TagList() {

    const dataTag: any = [...Array(5)]

    const dataPost: any = [...Array(15)]

    return (
        <main className="p_news ">
            <div className="tag_lists_block" data-aos="fade-up" data-aos-delay="200">
                <div className="tag_lists_block_container">
                    <h3 className="tag_lists_block_title">
                        <span className="txt">タグ一覧</span>
                    </h3>
                    <div className="tag_lists">
                        {
                            dataTag.map((i: number) => <Link key={i} href="/archive/tag/slug" className="nav_link">#タグ</Link>)
                        }
                    </div>
                </div>
            </div>
            <div className="news pt_x">
                <div className="container">
                    <p className="news_ttl" data-aos="fade-up" data-aos-delay="200">すべての記事</p>
                    <div className="news_content" data-aos="fade-up" data-aos-delay="200">
                        {
                            dataPost.map((i: number) =>
                                <Link key={i} href="/archive/single" className="news_item">
                                    <div className="img">
                                        <img src="/assets/images/news/img_news.jpg" alt="タイトルテキストタイトルテキストタイトルテキストタイトルテキスト"
                                        />
                                    </div>
                                    <p className="quote">
                                        <span className="pos">カテゴリ</span>
                                        <span className="date">2023.00.00</span>
                                    </p>
                                    <p className="name">タイトルテキストタイトルテキストタイトルテキストタイトルテキスト</p>
                                    <p className="txt">本文テキスト冒頭の30文字が入ります冒頭の30文字が入ります...</p>
                                    <div className="list_tag">
                                        <p className="tag">タグ</p>
                                        <p className="tag">タグ</p>
                                        <p className="tag">タグタグタグ</p>
                                    </div>
                                </Link>
                            )
                        }
                        
                    </div>
                    <ul className="c_pagination" data-aos="fade-up" data-aos-delay="200">
                        <li><Link href="#" className="c_pagination_btn material-icons prev"></Link></li>
                        <li><Link href="#" className="c_pagination_number active"> 1</Link></li>
                        <li><Link href="#" className="c_pagination_number">2</Link></li>
                        <li><Link href="#" className="c_pagination_number">3</Link></li>
                        <li><Link href="#" className="c_pagination_number">4</Link></li>
                        <li><Link href="#" className="c_pagination_number">5</Link></li>
                        <li><Link href="#" className="c_pagination_dots">…</Link></li>
                        <li><Link href="#" className="c_pagination_number">10</Link></li>
                        <li><Link href="#" className="c_pagination_btn material-icons next"></Link></li>
                    </ul>

                </div>
            </div>
        </main>
    )
}

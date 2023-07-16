import Link from "next/link"

import { Metadata } from "next"
import '@/public/assets/scss/news.scss';

export const metadata: Metadata = {
    title: '洗剤パックから作ったごみ袋で清掃イベントを開催',
    description: "進化するごみ袋 | サステナブルなリサイクルの最新トピックを提供",
    openGraph: {
        title: '進化するごみ袋 | サステナブルなリサイクルの最新トピックを提供',
        description: '進化するごみ袋 | サステナブルなリサイクルの最新トピックを提供'
    }
}


export default function Single() {
    const dataTag: any = [...Array(5)]
    return (
        <main className="p_newsdetail ">

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

            <div className="pt_x">
                <div className="detail_frame" data-aos="fade-up" data-aos-delay="200">
                    <p className="cate" data-aos="fade-up" data-aos-delay="200">カテゴリ</p>
                    <p className="name" data-aos="fade-up" data-aos-delay="200">タイトルテキストタイトルテキストタイトルテキストタイトルテキスト</p>
                    <p className="date" data-aos="fade-up" data-aos-delay="200">2023.00.00</p>
                    <div className="list_tag" data-aos="fade-up" data-aos-delay="200">
                        <Link href="#" className="tag">タグ</Link>
                        <Link href="#" className="tag">タグ</Link>
                        <Link href="#" className="tag">タグタグタグ</Link>
                    </div>
                    <div className="img" data-aos="fade-up" data-aos-delay="200">
                        <img src="/assets/images/news/img_news_detail.jpg" alt="タイトルテキストタイトルテキストタイトルテキストタイトルテキスト"
                        />
                    </div>
                    <p className="txt" data-aos="fade-up" data-aos-delay="200">
                        この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。
                    </p>
                    <div className="sub" data-aos="fade-up" data-aos-delay="200">
                        <p className="sub_name">見出しが入ります。</p>
                        <p className="sub_txt">
                            この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。
                        </p>
                    </div>

                    <div className="social" data-aos="fade-up" data-aos-delay="200">
                        <p className="social_txt">この記事をシェアする</p>
                        <Link href="#" className="icon" target="_blank" rel="noopener noreferrer">
                            <img src="/assets/images/news/icon_facebook.svg" alt="image" />
                        </Link>
                        <Link href="#" className="icon" target="_blank" rel="noopener noreferrer">
                            <img src="/assets/images/news/icon_twitter.svg" alt="image" />
                        </Link>
                        <Link href="#" className="icon" target="_blank" rel="noopener noreferrer">
                            <img src="/assets/images/news/icon_line.svg" alt="image" />
                        </Link>
                        <Link href="#" className="icon" target="_blank" rel="noopener noreferrer">
                            <img src="/assets/images/news/icon_hatena.svg" alt="image" />
                        </Link>
                        <Link href="#" className="icon" target="_blank" rel="noopener noreferrer">
                            <img src="/assets/images/news/icon_pocket.svg" alt="image" />
                        </Link>
                        <Link href="#" className="icon" target="_blank" rel="noopener noreferrer">
                            <img src="/assets/images/news/icon_pinterest.svg" alt="image" />
                        </Link>
                    </div>

                    <Link href="#" className="news_btn" data-aos="fade-up" data-aos-delay="200">記事一覧へ戻る</Link>
                </div>
            </div>
        </main>
    )
}

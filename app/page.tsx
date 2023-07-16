import "@/public/assets/scss/top.scss"
import Link from "next/link"

import { Metadata } from "next"

export const metadata: Metadata = {
  title: '進化するごみ袋 | サステナブルなリサイクルの最新トピックを提供',
  description: "進化するごみ袋 | サステナブルなリサイクルの最新トピックを提供",
  openGraph: {
    title: '進化するごみ袋 | サステナブルなリサイクルの最新トピックを提供',
    description: '進化するごみ袋 | サステナブルなリサイクルの最新トピックを提供'
  }
}

export default function Home() {

  const dataTag: any = [...Array(5)]

  const dataPost: any = [...Array(15)]


  return (
    <main>
      <article className="main_article">
        <div className="container">
          <div className="main_article_wrap">
            <figure className="main_article_image" data-aos="fade-up" data-aos-delay="200">
              <img src="/assets/images/top/img_article_1.png" alt="タイトルテキストタイトルテキストタイトルテキストタイトルテキスト" />
            </figure>
            <div className="main_article_content" data-aos="fade-up" data-aos-delay="200">
              <p className="time">
                <span className="tag">カテゴリ</span>
                <span className="date">2023.00.00</span>
              </p>

              <h3 className="title">タイトルテキストタイトルテキストタイトルテキストタイトルテキスト</h3>
              <p className="txt">
                本文テキスト本文テキスト本文テキスト本文テキスト本文テキスト本文テキスト本文テキスト本文テキスト本文テキスト本文テキスト本文テキスト本文テキスト本文テキスト本文テキスト本文テキスト本文テキスト本文テキスト本文テキスト...
              </p>

              <div className="cates">
                <Link href="#" className="nav_link">タグ</Link>
                <Link href="#" className="nav_link">タグ</Link>
                <Link href="#" className="nav_link">タグタグタグ</Link>
              </div>
            </div>
          </div>
        </div>
      </article>
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
      <div className="news">
        <div className="container">
          <p className="news_ttl" data-aos="fade-up" data-aos-delay="200">最新の記事</p>
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
          <Link href="#" className="news_btn" data-aos="fade-up" data-aos-delay="200">記事一覧へ</Link>
        </div>
      </div>
    </main>
  )
}

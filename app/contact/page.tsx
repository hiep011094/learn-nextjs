
"use client"
import Link from "next/link"

import { GetStaticProps, Metadata } from "next"
import '@/public/assets/css/contact.css';
import { useState } from "react";

export const metadata: Metadata = {
  title: 'すべての記事 | 進化するごみ袋',
  description: "進化するごみ袋 | サステナブルなリサイクルの最新トピックを提供",
  openGraph: {
    title: '進化するごみ袋 | サステナブルなリサイクルの最新トピックを提供',
    description: '進化するごみ袋 | サステナブルなリサイクルの最新トピックを提供'
  }
}


export default function Archive() {

  const [input, setInput] = useState({
    company:'',
    name:'',
    name2:'',
    mail:'',
    tel:'',
    postalcode:'',
    address:'',
    shiryo:'',
    detail:''
  })

  const handleInput = (e:any) => {
    setInput({...input, [e.target.name]: e.target.value})
  }


  return (
    <div className='p_contact main_article'>
      <div className='container contact-wrap'>
        <h2 className="news_ttl">お問合せフォーム</h2>
        <p className='txt'>資料請求・ご相談お承ります。<br />個人情報の取り扱いについては<a href="http://osakawada.co.jp/privacy/" target="_blank">こちら</a>をご覧ください。</p>
        <form action="">
          <dl className="clearfix bt">
            <dt className="clearfix"><label className="require" htmlFor="company">会社名</label><span className="blue">必須</span></dt>
            <dd className="">
              <input className="input-area" type="text" name="company" id="company" value={input.company} onChange={handleInput} required />
            </dd>
          </dl>
          <dl className="clearfix">
            <dt className="clearfix"><label className="require" htmlFor="name">お名前</label><span className="blue">必須</span></dt>
            <dd className="">
              <input className="input-area" type="text" name="name" id="name" value={input.name} onChange={handleInput} required />
            </dd>
          </dl>
          <dl className="clearfix">
            <dt className="clearfix"><label className="require" htmlFor="name2">お名前（カナ）</label><span className="blue blue-1">任意</span></dt>
            <dd className="">
              <input className="input-area" type="text" name="name2" id="name2" value={input.name2} onChange={handleInput} required />
            </dd>
          </dl>
          <dl className="clearfix">
            <dt className="clearfix"><label className="require" htmlFor="mail">メールアドレス</label> <span className="blue">必須</span></dt>
            <dd className="">
              <input className="input-area" type="text" name="mail" id="mail" value={input.mail} onChange={handleInput} required />
            </dd>
          </dl>
          <dl className="clearfix">
            <dt className=""><label className="require" htmlFor="tel">電話番号</label><span className="blue blue-1">任意</span></dt>
            <dd className="">
              <input className="input-area" type="text" name="tel" id="tel" value={input.tel} onChange={handleInput} required />
            </dd>
          </dl>
          <dl className="clearfix">
            <dt className=""><label className="require" htmlFor="postalcode">郵便番号</label><span className="blue blue-1">任意</span></dt>
            <dd className="">
              <input className="input-area postalcode" type="text" name="postalcode" id="postalcode" value={input.postalcode} onChange={handleInput} required />
              <span className="bt_zip">住所反映</span>
              <input className="input-area" type="hidden" name="municipality" id="municipality" required />
            </dd>
          </dl>
          <dl className="clearfix">
            <dt className=""><label className="require" htmlFor="address">住所</label><span className="blue blue-1">任意</span></dt>
            <dd className="">
              <input className="input-area" type="text" name="address" id="address" value={input.address} onChange={handleInput} required /></dd>
          </dl>
          <dl className="clearfix">
            <dt className="clearfix"><label className="require" htmlFor="shiryo">お問い合わせ内容</label> <span className="blue">必須</span></dt>
            <dd className="">   
              <label htmlFor="shiryo-3">
                <input type="radio" name="shiryo" value="お問合せ" id="shiryo-3" className="require"/>
                <span>お問合せ</span>
              </label>
              <label htmlFor="shiryo-3">
                <input type="radio" name="shiryo" value="ご注文" id="shiryo-3" className="require"/>
                <span>ご注文</span>
              </label>
              <label htmlFor="shiryo-3">
                <input type="radio" name="shiryo" value="その他" id="shiryo-3" className="require"/>
                <span>その他</span>
              </label>             
            </dd>
          </dl>
          <dl className="clearfix">
            <dt className="clearfix"><label className="require" htmlFor="detail">本文</label> <span className="blue">必須</span></dt>
            <dd className="">
              <textarea className="input-area" name="detail" id="detail" value={input.detail} onChange={handleInput}></textarea>
            </dd>
          </dl>
          <div className="submit-wrap">
            <button className="btn">確認する</button>            
          </div>
        </form>
      </div>
    </div>
  )
}

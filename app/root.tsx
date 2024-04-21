import { Outlet } from "@remix-run/react";

export function Layout() {
	return (
		<html lang="ja">
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="description" content="yasuaki640のポートフォリオサイト" />
				<link
					as="font"
					type="font/woff2"
					href="/fonts/noto-sans-jp-v52-japanese_latin-regular.woff2"
				/>
				<link
					as="font"
					type="font/woff2"
					href="/fonts/noto-sans-jp-v52-japanese_latin-700.woff2"
				/>
				<link rel="stylesheet" href="/css/reset.css" />
				<link rel="stylesheet" href="/css/main.css" />
				<title>yasuaki640のポートフォリオサイト</title>
			</head>
			<main>
				<section id="top">
					<h1>
						yasuaki640の
						<wbr />
						ポートフォリオサイト
					</h1>
					<h2 id="page-view-counter" />
					<figure id="portrait">
						<img
							src="/images/portrait.webp"
							alt="yasuaki640's portrait"
							width={193}
							height={193}
							decoding="async"
						/>
						<figcaption>yasuaki640の近影</figcaption>
					</figure>
				</section>
				<section id="about">
					<h2>自己紹介</h2>
					<p>yasuaki640は日本に住む日本人プログラマー。</p>
					<p>父は日本人で母は日本人。</p>
					<p>
						Webアプリのバックエンドやフロントエンドの設計や、CI/CD整備などの開発環境改善に勤しんでいる。
					</p>
				</section>
				<section id="resume">
					<h2>職務経歴書</h2>
					<a
						href="https://github.com/yasuaki640/yasuaki640.github.io/blob/master/resume.md"
						target="_blank"
						rel="noopener noreferrer"
					>
						resume.md (GitHub)
					</a>
				</section>
				<nav id="links">
					<h2>リンク集</h2>
					<ul className="no-bulls">
						<li>
							<a
								href="https://lapras.com/public/yasuaki640"
								target="_blank"
								rel="noopener noreferrer"
							>
								<img
									src="/icons/lapras.ico"
									alt="lapras"
									width={16}
									height={16}
									decoding="async"
									loading="lazy"
								/>
								Lapras
							</a>
						</li>
						<li>
							<a
								href="https://qiita.com/yasuaki640"
								target="_blank"
								rel="noopener noreferrer"
							>
								<img
									src="/icons/qiita.png"
									alt="qiita"
									width={16}
									height={16}
									decoding="async"
									loading="lazy"
								/>
								Qiita
							</a>
						</li>
						<li>
							<a
								href="https://zenn.dev/y640"
								target="_blank"
								rel="noopener noreferrer"
							>
								<img
									src="/icons/zenn.svg"
									alt="zenn"
									width={16}
									height={16}
									decoding="async"
									loading="lazy"
								/>
								Zenn
							</a>
						</li>
						<li>
							<a
								href="https://github.com/yasuaki640"
								target="_blank"
								rel="noopener noreferrer"
							>
								<img
									src="/icons/github.svg"
									alt="github"
									width={16}
									height={16}
									decoding="async"
									loading="lazy"
								/>
								GitHub
							</a>
						</li>
						<li>
							<a
								href="https://twitter.com/yasuaki640"
								target="_blank"
								rel="noopener noreferrer"
							>
								<img
									src="/icons/twitter.svg"
									alt="twitter"
									width={16}
									height={16}
									decoding="async"
									loading="lazy"
								/>
								Twitter
							</a>
						</li>
						<li>
							<a
								href="https://www.youtube.com/channel/UC91Qyr8LcsyRx-7SyNiaGZw"
								target="_blank"
								rel="noopener noreferrer"
							>
								<img
									src="/icons/youtube.ico"
									alt="youtube"
									width={16}
									height={16}
									decoding="async"
									loading="lazy"
								/>
								Youtube
							</a>
						</li>
					</ul>
				</nav>
				<section id="motto">
					<h2>座右の銘</h2>
					<blockquote cite="https://twitter.com/yasuaki640/status/1641413471819661313">
						<p>口座の余裕は心の余裕</p>
					</blockquote>
				</section>
				<section id="hobbies">
					<h2>趣味</h2>
					<ul>
						<li>ドラム</li>
						<li>ピアノ</li>
						<li>ジャズ</li>
						<li>プログレメタル</li>
					</ul>
				</section>
			</main>
			<footer>
				<small> Copyright © 2024 yasuaki640. All Rights Reserved. </small>
			</footer>
		</html>
	);
}

export default function App() {
	return <Outlet />;
}

export function HydrateFallback() {
	return <p>Loading...</p>;
}

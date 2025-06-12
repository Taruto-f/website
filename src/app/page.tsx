"use client";

import {
	Card,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { type ReactNode, useEffect, useState } from "react";
import { Source_Code_Pro } from "next/font/google";
import Link from "next/link";
// biome-ignore lint/style/useImportType: <explanation>
import { toolmetas } from "@/text/meta";
import { ChevronDown } from "lucide-react";

const sourceCodePro = Source_Code_Pro({
	subsets: ["latin"],
});

function Store({
	title,
	description,
	children,
}: { title: string; description: string; children?: ReactNode }) {
	return (
		<div className="w-full px-8 *:my-4">
			<div className="flex items-center *:mr-4">
				<h2
					className={`text-3xl font-bold ${sourceCodePro.className} bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text`}
				>
					{title}
				</h2>
				<p className="text-sm text-gray-600 dark:text-gray-400">
					{description}
				</p>
			</div>
			<div className="flex flex-wrap *:mr-8 *:mb-8">{children}</div>
		</div>
	);
}

function Item({
	name,
	description,
	url,
}: { name: string; description: string | ReactNode; url: string }) {
	return (
		<>
			<Link href={url}>
				<Card className="min-w-52 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20 dark:hover:shadow-purple-500/20">
					<CardHeader>
						<CardTitle>
							<span
								className={`${sourceCodePro.className} bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text`}
							>
								{name}
							</span>
						</CardTitle>
					</CardHeader>
					<CardFooter>
						<CardDescription className="text-gray-600 dark:text-gray-400">
							{description}
						</CardDescription>
					</CardFooter>
				</Card>
			</Link>
		</>
	);
}

type ToolUrls = keyof typeof toolmetas;

export default function Home() {
	const [greeting, setGreeting] = useState("\u200b");
	const coding: ToolUrls[] = ["ajl-binoculars"];
	useEffect(() => {
		const hour = new Date().getHours();
		if (hour <= 4) setGreeting("こんばんは");
		else if (hour <= 8) setGreeting("おはようございます");
		else if (hour <= 16) setGreeting("こんにちは");
		else setGreeting("こんばんは");
	});

	return (
		<div className="flex flex-col items-center *:my-10 w-full mx-16">
			<h1 className="text-6xl font-black inline-block text-transparent bg-clip-text bg-gradient-to-br from-sky-400 from-0% via-fuchsia-500 via-100% animate-gradient">
				{greeting}
			</h1>

			<div className="flex flex-col items-center space-y-2">
				<p className="text-2xl font-semibold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
					Web siteへようこそ!
				</p>
				<p className="text-gray-600 dark:text-gray-400">
					色々な作品やSNSを公開しています
				</p>
			</div>

			<Store title="Accounts" description="生活拠点">
				<Item
					name="instagram (@haruto.f_0414)"
					description="たまにストーリーあげる...?"
					url="https://www.instagram.com/haruto.f_0414?igsh=MXV6eDlzeXFiMmllaQ%3D%3D&utm_source=qr"
				/>
				<Item
					name="GitHub (@Taruto-f)"
					description="まだ初心者"
					url="https://github.com/Taruto-f"
				/>
				<Item
					name="AtCoder (@Taruto-f)"
					description="始めたばかり"
					url="https://atcoder.jp/users/Taruto_F"
				/>
				<Item
					name="Discord (@Taruto)"
					description="フレリクはご自由にどうぞ(たぶん通す)"
					url="https://discord.com/users/1095597729020915813"
				/>
				<Item
					name="Qiita (@e6nlaq)"
					description="書くことがない..."
					url="https://qiita.com/e6nlaq"
				/>
				<Item
					name="Scratch (@-5min-)"
					description="フォローしてね"
					url="https://scratch.mit.edu/users/-5min-"
				/>
			</Store>
			<ChevronDown />

			<Separator />

			{/* <Store title="Coding" description="プログラミング系">
				{coding.map((k) => (
					<Item
						name={toolmetas[k].title}
						description={toolmetas[k].description}
						url={`/${k}`}
						key={k}
					/>
				))}
			</Store> */}

			<Store title="Classic" description="友達の作品">
				<Item
					name="rinu.jp Checker"
					description="rinu.jpに特定ツールが仕込まれているかチェックするサイト"
					url="https://e6nlaq.github.io/rinucf-checker"
				/>
				<Item
					name="School Hit"
					description="学校で日にちから指名される確率を計算するサイト"
					url="https://e6nlaq.github.io/school-hits"
				/>
				<Item
					name="Study Typing"
					description="学習単語タイピングサイト"
					url="https://study-typing.vercel.app"
				/>
				<Item
					name="Aqua"
					description="Fast, short, and easy."
					url="https://e6nlaq.github.io/aqua"
				/>
				<Item
					name="e6nlaq.github.io"
					description="旧サイト"
					url="https://e6nlaq.github.io"
				/>
			</Store>
		</div>
	);
}

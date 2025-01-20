"use client";


import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function AjlBinoculars() {
	const [a,setA]=useState(0)
	const [b,setB]=useState(0)
	return <>
	<Input value={a} onChange={e => setA(Number(e.target.value))}></Input>
	<Input value={b} onChange={e => setB(Number(e.target.value))}></Input>
	<p>{a+b}</p>
	</>;
}

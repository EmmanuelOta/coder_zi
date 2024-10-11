import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Emmanuel - Front End Developer";
export const size = {
	width: 1200,
	height: 630,
};

export const contentType = "image/png";

export default async function Image() {
	return new ImageResponse(
		(
			<div
				style={{
					fontSize: 32,
					background: "white",
					width: "100%",
					height: "100%",
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center",
					padding: "20px",
				}}
			>
				<div
					style={{
						display: "flex",
						flexDirection: "row",
						alignItems: "center",
						justifyContent: "center",
						background: "white",
						border: "2px solid #22c55e",
						padding: "12px 16px",
						color: "#22c55e",
						borderRadius: "16px",
						marginBottom: "24px",
					}}
				>
					<span
						style={{
							position: "relative",
							display: "flex",
							height: "12px",
							width: "12px",
							marginRight: "8px",
						}}
					>
						<span
							style={{
								position: "absolute",
								display: "flex",
								height: "100%",
								width: "100%",
								borderRadius: "9999px",
								background: "#38bdf8",
								opacity: 0.75,
							}}
						/>
						<span
							style={{
								position: "relative",
								display: "inline-flex",
								borderRadius: "9999px",
								height: "12px",
								width: "12px",
								background: "#22c55e",
							}}
						/>
					</span>
					Open To Work
				</div>
				<img
					src="https://coder-zi.vercel.app/images/coder_zi.png"
					width={180}
					height={180}
					style={{
						borderRadius: "9999px",
						marginBottom: "40px",
					}}
					alt="coder_zi"
				/>
				<div
					style={{
						width: "60%",
						marginBottom: "16px",
					}}
				>
					<p
						style={{
							fontSize: 48,
							fontWeight: 600,
							color: "#27272a",
							textAlign: "center",
						}}
					>
						Hello!! I&apos;m Emmanuel, a Front End Developer with a
						constantly evolving philosophical mind ⚜.
					</p>
				</div>
			</div>
		),
		{
			...size,
		}
	);
}

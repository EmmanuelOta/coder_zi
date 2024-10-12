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
					display: "flex",
					fontSize: 32,
					background: "#F1F5F9",
					width: "100%",
					height: "100%",
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
						borderRadius: "24px",
						marginBottom: "10px",
					}}
				>
					<div
						style={{
							display: "flex",
							position: "relative",
							height: "18px",
							width: "18px",
							marginRight: "8px",
						}}
					>
						<div
							style={{
								display: "flex",
								position: "absolute",
								height: "100%",
								width: "100%",
								borderRadius: "9999px",
								background: "#38bdf8",
								opacity: 0.75,
							}}
						/>
						<div
							style={{
								display: "flex",
								position: "relative",
								borderRadius: "9999px",
								height: "18px",
								width: "18px",
								background: "#22c55e",
							}}
						/>
					</div>
					<div
						style={{
							display: "flex",
							marginTop: "4px",
							padding: "2px",
						}}
					>
						Open To Work
					</div>
				</div>
				<div style={{ display: "flex" }}>
					<img
						src="https://coder-zi.vercel.app/images/coder_zi.png"
						width={180}
						height={180}
						style={{
							borderRadius: "9999px",
							marginTop: "40px",
							marginBottom: "40px",
						}}
						alt="coder_zi"
					/>
				</div>

				<div
					style={{
						display: "flex",
						width: "90%",
						marginBottom: "16px",
					}}
				>
					<p
						style={{
							fontSize: 37,
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

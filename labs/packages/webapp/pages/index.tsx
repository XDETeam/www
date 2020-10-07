import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Copyright from "../src/Copyright";
import ProTip from "../src/ProTip";
import Link from "../src/Link";

export default function Home() {
	return (
		<Container maxWidth="sm">
			<Box my={4}>
				<Typography variant="h4" component="h1" gutterBottom>
					Next.js example
				</Typography>
				<Link href="/about" color="secondary">
					Go to the about page
				</Link>
				<ProTip />
				<Copyright />
			</Box>
		</Container>
	);
}

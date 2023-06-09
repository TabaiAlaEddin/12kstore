import { useContext } from "react";
import { NextPage } from "next";

import { Grid, Typography } from "@mui/material";

import { CartContext } from "../../context";
import { currency } from "../../utils";

interface Props {
	orderValues?: {
		numberOfItems: number;
		subTotal: number;
		total: number;
		tax: number;
	};
}

export const OrderSummary: NextPage<Props> = ({ orderValues }) => {
	// Context
	const { numberOfItems, subTotal, total, tax } = useContext(CartContext);

	const summaryValues = orderValues ?? { numberOfItems, subTotal, total, tax };

	return (
		<Grid container>
			<Grid item xs={6}>
				<Typography>No. Products</Typography>
			</Grid>
			<Grid item xs={6} display='flex' justifyContent='end'>
				<Typography>
					{summaryValues.numberOfItems} {summaryValues.numberOfItems > 1 ? "products" : "product"}
				</Typography>
			</Grid>

			<Grid item xs={6}>
				<Typography>Sub Total</Typography>
			</Grid>
			<Grid item xs={6} display='flex' justifyContent='end'>
				<Typography>{currency.format(summaryValues.subTotal)}</Typography>
			</Grid>

			<Grid item xs={6}>
				<Typography>Tax ({Number(process.env.NEXT_PUBLIC_TAX_RATE)}%)</Typography>
			</Grid>
			<Grid item xs={6} display='flex' justifyContent='end'>
				<Typography>{currency.format(summaryValues.tax)}</Typography>
			</Grid>

			<Grid item xs={6} sx={{ mt: 2 }}>
				<Typography variant='subtitle1'>Total:</Typography>
			</Grid>
			<Grid item xs={6} sx={{ mt: 2 }} display='flex' justifyContent='end'>
				<Typography variant='subtitle1'>{currency.format(summaryValues.total)}</Typography>
			</Grid>
		</Grid>
	);
};

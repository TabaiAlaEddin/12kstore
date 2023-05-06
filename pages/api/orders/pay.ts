import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { db } from "database";
import { Order } from "models";

type Data = {
	message: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
	switch (req.method) {
		case "POST":
			return payOrder(req, res);

		default:
			return res.status(400).json({ message: "Bad request" });
	}
}

const payOrder = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
	return res.status(200).json({ message: "Order paid" });
};

import { calculateTax } from "../../../lib/tax";

export async function POST(req) {
    try {
        const body = await req.json();

        const salary = Number(body.salary);

        if (!salary || salary <= 0) {
            return Response.json({ error: "Invalid salary", }, { status: 400, });
        }

        const result = calculateTax(salary);

        return Response.json(result);

    } catch (error) {

        return Response.json({ error: error.message, }, { status: 500, });
    }
}
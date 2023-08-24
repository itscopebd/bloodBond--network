import { connectToDatabase } from "@/utils/database";
import { NextResponse } from "next/server";
export const GET = async (request,{params}) => {
    const { email } = params;
    const { db } = await connectToDatabase();
    try {
        const query = { email: email };
        const result = await db.collection('users').find(query).toArray();
        return NextResponse.json(result);

    } catch (err) {
        return NextResponse.json({ message: err.toString() });
    }
}
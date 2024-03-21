import API from "@/app/util/constants";
import { NextRequest } from "next/server"

function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms))
}

export async function POST(request: NextRequest) {
    const data = await request.json()
    const response = await fetch(`${API.BASE_URL}/Signup`, {
        method: "POST",
        headers: {
            "contennt-type": "application/json"
        },
        body: data
    })
    if (!response.ok)
        throw response    
    return Response.json(await response.json(), { status: 200 })
}
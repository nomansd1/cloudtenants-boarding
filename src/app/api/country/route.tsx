import { NextRequest } from "next/server";
import path from 'path';
import fs from 'fs/promises';

export async function GET(request: NextRequest) {
    try {
        const staticDataDirPath = path.join(process.cwd(), "src", "app", "data");
        const listOfCountries = await fs.readFile(path.join(staticDataDirPath, "country.json"), 'utf8');

        return Response.json(listOfCountries, { status: 200 });
    }
    catch (exception) {
        return Response.json(exception, { status: 500 });
    }
}
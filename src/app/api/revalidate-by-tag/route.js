import { revalidatePath, revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

export function GET(request) {
  const tag = request.nextUrl.searchParams.get("tag");

  revalidateTag(tag);
  //   revalidatePath('/headphone');

  return NextResponse.json({ status: "success", tag });
}

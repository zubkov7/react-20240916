"use client";

import { useRouter } from "next/navigation";
import { Tab } from "../tab/tab";

export const HeadphoneTab = ({ id, name }) => {
  const router = useRouter();

  return <Tab title={name} onClick={() => router.push(`/headphone/${id}`)} />;
};

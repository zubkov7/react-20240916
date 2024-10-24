import { HeadphonesPage } from "../../components/headphones-page/headphones-page";
import { getHeadphones } from "../services/get-headhones";

export default async function Layout({ children }) {
  const headphones = await getHeadphones();

  return (
    <HeadphonesPage headphones={headphones} title='headphones app'>
      {children}
    </HeadphonesPage>
  );
}

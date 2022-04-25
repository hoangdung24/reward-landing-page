import { HomePage } from "../containers";
import {
  HOME_PAGE,
  PAGES,
  PARTNER,
  BLOG_DETAIL,
  CONTACT,
  STORE_CATEGORIES,
} from "../helpers/api";
import axios from "axios";

const Home = ({ ...props }) => {
  return <HomePage {...props} />;
};

export default Home;

export async function getServerSideProps({ params }) {
  try {
    const urls = [
      `${PAGES}?type=${HOME_PAGE}&fields=*`,
      `${PARTNER}?fields=*&is_on_homepage=true&limit=9`,
      `${PAGES}?type=${BLOG_DETAIL}&fields=*&limit=3&is_on_homepage=true`,
      `${PAGES}?type=${CONTACT}&fields=*`,
      `${STORE_CATEGORIES}`,
    ];

    const resList = await Promise.all(
      urls.map(async (url) => {
        return axios.get(url).then(function ({ data }) {
          return data;
        });
      })
    );

    return {
      props: {
        homeData: resList[0],
        partnerData: resList[1],
        blogDetail: resList[2],
        dataContact: resList[3],
        storeCategories: resList[4],
      },
    };
  } catch (e) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
}

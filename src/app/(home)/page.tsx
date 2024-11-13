import { Card, Post, SectionHead, LoadMore } from "@/components";
import axios from "axios";

export default async function Home(props: {
  searchParams?: Promise<{
    query?: string;
    page?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;

  const res = await axios.get(
    `https://dev.to/api/articles?page=${currentPage}&per_page=9`
  );

  const posts = res.data;

  return (
    <div className="container mx-auto flex flex-col gap-4 mt-16 md:mt-24">
      <SectionHead
        title="Latest Posts"
        description="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and"
        pillTitle="All"
      />
      <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {posts.map(
          ({ id, cover_image, tags, description, title, user, url }: any) => (
            <Card key={id} cover={cover_image}>
              <Post
                category={tags}
                title={title}
                description={description}
                user={{
                  name: user.name,
                  avatar: user.profile_image,
                  date: "18 Jan 2022",
                }}
                href={url}
              />
            </Card>
          )
        )}
      </div>
      <LoadMore basePath="/" page={currentPage} />
    </div>
  );
}

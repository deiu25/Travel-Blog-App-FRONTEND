import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { getAllPost } from "../api-helpers/helpers";
import DiaryItem from "./DiaryItem";

const Diaries = () => {
  const [posts, setPosts] = useState();
  useEffect(() => {
    getAllPost()
      .then((data) => setPosts(data?.posts))
      .catch((err) => console.log(err));
  }, []);
  return (
    <Box
      display="flex"
      flexDirection={"row"}
      flexWrap={"wrap"}
      justifyContent="center"
      alignContent={"space-between"}
      padding={3}
    >
      {" "}
      {posts &&
        posts.map((item, index) => (
          <DiaryItem
            date={new Date(`${item.date}`).toLocaleDateString()}
            description={item.description}
            image={item.image}
            id={item._id}
            location={item.location}
            title={item.title}
            key={index}
            user={item.user}
          />
        ))}
    </Box>
  );
};

export default Diaries;

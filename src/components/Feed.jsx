import React, { useRef } from "react";
import { Box, CircularProgress } from "@mui/material";
import Post from "./Post";

function Feed(props) {
  const listInnerRef = useRef();

  const onScroll = () => {
    if (listInnerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = listInnerRef.current;
      if (scrollTop + clientHeight === scrollHeight) {
        // Placeholder for loading more content if needed
      }
    }
  };

  return (
    <Box
      sx={{
        width: '500px',
      }}
    >
      <Box
        onScroll={onScroll}
        ref={listInnerRef}
        sx={{
          height: 'calc(100vh - 63px)',
          overflowY: 'auto',
          padding: '5px',
          '&::-webkit-scrollbar': {
            width: '0px',
          },
          '&::-webkit-scrollbar-track': {
            backgroundColor: '#f1f1f1',
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: 'rgb(192, 192, 192)',
          },
        }}
      >
        {props.posts.map((p) => (
          <Post
            key={p._id}
            post={p}
            rerenderFeed={props.rerenderFeed}
            onChange={props.onChange}
          />
        ))}
        {props.loadingNewPosts && (
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
            <CircularProgress color="primary" />
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default Feed;

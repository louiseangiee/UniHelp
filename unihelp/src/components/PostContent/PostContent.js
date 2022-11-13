import { useAuthContext } from "../../hooks/useAuthContext"
import React from 'react'
import PostAComment from "../PostComments/PostAComment";
import Card from "react-bootstrap/Card"
import Share from "../ForumCardList/Share";
import { projectFirestore } from "../../firebase/config";
// import Liked from "pictures/Liked.png";
// import NotLiked from "pictures/NotLiked.png";


export default function PostContent({ post }) {
  const { user } = useAuthContext()
  const email = user.email;
  const upVote = (id) => {

    const unsub = projectFirestore
      .collection("forumPost")
      .doc(id)
      .get()
      .then((doc) => {
        var data = doc.data();
        var upVoters = data.upVoters;
        if (!upVoters.includes(email)) {
          upVoters.push(email);
          projectFirestore
            .collection("forumPost")
            .doc(id)
            .update({
              votes: data.votes + 1,
              upVoters: upVoters,
            });
        } else {
          upVoters.splice(email);
          projectFirestore
            .collection("forumPost")
            .doc(id)
            .update({
              votes: data.votes - 1,
              upVoters: upVoters,
            });
        }
      });
  };

  const voteButtons = {
    backgroundColor: "transparent",
    color: "transparent",
    paddingLeft: "0px",
    paddingRight: "0px",
    marginRight: "0px",
    marginBottom: "0px",
  };

  return (
    <>
    <div style={{margin: '15px'}}>
      
      <Card className=" w-100" style = {{borderRadius: '10px'}}>
      <div className="post-content p-4">
        
        <h2 style = {{fontWeight: 'bold'}}>{post.title}</h2>
          
        
        
        <h3> {post.school} </h3>
        <h5>By: {post.poster}</h5>
        
        <br></br>
        <p>{post.content}</p> 
      </div>

      <Card.Footer
                style={{
                  borderBottomRightRadius: "10px",
                  borderBottomLeftRadius: "10px",
                  paddingTop: "0px",
                  paddingBottom: "0px",
                }}
              >
                <a
                  className="stretched-link"
                  href={`/forum/${post.id}`}
                  style={{ position: "relative" }}
                />
                <div className="container d-flex justify-content-between">
                  <div className="row d-flex align-items-center justify-content-start">
                    <div
                      className="col-1"
                      style={{
                        minWidth: "50px",
                        maxWidth: "50px",
                        paddingLeft: "0px",
                      }}
                    >
                      <button
                        id="upvote"
                        className="btn shadow-none"
                        style={voteButtons}
                      >
                        <Card.Img
                          variant="top"
                          className="img-fluid"
                          src={
                            post.upVoters.includes(email)
                              ? "/svgFiles/Liked.png"
                              : "/svgFiles/notLiked.png"
                          }
                          onClick={() => {
                            upVote(post.id);
                          }}
                          style={{ width: "50%", minWidth: "25px" }}
                        />
                      </button>
                    </div>
                    <div className="col-1 d-flex align-items-center px-0">
                      <p style={{ fontSize: "18px", marginBottom: "0" }}>
                        {" "}
                        {post.votes}
                      </p>
                    </div>
                    <div className="col-1 d-flex align-items-center px-0">
                      {/* <div className="col-1 d-flex align-items-center px-5">
                        <Share title={post.title} id={post.id}/>
                      </div> */}
                    </div>
                  </div>
                  <div className="row d-flex flex-row align-items-center justify-content-end px-3">
                    <div className="col d-flex px-0 justify-content-end">
                      <p style={{ fontSize: "18px", marginBottom: "0" }}>
                        <Share title={post.title} id={post.id}/>
                      </p>
                    </div>
                    <div className="col-1 d-flex align-items-center px-3">
                      <img
                        src={"/pictures/comment.png"}
                        style={{
                          width: "50%",
                          minWidth: "20px",
                          maxWidth: "20px",
                        }}
                      />
                    </div>
                    <div className="col-1 d-flex align-items-center px-3">
                      <p style={{ fontSize: "18px", marginBottom: "0" }}>
                        {post.comments.length}
                      </p>
                    </div>
                  </div>
                </div>
              </Card.Footer>
      </Card>
      <PostAComment post={post}/>
    </div>
    </>
  )
}
import React from "react";
import { Link } from "react-router-dom";
import "./forumElements.css";
import { ForumCard } from "./ForumCardElements";
import Share from "./Share";

//bootstrap components
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/Form";
import CardHeader from "react-bootstrap/esm/CardHeader";
import { projectFirestore } from "../../firebase/config";
import { useAuthContext } from "../../hooks/useAuthContext";
import { maxTime } from "date-fns/constants/index";

export default function ForumCardList({ posts }) {
  const { user } = useAuthContext();
  const email = user.email;
  if (posts.length === 0) {
    return <div className="error">No posts to load...</div>;
  }

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

  /*const downVote = (id) => {
    const unsub = projectFirestore.collection('forumPost').doc(id).get().then(doc => {
      var data = doc.data()
      var downVoters = data.upVoters
      if (data.votes > 0) {
        if (!downVoters.includes(email)) {
          downVoters.push(email)
          projectFirestore.collection('forumPost').doc(id).update({
            votes: data.votes - 1,
            upVoters: upVoters
          })
        } else {
          downVoters.splice(email)
          projectFirestore.collection('forumPost').doc(id).update({
            votes: data.votes + 1,
            upVoters: upVoters
          })
        }
      }
    })
  }
              <button id="downvote" className="btn" style={voteButtons}>
                <Card.Img variant='bottom' className="img-fluid" src="logos/downvote.png" style={{ height: '100%' }} onClick={() => { downVote(post.id); }} />
              </button>
  */

  const voteButtons = {
    backgroundColor: "transparent",
    color: "transparent",
    paddingLeft: "0px",
    paddingRight: "0px",
    marginRight: "0px",
    marginBottom: "0px",
  };


  posts.sort((a, b) => b.votes - a.votes);

  return (
    <div className="forum-list">
      {posts.map((post) => (
        <div id={post.id} className="container" style={{ marginLeft: "0px" }}>
          <div className="row d-flex">
            <ForumCard id={post.id}>
              <div style={{ transform: "rotate(0)" }}>
                <a className="stretched-link" href={`/forum/${post.id}`} />
                <Card.Header
                  style={{
                    borderTopRightRadius: "20px",
                    borderTopLeftRadius: "20px",
                  }}
                >
                  {post.school}
                  <br />
                  <span className="username">By: {post.poster}</span>
                </Card.Header>

                <Card.Body>
                  <Card.Title style={{ fontWeight: "bold" }}>
                    {" "}
                    {post.title}{" "}
                  </Card.Title>
                  <p>{post.content}</p>
                </Card.Body>
              </div>

              <Card.Footer
                style={{
                  borderBottomRightRadius: "20px",
                  borderBottomLeftRadius: "20px",
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
                              ? "svgFiles/Liked.png"
                              : "svgFiles/notLiked.png"
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
            </ForumCard>
          </div>
        </div>
      ))}
    </div>
  );
}

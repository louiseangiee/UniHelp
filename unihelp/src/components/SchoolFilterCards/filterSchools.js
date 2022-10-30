import { ForumList } from "../../database/ForumBoxtestFile";


export function getForums() {
  const forumList = ForumList;
  return forumList;
}

export function filterSchool(Selectedschool) {
  let filteredForums = getForums().filter(type => type.school === Selectedschool);
  return filteredForums;
}


//CONVERT TO SINGULAR COMMENTS
export function readComments(){
  let comments = getForums().map(type => type.comments)
  let string = ''
  for (let i=0; i < comments.length; i++){
    string = comments[i]+'<br>'
  }
  return string
}
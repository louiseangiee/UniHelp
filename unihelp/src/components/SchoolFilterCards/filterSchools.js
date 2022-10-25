import { ForumList } from "../../database/ForumBoxtestFile";
import Card from 'react-bootstrap/Card';

export function getForums() {
  const forumList = ForumList;
  return forumList;
}

export function filterSchool(Selectedschool) {
  let filteredForums = getForums().filter(type => type.school === Selectedschool);
  return filteredForums;
}

export function readComments(comments){
  let string = ''
  for (let i=0; i < comments.length; i++){
    string = comments[i]+'<br>'
  }
  return string
}
import React from 'react';


const faker=require('faker');
const avatar=faker.image.avatar();
const name=faker.internet.userName();
const date=Math.floor(Math.random() * 100) + 2;
const text=faker.hacker.phrase();


const Comments =()=>{

    return(
 <div className="ui comments">
 <h3 className="ui dividing header">Comments</h3>
 <div class="comment">
    <a className="avatar" href={avatar} >
      <img  alt ="user" src={avatar}/>
    </a>
    <div className="content">
      <a className="author" href={name}>{name}</a>
      <div className="metadata">
        <div className="date">{date} days ago</div>
      </div>
      <div className="text">
        {text}
      </div>
    </div>
  </div>
 
 </div>

    )
}

export default Comments;

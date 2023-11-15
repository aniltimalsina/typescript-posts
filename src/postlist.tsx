import { useState, useEffect } from "react";
import iUserData from "./usertype";
import "./postlist.css";

function PostList() {
  const [userDetail, setUserDetail] = useState<iUserData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json(); // the data will now be the array of users

      setUserDetail([...data]);

      console.log(data); // here you will get the data
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Post Data</h1>
      {userDetail.map((user, index) => (
        <div className="card" key={index}>
          <div>
            <strong>userId</strong>: {user.userId}
          </div>
          <div>
            <strong>id</strong> : {user.id}
          </div>
          <div>
            <strong>title</strong> : {user.title}
          </div>
          <div>
            <strong>body</strong> : {user.body}
          </div>
        </div>
      ))}
    </div>
  );
}

export default PostList;

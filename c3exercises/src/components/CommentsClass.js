import React from "react";

export class CommentsClass extends React.Component{
  render() {
    function clickLike(){
      console.log("+1");
    }  
    return (
      <div>
      <table>
        <thead>
          <tr>
            <th>USERID</th>
            <th>AUTHOR</th>
            <th>TEXT</th>
            <th>LIKES</th>
          </tr>
        </thead>
        <tbody>
          {this.props.comments.map((comment, i) => (
            <tr key={i}>
              <td>{comment.userId}</td>
              <td>{comment.author}</td>
              <td>{comment.text}</td>
              <td>
                <button onClick={clickLike}>LIKE</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    )
  }
}

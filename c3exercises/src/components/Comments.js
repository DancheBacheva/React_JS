//Da napravime komponenta vo koja kje prikazuvame komentari, neka sekoj komentar ima id, author i text. Neka listata so komentari ja imate vo app.js i ja pratite preku props vo kreiranata komponenta i tamu da gi prikazeme informaciite
//neka bidat vo nekoja tabela
//pokraj ova imate nekoe kopce LIKE sto vo konzola kje pecati +1

export function Comments(props) {
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
          {props.comments.map((comment) => (
            <tr>
              <td>{comment.userIid}</td>
              <td>{comment.author}</td>
              <td>{comment.text}</td>
              <td>
                <button>LIKE</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

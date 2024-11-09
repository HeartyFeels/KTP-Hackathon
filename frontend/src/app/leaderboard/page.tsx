const leaderboardData = [
  {
    name: "John Doe",
    designation: "Designation",
    status: "$1,636",
    location: "Street, State, Country",
    email: "name@company.com",
    points: 2555,
  },
  {
    name: "Jane Doe",
    designation: "Designation",
    status: "$1,554",
    location: "Street, State, Country",
    email: "name@company.com",
    points: 2684,
  },
  {
    name: "Jane Doe",
    designation: "Designation",
    status: "$1,256",
    location: "Street, State, Country",
    email: "name@company.com",
    points: 1594,
  },
  {
    name: "John Doe",
    designation: "Designation",
    status: "$1,129",
    location: "Street, State, Country",
    email: "name@company.com",
    points: 2943,
  },
];

export default function LeaderboardPage() {
  return (
    <div className="leaderboard">
      <h1 className="title">Team Leaderboard</h1>
      <div className="top-performers">
        {leaderboardData.slice(0, 3).map((user, index) => (
          <div key={index} className="top-card">
            <div className="avatar" />
            <h2>{user.name.toUpperCase()}</h2>
            <p>{user.designation}</p>
            <p className="status">{user.status}</p>
          </div>
        ))}
      </div>
      <table className="leaderboard-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Status</th>
            <th>Location</th>
            <th>Email</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {leaderboardData.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.status}</td>
              <td>{user.location}</td>
              <td>{user.email}</td>
              <td>{user.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

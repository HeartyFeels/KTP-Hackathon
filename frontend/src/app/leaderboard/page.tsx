import Navbar from "../components/Navbar";

const roles = [
  "PledgeTok",
  "Weather Pledge",
  "WallStreet Pledge",
  "Tech Updates Pledge",
  "Joke of the Day Pledge",
  "Tennis Ball Pledge",
  "Sports Update Pledge",
  "Cookie Pledge",
  "DoorDash Pledge",
  "Compliment Pledge",
  "Motivational Pledge",
  "Chauffeur Pledge",
  "Puppy Pledge",
  "Weird Phone Case Pledge",
  "Fruit Pledge",
  "Party Sombrero Pledge",
  "Mommy Pledge",
  "Fortnite Pledge",
  "Clock Pledge",
  "Riddle Pledge",
  "Beard Pledge",
  "Straw Pledge",
  "Detective Pledge",
  "Patriot Pledge",
  "Lemon Pledge",
  "Meme Pledge",
  "Artist Pledge",
  "Genius Pledge"
];

// Sample names to populate the leaderboard
const names = [
  "John Doe", "Jane Doe", "Sara Smith", "Bob Johnson", "Eve Miller",
  "Charlie Brown", "Daisy Ridley", "Elon Musk", "Fiona Apple", "George Lucas",
  "Harry Potter", "Ivy Clark", "Jack Daniels", "Kelly Clarkson", "Liam Neeson",
  "Mia Wallace", "Nate Fisher", "Olivia Wilde", "Paul Rudd", "Quincy Adams",
  "Rachel Green", "Sam Smith", "Tina Fey"
];

// Generate leaderboard data with 23 entries
const leaderboardData = names.map((name, index) => ({
  name,
  role: roles[index],  // Assign a unique role from the roles array
  major: ["Computer Science", "Mathematics", "MIS", "Statistics"][index % 4],
  points: Math.floor(Math.random() * 70) + 30 // Random points between 30 and 100
}));

// Sort leaderboard data by points in descending order
const sortedData = leaderboardData.sort((a, b) => b.points - a.points);

// Find Sara Smith's rank
const saraRank = sortedData.findIndex((user) => user.name === "Sara Smith") + 1;

export default function LeaderboardPage() {
  return (
    <div className="bg-gradient-to-r from-customLighterBlue to-customBlue text-white min-h-screen">
      <Navbar />
      <div className="flex flex-col items-center p-8">
        <h1 className="text-4xl font-bold mb-8">Team Leaderboard</h1>

        {/* Main Container with Left, Center, and Right Panels */}
        <div className="flex justify-center w-full gap-8">
          
          {/* Left Empty Panel */}
          <div className="w-1/4"></div>
          
          {/* Center Panel - Leaderboard */}
          <div className="flex flex-col items-center w-1/2">
            {/* Top Performers Section */}
            <div className="flex items-end gap-4 mb-8">
              <div className="bg-white/10 p-6 rounded-lg shadow-md text-center w-40 h-56 flex flex-col justify-center">
                <h2 className="text-xl font-semibold leading-tight">{sortedData[1].name.toUpperCase()}</h2>
                <p className="text-sm opacity-75 leading-tight">{sortedData[1].role}</p>
                <p className="text-lg font-bold mt-2">{sortedData[1].major}</p>
                <p className="text-lg font-bold mt-2">{sortedData[1].points} Points</p>
              </div>

              <div className="bg-white/20 p-8 rounded-lg shadow-lg text-center w-52 h-64 flex flex-col justify-center">
                <h2 className="text-2xl font-semibold leading-tight">{sortedData[0].name.toUpperCase()}</h2>
                <p className="text-sm opacity-75 leading-tight">{sortedData[0].role}</p>
                <p className="text-xl font-bold mt-2">{sortedData[0].major}</p>
                <p className="text-xl font-bold mt-2">{sortedData[0].points} Points</p>
              </div>

              <div className="bg-white/10 p-6 rounded-lg shadow-md text-center w-40 h-56 flex flex-col justify-center">
                <h2 className="text-xl font-semibold leading-tight">{sortedData[2].name.toUpperCase()}</h2>
                <p className="text-sm opacity-75 leading-tight">{sortedData[2].role}</p>
                <p className="text-lg font-bold mt-2">{sortedData[2].major}</p>
                <p className="text-lg font-bold mt-2">{sortedData[2].points} Points</p>
              </div>
            </div>

            {/* Leaderboard Table */}
            <table className="table-auto w-full max-w-4xl text-left text-lg bg-white/10 rounded-lg shadow-md overflow-hidden">
              <thead>
                <tr className="bg-white/20 text-white text-xl">
                  <th className="px-6 py-4">Rank</th>
                  <th className="px-6 py-4">Name</th>
                  <th className="px-6 py-4">Role</th>
                  <th className="px-6 py-4">Major</th>
                  <th className="px-6 py-4">Points</th>
                </tr>
              </thead>
              <tbody>
                {sortedData.slice(3).map((user, index) => (
                  <tr key={index} className="even:bg-white/5 odd:bg-white/10 hover:bg-pink-600 transition-colors duration-200 text-lg">
                    <td className="px-6 py-4">{index + 4}</td>
                    <td className="px-6 py-4">{user.name}</td>
                    <td className="px-6 py-4">{user.role}</td>
                    <td className="px-6 py-4">{user.major}</td>
                    <td className="px-6 py-4">{user.points}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Right Panel - Sara Smith's Rank */}
          <div className="w-1/4">
            <div className="bg-white/10 p-6 rounded-lg shadow-md text-center">
              <h2 className="text-xl font-semibold">Sara Smith's Current Rank</h2>
              <p className="text-2xl font-bold mt-2">Rank #{saraRank}</p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

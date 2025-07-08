import ErrorBoundary from "../components/ErrorBoundary";
import UsersWidget from "../components/UserWidget";
import WeatherWidget from "../components/WeatherWidget";
import PostsWidget from "../components/PostWidget";

function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-800 to-indigo-600 p-8">
      <h1 className="text-4xl text-white font-extrabold mb-10">📊 Smart Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ErrorBoundary>
          <UsersWidget />
        </ErrorBoundary>
        <ErrorBoundary>
          <WeatherWidget />
        </ErrorBoundary>
        <ErrorBoundary>
          <PostsWidget />
        </ErrorBoundary>
      </div>
    </div>
  );
}

export default Dashboard;



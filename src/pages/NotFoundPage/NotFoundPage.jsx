import { Link } from 'react-router-dom';
export default function NotFoundPage() {
  return (
    <h2>
      Sorry, page not found! Go to <Link to="/">Home page</Link>
    </h2>
  );
}

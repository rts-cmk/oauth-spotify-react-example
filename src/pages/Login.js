import querystring from "querystring";

export default function Login() {
	var queryParameters = querystring.stringify({
		response_type: "code",
		client_id: "e734fb09ce11423e8ec459d526ceb050",
		scope: "user-read-private user-read-email",
		redirect_uri: "http://localhost:8888/callback",
		state: "vdjldfglfdlgrpoiaer9garlogihlgkzhdrlgishlro8tubzpdortuzorihglzdoighlzoirhtlzo8ghldhglzdghlzdoigh"
	});


	return (
		<>
			<h1>Login</h1>
			<a href={`https://accounts.spotify.com/authorize?${queryParameters}`}>Log in with Spotify</a>
		</>
	)
}
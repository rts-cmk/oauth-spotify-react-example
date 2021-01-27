import axios from "axios";
import { useContext, useEffect, useState } from "react";
import TokenContext from "../TokenContext";

export default function Featured() {
	var [token] = useContext(TokenContext);
	var [content, setContent] = useState({});

	useEffect(function() {
		axios.get("https://api.spotify.com/v1/me", {
			headers: {
				"Authorization": "Bearer " + token.access_token
			}
		})
		.then(response => setContent(response.data));
	}, [token, setContent]);

	return (
		<>
			<h1>Featured</h1>
			<p>Hej {content?.display_name}</p>
		</>
	)
}
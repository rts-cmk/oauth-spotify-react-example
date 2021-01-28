import axios from "axios";
import { useContext, useEffect } from "react";
import TokenContext from "../TokenContext";
import { navigate } from "@reach/router";

export default function Callback(props) {
	// eslint-disable-next-line
	var [token, setToken] = useContext(TokenContext);

	var code = new URLSearchParams(props.location.search).get("code");

	useEffect(function() {
		axios.post("/.netlify/functions/token", JSON.stringify({
			code
		}))
		.then(response => {
			setToken(response.data);
			navigate("/featured");
		});
	}, [setToken, code]);

	return null;
}

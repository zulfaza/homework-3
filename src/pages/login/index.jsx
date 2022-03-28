import { Component } from "react";
import formatParameter from "../../utils/formatParameter";

class Login extends Component {
  render() {
    const client_id = "1b916095a0c1419bb00bb1707d87ae5b";
    const scope = "playlist-modify-private";
    const redirect_uri = "http://localhost:3000";

    return (
      <>
        <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-md w-full space-y-8">
            <div>
              <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                Sign in to your account
              </h2>
            </div>
            <form className="mt-8 space-y-6" action="#" method="POST">
              <a
                className=" bg-green-500 text-white w-full text-center rounded-full block py-3"
                href={`https://accounts.spotify.com/authorize?${formatParameter(
                  {
                    response_type: "token",
                    client_id,
                    scope,
                    redirect_uri,
                  }
                )}`}
              >
                Sign using spotify
              </a>
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default Login;
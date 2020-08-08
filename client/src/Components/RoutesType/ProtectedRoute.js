// import React from "react";
// import { Route, Redirect } from "react-router-dom";

// export function ProtectedRoute(props) {
//   const { component: Component, ...rest } = props;
//   return (
//     <Route
//       {...rest}
//       render={(props) =>
//         FIX_ME.isAuthenticated() ? (
//           <Component {...props} {...rest} />
//         ) : (
//           <Redirect to={{ pathname: "/login" }} />
//         )
//       }
//     />
//   );
// }

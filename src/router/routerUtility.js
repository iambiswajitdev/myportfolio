import { withRouter } from "react-router";
import { Route } from "react-router-dom";
import Base from "../components/base";

export const FrontLayout = withRouter((props) => {
  let pathName = props.children.props.location.pathname;
  return (
    <Base header footer pathName={pathName}>
      {props.children}
    </Base>
  );
});

export const AppRouter = withRouter(
  ({ component: Component, layout: Layout, ...rest }) => (
    <Route
      {...rest}
      render={(props) => (
        <>
          <Layout>
            <Component {...props}></Component>
          </Layout>
        </>
      )}
    ></Route>
  )
);

import React from "react";
import { useRoutes } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import { Layout,AuthLayout } from "./layout";
import Listing from "./views/shop/Listing";

/* ***Layouts**** */
const Home = React.lazy(() => import("./views/home/Home"));
const Login = React.lazy(() => import("./views/auth/Login"));
const SingleProduct = React.lazy(() => import("./views/productSingle/SingleProduct"));
const Cart = React.lazy(() => import("./views/cart/Cart"));
const CheckOut = React.lazy(() => import("./views/checkout/CheckOut"));
const Contact = React.lazy(() => import("./views/contactus/Contact_us"));
const Blog = React.lazy(() => import("./views/blog/Blogpage"));
const Blogdetailed = React.lazy(() => import("./views/blog/Blogdetailed"));

export default function Router() {
  const routes = useRoutes([
    {
      path: "login",
      element: (
        <AuthLayout>
          <Login />
        </AuthLayout>
      ),
    },
    // {
    //   path: 'register',
    //   element: <Register />,
    // },
    {
      path: "/",
      element: (
        <PrivateRoute isAdmin={true}>
          <Layout />
        </PrivateRoute>
      ),
      children: [
        { path: "", element: <Home />, index: true },
        { path: "singleproduct", element: <SingleProduct />, index: true  },
        { path: "cart", element: <Cart />, index: true  },
        { path: "checkout", element: <CheckOut />, index: true  },
        { path: "contact", element: <Contact />, index: true  },
        { path: "blog", element: <Blog />, index: true  },
        { path: "blogdetailed", element: <Blogdetailed />, index: true  },
        { path: "shop", element: <Listing />, index: true  },
      ],
    },
    // {
    //   path: 'admin/login',
    //   element: <AdminLogin />,
    // },
    // {
    //   path: 'admin/register',
    //   element: <AdminRegister />,
    // },
    // {
    //   path: '/admin',
    //   element: <PrivateRoute isAdmin={true}><DashboardLayout /></PrivateRoute>,
    //   children: [
    //     { path: '', element: <DashboardAppPage />, index: true },
    //     { path: 'user', element: <UserPage /> },
    //     { path: 'role', element: <RolePage /> },
    //     { path: 'menu', element: <Menu /> },
    //     { path: 'permission', element: <MenuPermission /> },
    //     { path: 'branch', element: <Branch /> },
    //     { path: 'profile', element: <Profile /> },
    //     { path: 'userbranch', element: <UserBranch /> },
    //     { path: 'company', element: <Company /> },
    //     { path: 'userlog', element: <UserLog /> },
    //     { path: 'branchtype', element: <BranchType /> },
    //     { path: 'unauthorize', element: <UnAuthorize /> },
    //     { path: 'customer', element: <CustomerList /> },
    //     { path: '*', element: <Page404 /> },
    //   ],
    // },
  ]);

  return routes;
}

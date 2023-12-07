import React, { Suspense, lazy } from "react";
import { baseURL } from "./API/baseURL";
import useApiFetch from "./hooks/useApiFetch";
import { colorsActions } from "./Store/colorsSlice";
import { logoActions } from "./Store/logoSlice";
import { brandingActions } from "./Store/brandingSlice";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { editProductsLoader } from "./Pages/EditProducts";
import { editProductFormLoader } from "./Pages/EditProductForm";
import {
  deleteProductAction,
  deleteProductsLoader,
} from "./Pages/DeleteProduct";
import { ordersAction, ordersLoader } from "./Pages/Orders";
import { singleOrderLoader } from "./Pages/SingleOrder";
import { deleteOffersAction, deleteOffersLoader } from "./Pages/DeleteOffer";
import { editContactInfoLoader } from "./Pages/EditContactInfo";
import LoadingPage from "./Pages/LoadingPage/LoadingPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Welcome = lazy(() => import("./Pages/Welcome"));
const Controls = lazy(() => import("./Pages/Controls"));
const Orders = lazy(() => import("./Pages/Orders"));
const AddProduct = lazy(() => import("./Pages/AddProduct"));
const EditProducts = lazy(() => import("./Pages/EditProducts"));
const EditProductForm = lazy(() => import("./Pages/EditProductForm"));
const DeleteProduct = lazy(() => import("./Pages/DeleteProduct"));
const SingleOrder = lazy(() => import("./Pages/SingleOrder"));
const AddOffer = lazy(() => import("./Pages/AddOffer"));
const DeleteOffer = lazy(() => import("./Pages/DeleteOffer"));
const EditContactInfo = lazy(() => import("./Pages/EditContactInfo"));
const App = () => {
  const router = createBrowserRouter([
    {
      index: "/",
      element: <Welcome />,
    },
    {
      path: "/controls",
      element: <Controls />,
      children: [
        {
          path: "/controls/check_orders",
          element: <Orders />,
          loader: ordersLoader,
          action: ordersAction,
        },
        {
          path: "/controls/add_product",
          element: <AddProduct />,
        },

        {
          path: "/controls/edit_products",
          element: <EditProducts />,
          loader: editProductsLoader,
        },
        {
          path: "/controls/edit_products/:productId",
          element: <EditProductForm />,
          loader: editProductFormLoader,
          // action: editProductFormAction,
        },
        {
          path: "/controls/delete_product",
          element: <DeleteProduct />,
          loader: deleteProductsLoader,
          action: deleteProductAction,
        },

        {
          path: "/controls/check_orders/:userId/:orderId",
          element: <SingleOrder />,
          loader: singleOrderLoader,
        },
        {
          path: "/controls/add_offer",
          element: <AddOffer />,
          // action: addOfferAction,
        },
        {
          path: "/controls/delete_offer",
          element: <DeleteOffer />,
          loader: deleteOffersLoader,
          action: deleteOffersAction,
        },
        {
          path: "/controls/edit_Contact",
          element: <EditContactInfo />,
          loader: editContactInfoLoader,
          // action: editContactInfoAction,
        },
      ],
    },
  ]);
  const { dataColors, errorColors, isLoadingColors } = useApiFetch(
    `${baseURL}/colors`,
    colorsActions.storeColors
  );
  const { dataLogo, errorLogo, isLoadingLogo } = useApiFetch(
    `${baseURL}/logo`,
    logoActions.storeLogo
  );
  const { dataBranding, errorBranding, isLoadingBranding } = useApiFetch(
    `${baseURL}/branding`,
    brandingActions.storeBranding
  );
  return (
    <Suspense fallback={<LoadingPage />}>
      <RouterProvider router={router} />
      <ToastContainer />
    </Suspense>
  );
};

export default App;

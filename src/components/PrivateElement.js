import React from "react";
import { Navigate } from "react-router-dom";

/**
 * @props children => component terbungkus
 * @props allowedRole => role yang diperbolehkan dalam array
 * @props redirectedTo => rute redirect (default "/")
 * @props isRouteReplaced => apakah history di replace (default true)
 * @props extraData => state yang dibawa untuk redirect (default undefined)
 */
function PrivateElement({
  children,
  allowedRole,
  redirectedTo = "/",
  isRouteReplaced = true,
  extraData = null,
}) {
  // pengecekan status otentikasi
  // let userInfo = JSON.parse(localStorage.getItem("userinfo-book"));
  // if (!userInfo) {
  //   userInfo = {};
  // }
  // let userToken;
  // if (userInfo.token) {
  //   userToken = userInfo.token;
  // } else {
  //   userToken = null;
  // }
  const { token = null } =
    JSON.parse(localStorage.getItem("userinfo-book")) || {};

  if (!token) {
    return (
      <Navigate to={redirectedTo} replace={isRouteReplaced} state={extraData} />
    );
  }
  // cek otorisasi
  return children;
}

export default PrivateElement;

import VerifyPhone from "@/pages/regist/VerifyPhone";
export default [
  {
    path: "/regist/verifyPhone",
    component: VerifyPhone,
  },
  {
    //重定向
    path: "/",
    redirect: "/regist/verifyPhone",
  },
];

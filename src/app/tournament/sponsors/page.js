import { redirect } from "next/navigation";

// Unity Cup 2.0 is complete — the sponsors page is retired for now.
// Not deleted, just redirected until the next edition needs it again.
const page = () => {
  redirect("/");
};

export default page;

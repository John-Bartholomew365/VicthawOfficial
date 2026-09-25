import { redirect } from "next/navigation";

// Unity Cup 2.0 is complete — the schedule page is retired for now.
// Not deleted, just redirected until the next edition needs it again.
const page = () => {
  redirect("/tournament/results");
};

export default page;

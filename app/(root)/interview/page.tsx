import Agent from "@/components/Agent";
import { getCurrrentUser } from "@/lib/actions/auth.action";

const Page = async ()=> {
  const user = await getCurrrentUser();
  
  return (
    <>
      <h3>Interview Generation</h3>

      <Agent userName={user?.name} userId={user?.id} type="generate" />
    </>
  );
}

export default Page;
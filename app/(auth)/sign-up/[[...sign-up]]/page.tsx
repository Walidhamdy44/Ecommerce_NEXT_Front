import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex items-start justify-center min-h-screen py-[50px] my-[40px]">
      <SignUp path="/sign-up" />
    </div>
  );
}

import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex items-start justify-center min-h-screen py-[40px] my-[30px]">
      <SignIn path="/sign-in" />
    </div>
  );
}

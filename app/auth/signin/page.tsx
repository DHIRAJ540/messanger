import { getProviders, signIn } from "next-auth/react";
import Image from "next/image";
import SignInComponent from "./SignInComponent";

const SignInPage = async () => {
  const providers = await getProviders();

  return (
    <div className="flex flex-col items-center justify-center">
      <Image
        src="https://links.papareact.com/161"
        width={700}
        height={700}
        alt="profile pic"
        className="rounded-full mx-2 object-cover"
      />
      <SignInComponent providers={providers} />
    </div>
  );
};

export default SignInPage;

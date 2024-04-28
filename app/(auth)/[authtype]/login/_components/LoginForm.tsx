"use client";
import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import { MdEmail } from "react-icons/md";
import { FaRegCircleUser } from "react-icons/fa6";
import { RiLockPasswordFill } from "react-icons/ri";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/TextInput";
import { Label } from "@/components/ui/TextLabel";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FC, useState } from "react";
import LabelInputContainer from "@/components/ui/LabelInputContainer";
import {
  IconBrandGithub,
  IconBrandGoogle,
  IconBrandOnlyfans,
} from "@tabler/icons-react";
import BottomGradient from "@/components/ui/BottomGradient";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
interface LoginFormProps {}
const LoginForm: FC<LoginFormProps> = (): JSX.Element => {
  
  
  return (
    <div defaultValue="candidate" className="lg:w-[40%] mt-24 w-[95%] mx-auto ">
      <h1 className="text-4xl mb-10 text-center font-[700] text-gray-700">Log In Here!</h1>
   
   
            <Card className="!border-0 !border-none !shadow-none mt-6">
              <CardContent className="space-y-2 ">
                <form className="lg:my-16" onSubmit={() => {}}>
                  <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 lg:mt-8 ">
                    <LabelInputContainer className="mb-4">
                      <Label
                        className="text-[15px] text-gray-700"
                        htmlFor="email"
                      >
                        Email Address
                      </Label>
                      <div className="flex gap-x-3 items-center">
                      <MdEmail className="text-[#00a7ac]" size={15} />
                        <Input
                          id="email"
                          placeholder="projectmayhem@fc.com"
                          type="email"
                        />
                      </div>
                    </LabelInputContainer>
                  </div>
                  <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 my-5">
                    <LabelInputContainer className="mb-4">
                      <Label
                        className="text-[15px] text-gray-700"
                        htmlFor="password"
                      >
                        Password
                      </Label>
                      <div className="flex gap-x-3 items-center">
                        <RiLockPasswordFill
                          className="text-[#00a7ac]"
                          size={15}
                        />
                        <Input
                          id="password"
                          placeholder="••••••••"
                          type="password"
                        />
                      </div>
                    </LabelInputContainer>
                  </div>
                  <div className="my-5 flex justify-between items-center">
                  <div className="flex items-center space-x-2 my-5">
                    <Checkbox id="rememberpassword" className="!bg-[#00aca7] !border-[#00aca7]" color="#00aca7" />
                    <label
                      htmlFor="rememberpassword"
                      className="text-sm cursor-pointer font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Remember Me
                    </label>
                  </div>
                  <div className="text-blue-500 underline underline-offset-2  cursor-pointer font-semibold">
                    Forgot Password?

                  </div>

                  </div>

                  <Button
                    className="bg-gradient-to-br hover:!bg-white hover:text-[#00aca7]  border border-transparent hover:border-[#00aca7] relative group/btn w-full text-lg mt-3 bg-[#00aca7] "
                    type="submit"
                  >
                    LogIn 
                    <BottomGradient />
                  </Button>
                  <div className="mt-5 w-full ">
                    Don&apos;t have any account? <Link href="/customer/signup" className="text-[#00aca7] font-semibold">
                    Sign up</Link> 
                  </div>
                  <div className="mt-2 w-full">
                    <p className="mt-5 mb-3 text-center  text-gray-600 font-bold">OR</p>
                    <Button className="border hover:!bg-white mt-3 space-x-3 gap-x-3 flex items-center bg-white text-black w-full ">
                    <FcGoogle className="mr"  size={23}/>
                    Login with Google

                    </Button>
                  </div>

                </form>
              </CardContent>
            </Card>
          </div>

  );
};

export default LoginForm;

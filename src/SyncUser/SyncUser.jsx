import { useUser } from "@clerk/clerk-react";
import { useEffect } from "react";
import  axiosPublic  from "../axiosApis/useAxiosPublic";

export default function SyncUser() {
    const { isSignedIn, user } = useUser();

    useEffect(() => {
        // Send user data to backend
        const saveUser = async () => {
             await axiosPublic.post('/add-user',{
                name: user?.fullName,
                email: user?.primaryEmailAddress?.emailAddress,
                clerkId:user?.id
            })
        }

        if (isSignedIn && user) {saveUser()}
    }, [isSignedIn, user]);


    return null;
}

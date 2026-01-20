import { Suspense } from "react";
import BlogsClient from "./BlogsClient";

export const metadata = {
    title: "Blogs | Rukmana Bali Tour",
    description: "Travel blogs and Bali travel tips by Rukmana Bali Tour.",
};

export default function Page() {
    return (
        <Suspense fallback={<div className="py-24 text-center">Loading blogs...</div>}>
            <BlogsClient />
        </Suspense>
    );
};
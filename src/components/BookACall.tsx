"use client";

import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import { sendGAEvent } from "@next/third-parties/google";
import { useRouter } from "next/navigation";

function BookACall({ paddingX, paddingY, textSize }: { paddingX: number, paddingY: number, textSize: string }) {
    const router = useRouter();

    const handleButtonClick = () => {

        sendGAEvent("click", {
            event_category: "Engagement",
            event_label: "Book a Call",
            value: 1,
        });
        setTimeout(() => {
            router.push("https://cal.com/isonikrish/book");
        }, 500);
    };

    return (
        <Button
            className={`px-${paddingX} py-${paddingY} text-${textSize} font-semibold rounded-md flex items-center space-x-1`}
            onClick={handleButtonClick}>
            <Calendar className="w-5 h-5" />
            <span>Book a Call</span>
        </Button>
    );
}

export default BookACall;

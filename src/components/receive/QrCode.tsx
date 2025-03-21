
import { useEffect, useRef } from "react";
import QRCodeStyling from "qr-code-styling";
import { Card } from "@/components/ui/card";

interface QrCodeProps {
  value: string;
  size?: number;
}

export function QrCode({ value, size = 220 }: QrCodeProps) {
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!ref.current) return;
    
    // Clear previous QR code
    if (ref.current.firstChild) {
      ref.current.removeChild(ref.current.firstChild);
    }
    
    const qrCode = new QRCodeStyling({
      width: size,
      height: size,
      data: value,
      dotsOptions: {
        color: "#000",
        type: "rounded"
      },
      cornersSquareOptions: {
        type: "extra-rounded"
      },
      backgroundOptions: {
        color: "#ffffff",
      },
      imageOptions: {
        crossOrigin: "anonymous",
        margin: 5
      }
    });
    
    qrCode.append(ref.current);
  }, [value, size]);
  
  return (
    <Card className="p-4 shadow-sm">
      <div ref={ref} className="flex items-center justify-center" />
    </Card>
  );
}
